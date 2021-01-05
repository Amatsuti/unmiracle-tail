<template>
  <white-page>
    <team-builder
      :team1="pt1init" :team2="pt2init"
      @input="updateTeam($event.pt1,$event.pt2)" />

    <div class="rule">
      <button @click="simu" :disabled="!ok">シミュレーション</button>
    </div>
    <battle-note :code="log" :pt1="pt1" :pt2="pt2" @addMember="addMember"></battle-note>
  </white-page>
</template>

<script>
import BattleNote from '@/components/BattleNote'
import { pt1, pt2, defSkill } from './const'
import WhitePage from '@/components/WhitePage'
import path from 'path'
import { Unmiracle } from '@/wasm'
import TeamBuilder from '@/components/TeamBuilder'
/*eslint-disable no-undef */
export default {
  name: 'test',
  computed: {
    ok () { return Unmiracle.status.load },
    pt1init: ()=>pt1,
    pt2init: ()=>pt2,
  },
  data () {
    return {
      log: [],
      pt1: [],
      pt2: [],
      pt1json: pt1,
      pt2json: pt2,
      defSkill: JSON.stringify(defSkill, null, 2)
    }
  },
  components: {
    BattleNote,
    WhitePage,
    TeamBuilder
  },
  methods: {
    simu () {
      this.log = Unmiracle.simu(
        this.pt1json,
        this.pt2json,
        JSON.parse(this.defSkill), 
        (log, pt1, pt2)=>{
          this.log = log
          this.pt1 = pt1
          this.pt2 = pt2
        }
      )
    },
    updateTeam(p1, p2) {
      this.pt1json = p1
      this.pt2json = p2
    },
    addMember(ch) {
      if(ch.team == 'team1'){
        this.pt1.push(ch)
      }else if(ch.team == 'team2'){
        this.pt2.push(ch)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  display: flex;

  textarea {
    padding: 0 20px;
    width: 400px;
  }
}
</style>
