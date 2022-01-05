<template>
  <div class="bg-dark-900 shadow">
    <h1
      class="bg-white p-3 py-3 shadow text-center text-dark-600 font-semibold font-poppin"
    >
      13 COMMENTS
    </h1>
    <div class="md:p-5 p-3 space-y-5">
      <div class="bg-white shadow md:px-5 px-4">
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
