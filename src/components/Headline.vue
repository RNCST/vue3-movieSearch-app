<template>
  <div class="container">
    <!-- bootstrap이 viewport의 크기에 따라 크기적용  -->
    <!-- https://getbootstrap.com/docs/5.1/layout/containers/ -->
    <h1>
      <span>OMDb API</span><br />
      THE OPEN <br />
      MOVIE DATABASE
    </h1>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
    </p>
  </div>
</template>


<style lang="scss" scoped>
  .container{
    padding-top: 40px;
  }
  
  h1{
    line-height: 1;
    font-family: "Signika", sans-serif;
    font-size:80px;
    span{
      color: $primary;
    }
  }
  p{
    margin: 30px 0;
    color: $gray-600;
  }
  
</style>

