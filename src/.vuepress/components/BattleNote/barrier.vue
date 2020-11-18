<template>
  <div class="content">
    <div class="damage">
      {{allCharacter | whoIdIs(options.player) | name }} に
      <b :class="damageClass">
        {{ options.HP }}
      </b>
      のバリアを付与！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'barrier',
  extends: base,
  computed: {
    damageClass () {
      if(this.options.HP < 10){
        return 's-damage'
      }else if(this.options.HP < 100){
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
  padding: 0 10px;

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
