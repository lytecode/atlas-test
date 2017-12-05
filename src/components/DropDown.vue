<template>
    <router-link to="/products" >
        <div class="top" @mouseover="active = true" >
          Products
        </div>
        <div v-if="active" class="tooltip" @mouseover="active = true" @mouseleave="active = false">
          <div class="tooltiptext" >
            <router-link to="/help" class="navz" active-class="actived">Buy/Sell Digital Currency</router-link>
            <router-link to="/signup" class="navz" active-class="actived">GADX</router-link>
            <router-link to="/signup" class="navz" active-class="actived">Developer Platform</router-link>
            <router-link to="/charts" class="navz">Merchant Tools</router-link>
          </div>
        </div>
    </router-link>

</template>

<script>
  export default {
    data () {
      return { active: false }
    }
  }
</script>

<style scoped>
  .tooltip {
    position: absolute;
    padding-top: 10px;

  }
  .tooltiptext {
    position: absolute;
    width: 200px;
    background-color: white;
    color: black;
    padding: 10px;
    /*margin-top: 10px;*/

    /* Position the tooltip text - see examples below! */
    z-index: 1;
  }
  .navz {
    /*color: darkgray;*/
    font-size: 11px;
    font-weight: bold;
    margin-top: 10px;

    color: #3e4552;
    line-height: 10px;

    display: inline-block;
    padding: 2px;
  }
  .top {
    display: inline-block;
  }
  .actived {
    color: blue;
  }
</style>
