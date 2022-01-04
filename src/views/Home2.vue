<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex justify-between pt-8 flex-wrap">
      <div class="lg:w-9/12 lg:pr-8 w-full space-y-6">
        <LayoutCard
          :list="listA"
          title="LAYOUT A"
          mainClass="border-purple-100"
          gridClass=""
          imgClass="md:h-120 h-48"
          titleClass="md:text-3xl text-lg md:leading-wide md:w-3/4 md:pb-2"
          captionClass="text-gray-900 mb-2"
          descClass="md:text-base text-sm md:w-4/5 pb-3"
        />
        <LayoutCard
          :list="listB"
          title="LAYOUT B"
          mainClass="border-pink-100"
          gridClass="md:p-5 p-3 md:gap-5 gap-3"
          textMainClass="py-4 lg:pr-8 lg:pl-0 text-center md:text-left px-6"
          cardMainClass="grid md:grid-cols-2 grid-cols-1 md:gap-5"
          imgClass="md:h-48 h-42"
          titleClass="mg:text-2xl text-base font-semibold"
          captionClass="text-gray-900 md:mb-2"
        />
        <LayoutCard
          :list="listC"
          title="LAYOUT C"
          mainClass="border-green-100"
        />
        <LayoutCard
          :list="listD"
          title="LAYOUT D"
          mainClass="border-yellow-100"
          gridClass="md:p-5 p-3 md:gap-5 gap-3 md:grid-cols-2 grid-cols-1"
          textMainClass="pt-1 border w-full"
          cardMainClass="flex items-start space-x-3 md:pr-5 md:h-24 h-20"
          imgClass="h-full md:w-72 w-46"
          titleClass="md:text-sm text-xs md:leading-5 h-16 overflow-hidden"
        />
        <LayoutCard
          :list="listE"
          title="LAYOUT E"
          mainClass="border-green-50"
          gridClass="md:p-5 p-3 md:gap-5 gap-3 lg:grid-cols-5 grid-cols-2 md:grid-cols-4"
          textMainClass="pt-1 border w-full"
          imgClass="h-24 w-full"
          titleClass="text-xs px-4 text-center"
        />
        <LayoutCard
          title="LAYOUT F"
          :list="list"
          gridClass="hidden"
          listMainClass=""
        />
        <LayoutCard
          :list="listG"
          title="LAYOUT G"
          mainClass="border-blue-100"
          gridClass="grid grid-cols-1"
          textMainClass="absolute bottom-0 left-0 bg-dark-60 w-full z-20 items-center text-center p-2 pt-5"
          cardMainClass="relative"
          titleClass="text-white font-medium tracking-wide text-2xl font-poppin hover:text-white"
          captionClass="text-white"
          imgClass="h-110 w-full"
        />
        <LayoutCard
          :list="listH"
          title="LAYOUT H"
          mainClass="border-primary"
          gridClass="grid grid-cols-2 p-3 md:p-5 gap-3 md:gap-5"
          textMainClass="absolute top-0 left-0 h-full bg-dark-60 w-full z-20 flex justify-center cursor-pointer items-center text-center p-2 pt-5"
          cardMainClass="relative"
          titleClass="text-white font-medium text-xl md:w-3/4 px-4 tracking-wide pt-1.5 font-poppin hover:text-white"
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
          textMainClass="absolute bottom-0 left-0 bg-dark-60 w-full z-20 items-center text-center p-2 pt-5"
          cardMainClass="relative"
          titleClass="text-white font-medium tracking-wide text-2xl font-poppin hover:text-white"
          captionClass="text-white"
          imgClass="h-110 w-full"
        />
      </div>
      <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
        <Asside />
      </div>
    </div>
    <img
      class="mx-auto my-8"
      alt="banner"
      src="../assets/voice_banner_dark.png"
    />
  </div>
</template>

<script>
import Asside from "../components/asside.vue";
import LayoutCard from "../components/LayoutCard.vue";
export default {
  name: "Home",
  components: { Asside, LayoutCard },
  data() {
    return {
      listA: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-1536x1067.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "San Francisco is the Most Photographed City in North America",
          caption: "1 week ago 1 Commentby Patrick Callahan",
          desc: "Trust fund Tumblr fixie, hoodie flannel dreamcatcher lomo hella jean shorts. Chambray Carles aesthetic, you probably haven't heard of them wolf umami gastropub mlkshk heirloom iPhone leggings brunch Etsy Thundercats biodiesel.",
        },
      ],
      listB: [
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
      listC: [
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
      listD: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Success Is a Choice – What Are You Going to Do?",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Success Is a Choice – What Are You Going to Do?",
        },
      ],
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
      listE: [
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
      list: [
        { title: "Seeing Beyond The Fog" },
        { title: "The Importance of Hairstyles in Fashion" },
        { title: "The Features of the Best Ergonomic Keyboard" },
        { title: "What Is the Definition of an Entrepreneur Lifestyle?" },
        { title: "Tips for Hiring a Food Photographer" },
        { title: "Video Post with Built-in Video Player" },
        { title: "Success Is a Choice – What Are You Going to Do?" },
        { title: "Making a Commitment to Environmental Sustainability" },
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
