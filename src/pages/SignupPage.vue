<template>
  <div>
    <div>
      It will be a great opportunity to work with you.
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ActionButton from '../components/ActionButton.vue'
  export default {
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      product () {
        console.log('test')
      }
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'addToCart'
      ])
    },
    components: { ActionButton }
  }
</script>

<style>
.product-item {
  margin: 10px 10px;
  width: 500px;
  height: 400px;
  border-bottom: 1px solid #aaa;
}

.back-link {
  font-size: 20px;
}

.product-title {
  padding-top: 120px;
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
}

.product-details {
  margin-top: 120px;
}

.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  width: 140px;
  height: 50px;
}
</style>
