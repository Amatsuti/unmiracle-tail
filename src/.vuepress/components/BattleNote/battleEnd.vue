<template>
  <div class="content">
    <h2 v-if="options.winner == 'team1'">左側チームの勝利！</h2>
    <h2 v-else-if="options.winner == 'team2'">右側チームの勝利！</h2>
    <h2 v-else>引き分け！</h2>
    <div class="turn-table">
      <div class="left-side">
        <div v-for="(c,i) in pt1status" :key="c.id"
          class="character">
          <img :src="c.icon | coalesceImage" class="icon">
          <div class="hp">
            <b-progress :value="c.status.HP" :max="c.status.MHP" 
              variant="success" height="20" class="hp-bar" />
            <div class="hp-name">{{pt1[i].name}}</div>
            <div class="hp-num">{{c.status.HP}}</div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div v-for="(c,i) in pt2status" :key="c.id"
          class="character right">
          <div class="icon-area">
            <img :src="c.icon | coalesceImage" class="icon right">
            <div class="buff-area">
              <buff-icon v-for="buff in c.buff" :key="buff.id" 
                :color="buff.color" :type="buff.type" />
            </div>
          </div>
          <div class="hp">
            <b-progress :value="c.status.HP" :max="c.status.MHP" 
              variant="success" height="20" class="hp-bar" />
            <div class="hp-name">{{pt2[i].name}}</div>
            <div class="hp-num">{{c.status.HP}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import base from './base'
export default {
  extends: base,
  filters: {
    coalesceImage (v) {
      return v || './img/noimage.png'
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
  background-color: #FFF;
  margin: 2px 1px;
  padding: 10px;

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
          left: 0;

          display: flex;

          background-color: rgba(0,0,0,0.3);
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
          left: 0;

          line-height: 1rem;
          color: #FFF;
        }
        .hp-num {
          position: absolute;
          top: 0;
          right: 0;

          font-weight: bold;
          line-height: 1rem;
          color: #FFF;
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
