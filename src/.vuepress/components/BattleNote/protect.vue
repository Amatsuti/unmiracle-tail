<template>
  <div class="content">
    <div class="damage">
      {{allCharacter | whoIdIs(options.player) | name }} が
      {{allCharacter | whoIdIs(options.target) | name }} を庇った！
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
