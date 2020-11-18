import _ from 'lodash'

export default {
  props: {
    options: Object,
    pt1: Array,
    pt2: Array
  },
  computed: {
    allCharacter () {
      return _.concat(this.pt1, this.pt2)
    }
  },
  filters: {
    whoIdIs (v, id) {
      return _.find(v, { id })
    },
    name (v) { return v.name },
    icon (v) { return v.icon }
  }
}
