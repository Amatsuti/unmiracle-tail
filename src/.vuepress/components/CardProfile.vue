<template>
  <div class="profile">
    <div class="card"></div>
    <div class="detail">
      <div class="profile-first">
        <div class="name">{{ cardName }}</div>

      </div>
      <div class="profile-second">
        <div class="select">
          <div class="detail-head">条件</div>
          <ul>
            <li v-for="v in ai">
              {{ v.value }}
            </li>
          </ul>
          <div class="detail-head">入力</div>
          <ul>
            <li v-for="v in input">
              {{ v.value }}
            </li>
          </ul>
        </div>
        <!-- <div class="armor">{{ armor }}</div>
        <div class="aria">{{ aria }}</div> -->
        <div class="action">
          <div class="start-action">
            <div class="aria">発生：{{ aria }}</div>
            <div class="armor">耐久：{{ armor }}</div>
          </div>
          <div class="action-detail">
            <ul>
              <li v-for="v in action">
                {{ v.value }}
              </li>
            </ul>
            <template v-if="etc.length > 0">
              <div class="detail-head">その他</div>
              <ul>
                <li v-for="v in etc">
                  {{ v.value }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    etc () { return this.innerValue["etc"]||[] },
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
  position: relative;

  margin: 3px 0;
  width: 100%;

  display: flex;

  ::v-deep p {
    margin: 0;
  }

  .card, .name, .select, .action-detail, .armor, .aria {
    border: solid 1px #000;
    box-sizing: border-box;
  }
  .card {
    min-width: 80px;
    min-height: 100px;
    height: 100%;

    border-right: 0px;
  }
  .profile-first {
    width: calc(100%-80px);

    display: flex;

    .name {
      width: 660px;
      height:1.5rem;

      border-bottom: 0px;

      padding: 0 5px;

      font-weight: bold;
    }
  }
  .profile-second {
    width: calc(100%-80px);
    height: calc(100% - 1.5rem);

    display: flex;

    .detail-head {
      font-size: small;
    }

    .select, .action {
      width: 330px;
      vertical-align: top;
    }

    .select {
      border-right: 0px;
      padding: 10px;
    }
    .start-action {
      height: 1.5rem;
      display: flex;

      .aria {
        width: 165px;
        border-right: 0px;
        border-bottom: 0px;
      }
      .armor {
        width: 165px;
        border-bottom: 0px;
      }
    }
    .action-detail {
      height: calc(100% - 1.5rem);
      padding: 10px;
    }
  }

  ul {
    margin: 0;
    margin-bottom: 10px;
    line-height: 1.0;

    li {
      line-height: 1.2;

    }
  }
}
</style>