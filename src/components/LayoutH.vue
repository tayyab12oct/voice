<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-primary border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT H
      </h1>
      <div class="grid md:grid-cols-2 grid-cols-1 p-3 md:p-5 gap-3 md:gap-5">
        <div
          class="shadow w-full bg-white dark:bg-dark-200 relative"
          v-for="v in list"
          :key="v"
        >
          <div
            class="overflow-hidden relative z-10 flex items-center justify-center h-64 w-full"
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
            class="absolute top-0 left-0 h-full bg-dark-60 w-full z-20 flex flex-col justify-center cursor-pointer items-center text-center p-2 pt-5"
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
              class="text-white font-medium md:text-xl text-lg w-3/4 md:px-4 px-2 tracking-wide pt-1.5 font-poppin hover:text-white"
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
export default {
  data() {
    return {
      list: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2016/07/vlog016.jpg.webp",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          category: "Technology",
          color:
            "bg-blue-100 text-white px-2 rounded py-0.5 hover:no-underline hover:bg-opacity-80 transform transition-all",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_2-810x608.jpg.webp",
          title: "What Is the Definition of an Entrepreneur Lifestyle?",
          category: "Technology",
          color:
            "bg-blue-100 text-white px-2 rounded py-0.5 hover:no-underline hover:bg-opacity-80 transform transition-all",
        },
      ],
    };
  },
};
</script>
