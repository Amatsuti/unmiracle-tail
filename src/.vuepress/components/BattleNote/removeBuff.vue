<template>
  <div class="content">
    <div class="buff-remove">
      {{allCharacter | whoIdIs(options.player) | name }} の{{options.name}}が消滅！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'remove-buff',
  extends: base,
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 0 10px;

  .buff-remove {
    font-size: 12px;
    // color: #CCC;
  }

}
</style>
