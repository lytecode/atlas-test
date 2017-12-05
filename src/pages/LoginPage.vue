<template>
  <div class='login-container'>
    <div class="title">Sign in to Coinbase</div>
    <div class="login">
      <div class="login-form">
        <input-field name="Email"></input-field>
        <input-field name="Password" type="Password"></input-field>
      </div>
      <div class="buttons">
        <check-box class="checkbox" name="Keep me signed in on this computer"></check-box>
        <action-button class="submitbutton" name="SIGN IN"></action-button>
      </div>
      <div class="help-text">
        <p>Copyright George Vue (SPA)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ActionButton from '@/components/ActionButton'
  import InputField from '@/components/InputField'
  import CheckBox from '@/components/CheckBox'

  export default {
    components: {
      ActionButton,
      InputField,
      CheckBox
    },
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ])
    },
    methods: {
      ...mapActions([
        'getAllProducts'

      ])
    }
  }
</script>

<style>
.login-container {
  margin-right: auto;
  margin-left: auto;
  padding-top: 60px;
}

.login {
  background-color: #ffffff;
  box-shadow: 0px 1px 46px -4px rgba(0,0,0,0.28);
  border-radius: 4px;
  /*padding: 60px 8px;*/
  height: 225px;
  width: 400px;
  margin: 0 auto;
}

.title {
  color: #ffffff;
  margin-bottom: 40px;
  height: 34px;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.13;
  text-align: center;
}

.login-form {
  padding: 32px 24px 10px 24px;
}

.buttons {
  padding: 0 30px;
}

.checkbox {
  /*width:70%;*/
  float:left;
}

.submitbutton {
  /*width:30%;*/
  float:right;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
  color: #ffffff;
}
</style>
