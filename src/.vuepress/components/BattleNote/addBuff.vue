<template>
  <div class="content">
    <div class="buff-add">
      <div class="buff-area">
        <buff-icon :color="options.color" :type="options.type" />
      </div>
      {{allCharacter | whoIdIs(options.player) | name }} に{{options.name}}Lv
      <b :class="damageClass">
        {{ options.power }}
      </b>
      を付与！
    </div>
  </div>
</template>

<script>
import base from './base'
import BuffIcon from './BuffIcon'
export default {
  name:'add-buff',
  extends: base,
  components: { BuffIcon },
  computed: {
    damageClass () {
      if(this.options.power <= 10){
        return 's-add-buff'
      }else if(this.options.power < 100){
        return 'm-add-buff'
      }else{
        return 'l-add-buff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #FFF;
  margin: 2px 1px;
  padding: 0 10px;

  .buff-add {
    // font-size: 20px;
    // color: #CCC;

    .buff-area {
      width: 30px;
      height: 30px;

      background-color: rgba(0,0,0,0.2);
      display: inline-block;
    }

    .s-add-buff {
      font-size: 20px;
    }
    .m-add-buff {
      font-size: 32px;
    }
    .l-add-buff {
      font-size: 48px;
    }

  }

}
</style>
