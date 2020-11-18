<template>
  <div>
    <transition-group name="fade">
      <component :is="opr['@call'].split('.')[1]" v-for="(opr,i) in code" :key="i+'hoge'"
        :options="opr.arguments"
        :pt1="pt1" :pt2="pt2"
      >
      </component>
    </transition-group>
    <div ref="footer"></div>
  </div>
</template>

<script>
import StoryNote from '@/components/StoryNote'
import battle from './mixin-battle'
export default {
  name: 'battle-note',
  extends: StoryNote,
  props: {
    pt1: Array,
    pt2: Array,
  },
  mixins:[
    battle
  ]
}
</script>

<style>

</style>