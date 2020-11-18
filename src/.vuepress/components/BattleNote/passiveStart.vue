<template>
  <div class="content">
    <template v-if="options.level !== undefined">
      {{allCharacter | whoIdIs(options.player) | name }} の{{options.action}}Lv{{options.level}}！
    </template>
    <template v-else>
      {{allCharacter | whoIdIs(options.player) | name }} の{{options.action}}！
    </template>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'passive-start',
  extends: base,
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 2px 10px;

  font-weight: bold;
}
</style>
