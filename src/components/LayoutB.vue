<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-pink-100 border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT B
      </h1>
      <div class="grid grid-cols-1 md:p-5 p-3 md:gap-5 gap-3">
        <div
          class="shadow w-full bg-white dark:bg-dark-200 grid md:grid-cols-2 grid-cols-1 md:gap-5"
          v-for="v in list"
          :key="v"
        >
          <div
            class="overflow-hidden relative z-10 flex items-center justify-center md:h-48 h-42"
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
            class="flex flex-col font-sans py-4 lg:pr-8 lg:pl-0 text-center md:text-left px-6"
          >
            <router-link
              to=""
              class="lg:text-sm text-xs font-light pb-1 hover:underline text-pink-100"
            >
              Fashion</router-link
            >
            <router-link
              to="/blog"
              class="text-dark-600 dark:text-white hover:text-primary font-poppin transform transition-all md:text-2xl font-semibold text-base"
            >
              {{ v.title }}</router-link
            >
            <p
              class="md:text-sm text-xs font-light pt-1 pb-2 text-gray-900 md:mb-2"
            >
              {{ v.caption }}
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
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_16-375x195.jpg.webp",
          category: "Fashion",
          color: "text-pink-100",
          title: "Hipster Yoga at the End of the World",
          caption: "1 week ago 1 Commentby",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_19-375x195.jpg.webp",
          category: "Fashion",
          color: "text-pink-100",
          title: "Staying in Fashion With the Perfect Accessory",
          caption: "1 week ago 1 Commentby",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_26-375x195.jpg.webp",
          category: "Fashion",
          color: "text-pink-100",
          title: "Hipster Yoga at the End of the World",
          caption: "1 week ago 1 Commentby",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_16-375x195.jpg.webp",
          category: "Fashion",
          color: "text-pink-100",
          title: "Staying in Fashion With the Perfect Accessory",
          caption: "1 week ago 1 Commentby",
        },
      ],
    };
  },
};
</script>
