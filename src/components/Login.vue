<template>
  <div class="bg-light-900 dark:bg-dark-500 shadow">
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin"
    >
      Login
    </h1>
    <div class=""></div>
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
