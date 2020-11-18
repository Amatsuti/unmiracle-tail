<template>
  <div class="content">
    <div class="down">
      {{allCharacter | whoIdIs(options.player) | name }} が倒れた！
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

  .down {
    font-size: 24px;
    font-weight: bold;
  }

}
</style>
