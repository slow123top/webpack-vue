<template>
  <input type="radio" :name="name" :value="value" @click="clickHandler()" />
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: {
        type: String,
        default: ''
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    clickHandler () {
      this.$emit('selectValue', this.value)
    }
  },
  computed: {},
  mounted () {}
}
</script>

<style scoped>
</style>
