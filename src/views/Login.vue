<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-7 items-start">
    <Login />
    <Register />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
export default {
  name: "Home",
  components: { Login, Register },
  data() {
    return {};
  },
};
</script>
