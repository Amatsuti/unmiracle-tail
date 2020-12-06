<template>
  <div class="card">
    <div class="card-child">
      <div class="name">{{ cardName }}</div>
      <div class="prepare">
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
</template>

<script>
import CardProfile from './CardProfile'
export default {
  extends: CardProfile
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.0;

  li {
    line-height: 1.2;
  }
}
//layout
.card {
  position: relative;
  width: 100%;

  border: 1px solid #655;
  border-radius: 3px;

  padding: 5px;
}
.card:before {
  content:"";
  display: block;
  padding-top: 150%; /* 高さを幅の75%に固定 */
}
.card-child {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .name {
    padding: 5px 5px 0 5px;
    font-weight: bold;
  }
  .detail-head {
    font-size: small;
  }

  .prepare {
    border: 1px solid #655;
    margin: 5px;
  }
  .start-action {
    height: 1.5rem;
    display: flex;

    .aria, .armor {
      border: 1px solid #655;
      width: calc(50% - 5px);
    }
    .aria { margin-left:5px; }
    .armor { margin-right:5px; }
  }
  .action-detail {
    border: 1px solid #655;
    margin: 5px;
  }
}
</style>