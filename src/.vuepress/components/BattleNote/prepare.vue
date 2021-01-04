<template>
  <div class="content">
    <div class="prepare">
      ⇒{{allCharacter | whoIdIs(options.player) | name }} は{{options.action}}を準備中
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'prepare',
  extends: base,
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 0 10px;

  .prepare {
    font-size: 12px;
    // color: #CCC;
  }

}
</style>
