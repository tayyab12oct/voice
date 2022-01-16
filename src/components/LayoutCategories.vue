<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-primary border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        CATEGORIES MODULE - 1 COLUMN
      </h1>
      <div class="grid grid-cols-1 p-3 md:p-5 gap-3 md:gap-5">
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
              to="/blog"
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
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          title: "Environment",
          caption: "9 articles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_2-810x608.jpg.webp",
          title: "Fashion",
          caption: "9 articles",
        },
      ],
    };
  },
};
</script>
