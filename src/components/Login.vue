<template>
  <div class="widget widget_login">
    <h3 class="widget_title">Login</h3>
    <div class="form-style form-style-2">
      <form>
        <div class="form-inputs clearfix">
          <p class="login-text">
            <input
              type="text"
              value="Username"
              onfocus="if (this.value == 'Username') {this.value = '';}"
              onblur="if (this.value == '') {this.value = 'Username';}"
            />
            <i class="icon-user"></i>
          </p>
          <p class="login-password">
            <input
              type="password"
              value="Password"
              onfocus="if (this.value == 'Password') {this.value = '';}"
              onblur="if (this.value == '') {this.value = 'Password';}"
            />
            <i class="icon-lock"></i>
            <span @click="forgotModal"
              ><router-link to="">Forget</router-link></span
            >
          </p>
        </div>
        <p class="form-submit login-submit">
          <input
            type="submit"
            value="Log in"
            class="button color small login-submit submit"
          />
        </p>
        <div class="rememberme">
          <label><input type="checkbox" checked="checked" /> Remember Me</label>
        </div>
      </form>
      <ul class="login-links login-links-r">
        <li @click="modal">
          <router-link to="">{{ register }}</router-link>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    register: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      RegisterPopup: false,
      ForgotPopup: false,
    };
  },
  methods: {
    modal() {
      this.RegisterPopup = !this.RegisterPopup;
    },
    forgotModal() {
      this.ForgotPopup = !this.ForgotPopup;
    },
  },
};
</script>
