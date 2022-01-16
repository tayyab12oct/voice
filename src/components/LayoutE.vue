<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-green-50 border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT E
      </h1>
      <div
        class="grid md:p-5 p-3 md:gap-5 gap-3 lg:grid-cols-5 grid-cols-2 md:grid-cols-4"
      >
        <div
          class="shadow w-full bg-white dark:bg-dark-200"
          v-for="v in list"
          :key="v"
        >
          <div
            class="overflow-hidden relative z-10 flex items-center justify-center h-24 w-full"
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
            <div
              v-if="v.icon === true"
              class="bg-gray-80 rounded-full md:p-3 p-2 md:border-4 border-2 border-white cursor-pointer"
            >
              <MusicNoteIcon
                :class="v.iconClass"
                class="md:w-5 w-4 text-white"
              />
            </div>
          </div>
          <div class="flex flex-col font-sans pt-1 w-full">
            <router-link
              :class="v.color"
              to=""
              class="lg:text-sm text-xs font-light pb-1 hover:underline"
            >
              {{ v.category }}</router-link
            >
            <router-link
              to="/blog"
              class="text-xs px-4 pb-3 text-center text-dark-600 dark:text-white font-medium hover:text-primary font-poppin transform transition-all"
            >
              {{ v.title }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MusicNoteIcon } from "@heroicons/vue/solid";
export default {
  components: { MusicNoteIcon },
  data() {
    return {
      list: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          title: "Get Yourself Out of a Funk and Get Back to Work",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          title: "Entrepreneurship ideas for young and ambitious people",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "Success Is a Choice – What Are You Going to Do?",
        },
      ],
    };
  },
};
</script>
