<template>
  <div class="team-builder">
    <div class="nav">
      <div class="team team-1">
        <div class="team-header">左側チーム</div>
        <div class="member">
          <draggable v-model="innerTeam1" handle=".grip">
            <div v-for="(v,i) in innerTeam1" class="member-child"
              @click="editMember(v)">
              <div class="grip">＝</div>
              <div class="label">{{ v.profile.name }}</div>
              <div class="del" @click="removeMember(key, i)">×</div>
            </div>
          </draggable>
          <div class="member-child add" @click="addMember('innerTeam1')">＋追加</div>
        </div>
        <div class="export">
          <a @click="exportMode('innerTeam1')">コード</a>
        </div>
      </div>
      <div class="team team-2">
        <div class="team-header">右側チーム</div>
        <div class="member">
          <div v-for="(v,i) in innerTeam2" class="member-child"
            @click="editMember(v)">
            <div class="grip">＝</div>
            <div class="label">{{ v.profile.name }}</div>
            <div class="del" @click="removeMember(key, i)">×</div>
          </div>
          <div class="member-child add" @click="addMember('innerTeam2')">＋追加</div>
        </div>
        <div class="export">
          <a @click="exportMode('innerTeam2')">コード</a>
        </div>
      </div>
    </div>
    <div v-if="mode == 'member'"
      class="main">
      <div class="character">
        名前：<input type="text" v-model="edit.profile.name" />
        <div class="skill">
          <div class="character-header">スキル</div>
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
        <div class="ability">
          <div class="character-header">アビリティ</div>
          <div class="status">
            <div class="status-child">HP: <input type="number" v-model.number="editSoul.Arg['HP']"></div>
            <div class="status-child"></div>
            <div class="status-child">STR: <input type="number" v-model.number="editSoul.Arg['STR']"></div>
            <div class="status-child">INT: <input type="number" v-model.number="editSoul.Arg['INT']" ></div>
            <div class="status-child">VIT: <input type="number" v-model.number="editSoul.Arg['VIT']" ></div>
            <div class="status-child">MND: <input type="number" v-model.number="editSoul.Arg['MND']" ></div>
            <div class="status-child">DEX: <input type="number" v-model.number="editSoul.Arg['DEX']" ></div>
            <div class="status-child">AGI: <input type="number" v-model.number="editSoul.Arg['AGI']" ></div>
          </div>
        </div>
        <div class="ai">
          <div class="character-header">戦闘設定</div>
          <draggable v-model="edit.ai" handle=".grip">
            <div v-for="(v,i) in edit.ai" :key="`ai-${v.arguments.rid}`"
              class="ai-child">
              <div class="grip">＝</div>
              <div class="label">{{ cardName(skillInEdit(v.arguments.rid)) }}</div>
            </div>
          </draggable>
        </div>
      </div>
      <div v-if="submode == 'skill'"
        class="material">
        <div v-for="v in cardList" 
          class="material-child" @click="showSkill(v)">{{ v.text }}</div>
      </div>
      <div v-else-if="submode == 'skill-detail'"
        class="material">
        <div class="btn" @click="selectSkill(subselect.value)">○決定</div>
        <div class="btn" @click="submode = 'skill'">⇐戻る</div>
        <card class="material-card" 
          :command="subselect.value" />
      </div>
      <div v-else
        class="material">
      </div>
    </div>
    <div v-else-if="mode == 'export'"
      class="main">
      <div class="json">
        <textarea rows="20" v-model="textValue" />
        <div>
          現在の設定のコードです。メモしたコードを貼り付けてから「インポート」すると設定を反映します。
        </div>
        <div class="btn" @click="importText(key)">インポート</div>
      </div>
    </div>
  </div>
</template>

