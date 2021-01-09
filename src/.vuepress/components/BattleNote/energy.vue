<template>
  <div class="content">
    <div class="energy">
      {{allCharacter | whoIdIs(options.player) | name }} はダイス🎲x
      <b :class="damageClass">
        {{ options.heal }}
      </b>
      回復！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'heal',
  extends: base,
  computed: {
    damageClass () {
      if(this.options.heal < 2){
        return 's-damage'
      }else if(this.options.heal < 10){
        return 'm-damage'
      }else{
        return 'l-damage'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;

  .damage {
    .s-damage {
      font-size: 20px;
    }
    .m-damage {
      font-size: 32px;
    }
    .l-damage {
      font-size: 48px;
    }

  }

}
</style>
