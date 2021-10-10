<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDb</span>API.COM
  </RouterLink>
</template>


<style lang="scss" scoped>
.logo{
  font-family: "Signika", sans-serif;
  font-size: 24px;
  color: $black;
  text-decoration: none;
  &:hover{
    color:$black;
  }
  span {
    color: $primary;
  }
}

</style>