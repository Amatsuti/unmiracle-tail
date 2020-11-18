<template>
  <div class="content" :class="{ 'content-hide':options.hide }">
    <template v-if="options.up">
      {{ options.name }}は{{ options.status }}を{{ options.up }}獲得！
    </template>
    <template v-else>
      {{ options.name }}は何も変わらなかった・・・
    </template>
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
  margin: 2px 1px;
  padding: 10px;

  &.content-hide {
    color: #FFF;
  }
}
</style>
