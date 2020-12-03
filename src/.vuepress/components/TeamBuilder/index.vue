<template>
  <div class="content">
    <div class="nav">
      <div v-for="(v,i) in innerValue"
        class="nav-child member" @click="editMember(v)">{{ v.profile.name }}</div>
      <div class="nav-child member" @click="addMember">＋</div>
      <div class="nav-child export" @click="mode='export'">コード</div>
    </div>
    <div v-if="mode == 'member'"
      class="main">
      <div class="character">
        名前：<input type="text" v-model="edit.profile.name" />
        <div class="skill">
          スキル
          <div v-for="(v,i) in edit.skill" 
            class="skill-child" @click="listSkill(i)">{{ cardName(v) }}</div>
          <div class="btn" @click="listSkill(-1)">＋</div>
        </div>
        <div class="ability">アビリティ</div>
        <div class="ai">
          戦闘設定
          <div v-for="(v,i) in edit.ai"
            class="ai-child">{{ cardName(skillInEdit(v.arguments.rid)) }}</div>
        </div>
      </div>
      <div class="material">
        <div v-if="submode == 'skill'">
          <div v-for="v in cardList" 
            class="material-child" @click="selectSkill(v.value)">{{ v.text }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="mode == 'export'"
      class="main">
      <div class="json">
        <textarea rows="20" :value="textValue" />
      </div>
    </div>
  </div>
</template>

<script>
import cardList from '@/assets/cardlist.json'
import _ from 'lodash'
export default {
  computed: {
    textValue () { return JSON.stringify(this.innerValue) },
    cardList () { return cardList }
  },
  data () {
    return {
      innerValue: [],
      mode: 'export',
      submode: null,
      subcursor: -1,
      edit: null,
    }
  },
  methods: {
    addMember () {
      this.innerValue.push({
        profile: {name:"テストさん"},
        skill: [],
        ability: [{
          Cmd: "test-cmd/soul",
          Arg: { Lv:1 },
          RID: "soul",
        }],
        ai: []
      })
    },
    editMember (v) {
      this.mode = 'member'
      this.edit = v
    },
    listSkill (cur) {
      this.subcursor = cur
      this.submode = 'skill'
    },
    selectSkill (val) {
      if(this.subcursor < 0){ 
        const rid = _.uniqueId('S')
        this.edit.skill.push({
          Cmd: val,
          Arg: { Lv:1 },
          RID: rid
        })
        this.edit.ai.push({
          "@call": `${val}.ai`,
          arguments: { rid, player:{"@arg":"player"} }
        })
      }else{
        _.assign(this.edit.skill[this.subcursor],{
          Cmd: val,
          Arg: { Lv:1 },
        })
        let ai = _.find(this.edit.ai, { arguments:{rid:this.edit.skill[this.subcursor].RID} })
        ai["@call"] = `${val}.ai`
      }
    },
    skillInEdit (RID) {
      return _.find(this.edit.skill, { RID })
    },
    cardName (v) {
      return _.find(cardList, { value:v.Cmd }).text
    }
  }
}
</script>

<style lang="scss" scoped>
//汎用
div {
  box-sizing: border-box;

  .btn {
    padding: 5px 10px;
    border: 1px solid #CCC;
    cursor: pointer;
  }
}
//レイアウト
.content {
  position: fixed;
  top: 0;
  bottom: 0;

  .nav {
    width: 100%;
    display: flex;

    .nav-child {
      padding: 10px 20px;
      cursor: pointer;
    }
  }

  .main {
    display: flex;
    height: calc(100% - 2rem);

    .character {
      width: 400px;
    }
    .material {
      width: 400px;
    }
    .json {
      width: 800px;

      textarea { width:80%; }
    }
  }

  .character, .material, .json {
    border: 1px solid #000;
    height: 100%;
  }
}
</style>
