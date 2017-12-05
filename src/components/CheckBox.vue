<template>
  <table>
    <tr class="checkbox-wrapper" align="center">
      <td><input type="checkbox"  v-model="checked"  v-on:click="check()" :value="name" ></td>
      <td class="title">{{ name }}</td>
    </tr>
  </table>
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
    /*text-align-all: center;*/
  }
  .title {
    color: black;
    padding-left: 8px;
    font-size: 12px;
  }
</style>
tyle>
