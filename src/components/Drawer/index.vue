<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog
      as="div"
      class="absolute w-full inset-0 flex lg:hidden bg-transparent"
      style="z-index: 1000 !important"
    >
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex flex-col w-64 nav bg-light-90 dark:bg-dark-500 shadow-xl"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leavea="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 pt-2"></div>
          </TransitionChild>
          <div
            class="flex-grow flex flex-col divide-y divide-dark-10 bg-light-90 dark:bg-dark-500"
          >
            <div class="divide-y divide-dark-10">
              <div
                class="divide-y divide-dark-10"
                v-for="item in navigation"
                :key="item.name"
              >
                <div
                  @click="close"
                  :class="[
                    item.current
                      ? 'text-primary '
                      : 'text-gray-700 dark:text-white hover:text-primary',
                    'group flex justify-between px-4 text-md font-poppin font-normal cursor-pointer transform transition-all divide-x divide-dark-10',
                  ]"
                >
                  <router-link
                    :to="item.to"
                    class="py-3.5 w-full focus:outline-none"
                  >
                    {{ item.name }}</router-link
                  >
                </div>
              </div>
            </div>
            <div class="p-3 px-4">
              <input
                type="text"
                class="bg-gray-50 dark:bg-dark-300 rounded w-full p-2 py-2.5 text-gray-70 dark:text-gray-200 placeholder-gray-70 dark:placeholder-gray-200 focus:outline-none md:text-md text-sm"
                placeholder="Type here to search..."
              />
            </div>
            <div></div>
          </div>
          <div @click="close" class="py-3 px-4 flex justify-end">
            <ArrowLeftIcon class="w-6 dark:text-white" />
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";

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
    Dialog,
    TransitionChild,
    TransitionRoot,
    ArrowLeftIcon,
  },
  data() {
    return {
      navigation,
    };
  },
  methods: {
    close() {
      this.$emit("closeSidebar");
    },
  },
};
</script>
<style scoped>
.nav a.router-link-exact-active {
  color: #da463a;
}
</style>
