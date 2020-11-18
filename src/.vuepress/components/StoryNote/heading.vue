<template>
  <h4 class="content" v-html="options.text">
  </h4>
</template>

<script>
export default {
  name:'heading',
  props:{
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;

  background-image: url('../../assets/ui/legend2-left.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 30px auto;
}
</style>
