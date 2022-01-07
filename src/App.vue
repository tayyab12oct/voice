<template>
  <div class="bg-gray-100 dark:bg-dark-100">
    <div class="flex w-full">
      <Drawer
        v-if="0"
        :sidebarOpen="sidebarOpen"
        @closeSidebar="showSidebarOpen"
      />
      <div class="h-screen overflow-y-auto w-full">
        <TopBar :click="mode" />
        <Header />
        <button
          class="px-4 text-dark-100 dark:text-white focus:outline-none"
          @click="mode"
        >
          Mode
        </button>
        <div class="max-w-6xl w-full py-8 md:px-4 px-2.5 xl:px-0 mx-auto">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "./components/TopBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Drawer from "./components/Drawer/index.vue";
export default {
  components: {
    TopBar,
    Header,
    Footer,
    Drawer,
  },
  datat() {
    return {
      isDark: true,
      sidebarOpen: true,
    };
  },
  methods: {
    mode() {
      /*  */
      // this.isDark = !this.isDark;
      let mode = localStorage.getItem("mode");
      mode = mode ? (mode === "light" ? "dark" : "light") : "dark";
      localStorage.setItem("mode", mode);

      mode
        ? mode === "dark"
          ? document.querySelector("html").classList.add("dark")
          : document.querySelector("html").classList.remove("dark")
        : null;
    },
    showSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen;
      console.log(this.sidebarOpen, "showSidebarOpen");
    },
  },
  mounted() {
    const mode = localStorage.getItem("mode");
    mode
      ? mode === "dark"
        ? document.querySelector("html").classList.add("dark")
        : document.querySelector("html").classList.remove("dark")
      : null;
    console.log(mode, "mounted");
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
