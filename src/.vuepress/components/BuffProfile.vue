<template>
  <div class="profile">
    <div class="card"></div>
    <div class="detail">
      <div class="profile-first">
        <div class="name">
          {{ buffName }}
          <div class="command">{{command}}</div>
        </div>
        <!-- <div v-if="dice"
          class="dice">🎲x{{ dice }}</div> -->
      </div>
      <div class="profile-second">
        <div class="select">
          <div class="detail-head">付与</div>
          <ul>
            <li v-for="v in addBuff">
              {{ v.value }}
            </li>
          </ul>
          <template v-if="removeBuff.length > 0">
            <div class="detail-head">消滅</div>
            <ul>
              <li v-for="v in removeBuff">
                {{ v.value }}
              </li>
            </ul>
          </template>
        </div>
        <div class="action">
          <div class="action-detail">
            <template v-if="nextCount.length > 0">
              <div class="detail-head">カウント毎</div>
              <ul>
                <li v-for="v in nextCount">
                  {{ v.value }}
                </li>
              </ul>
            </template>
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
    buffName () { return this.innerValue["name"] },
    addBuff () { return this.innerValue["add"] },
    nextCount () { return this.innerValue["next-count"] },
    removeBuff () { return this.innerValue["remove"] },
    etc () { return this.innerValue["etc"]||[] },
  },
  data () {
    return {
      innerValue: {
        name: "",
        add: [],
        "next-count": [],
        remove: [],
        etc: [],
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
      Unmiracle.getText("buff-card", this.command, (data)=>{ this.innerValue = data })
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

  .card, .name, .select, .action-detail, .armor, .aria, .dice {
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
    position: relative;

    width: calc(100% - 80px);

    display: flex;
    justify-content: space-between;

    .name {
      width: calc(100% - 100px);
      height:1.5rem;

      border-bottom: 0px;
      padding: 0 5px;

      font-weight: bold;

      display: flex;
      justify-content: space-between;

      .command {
        display: inline-block;
        padding: 0 5px;

        font-size: smaller;
        font-weight: normal;
        color: #CCC;
      }
    }
    .dice {
      width: 100px;

      border-left: 0px;
      border-bottom: 0px;
    }
  }
  .profile-second {
    width: calc(100% - 80px);
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
    .action-detail {
      height: 100%;
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