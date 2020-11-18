<template>
  <div>
    <transition-group name="fade">
      <component :is="opr['@call'].split('.')[1]" v-for="(opr,i) in code" :key="i+'hoge'"
        :options="opr.arguments"
      >
      </component>
    </transition-group>
    <div ref="footer"></div>
  </div>
</template>

<script>
import parts from './mixin-parts'
export default {
  name: 'story-note',
  props:{
    code: Array
  },
  data () {
    return {
      innerCode: []
    }
  },
  created () {

  },
  watch: {
    code () {
      // this.$scrollTo(this.$refs.footer)
    }
  },
  mixins: [
    parts
  ]
}
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

