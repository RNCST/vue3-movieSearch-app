import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  // movie.js를 module화해서 사용할 수 있다.
  state: () => ({
    theMovie: {},
    movies: [],
    message: 'Search for the movie title!',
    loading: false
  }),
  // data,
  //mutations actions는 method로 보면된다.
  getters: {},
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
  },
  // movie.js state의 정보값을 mutations를 통해서만 조작할 수 잇다.
  actions: {
    async searchMovies({ commit, state }, payload) {
      if (state.loading) return
      // searchMovies의 중복 실행 방지
      commit('updateState', {
        message: '',
        loading: true,
      })
      // 검색실행하면 search for the movie title을 공란으로 초기화

      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID'),
          // 고유화
        })
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
        // 추가 요청
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {
            if (page > payload.number / 10) break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [...state.movies, ..._uniqBy(Search, 'imdbID'),]
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message: message
        })
      } finally {
        commit('updateState', {
          loading: false,
        })
      }
    },
    async searchMovieWithId({state,commit}, payload) {
      if( state.loading ) return
      commit('updateState', {
        theMovie: {},
        // 새로검색할떄 이미검색된내용이 노출이 안되게
        loading: true
      })
      try {
        const res = await _fetchMovie(payload)
        
        //payload에는 id만 담겨있다.
        commit('updateState', {
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading:false
        })
      }

    }

  },
  // mutations 그외의 method를 처리하면된다.
  // 무조건 비동기로 동작을 한다. 
  // 바로 state를 가져올수 없고 context를 통해 접근하거나 {state}처럼 객체 그자체로 인수를 넣어접근해줄수있다.
}
function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload
  const OMDB_API_KEY = '7035c60c';
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  // const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        if (res.data.Error) {
          reject(res.data.Error)
        }
        console.log('res', res); 
        resolve(res)
      })
      .catch((err) => {
        reject(err.message)
      })
  })
}