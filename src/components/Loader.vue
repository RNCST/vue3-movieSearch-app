<template>
  <div 
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex
    }"
    :class="{absolute, fixed}"
    class="spinner-border text-primary"></div>
    <!-- props.data 의 absolute, fixed값이 true이면 class에 absolute fixed추가.. -->
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default:0
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute;
    // 부모요소기준의 가운데배치
  }
  &.fixed {
    position: fixed;
    // 뷰포트기준의 가운데배치..
  }
}
</style>