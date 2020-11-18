<template>
  <div class="content" v-html="options.text">
  </div>
</template>

<script>
export default {
  props:{
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  width: 100%;
  margin: 2px 1px;
  padding: 10px;
}
</style>
