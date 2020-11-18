<template>
  <div class="content">
    <div class="cost">
      {{allCharacter | whoIdIs(options.player) | name }} はダイスを{{ options.cost }}個消費
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
  margin: 0 1px;
  padding: 0 10px;

  font-size: small;
}
</style>
