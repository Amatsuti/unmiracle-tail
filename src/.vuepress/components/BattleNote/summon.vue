<template>
  <div class="content">
    <div class="prepare">
      {{options.name}}を召喚！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'prepare',
  extends: base,
  created () {
    this.$emit('addMember', { ...this.options })
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 0 10px;

  .prepare {
    font-size: 32px;
    // color: #CCC;
  }

}
</style>
