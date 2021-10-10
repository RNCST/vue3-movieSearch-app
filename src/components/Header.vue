<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav"
        class="nav-item">
        <!-- RouterLink를 a태그를 대신해서 사용할 수 있다. -->
        <!-- :to https://next.router.vuejs.org/api/#to -->
        <RouterLink
          :to="nav.href" 
          active-class="active"
          :class=" {active: isMatch(nav.path)}"
          class="nav-link">
          <!--  -->
          <!-- bootstrap에서 router-active가 아닌 active 클래스조작이 들어가야
          스타일 조작이 가능하다. -->
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      @click="toAbout"
      class="user">
      <img
        :src="image"
        :alt="name" />
    </div>
    <!-- 
      <RouterLink
      :to="/about"
      class="user">
      <img
        :src="image"
        :alt="name" />
    </RouterLink> -->
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/',
          path: /^\/movie/ // /movie로 시작하는 경로인경우
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    image() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    }
  },
  methods: {
    isMatch(path) {
      // console.log(this.$route);
      // console.log('path',path);
      if(!path) return false
      else return path.test(this.$route.fullPath)
    },
    toAbout(){
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

header{
  position: relative;
  height:70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  .user {
    width:40px;
    height:40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor:pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav{
      display: none;
    }
  }
}
</style>