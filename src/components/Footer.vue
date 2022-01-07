<template>
  <div class="bg-dark-100 border-t border-dark-60">
    <div
      class="max-w-6xl w-full px-4 xl:px-0 mx-auto py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 items-start justify-between"
    >
      <div
        class="bg-dark-200 rounded-sm border border-opacity-60 border-dark-10"
      >
        <h1
          class="text-white font-semibold text-center font-poppin text-lg tracking-tight py-3 border-b border-dark-20"
        >
          MOST POPULAR
        </h1>
        <div class="bg-dark-500 p-4 space-y-5 flex flex-col">
          <div v-for="n in 4" :key="n" class="w-full">
            <Card />
          </div>
        </div>
      </div>
      <div
        class="bg-dark-200 rounded-sm border border-opacity-60 border-dark-10"
      >
        <h1
          class="text-white font-semibold text-center font-poppin text-lg tracking-tight py-3 border-b border-dark-20"
        >
          TALKED ABOUT
        </h1>
        <div class="bg-dark-500 p-4 space-y-5 flex flex-col">
          <div v-for="v in 4" :key="v" class="w-full">
            <Card />
          </div>
        </div>
      </div>
      <div
        class="gap-7 md:col-span-2 lg:col-span-1 grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 items-start"
      >
        <div
          class="bg-dark-200 rounded-sm border border-opacity-60 border-dark-10"
        >
          <h1
            class="text-white font-semibold text-center font-poppin text-lg tracking-tight py-3 border-b border-dark-20"
          >
            VIDEO OF THE DAY
          </h1>
          <div class="bg-dark-500 p-4 px-5 space-y-5">
            <iframe
              width="100%"
              height="150"
              src="https://www.youtube.com/embed/XsEMu5UCy0g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          class="bg-dark-200 rounded-sm border border-opacity-60 border-dark-10"
        >
          <h1
            class="text-white font-semibold text-center font-poppin text-lg tracking-tight py-3 border-b border-dark-20"
          >
            JOIN US
          </h1>
          <div class="bg-dark-500 p-5 flex space-x-1.5">
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
            <div
              class="h-11 w-11 bg-black-100 rounded hover:opacity-80 transform transition duration-500 cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark-300 py-0.5 font-sans">
      <div
        class="max-w-6xl w-full px-4 xl:px-0 mx-auto py-4 flex flex-col md:flex-row items-center justify-between"
      >
        <p class="text-gray-200 text-sm font-light">
          Copyright © 2022. Created by
          <router-link to="/" class="text-primary hover:underline"
            >Voice</router-link
          >.
        </p>
        <div
          class="flex items-center pt-1 md:pt-0 space-x-2 text-primary text-sm font-light"
        >
          <router-link class="hover:underline" to="/">Typography </router-link>
          <router-link class="hover:underline" to="/">Layouts </router-link>
          <router-link class="hover:underline" to="/">Shortcodes </router-link>
          <router-link class="hover:underline" to="/">Contact </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./CardList.vue";
export default {
  components: {
    Card,
  },
};
</script>
