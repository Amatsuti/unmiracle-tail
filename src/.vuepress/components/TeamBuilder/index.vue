<template>
  <div class="content">
    <div class="nav">
      <div v-for="(v,i) in innerValue"
        class="nav-child member" @click="editMember(v)">{{ v.profile.name }}</div>
      <div class="nav-child member" @click="addMember">＋追加</div>
      <div class="nav-child export" @click="exportMode">コード</div>
    </div>
    <div v-if="mode == 'member'"
      class="main">
      <div class="character">
        名前：<input type="text" v-model="edit.profile.name" />
        <div class="skill">
          スキル
          <draggable v-model="edit.skill" handle=".grip">
            <div v-for="(v,i) in edit.skill" :key="`skill-${v.RID}`" 
              class="skill-child" @click="listSkill(i)">
              <div class="grip">＝</div>
              <div class="label">{{ cardName(v) }}</div>
              <div class="del" @click="removeSkill(i)">×</div>
            </div>
          </draggable>
          <div class="btn" @click="listSkill(-1)">＋追加</div>
        </div>
        <div class="ability">アビリティ</div>
        <div class="ai">
          戦闘設定
          <draggable v-model="edit.ai" handle=".grip">
            <div v-for="(v,i) in edit.ai" :key="`ai-${v.arguments.rid}`"
              class="ai-child">
              <div class="grip">＝</div>
              <div class="label">{{ cardName(skillInEdit(v.arguments.rid)) }}</div>
            </div>
          </draggable>
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
        <textarea rows="20" v-model="textValue" />
        <div>
          <div class="btn" @click="importText">インポート</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardList from '@/assets/cardlist.json'
import _ from 'lodash'
import draggable from 'vuedraggable'
export default {
  computed: {
    cardList () { return cardList }
  },
  components: {
    draggable
  },
  data () {
    return {
      innerValue: [],
      mode: 'export',
      submode: null,
      subcursor: -1,
      edit: null,

      textValue: '[]',
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
      this.textValue = JSON.stringify(this.innerValue, null, 2)
    },
    editMember (v) {
      this.mode = 'member'
      this.edit = v
    },
    exportMode () {
      this.textValue = JSON.stringify(this.innerValue, null, 2)
      this.mode = 'export'
    },
    importText () {
      this.innerValue = JSON.parse(this.textValue)
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
    removeSkill (i) {
      let rid = this.edit.skill[i].RID
      this.edit.skill.splice(i,1)
      this.edit.ai = _.reject(this.edit.ai, { arguments:{rid} })
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
    border-radius: 5px;

    display: inline-block;
    
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
    height: calc(100% - 3.5rem);

    .character {
      width: 400px;

      .skill, .ai {
        padding: 20px 0;

        .skill-child, .ai-child {
          border: 1px solid #CCC;

          display: flex;
          justify-content: space-between;

          .grip { width:20px; cursor: grab; }
          .del { width:20px; cursor: pointer; }
          .label { width:calc(100% - 40px); }
        }
      }
    }
    .material {
      width: 400px;
      height: 100%;

      overflow-y: scroll;

      .material-child {
        border: 1px solid #CCC;
        cursor: pointer;

        .focus: {
          background-color: #CCC;
        }        
      }
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
