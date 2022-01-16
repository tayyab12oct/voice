<template>
  <div class="border dark:border-dark-800 border-transparent shadow">
    <div class="border-primary border-t-2 bg-light-900 dark:bg-dark-500">
      <h1
        class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
      >
        LAYOUT F
      </h1>
      <div>
        <ul
          class="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-x-16 p-5 px-10 md:px-14 list-disc"
        >
          <li
            v-for="v in list"
            :key="v"
            class="text-sm font-poppin text-primary font-semibold"
          >
            <router-link
              to="/blog"
              class="text-dark-600 dark:text-white hover:text-primary"
            >
              {{ v.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
