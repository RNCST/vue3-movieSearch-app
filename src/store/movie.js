import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  // movie.js를 module화해서 사용할 수 있다.
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // data,
  //mutations actions는 method로 보면된다.
  getters:{},
  mutations:{
    resetMovies(state){
      state.movies = [];
    },
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        // => ['movies','message','loading']
        // => key= movies한바퀴 message한바퀴 loading 한바퀴
        // state.movies = payload.movies
        // state.message = payload.message
        // state.loading = payload.loading
        // =>
        state[key] = payload[key]
      })
    },
  },
  // movie.js state의 정보값을 mutations를 통해서만 조작할 수 잇다.
  actions: {
    async searchMovies({commit, state}, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c';

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search,'imdbID'),
        // 고유화
      })

      const total = parseInt(totalResults,10)
      const pageLength = Math.ceil(total / 10)
      // 추가 요청
      if(pageLength > 1) {
        for( let page = 2 ; page <=pageLength ; page++){
          if (page > number / 10) break
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
          const { Search } = res.data
          commit ('updateState', {
            movies: [...state.movies, ..._uniqBy(Search,'imdbID'),]

          })

        }
      }
    }
  },
  // mutations 그외의 method를 처리하면된다.
  // 무조건 비동기로 동작을 한다. 
  // 바로 state를 가져올수 없고 context를 통해 접근하거나 {state}처럼 객체 그자체로 인수를 넣어접근해줄수있다.
  

}