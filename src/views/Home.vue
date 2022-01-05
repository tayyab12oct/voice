<template>
  <div>
    <div class="flex justify-between flex-wrap">
      <div class="lg:w-9/12 lg:pr-8 w-full">
        <LayoutCard :list="list" buttonMainClass="" />
      </div>
      <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
        <Asside />
      </div>
    </div>
    <img
      class="mx-auto mt-8"
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
      list: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
          icon: true,
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_29-380x260.jpg.webp",
          category: "Environment",
          color: "text-purple-100",
          title: "Solar Energy for Mother Earth and Everyday Smiles",
          caption: "1 week ago",
          desc: "This is an example of audio post format. It supports all embedded audio URLs as well as self-hosted...",
        },
      ],
    };
  },
};
</script>
