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
          class="nav-link">
          <!-- bootstrap에서 router-active가 아닌 active 클래스조작이 들어가야
          스타일 조작이 가능하다. -->
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
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
          href: '/movie/tt4520988'
        },
        {
          name: 'About',
          href: '/about'
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height:70px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>