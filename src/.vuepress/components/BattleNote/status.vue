<template>
  <div class="content">
    <template v-for="s in fixStatus">
      <div :key="s" v-if="options.status[s] != 0"
        class="damage">
        {{allCharacter | whoIdIs(options.player) | name }} の{{s}}が
        <template v-if="options.status[s] > 0">
          <b :class="damageClass">
            {{ options.status[s] }}
          </b>
          増加！
        </template>
        <template v-else>
          <b :class="damageClass">
            {{ -options.status[s] }}
          </b>
          減少！
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import base from './base'
const fixStatus = ['STR','INT','VIT','MND','DEX','AGI']
export default {
  name:'heal',
  extends: base,
  computed: {
    fixStatus () { return fixStatus },
    damageClass () {
      return 'm-damage'
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
    // font-size: 20px;

    .s-damage {
      font-size: 20px;
    }
    .m-damage {
      font-size: 26px;
    }
    .l-damage {
      font-size: 32px;
    }

  }

}
</style>
