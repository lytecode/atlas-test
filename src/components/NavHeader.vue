<template>
  <div class="menu-links">
    <router-link to="/">coinbase</router-link>
    <div class="navs">
      <router-link to="/products">Products</router-link>
      <router-link to="/help">Help</router-link>
      <router-link to="/charts">Charts</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'

    ])
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  margin-right: 30px;
  font-size: 14px;
  font-weight: bold;
}
.navs {
  /*border-bottom: 1px solid #b3b3b3;*/
  float: right;
  padding: 0px 50px;
}
</style>
