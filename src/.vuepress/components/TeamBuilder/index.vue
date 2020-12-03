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
          <select>
            <option v-for="v in cardList" :value="v.value">{{ v.text }}</option>
          </select>
        </div>
        <div class="ability">アビリティ</div>
        <div class="ai">戦闘設定</div>
      </div>
      <div class="material"></div>
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
export default {
  computed: {
    textValue () { return JSON.stringify(this.innerValue) },
    cardList () { return cardList }
  },
  data () {
    return {
      innerValue: [],
      mode: 'export',
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
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
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
