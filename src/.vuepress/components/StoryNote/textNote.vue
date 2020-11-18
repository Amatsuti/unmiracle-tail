<template>
  <div class="content" v-html="options.text">
  </div>
</template>

<script>
export default {
  name:'text-note',
  props:{
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;

  ::v-deep .ql-size-large {
    font-size: 1.5em;
  }
  ::v-deep .ql-size-small {
    font-size: .75em;
  }
  ::v-deep .ql-size-huge {
    font-size: 2.5em;
  }
}
</style>
