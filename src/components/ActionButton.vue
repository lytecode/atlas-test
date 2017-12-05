<template>
  <div>
        <button class="add-button" :disabled="disabled"
            @click="onClick()">{{ name }}</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return { disabled: false }
    },
    methods: {
      onClick: (data) => { this.disabled = !this.disabled }
    }
  }
</script>

<style scoped>
  .add-button {
    width: 90.39px;
    height: 42px;
    color: white;
    border-radius: 0;
    border: 0;
    background-color: #0e86c4;
  }
</style>
