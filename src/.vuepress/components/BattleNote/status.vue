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
    <template v-for="s in allCharacterId">
      <div :key="s" v-if="options.status['hate.'+s]"
        class="damage">
        {{allCharacter | whoIdIs(s) | name }} への敵対値が
        <template v-if="options.status['hate.'+s] > 0">
          <b :class="damageClass">
            {{ options.status['hate.'+s] }}
          </b>
          増加！
        </template>
        <template v-else>
          <b :class="damageClass">
            {{ options.status['hate.'+s] }}
          </b>
          減少！
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import base from './base'
import _ from 'lodash'
const fixStatus = ['STR','INT','VIT','MND','DEX','AGI']
export default {
  name:'heal',
  extends: base,
  computed: {
    fixStatus () { return fixStatus },
    allCharacterId () { return _.map(this.allCharacter, e=>e.id) },
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
