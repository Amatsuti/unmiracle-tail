<template>
  <div class="content">
    <div class="critical">
      {{criticalMessage}}
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'critical',
  extends: base,
  computed: {
    criticalMessage () {
      return this.options.lv < 2 ? 'Strike!!' : 'Critical!!'
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 0 1px;
  padding: 0 10px;

  .critical {
    font-weight: bold;
    font-style: italic;
  }

}
</style>
