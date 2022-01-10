<template>
  <div>
    <div class="bg-white dark:bg-dark-200">
      <div
        class="max-w-6xl w-full px-4 xl:px-0 mx-auto lg:py-6 py-2.5 lg:h-35 flex items-center justify-between"
      >
        <div to="/" class="flex-1 lg:hidden">
          <MenuIcon
            class="w-7 text-primary cursor-pointer"
            @click="showSidebarOpen"
          />
        </div>
        <router-link
          to="/"
          class="flex-1 flex items-center justify-center lg:justify-start"
        >
          <img alt="Vue logo" class="lg:w-36 w-30" src="../assets/logo.png" />
        </router-link>
        <div class="flex-1"></div>
        <router-link to="/">
          <img
            alt="Vue logo"
            class="hidden lg:flex"
            src="../assets/voice_banner.png"
          />
        </router-link>
      </div>
    </div>
    <div class="bg-light-20 dark:bg-dark-800 shadow-inner nav sticky top-0">
      <div
        class="max-w-6xl px-4 xl:px-0 w-full mx-auto lg:flex items-center hidden border-l border-dark-50"
      >
        <div class="" v-for="item in navigation" :key="item.name">
          <div
            :class="[
              item.current
                ? 'text-primary'
                : 'text-gray-700 dark:text-white hover:text-primary',
              'group border-r border-dark-50 nav-item flex justify-between text-sm font-poppin font-normal cursor-pointer transform transition-all divide-x divide-dark-10',
            ]"
          >
            <router-link :to="item.to" class="py-3.5 px-4 w-full">
              {{ item.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <Drawer
      :sidebarOpen="sidebarOpen"
      @closeSidebar="showSidebarOpen"
      :onChangeMode="onChangeMode"
    />
  </div>
</template>
<script>
import { MenuIcon } from "@heroicons/vue/outline";
import Drawer from "./Drawer/index.vue";

const navigation = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/home",
    name: "Home 2",
  },
  {
    to: "/blog",
    name: "Blog",
  },
  {
    to: "/new_blog_post",
    name: "New Blog Post",
  },
  {
    to: "/profile",
    name: "User Profile",
  },
  {
    to: "/edit-profile",
    name: "Edit Profile",
  },
  {
    to: "/login",
    name: "Login",
  },
];

export default {
  porps: ["onChangeMode"],
  components: {
    MenuIcon,
    Drawer,
  },
  data() {
    return {
      navigation,
      menu: false,
      sidebarOpen: false,
    };
  },
  methods: {
    close() {
      this.$emit("closeSidebar");
    },
    showSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen;
      console.log(this.showSidebarOpen, "sidebar");
    },
  },
};
</script>
<style scoped>
.nav a.router-link-exact-active {
  color: #da463a;
  background: white;
}
.dark .nav a.router-link-exact-active {
  color: #da463a;
  background: #2b2e33;
}
</style>
