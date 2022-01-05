<template>
  <div class="bg-light-900 dark:bg-dark-500 shadow">
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center text-dark-600 dark:text-white font-semibold font-poppin"
    >
      13 COMMENTS
    </h1>
    <div class="md:p-5 p-3 space-y-5">
      <div class="bg-white dark:bg-dark-200 shadow md:px-5 px-4">
        <CommentSection />
        <CommentSection mainClass="lg:ml-4" />
        <CommentSection mainClass="lg:ml-8" />
      </div>
    </div>
  </div>
</template>
<script>
import CommentSection from "./CommentSection.vue";
export default {
  components: { CommentSection },
};
</script>
