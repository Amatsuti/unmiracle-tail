<template>
  <div class="content">
    <div class="damage">
      {{allCharacter | whoIdIs(options.player) | name }} は回避した！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'protect',
  extends: base
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;

  // .damage {
    // font-size: 20px;
  // }

}
</style>
