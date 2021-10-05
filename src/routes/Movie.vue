<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
  </div>
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


<style lang="scss" scoped>
@import '~/scss/main';

.container {
  padding-top: 40px;
}

.skeletons {
  display: flex;
  .poster {
    width: 500px;
    height: 500px * 3/ 2;
    margin-right: 70px;
    flex-shrink: 0;
    // 감소너비를 사용하지않음.
  }
  .specs {
    flex-grow: 1;
    // 증가너비를 최대한 사용
  }
  .skeleton{
    border-radius: 10px;
    background-color: $gray-200;

    &.title{
      width: 80%;
      height: 70px;
    }
    &.plot{
      width: 60%;
      height: 30px;
      margin-top: 20px
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px
    }
    &.etc{
      width: 50%;
      height: 50px;
      margin-top: 20px
    }
  }
}

</style>