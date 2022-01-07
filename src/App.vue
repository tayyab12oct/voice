<template>
  <div class="bg-gray-100 dark:bg-dark-100">
    <TopBar :click="mode" />
    <Header />
    <div class="max-w-6xl w-full py-8 md:px-4 px-2.5 xl:px-0 mx-auto">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
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
.nav a.router-link-exact-active {
  color: #da463a;
}
a:focus {
  outline: none;
}
</style>
