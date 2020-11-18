<template>
  <div class="content">
    <div class="damage">
      {{allCharacter | whoIdIs(options.player) | name }} に
      <b :class="damageClass">
        {{ options.damage }}
      </b>
      のダメージ！
    </div>
    <div v-if="options.damage - options.total" class="barrier">
      {{ options.total - options.damage }} のダメージを軽減！
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'action-start',
  extends: base,
  computed: {
    damageClass () {
      if(this.options.damage < 10){
        return 's-damage'
      }else if(this.options.damage < 100){
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

  .barrier {
    font-size: 12px;
  }

}
</style>
