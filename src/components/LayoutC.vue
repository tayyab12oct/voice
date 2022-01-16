<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-green-100 border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT C
      </h1>
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 md:p-5 p-3">
        <div
          class="shadow w-full bg-white dark:bg-dark-200"
          v-for="v in list"
          :key="v"
        >
          <div
            class="overflow-hidden relative z-10 flex items-center justify-center h-50 w-full"
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
              class="bg-gray-80 rounded-full md:p-4 p-2 md:border-4 border-2 border-white cursor-pointer"
            >
              <MusicNoteIcon
                :class="v.iconClass"
                class="md:w-9 w-5 text-white"
              />
            </div>
          </div>
          <div
            class="flex flex-col font-sans items-center text-center p-5 lg:px-8"
          >
            <router-link
              :class="v.color"
              to=""
              class="lg:text-sm text-xs font-light pb-1 hover:underline"
            >
              {{ v.category }}</router-link
            >
            <router-link
              to="/blog"
              class="text-dark-600 dark:text-white font-medium hover:text-primary font-poppin transform transition-all lg:text-xl text-base"
            >
              {{ v.title }}</router-link
            >
            <p class="md:text-sm text-xs font-light pt-1 pb-2 text-gray-900">
              {{ v.caption }}
            </p>
            <p
              class="text-gray-400 dark:text-gray-200 font-light leading-6 px-0.5 text-sm"
            >
              {{ v.desc }}
            </p>
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
          category: "Food",
          color: "text-green-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Food",
          color: "text-green-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Food",
          color: "text-green-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Food",
          color: "text-green-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
      ],
    };
  },
};
</script>
