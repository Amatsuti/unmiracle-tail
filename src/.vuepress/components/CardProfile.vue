<template>
  <div class="demo">
    {{ action.args.action }}
  </div>
</template>

<script>
import path from 'path'
import _ from 'lodash'
export default {
  props: {
    command: String
  },
  computed: {
    // info () { return _.find(this.innerValue, {'@method':'info'}).args },
    // init () { return _.find(this.innerValue, {'@method':'init'}).args },
    // prepare () { return _.find(this.innerValue, {'@method':'prepare'}) },
    // mix () { return _.find(this.innerValue, {'@method':'mix'}) },
    // initBattle () { return _.find(this.innerValue, {'@method':'init-battle'}) },
    // ai () { return _.find(this.innerValue, {'@method':'ai'}) },
    // input () { return _.find(this.innerValue, {'@method':'input'}) },
    // startAction () { return _.find(this.innerValue, {'@method':'start-action'}) },
    action () { return _.find(this.innerValue, {'@method':'action'}) },
    // targeting () { return _.find(this.innerValue, {'@method':'targeting'}) },
    // endAction () { return _.find(this.innerValue, {'@method':'end-action'}) },
  },
  data () {
    return {
      innerValue: []
    }
  },
  created () {
    fetch(path.join(global.config.base,this.command+".json"))
      .then(response => response.json())
      .then(data => this.innerValue = data)
  }
}
</script>

<style lang="scss" scoped>
.profile {
  ::v-deep p {
    margin: 0;
  }
}
</style>