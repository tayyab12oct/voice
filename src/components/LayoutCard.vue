<template>
  <div :class="mainClass" class="border-t-2 bg-dark-900 shadow">
    <h1
      class="bg-white p-3 py-3 shadow text-center uppercase text-dark-600 font-semibold font-poppin"
    >
      {{ title }}
    </h1>
    <div :class="gridClass" class="grid">
      <div
        :class="cardMainClass"
        class="bg-white shadow w-full"
        v-for="v in list"
        :key="v"
      >
        <div
          :class="imgClass"
          class="overflow-hidden relative z-10 flex items-center justify-center"
        >
          <div
            class="w-full h-full overflow-hidden absolute top-0 left-0"
            style="z-index: -1"
          >
            <img
              :src="v.src"
              class="w-full h-full transform transition duration-500 hover:scale-110 cursor-pointer"
              alt=""
            />
          </div>
          <div
            v-if="v.icon === true"
            class="bg-gray-80 rounded-full p-4 border-4 border-white cursor-pointer"
          >
            <MusicNoteIcon class="w-9 text-white" />
          </div>
        </div>
        <div :class="textMainClass" class="flex flex-col font-sans">
          <router-link
            :class="v.color"
            to=""
            class="lg:text-sm text-xs font-light pb-1 hover:underline"
          >
            {{ v.category }}</router-link
          >
          <router-link
            :class="titleClass"
            to=""
            class="text-dark-600 font-medium hover:text-primary font-poppin transform transition-all"
          >
            {{ v.title }}</router-link
          >
          <p
            :class="captionClass"
            class="text-gray-900 md:text-sm text-xs font-light pt-1 pb-2"
          >
            {{ v.caption }}
          </p>
          <p
            :class="descClass"
            class="text-gray-400 font-light leading-6 px-0.5"
          >
            {{ v.desc }}
          </p>
        </div>
      </div>
      <div
        :class="imgCaptionClass"
        v-for="v in list"
        :key="v"
        class="overflow-hidden h-56 relative z-10 flex items-center justify-center"
      >
        <div
          class="w-full h-full overflow-hidden absolute top-0 left-0"
          style="z-index: -1"
        >
          <img
            :src="v.src"
            class="w-full h-full transform transition duration-500 hover:scale-110 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
    <div :class="listMainClass">
      <ul
        class="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-x-16 p-5 px-10 md:px-14 list-disc"
      >
        <li
          v-for="v in list"
          :key="v"
          class="text-sm font-poppin text-primary font-semibold"
        >
          <span class="text-dark-600"> {{ v.title }}</span>
        </li>
      </ul>
    </div>
    <div
      :class="buttonMainClass"
      class="flex justify-center py-3 bg-dark-800 border-t border-dark-50"
    >
      <button
        class="bg-primary rounded text-sm text-white font-sans font-light px-8 py-1.5"
      >
        Load more
      </button>
    </div>
  </div>
</template>
<script>
import { MusicNoteIcon } from "@heroicons/vue/solid";
export default {
  props: {
    mainClass: {
      type: String,
      default: "border-primary",
    },
    title: {
      type: String,
      default: "Latest Article",
    },
    // category: {
    //   type: String,
    //   default: "Environment",
    // },
    gridClass: {
      type: String,
      default: "md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 md:p-5 p-3",
    },
    cardMainClass: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "lg:text-xl text-base",
    },
    textMainClass: {
      type: String,
      default: "items-center text-center p-5 lg:px-8",
    },
    color: {
      type: String,
      default: "text-purple-100",
    },
    imgClass: {
      type: String,
      default: "h-50 w-full ",
    },
    captionClass: {
      type: String,
      default: "",
    },
    descClass: {
      type: String,
      default: "text-sm",
    },
    listMainClass: {
      type: String,
      default: "hidden",
    },
    imgCaptionClass: {
      type: String,
      default: "hidden",
    },
    buttonMainClass: {
      type: String,
      default: "hidden",
    },
    list: {
      type: Array,
      default: () => [{}],
    },
  },
  components: { MusicNoteIcon },
  data() {
    return {};
  },
};
</script>
