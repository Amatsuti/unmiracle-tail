<template>
  <!-- <b-overlay :show="loading" class="w-100 h-100"
    variant="dark" spinner-variant="light"> -->
    <div :class="{home:true, white}">
        <div class="bg">
          <div class="header-blank"></div>
          <slot></slot>
          <div class="footer-blank"></div>
        </div>
    </div>
  <!-- </b-overlay> -->
</template>

<script>
// import Loading from './mixin-loading'
export default {
  props: {
    white: { type:Boolean, default:true }
  },
  computed: {
    // height: th => th.$store.getters.height
  },
  mixins: [
    // Loading
  ]
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 40px;
  margin: 0;
  background-color: rgba(255,255,255,0.2);

  background-blend-mode: lighten;

  ::v-deep h2 {
    text-align: center;
    height: 60px;

    background-image: url('../assets/ui/header_bg1.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
  ::v-deep legend {
    // color: rgb(158, 45, 45);
    font-weight: bold;
  }
}
.bg {
  width: 100%;
  height: 100%;
  margin: 0 auto;

  // position: absolute;
  // top: 0;
  // left: 0;
  // z-index: 0;
  border-image: url('../assets/ui/frame1.png') 100;
  border-style:solid;
  border-width: 100px;
}
.header-blank {
  height: 1px;
}
.footer-blank {
  height: 1px;
}
@media screen {
  .home{
    width: 900px;
  }
}
// @media (max-width: 1000px) {\
//   .home{
//     width: 100%;
//     min-width: 480px;
//   }
// }

</style>
