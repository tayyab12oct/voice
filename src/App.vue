<template>
  <div :class="isDark ? 'dark' : 'bg-gray-100 dark:bg-dark-100'">
    <TopBar />
    <Header />
    <!-- <Drawer :sidebarOpen="sidebarOpen" @closeSidebar="showSidebarOpen" /> -->
    <button
      class="px-4 text-dark-100 focus:outline-none hidden"
      @click="showSidebarOpen"
    >
      Open sidebar
    </button>
    <div class="max-w-6xl w-full py-8 md:px-4 px-2.5 xl:px-0 mx-auto">
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
// import Drawer from "./components/Drawer/index.vue";
export default {
  components: {
    TopBar,
    Header,
    Footer,
    // Drawer,
  },
  datat() {
    return {
      isDark: true,
      sidebarOpen: false,
    };
  },
  methods: {
    mode() {
      this.isDark = !this.isDark;
      console.log(this.isDark, "darkmode");
    },
    showSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>
<style>
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