<script>
import cardList from '@/assets/cardlist.json'
import _ from 'lodash'
import draggable from 'vuedraggable'
import Card from '@/components/Card'
export default {
  props: {
    team1: { type:Array, default:()=>[] },
    team2: { type:Array, default:()=>[] }
  },
  computed: {
    cardList () { return cardList },
    editSoul () { return this.edit&&_.find(this.edit.ability,{Cmd:"test-cmd/soul"}) }
  },
  components: {
    draggable,
    Card
  },
  data () {
    return {
      innerTeam1: this.team1,
      innerTeam2: this.team2,
      mode: null,

      submode: null,
      subcursor: -1, //操作対象
      subselect: null, //選択候補

      edit: null,
      key: null,

      textValue: '',
    }
  },
  mounted () {
    this.exportMode('innerTeam1')
  },
  methods: {
    addMember (key) {
      this[key].push({
        profile: {name:"テストさん"},
        skill: [],
        ability: [{
          Cmd: "test-cmd/soul",
          Arg: {
            Lv:1, HP:5,
            STR:0, INT:0,
            VIT:0, MND:0,
            DEX:0, AGI:0,
          },
          RID: "soul",
        }],
        ai: []
      })
      this.textValue = JSON.stringify(this[key], null, 2)
      this.$emit('input', { pt1:this.innerTeam1, pt2:this.innerTeam2 })
    },
    editMember (v) {
      this.mode = 'member'
      this.edit = v
    },
    removeMember (k, i) {
      this[k].splice(i, 1)
      this.$emit('input', { pt1:this.innerTeam1, pt2:this.innerTeam2 })
    },
    exportMode (key) {
      this.textValue = JSON.stringify(this[key], null, 2)
      this.mode = 'export'
      this.key = key
    },
    importText (key) {
      this[key] = JSON.parse(this.textValue)
      this.$emit('input', { pt1:this.innerTeam1, pt2:this.innerTeam2 })
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
      this.submode = null
      this.$emit('input', { pt1:this.innerTeam1, pt2:this.innerTeam2 })
    },
    showSkill (val) {
      this.submode = 'skill-detail'
      this.subselect = val
    },
    removeSkill (i) {
      let rid = this.edit.skill[i].RID
      this.edit.skill.splice(i,1)
      this.edit.ai = _.reject(this.edit.ai, { arguments:{rid} })
      this.$emit('input', { pt1:this.innerTeam1, pt2:this.innerTeam2 })
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
.team-builder {

  .nav {
    position: relative;
    width: 800px;
    display: flex;

    .team {
      width: 50%;

      &.team-1 { border: 1px solid #F99; }
      &.team-2 { border: 1px solid #99F; }

      .team-header {
        font-size: small;
      }
      .member {
        margin: 5px 0;

        &::after {
          content: "";
          display: block;
          padding-top: 1.5rem;
        }
      }
      .export {
        position: absolute;
        bottom: 0;
      }
    }

    .member-child {
      border: 1px solid #CCC;

      display: flex;
      justify-content: space-between;

      &.add { cursor: pointer; }
      .grip { width:20px; cursor: grab; }
      .del { width:20px; cursor: pointer; }
      .label { width:calc(100% - 40px); cursor: pointer; }
    }
  }

  .main {
    display: flex;
    height: 400px;

    .character {
      width: 400px;

      overflow-y: scroll;

      .skill, .ai {
        padding: 20px 0;

        .skill-child, .ai-child {
          border: 1px solid #CCC;

          display: flex;
          justify-content: space-between;

          .grip { width:20px; cursor: grab; }
          .del { width:20px; cursor: pointer; }
          .label { width:calc(100% - 40px); cursor: pointer; }
        }
      }

      .ability {
        width: 100%;

        .status {
          position: relative;
          width: 100%;

          display: flex;
          flex-wrap: wrap;

          .status-child {
            width:50%;

            input { width:5rem; }
          }
        }
      }

      .character-header { font-size: small; }
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
      .material-card {
        width: 300px;
        margin: 20px;
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
