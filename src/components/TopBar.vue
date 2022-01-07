<template>
  <div class="bg-primary hidden lg:flex w-full">
    <div
      class="max-w-6xl w-full px-4 xl:px-0 py-2.5 mx-auto flex items-center justify-between"
    >
      <div class="flex items-center space-x-2 text-white text-sm font-light">
        <router-link class="hover:underline" to="/">Layouts </router-link>
        <router-link class="hover:underline" to="/">Typography </router-link>
        <router-link class="hover:underline" to="/">Contact </router-link>
        <router-link class="hover:underline" to="/">Forum </router-link>
        <router-link class="hover:underline" to="/">Shop </router-link>
        <p class="cursor-pointer" @click="click">
          <span v-if="mode === true">Dark</span>
          <span v-if="mode === false"> Light</span>
          Mode
        </p>
      </div>
      <div class="flex items-center space-x-2 text-white text-sm">
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
export default {
  props: ["click", "mode"],
};
</script>
