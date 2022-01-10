<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-6">
      <LayoutA />
      <LayoutB />
      <LayoutC />
      <LayoutD />
      <LayoutE />
      <LayoutF />
      <LayoutCard
        :list="listG"
        title="LAYOUT G"
        mainClass="border-blue-100"
        gridClass="grid grid-cols-1 p-3 md:p-0"
        textMainClass="absolute bottom-0 left-0 bg-dark-60 w-full z-20 items-center text-center p-2 pt-5"
        cardMainClass="bg-white dark:bg-dark-200 relative"
        titleClass="text-white font-medium tracking-wide md:text-2xl text-lg pb-2 md:pb-0 pt-1 font-poppin hover:text-white"
        captionClass="text-white hidden md:flex"
        imgClass="md:h-110 h-64 w-full"
      />
      <LayoutCard
        :list="listH"
        title="LAYOUT H"
        mainClass="border-primary"
        gridClass="grid md:grid-cols-2 grid-cols-1 p-3 md:p-5 gap-3 md:gap-5"
        textMainClass="absolute top-0 left-0 h-full bg-dark-60 w-full z-20 flex justify-center cursor-pointer items-center text-center p-2 pt-5"
        cardMainClass="bg-white dark:bg-dark-200 relative"
        titleClass="text-white font-medium md:text-xl text-lg w-3/4 md:px-4 px-2 tracking-wide pt-1.5 font-poppin hover:text-white"
        imgClass="h-64 w-full"
      />
      <LayoutCard
        :list="Coulumn_2"
        title="CATEGORIES MODULE - 2 COLUMNS"
        mainClass="border-primary"
        textMainClass="items-center text-center p-2 lg:px-8"
      />
      <LayoutCard
        :list="Coulumn_1"
        title="CATEGORIES MODULE - 1 COLUMN"
        mainClass="border-primary"
        gridClass="grid grid-cols-1 p-3 md:p-5 gap-3 md:gap-5"
        textMainClass="absolute bottom-0 left-0 bg-dark-60 w-full z-20 items-center text-center p-2 md:pt-5 pt-3"
        cardMainClass="bg-white dark:bg-dark-200 relative"
        titleClass="text-white font-medium tracking-wide md:text-2xl text-lg font-poppin hover:text-white"
        captionClass="text-white"
        imgClass="md:h-110 h-56 w-full"
      />
    </div>
    <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
      <Asside />
    </div>
  </div>
</template>

<script>
import Asside from "../components/asside.vue";
import LayoutCard from "../components/LayoutCard.vue";
import LayoutA from "../components/LayoutA.vue";
import LayoutB from "../components/LayoutB.vue";
import LayoutC from "../components/LayoutC.vue";
import LayoutD from "../components/LayoutD.vue";
import LayoutE from "../components/LayoutE.vue";
import LayoutF from "../components/LayoutF.vue";
export default {
  name: "Home",
  components: {
    Asside,
    LayoutCard,
    LayoutA,
    LayoutB,
    LayoutC,
    LayoutD,
    LayoutE,
    LayoutF,
  },
  data() {
    return {
      Coulumn_2: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          title: "Lifestyle",
          caption: "9 articles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          title: "Food",
          caption: "9 articles",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "Music",
          caption: "9 articles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          title: "Fashion",
          caption: "9 articles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "Environment",
          caption: "9 articles",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          title: "Technology",
          caption: "9 articles",
        },
      ],
      Coulumn_1: [
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
      listG: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2016/07/vlog016.jpg.webp",
          title: "Twitter Embed Example",
          category: "Technology",
          caption: "1 week ago Add Commentby Patrick Callahan",
          color:
            "bg-blue-100 text-white px-2 rounded py-0.5 hover:no-underline hover:bg-opacity-80 transform transition-all",
        },
      ],
      listH: [
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
