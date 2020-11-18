<template>
  <div class="content">
    <div class="action-start">
      {{allCharacter | whoIdIs(options.player) | name }} の行動
    </div>
    <div class="action-name">
      {{options.action}}
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
  padding: 10px;


  .action-start {
    padding: 0 15px;

    font-size: 24px;
    font-weight: bold;

    background-image: url('../../assets/ui/turn.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .action-name {
    margin: 0 10px;
    padding: 0 30px;

    font-size: 32px;
    font-weight: bold;

    background-image: url('../../assets/ui/turn2.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }

}
</style>
