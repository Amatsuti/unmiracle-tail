<template>
  <div class="content">
    <div class="miss">
      発動に失敗した...
    </div>
  </div>
</template>

<script>
import base from './base'
export default {
  name:'miss',
  extends: base
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 0 10px;

  .miss {
    // font-size: 1.0rem;
    // color: #CCC;
  }

}
</style>
