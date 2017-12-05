<template>
  <div class="menu-links">
    <router-link to="/">
      <div class="logo">coinbase</div>
    </router-link>
    <div class="navs">
      <drop-down />
      <router-link to="/help">Help</router-link>
      <router-link to="/charts">Charts</router-link>
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/signup"><button class="button">Sign Up</button></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import DropDown from '@/components/DropDown'
import ActionButton from '@/components/ActionButton'

export default {
  components: {
    DropDown,
    ActionButton
  },
  data () {
    return { active: false }
  },
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
}
.navs {
  /*border-bottom: 1px solid #b3b3b3;*/
  float: right;
  padding: 0px 50px;
  font-weight: 500;
}
.logo {
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  font-weight: 400;
  padding: 7px 0 0 40px;
}
.button {
  color: white;
  width: 85.39px;
  height: 42px;
  border: 2px solid white;
  background-color: transparent;
}
</style>
