<template>
  <div class="space-y-6">
    <div class="bg-dark-900 shadow">
      <h1
        class="bg-white p-3 py-3 shadow text-center uppercase text-dark-600 font-semibold font-poppin"
      >
        CATEGORIES
      </h1>
      <div class="">
        <div
          class="flex font-sans category_color color_purple border-l-2 border-purple-100 font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Environment
          </h1>
          <div
            class="bg-purple-100 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            9
          </div>
        </div>
        <div
          class="flex font-sans category_color color_pink border-l-2 border-pink-100 font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Fashion
          </h1>
          <div
            class="bg-pink-100 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            7
          </div>
        </div>
        <div
          class="flex font-sans category_color color_green border-l-2 border-green-100 font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Food
          </h1>
          <div
            class="bg-green-100 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            8
          </div>
        </div>
        <div
          class="flex font-sans category_color color_primary border-l-2 border-primary font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Lifestyle
          </h1>
          <div
            class="bg-yellow-100 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            9
          </div>
        </div>
        <div
          class="flex font-sans category_color color_green border-l-2 border-green-50 font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Music
          </h1>
          <div
            class="bg-green-50 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            7
          </div>
        </div>
        <div
          class="flex font-sans category_color color_blue border-l-2 border-blue-100 font-light cursor-pointer group"
        >
          <h1
            class="w-full pl-5 h-10 flex items-center text-sm text-gray-400 group-hover:text-white"
          >
            Technology
          </h1>
          <div
            class="bg-blue-100 p-2 text-xs h-10 w-11 flex items-center justify-center text-white"
          >
            10
          </div>
        </div>
      </div>
    </div>
    <LayoutCard
      :list="list"
      title="FEATURED POSTS"
      mainClass="border-transparent"
      gridClass="md:p-5 p-3 md:gap-5 gap-3 grid-cols-1"
      textMainClass="w-full"
      cardMainClass="flex items-start shadow-none bg-transparent space-x-3 md:pr-5 md:h-24 h-20"
      imgClass="h-20 w-46"
      titleClass="md:text-sm text-xs h-16 overflow-hidden"
    />
    <LayoutCard
      :list="points"
      title="Highest Points"
      mainClass="border-transparent"
      gridClass="md:p-5 p-3 md:gap-5 gap-3 grid-cols-1"
      textMainClass="w-full"
      cardMainClass="flex items-center shadow-none bg-dark-900 space-x-3"
      imgClass="w-18 h-14 md:h-14 md:w-20 lg:h-18 lg:w-28 flex items-center justify-center"
      titleClass="md:text-sm text-xs"
      img="w-full h-full rounded-full"
    />
    <Login />
    <!-- <div class="bg-dark-900 shadow">
      <h1
        class="bg-white p-3 py-3 shadow text-center uppercase text-dark-600 font-semibold font-poppin"
      >
        Highest Points
      </h1>
      <div class=""></div>
    </div> -->
  </div>
</template>
<script>
import LayoutCard from "./LayoutCard.vue";
import Login from "./Login.vue";
export default {
  components: {
    LayoutCard,
    Login,
  },
  data() {
    return {
      list: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          category: "Environment",
          color: "text-yellow-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
      ],
      points: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          title: "admin",
          caption: "12 points",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          title: "admin",
          caption: "12 points",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "admin",
          caption: "12 points",
        },
      ],
    };
  },
};
</script>
<style scoped>
.category_color:hover {
  background-position: left bottom;
}
.color_purple {
  background: linear-gradient(to right, #ca85ca 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.color_pink {
  background: linear-gradient(to right, #e54e7e 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.color_green {
  background: linear-gradient(to right, #61c436 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.color_primary {
  background: linear-gradient(to right, #da463a 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.color_green {
  background: linear-gradient(to right, #46c49c 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.color_blue {
  background: linear-gradient(to right, #607ec7 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
</style>
