<template>
  <h1>Movie</h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    this.$store.dispatch('movie/searchMovieWithId', {
      id: 'this.$route.params.movieId'
      // movie/tt12345 ==> movieId = tt12345 ==> id = tt12345
    })
  }
}
</script>