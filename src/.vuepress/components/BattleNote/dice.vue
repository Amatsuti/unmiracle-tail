<template>
  <div class="content">
    <div class="dice">
      {{allCharacter | whoIdIs(options.player) | name }} のダイスロール！
      <span v-for="(v, i) in options.dice" :key="i" class="dice-val">
        <span v-if="v === 1">
          ⚀
        </span>
        <span v-else-if="v === 2">
          ⚁
        </span>
        <span v-else-if="v === 3">
          ⚂
        </span>
        <span v-else-if="v === 4">
          ⚃
        </span>
        <span v-else-if="v === 5">
          ⚄
        </span>
        <span v-else-if="v === 6">
          ⚅
        </span>
      </span>
      ⇒
      <b :class="diceValClass">
        {{ totalDiceValue }}
      </b>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import base from './base'
export default {
  name:'dice',
  extends: base,
  computed: {
    totalDiceValue () {
      return _.sum(this.options.dice)
    },
    diceValClass () {
      if(this.totalDiceValue < 10){
        return 's-dice-val'
      }else if(this.totalDiceValue < 100){
        return 'm-dice-val'
      }else{
        return 'l-dice-val'
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

  .dice {
    .s-dice-val {
      font-size: 20px;
    }
    .m-dice-val {
      font-size: 32px;
    }
    .l-dice-val {
      font-size: 48px;
    }

    .dice-val {
      font-size: 20px;
    }
  }

}
</style>
