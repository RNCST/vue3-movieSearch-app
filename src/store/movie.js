export default {
  namespaced: true,
  // movie.js를 module화해서 사용할 수 있다.
  state: () => ({
    movies: []
  }),
  // data,
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // computed(계산이 된 상태)
  //mutations actions는 method로 보면된다.
  mutations:{
    resetMovies(state){
      state.movies = [];
    }
  },
  // movie.js state의 정보값을 mutations를 통해서만 조작할 수 잇다.
  actions: {
    searchMovies({state, getters, commit}) {
    // searchMovies(context) {
      state
      getters
      commit
    }
  },
  // mutations 그외의 method를 처리하면된다.
  // 무조건 비동기로 동작을 한다. 
  // 바로 state를 가져올수 없고 context를 통해 접근하거나 {state}처럼 객체 그자체로 인수를 넣어접근해줄수있다.
  

}