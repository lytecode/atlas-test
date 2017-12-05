<template>
  <div>
    <input :name="name" :placeholder="name" :type="type" class="text-field"  autocomplete="off">
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String
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
  .text-field {
    border-radius: 3px;
    border: 1px solid #b3b3b3;
    padding: 0 10px;
    margin: 5px;
    width: 320px;
    height: 42px;
  }
</style>
