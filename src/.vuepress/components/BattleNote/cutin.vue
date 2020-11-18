<template>
  <div class="content">
    <img v-if="options.src"
      :src="options.src" 
      width="800"
      class="cutin"
    />
  </div>
</template>

<script>
export default {
  name: 'cutin',
  props:{
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  width: 100%;
  margin: 2px 0;
  padding: 10px 80px;
}
</style>
