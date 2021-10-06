<template>
  <div class="container">
    <template v-if="loading">
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
      <Loader
        :size="3"
        :z-index="9"
        fixed />
      <!-- :fixed="true" 와 같다  -->
    </template>
    <div
      v-else
      class="movie-details">
      <div
        :style="{ backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})` }"
        class="poster">
        <Loader 
          v-if="imageLoading"
          absolute />
      </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{ theMovie.Runtime }} </span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div
              v-for="{Source:name, Value: score} in theMovie.Ratings"
              :key="name"
              :title="name"
              class="rating">
              <img
                :src="`https://github.com/ParkYoungWoong/vue3-movie-app/blob/master/src/assets/${name}.png?raw=true`"
                :alt="name" />
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors }}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Production</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "~/components/Loader";
export default {
  created() {
    this.$store.dispatch("movie/searchMovieWithId", {
      id: this.$route.params.movieId,
      // movie/tt12345 ==>
      //movieId = tt12345 ==>
      //id = tt12345
    });
  },
  components: {
    Loader,
  },
  computed: {
    theMovie() {
      return this.$store.state.movie.theMovie;
    },
    loading() {
      return this.$store.state.movie.loading;
    },
  },
  methods: {
    requestDiffSizeImage(url, size = 700){
      const src = url.replace('SX300',`SX${size}`)
      this.$loadImage(src)
      .then(() => {
        this.imageLoading = false
      })
      // async await을 쓰게되면 await 뒤내용이 끝날때까지 기다렸다가 return src가
      // 시행이된다. 
      return src
    },
  },
  data() {
    return {
     imageLoading:true
    }
  }
  
};
</script>


<style lang="scss" scoped>
@use "sass:math";
@import "~/scss/main";

.container {
  padding-top: 40px;
}

.skeletons {
  display: flex;
  .poster {
    width: 500px;
    height: math.div(500px * 3, 2);
    margin-right: 70px;
    flex-shrink: 0;
    // 감소너비를 사용하지않음.
  }
  .specs {
    flex-grow: 1;
    // 증가너비를 최대한 사용
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;

    &.title {
      width: 80%;
      height: 70px;
    }
    &.plot {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
.movie-details {
  display: flex;
  color: $gray-600;
  .poster {
    position: relative;
    flex-shrink: 0;
    width: 500px;
    height: math.div(500px * 3, 2);
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: $black;
      font-family: "Signika", sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: $primary;
      font-weight: 700;
      span {
        // http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after{
          display:none;
        }
      }
    }
    .plot {
      margin-top: 40px;
    }
    .ratings {
      .rating-wrap{
        display:flex;
        .rating {
          display: flex;;
          align-items: center;
          margin-right:32px;
          img {
            height: 30px;
            flex-shrink: 0;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: "Signika", sans-serif;
      font-size: 20px;
    }
  }
}
</style>