<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-blue-100 border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT G
      </h1>
      <div class="grid grid-cols-1 p-3 md:p-0">
        <div
          class="shadow w-full bg-white dark:bg-dark-200 relative"
          v-for="v in list"
          :key="v"
        >
          <div
            class="overflow-hidden relative z-10 flex items-center justify-center md:h-110 h-64 w-full"
          >
            <div
              class="w-full h-full overflow-hidden absolute top-0 left-0"
              style="z-index: -1"
            >
              <img
                :src="v.src"
                class="transform transition duration-500 cursor-pointer w-full h-full hover:scale-110"
                alt=""
              />
            </div>
          </div>
          <div
            class="absolute bottom-0 left-0 bg-dark-60 w-full z-20 items-center text-center p-2 pt-5 flex flex-col font-sans"
          >
            <router-link
              :class="v.color"
              to=""
              class="lg:text-sm text-xs font-light pb-1 hover:underline"
            >
              {{ v.category }}</router-link
            >
            <router-link
              to=""
              class="text-white font-medium tracking-wide md:text-2xl text-lg pb-2 md:pb-0 pt-1 font-poppin transform transition-all"
            >
              {{ v.title }}</router-link
            >
            <p class="md:text-sm text-xs font-light pt-1 pb-2 text-white">
              {{ v.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2016/07/vlog016.jpg.webp",
          title: "Twitter Embed Example",
          category: "Technology",
          caption: "1 week ago Add Commentby Patrick Callahan",
          color:
            "bg-blue-100 text-white px-2 rounded py-0.5 hover:no-underline hover:bg-opacity-80 transform transition-all",
        },
      ],
    };
  },
};
</script>
