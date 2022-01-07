<template>
  <div class="bg-white h-screen w-96 z-50 drawer" :show="sidebarOpen">
    <div
      class="flex flex-col h-screen flex-grow bg-light-90 shadow-xl overflow-y-auto"
    >
      <div class="flex-grow flex flex-col divide-y divide-dark-10">
        <div class="divide-y divide-dark-10">
          <div
            class="divide-y divide-dark-10"
            v-for="item in navigation"
            :key="item.name"
          >
            <div
              :class="[
                item.current
                  ? 'text-primary '
                  : 'text-gray-700 hover:text-primary',
                'group flex justify-between px-4 text-md font-poppin font-normal cursor-pointer transform transition-all divide-x divide-dark-10',
              ]"
            >
              <router-link :to="item.to" class="py-3.5 w-full">
                {{ item.name }}</router-link
              >
              <div
                class="pl-5 pr-1 flex items-center"
                @click="menu = !menu"
                v-if="item.children"
              >
                <ChevronDownIcon class="w-3" />
              </div>
            </div>

            <div class="divide-y divide-dark-10" v-if="item.children">
              <router-link
                v-for="v in item.children"
                :key="v"
                :to="v.to"
                class="group text-gray-700 hover:text-primary py-3.5 flex justify-between pr-4 pl-8 text-md font-poppin font-normal cursor-pointer transform transition-all divide-x divide-dark-10"
              >
                {{ v.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="p-3 px-4">
          <input
            type="text"
            class="bg-gray-50 rounded w-full p-2 py-2.5 text-gray-70 placeholder-gray-70 focus:outline-none text-md"
            placeholder="Type here to search..."
          />
        </div>
        <div class="p-3 px-4 flex items-center">f</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/outline";

const navigation = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/home",
    name: "Home2",
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
  props: ["sidebarOpen"],
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      navigation,
      menu: false,
    };
  },
  methods: {
    close() {
      this.$emit("closeSidebar");
    },
  },
};
</script>
<style>
.drawer a.router-link-exact-active {
  color: #da463a;
}
</style>
