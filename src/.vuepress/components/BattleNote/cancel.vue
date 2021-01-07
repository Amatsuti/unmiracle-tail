<template>
  <div class="content">
    <div class="cancel">
      <i>{{allCharacter | whoIdIs(options.player) | name }} は続けて行動する！</i>
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
    // font-size: 1.0rem;
    // color: #CCC;
  }

}
</style>
