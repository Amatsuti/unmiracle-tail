<template>
  <div class="content">
    <div class="turn-table">
      <div class="left-side">
        <div v-for="(c,i) in pt1status" :key="c.RID"
          class="character">
          <div class="icon-area">
            <img :src="allCharacter | whoIdIs(c.RID) | icon | coalesceImage" class="icon">
            <div class="buff-area buff-area-left">
              <div class="dice">
                <!-- <font-awesome-icon icon="dice-one" class="fa-1x" />x{{ c.status.SP }} -->
                x{{ c.status.SP }}
              </div>
              <buff-icon v-for="buff in c.buff" :key="buff.id" 
                :color="buff.color" :type="buff.type"
                class="buff-icon" />
            </div>
          </div>
          <div class="hp hp-left">
            <!-- <b-progress :value="c.status.HP" :max="c.status.MHP" 
              variant="success" height="20" class="hp-bar" /> -->
            <div class="hp-name">{{pt1[i].name}}</div>
            <div class="hp-num">{{c.status.HP}}</div>
          </div>
        </div>
      </div>
      <div class="middle-side">
        <h3>{{options.turn}} TURN</h3>
        <h6 v-if="options.turn == 1">
          - STANDBY PHASE -
        </h6>
        <h6 v-if="options.turn == 2">
          - FIRST HALF Ⅰ -
        </h6>
        <h6 v-if="options.turn == 3">
          - FIRST HALF Ⅱ -
        </h6>
        <h6 v-if="options.turn == 4">
          - LATTER HALF Ⅰ -
        </h6>
        <h6 v-if="options.turn == 5">
          - LATTER HALF Ⅱ -
        </h6>
        <h6 v-if="options.turn == 6">
          - LAST PHASE -
        </h6>
      </div>
      <div class="right-side">
        <div v-for="(c,i) in pt2status" :key="c.id"
          class="character right">
          <div class="icon-area">
            <img :src="allCharacter | whoIdIs(c.RID) | icon | coalesceImage" class="icon right">
            <div class="buff-area buff-area-right">
              <div class="dice">
                <!-- <font-awesome-icon icon="dice-one" class="fa-1x" />x{{ c.status.SP }} -->
                x{{ c.status.SP }}
              </div>
              <buff-icon v-for="buff in c.buff" :key="buff.id" 
                :color="buff.color" :type="buff.type" 
                class="buff-icon" />
            </div>
          </div>
          <div class="hp hp-right">
            <!-- <b-progress :value="c.status.HP" :max="c.status.MHP" 
              variant="success" height="20" class="hp-bar" /> -->
            <div class="hp-num">{{c.status.HP}}</div>
            <div class="hp-name">{{pt2[i].name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import base from './base'
import BuffIcon from './BuffIcon'
import noimage from '@/assets/noimage.png'
export default {
  name:'next-turn',
  extends: base,
  components: {
    BuffIcon
  },
  filters: {
    coalesceImage (v) {
      return v || noimage
    }
  },
  computed: {
    pt1status () {
      return _.filter(this.options.characters, c=>_.find(this.pt1,m=>(m.id==c.RID)))
    },
    pt2status () {
      return _.filter(this.options.characters, c=>_.find(this.pt2,m=>(m.id==c.RID)))
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;
  width: 100%;

  h3 {
    font-weight: bolder;
  }

  .turn-table {
    width: 900px;

    padding: 10px;
    margin: 0 auto;

    border: 1px solid #000;

    display: flex;
    justify-content: space-between;

    .character {
      width: 300px;

      padding: 5px 0;

      &.right {
        position: relative;
        right: 0;
      }

      .icon {
        width: 60px;
        height: 60px;

        &.right {
          position: absolute;
          left: 0;
        }
      }
      .icon-area {
        position: relative;
        width: 300px;
        height: 60px;

        .buff-area {
          position: absolute;
          bottom: 0;

          &.buff-area-right {
            flex-direction: row;
            left: 0;
          }
          &.buff-area-left {
            flex-direction: row-reverse;
            right: 0;
          }

          display: flex;

          .dice {
            width: 60px;
            height: 30px;

            padding: 5px;

            font-weight: bold;

            svg {
              display: inline-block;
            }
          }

          .buff-icon {
            background-color: rgba(0,0,0,0.3);
          }
        }
      }

      .hp {
        position: relative;

        .progress {
          background-color: #111;
        }

        .hp-name {
          position: absolute;
          top: 0;

          line-height: 1rem;
          color: #FFF;
        }
        .hp-num {
          position: absolute;
          top: 0;

          font-weight: bold;
          line-height: 1rem;
          color: #FFF;
        }

        &.hp-left {
          .hp-name { left: 0; }
          .hp-num { right: 0; }
        }
        &.hp-right {
          .hp-name { right: 0; }
          .hp-num { left: 0; }
        }
      }
    }

    .left-side {
      position: relative;
      width: 300px;
    }
    .middle-side {
      position: relative;
      width: 200px;
      text-align: center;

      h3 {
        margin: auto 0;
      }
    }
    .right-side {
      position: relative;
      width: 300px;
    }

  } //end .turn-table

}
</style>
