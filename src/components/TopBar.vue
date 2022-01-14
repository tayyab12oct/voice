<template>
  <div class="bg-primary hidden lg:flex w-full">
    <div
      class="max-w-6xl w-full px-4 xl:px-0 py-2.5 mx-auto flex items-center justify-between"
    >
      <div class="flex items-center space-x-2 text-white text-xs font-light">
        <router-link class="hover:underline" to="/">Layouts </router-link>
        <router-link class="hover:underline" to="/">Typography </router-link>
        <router-link class="hover:underline" to="/">Contact </router-link>
        <router-link class="hover:underline" to="/">Forum </router-link>
        <router-link class="hover:underline" to="/">Shop </router-link>
        <Switch :click="click" />
      </div>
      <div class="flex items-center space-x-2 text-white text-xs">
        <router-link to="/">icon </router-link>
        <router-link to="/">icon </router-link>
        <router-link to="/">icon </router-link>
        <router-link to="/">icon </router-link>
        <router-link to="/">icon </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Switch from "./Switch.vue";
export default {
  props: {
    click: { type: Function, default: () => {} },
  },
  components: {
    Switch,
  },
  data() {
    return {};
  },
};
</script>
