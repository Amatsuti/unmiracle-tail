<template>
  <tr class="profile">
    <td class="name">{{ cardName }}</td>
    <td class="select">
      <div>条件</div>
      <ul>
        <li v-for="v in ai">
          {{ v.value }}
        </li>
      </ul>
      <div>入力</div>
      <ul>
        <li v-for="v in input">
          {{ v.value }}
        </li>
      </ul>
    </td>
    <td class="armor">{{ armor }}</td>
    <td class="aria">{{ aria }}</td>
    <td class="action">
      <ul>
        <li v-for="v in action">
          {{ v.value }}
        </li>
      </ul>
      <!-- <template v-if="etc.length > 0">
        <div>その他</div>
        <ul>
          <li v-for="v in input">
            {{ v.value }}
          </li>
        </ul>
      </template> -->
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
    armor () { return this.innerValue.armor },
    aria () { return this.innerValue.aria },
    action () { return this.innerValue["action"] },
    etc () { return this.innerValue["etc"] },
  },
  data () {
    return {
      innerValue: {
        name: "",
        ai: [],
        input: [],
        "start-action":[],
        armor: 0,
        aria: 0,
        action: [],
        etc: []
      }
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
  .name { width: 150px; }
  .select, .action { width: 230px; vertical-align: top; }
  .armor, .aria{ width: 15px; vertical-align: top; }
  ul {
    margin: 0;
    line-height: 1.0;

    li {
      line-height: 1.2;

    }
  }
}
</style>