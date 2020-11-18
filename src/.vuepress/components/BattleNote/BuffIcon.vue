<template>
  <div :class="`buff-icon ${type}-icon ${color}-icon size-${size}`"></div>
</template>

<script>
export default {
  props:{
    color: String,
    type: String,
    size: {
      type: String,
      default: "md"
    }
  }
}
</script>

<style lang="scss" scoped>
.buff-icon{
  background-image: url('../../assets/ui/bufficon5.png');
  background-repeat: no-repeat;
  display: inline-block;
}
.size-md {
  width: 30px;
  height: 30px;
}
.color-icon{ background-position-x: 0; }
.buff-magic-icon{ background-position-x: -30px; }
.debuff-magic-icon{ background-position-x: -60px; }
.buff-stance-icon{ background-position-x: -90px; }
.debuff-stance-icon{ background-position-x: -120px; }
.buff-mental-icon{ background-position-x: -150px; }
.debuff-mental-icon{ background-position-x: -180px; }
.buff-physical-icon{ background-position-x: -210px; }
.debuff-physical-icon{ background-position-x: -240px; }
.debuff-ct-icon{ background-position-x: -270px; }
.n-icon{ background-position-y: 0; }
.r-icon{ background-position-y: -30px; }
.b-icon{ background-position-y: -60px; }
.y-icon{ background-position-y: -90px; }
.s-icon{ background-position-y: -120px; }
.g-icon{ background-position-y: -150px; }
.w-icon{ background-position-y: -180px; }
.d-icon{ background-position-y: -210px; }

</style>