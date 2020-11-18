<template>
  <div class="bar bar-bg">
    <div class="bar-color" :class="direction" :style="{ width:`${ratio * 100}%` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    max: Number,
    value: Number,
    side: {
      type: String,
      default: "right",
    }
  },
  computed: {
    ratio () { return this.value / this.max },
    direction () { return "bar-"+this.side }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  &.bar-bg {
    width: 100%;

    background-color: #111;
    display:flex;
    overflow:hidden;

    height: 1rem;
    line-height: 0;
    font-size: .75rem;
    border-radius: .25rem;
  }

  .bar-color {
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;

    background-color: #28a745;
    color: #FFF;
    text-align: center;
  }

  .bar-left {
    margin: 0 0 0 auto;
  }
}
</style>