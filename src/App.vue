<template>
<div class="app">
  <div class="header">
    <nav-header></nav-header>
  </div>
  <div class="page">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
export default {
  components: {
    NavHeader
  },
  name: 'app'
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #0667d0;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  /*border-bottom: 1px solid #b3b3b3;*/
  width: 100%;
  padding: 20px 30px;
}

.page {
  width: 100%;
  /*padding: 30px 50px;*/
}

</style>
