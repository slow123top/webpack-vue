<template>
  <input type="radio" :name="name" :value="value" @click="clickHandler()" />
</template>

<script>
export default {
  name: "Radio",
  props() {
    return {
      value: {
        type: string,
        default: ""
      },
      name: {
        type: {
          type: string,
          default: ""
        }
      }
    };
  },
  data() {
    return {
    };
  },
  methods: {
    clickHandler() {
      this.$emit("selectValue", this.value);
    }
  },
  computed() {},
  mounted() {
  }
};
</script>

<style scoped>
</style>
