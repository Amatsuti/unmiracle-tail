<template>
  <tr class="profile">
    <td class="name">{{ cardName }}</td>
    <td class="ai">
      <ul>
        <li v-for="v in ai">
          {{ v.value }}
        </li>
      </ul>
    </td>
    <td class="input">
      <ul>
        <li v-for="v in input">
          {{ v.value }}
        </li>
      </ul>
    </td>
    <td class="start-action">
      <ul>
        <li v-for="v in startAction">
          {{ v.value }}
        </li>
      </ul>
    </td>
    <td class="action">
      <ul>
        <li v-for="v in action">
          {{ v.value }}
        </li>
      </ul>
    </td>
  </tr>
</template>

<script>
/*eslint-disable no-undef */
import path from 'path'
import _ from 'lodash'
import { Unmiracle } from '@/wasm'
export default {
  props: {
    command: String
  },
  computed: {
    cardName () { return this.innerValue["name"] },
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
    if(Unmiracle.status.load){
      this.load()
    }else{
      let hnd = this.$watch(()=>Unmiracle.status.load, ()=>{
        this.load() 
        hnd()
      })
    }
  },
  methods: {
    load () {
      Unmiracle.getText(this.command, (data)=>{ this.innerValue = data })
    }
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