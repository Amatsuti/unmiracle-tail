<template>
  <div class="content">
    <div class="power-buff">
      <template v-if="options.value > 0">
        {{allCharacter | whoIdIs(options.player) | name }} の{{options.name}}が
        Lv<b :class="damageClass">
          {{ options.value }}
        </b>
        強化！
      </template>
      <template v-else-if="options.value < 0">
        {{allCharacter | whoIdIs(options.player) | name }} の{{options.name}}が
        Lv<b :class="damageClass">
          {{ -options.value }}
        </b>
        弱体！
      </template>
      <template v-else>
        {{allCharacter | whoIdIs(options.player) | name }} の{{options.name}}は変化しなかった
      </template>
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'powwer-buff',
  extends: base,
  computed: {
    damageClass () {
      if(this.options.value < 10){
        return 's-power-buff'
      }else if(this.options.value < 100){
        return 'm-power-buff'
      }else{
        return 'l-power-buff'
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

  .power-buff {
    .s-power-buff {
      font-size: 20px;
    }
    .m-power-buff {
      font-size: 32px;
    }
    .l-power-buff {
      font-size: 48px;
    }

  }
}
</style>
