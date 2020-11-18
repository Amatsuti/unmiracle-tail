<template>
  <div>
    <b-container class="content">
      <b-row>
        <b-col cols="2">
          <b-img :src="options.icon||'./img/noimage.png'" 
            class="icon"
            width="60px" height="60px"
          />
        </b-col>
        <b-col cols="10">
          <div v-if="options.eno > 0" class="name">
            ENo.{{options.eno}}：{{options.name}}
          </div>
          <div v-else-if="options.name" class="name">
            {{options.name}}
          </div>
          <div class="body" v-html="options.note" />
        </b-col>
      </b-row>
    </b-container>
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
  margin: 20px 1px;

  border: solid 1px #CCC;

  .name {
    font-weight: bold;
  }
  .icon {
    width: 80px;
    height: 80px;
    padding: 10px;
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
