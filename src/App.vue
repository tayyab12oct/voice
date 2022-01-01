<template>
  <div :class="isDark ? 'dark' : 'bg-gray-100'">
    <TopBar />
    <Header />
    <div class="max-w-6xl mx-auto">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
// <div id="nav">
//   <router-link to="/">Home</router-link> |
//   <router-link to="/about">About</router-link>
// </div>
import TopBar from "./components/TopBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    TopBar,
    Header,
    Footer,
  },
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
