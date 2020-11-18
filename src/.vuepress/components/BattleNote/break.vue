<template>
  <div class="content">
    <div class="break">
      {{allCharacter | whoIdIs(options.player) | name }} は怯んだ！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'break',
  extends: base,
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 5px;

  .down {
    font-size: 20px;
    font-weight: bold;
  }

}
</style>
