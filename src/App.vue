<template>
  <RouterView />
  <!-- 
    main.js에 router를 사용하게되면 
    Vue-router가 제공하는 전역화되어있는 RouterView라는 컴포넌트를 사용해서 
    router로 연결해놓은 component 들을 바로 출력할수있게만든다. 
   -->
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
@import "~/scss/main";
</style>