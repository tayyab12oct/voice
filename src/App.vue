<template>
  <div :class="isDark ? 'dark' : ''">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="dark:text-white text-black dark:bg-black p-10 bg-gray-200">
      dsafusoidf y
    </div>
    <button @click="mode()">
      <span v-if="isDark === true">Dark</span>
      <span v-if="isDark === false">Light </span> Mode
    </button>
    <router-view />
  </div>
</template>
<script>
export default {
  datat() {
    return {
      isDark: true,
    };
  },
  methods: {
    mode() {
      this.isDark = !this.isDark;
      console.log(this.isDark, "darkmode");
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
