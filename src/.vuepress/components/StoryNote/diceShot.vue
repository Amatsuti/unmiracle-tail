<template>
  <div class="content">
    <p>
      {{options.name1}}のダイスショット【
        <span v-for="(v, i) in options.dice1" :key="i">
          <span v-if="v === 1">
            <font-awesome-icon icon="dice-one" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 2">
            <font-awesome-icon icon="dice-two" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 3">
            <font-awesome-icon icon="dice-three" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 4">
            <font-awesome-icon icon="dice-four" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 5">
            <font-awesome-icon icon="dice-five" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 6">
            <font-awesome-icon icon="dice-six" class="icon fa-1x" />
          </span>
        </span>
        <span v-if="options.ext1 > 0">＋{{ options.ext1 }}</span>
        ⇒&nbsp;{{ options.ext1 + diceTotal1 }}
      】
    </p>
    <p>
      {{options.name2}}のダイスショット【
        <span v-for="(v, i) in options.dice2" :key="i">
          <span v-if="v === 1">
            <font-awesome-icon icon="dice-one" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 2">
            <font-awesome-icon icon="dice-two" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 3">
            <font-awesome-icon icon="dice-three" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 4">
            <font-awesome-icon icon="dice-four" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 5">
            <font-awesome-icon icon="dice-five" class="icon fa-1x" />
          </span>
          <span v-else-if="v === 6">
            <font-awesome-icon icon="dice-six" class="icon fa-1x" />
          </span>
        </span>
        <span v-if="options.ext2 > 0">＋{{ options.ext2 }}</span>
        ⇒&nbsp;{{ options.ext2 + diceTotal2 }}
      】
    </p>
    <p>
      <span v-if="options.ext1 + diceTotal1 > options.ext2 + diceTotal2">勝利！</span>
      <span v-else>敗北…</span>
    </p>
  </div>  
</template>

<script>
export default {
  name: 'dice-shot',
  props:{
    options: Object
  },
  computed:{
    diceTotal1 () {
      let t = 0
      this.options.dice1.forEach((v)=>{ t += v })
      return t
    },
    diceTotal2 () {
      let t = 0
      this.options.dice2.forEach((v)=>{ t += v })
      return t
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;
}
</style>
