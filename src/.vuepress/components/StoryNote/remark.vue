<template>
  <div class="content">
    <div class="icon-area">
      <b-img :src="options.icon||'./img/noimage.png'" 
        class="icon"
        width="60px" height="60px"
      />
    </div>
    <div class="remark-area">
      <div class="name" v-if="options.name">
        {{options.name}}
      </div>
      <div class="body" v-html="options.text" />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  width: 100%;
  margin: 2px 1px;
  padding: 5px;

  display: flex;

  .remark-area {
    width: calc(100% - 80px);

    padding: 5px;

    .name {
      font-weight: bold;
    }
    .icon {
      width: 80px;
      height: 80px;
      padding: 10px;
    }
  }

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
