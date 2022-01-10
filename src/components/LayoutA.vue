<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-t-2 border-purple-100 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT A
      </h1>
      <div class="grid grid-cols-1">
        <div class="shadow w-full bg-white dark:bg-dark-200">
          <div
            class="md:h-120 h-48 overflow-hidden relative z-10 flex items-center justify-center"
          >
            <div
              class="w-full h-full overflow-hidden absolute top-0 left-0"
              style="z-index: -1"
            >
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-1536x1067.jpg.webp"
                class="transform transition duration-500 cursor-pointer w-full h-full hover:scale-110"
                alt=""
              />
            </div>
          </div>
          <div
            class="flex flex-col font-sans items-center text-center p-5 lg:px-8"
          >
            <router-link
              to=""
              class="text-purple-100 lg:text-sm text-xs font-light pb-1 hover:underline"
            >
              Environment</router-link
            >
            <router-link
              to=""
              class="md:text-3xl text-lg md:leading-wide md:w-3/4 md:pb-2 text-dark-600 dark:text-white font-medium hover:text-primary font-poppin transform transition-all"
            >
              San Francisco is the Most Photographed City in North
              America</router-link
            >
            <p
              class="text-gray-900 mb-2 md:text-sm text-xs font-light pt-1 pb-2"
            >
              1 week ago 1 Commentby Patrick Callahan
            </p>
            <p
              class="md:text-base text-sm md:w-4/5 pb-3 text-gray-400 dark:text-gray-200 font-light leading-6 px-0.5"
            >
              Trust fund Tumblr fixie, hoodie flannel dreamcatcher lomo hella
              jean shorts. Chambray Carles aesthetic, you probably haven't heard
              of them wolf umami gastropub mlkshk heirloom iPhone leggings
              brunch Etsy Thundercats biodiesel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
