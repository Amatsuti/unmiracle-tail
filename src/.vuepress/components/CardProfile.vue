<template>
  <div class="profile">
    <div class="type">条件</div>
    <ul>
      <li v-for="v in ai">
        {{ v }}
      </li>
    </ul>
    <div class="type">入力</div>
    <ul>
      <li v-for="v in input">
        {{ v }}
      </li>
    </ul>
    <div class="type">詠唱</div>
    <ul>
      <li v-for="v in startAction">
        {{ v }}
      </li>
    </ul>
    <div class="type">行動</div>
    <ul>
      <li v-for="v in action">
        {{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
/*eslint-disable no-undef */
import path from 'path'
import _ from 'lodash'
export default {
  props: {
    command: String
  },
  computed: {
    ai () { return this.innerValue["ai"] },
    input () { return this.innerValue["input"] },
    startAction () { return this.innerValue["start-action"] },
    action () { return this.innerValue["action"] },
  },
  data () {
    return {
      innerValue: {}
    }
  },
  created () {
    global.Unmiracle.list = global.loader
    global.Unmiracle.getText(this.command, (data)=>{ this.innerValue = data })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  ::v-deep p {
    margin: 0;
  }

  .type {
    font-weight: bold;
    margin: 0.5rem 0;
  }
  ul {
    margin: 0;
    line-height: 1.0;

    li {
      line-height: 1.2;

    }
  }
}
</style>