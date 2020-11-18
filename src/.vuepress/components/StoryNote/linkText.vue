<template>
  <div class="content">
    <router-link :to="options.to">
      {{options.label}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'link-text',
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
