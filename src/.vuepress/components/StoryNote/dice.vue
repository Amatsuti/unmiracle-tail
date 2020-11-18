<template>
  <div class="content">
    【{{options.name}}のダイスロール！
      <span v-for="(v, i) in options.dice" :key="i">
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
      <span v-if="options.ext > 0">＋{{ options.ext }}</span>
      ⇒&nbsp;{{ options.ext + diceTotal }} / {{ options.target }}
      <span v-if="options.ext + diceTotal >= options.target">成功！</span>
      <span v-else>失敗！</span>
    】
  </div>  
</template>

<script>
export default {
  props:{
    options: Object
  },
  computed:{
    diceTotal () {
      let t = 0
      this.options.dice.forEach((v)=>{ t += v })
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
