<template>
  <div
    class="bg-light-900 dark:bg-dark-500 shadow border dark:border-dark-800 border-transparent"
  >
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin"
    >
      ABOUT THE AUTHOR
    </h1>
    <div class="md:p-6 p-4">
      <div
        class="flex md:flex-row flex-col md:items-start items-center text-center md:text-left md:space-x-10 space-y-2 md:space-y-0"
      >
        <img
          class="w-28 h-28 border-4 border-white shadow rounded-full"
          src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/meks_1-128x128.jpg.webp"
          alt=""
        />
        <div class="pt-1">
          <h2
            class="font-poppin text-dark-600 dark:text-white font-semibold text-2xl"
          >
            Patrick Callahan
          </h2>
          <p
            class="text-gray-400 dark:text-gray-200 font-sans font-light md:text-base text-sm py-2.5"
          >
            Wayfarers plaid pour-over, actually direct trade McSweeney's
            Portland Thundercats shabby chic drinking vinegar seitan trust fund
            meggings locavore cliche. Odd Future bicycle rights salvia mixtape
            lumbersexual Wes Anderson.
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between py-3 px-5 bg-light-800 dark:bg-dark-800 border-t border-dark-50"
    >
      <router-link
        to="/"
        class="bg-primary rounded text-sm text-white font-sans font-light px-6 py-1.5"
      >
        View all posts
      </router-link>
      <a href="https://mekshq.com/" target="_blank">
        <LinkIcon
          class="w-6 text-gray-800 hover:text-primary cursor-pointer transform rotate-90"
        />
      </a>
    </div>
  </div>
</template>
<script>
import { LinkIcon } from "@heroicons/vue/solid";
export default {
  components: {
    LinkIcon,
  },
};
</script>
