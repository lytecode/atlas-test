<template>
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checked: checked }"></div>
    <div class="title">{{ name }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      }
    },
    data () {
      return { checked: false }
    },
    methods: {
      check () { this.checked = !this.checked }
    }
  }
</script>

<style scoped>
  .checkbox-wrapper {
    color: purple;
  }
  .title {
    color: #484c57;
    font-size: 12px;
    font-weight: 500;
  }
</style>
tyle>
