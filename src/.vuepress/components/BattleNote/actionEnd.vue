<template>
  <div class="content">
    <div class="action-end">
      <!-- （{{allCharacter | whoIdIs(options.player) | name }} の行動終了） -->
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'action-start',
  extends: base,
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 5px;

  .action-end {
    font-size: 12px;
    color: #CCC;
  }

}
</style>
