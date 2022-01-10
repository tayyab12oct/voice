<template>
  <div
    class="bg-light-900 dark:bg-dark-500 shadow border dark:border-dark-800 border-transparent"
  >
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center text-dark-600 dark:text-white font-semibold font-poppin"
    >
      13 COMMENTS
    </h1>
    <div class="md:p-5 p-3 space-y-5">
      <div class="bg-white dark:bg-dark-200 md:px-5 px-4">
        <CommentSection :show="show" :onClick="showChild" showClass="" />
        <transition name="fade">
          <div v-if="show === true">
            <CommentSection class="lg:ml-20" />
            <CommentSection class="lg:ml-40" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import CommentSection from "./CommentSection.vue";
export default {
  components: { CommentSection },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showChild() {
      this.show = !this.show;
    },
  },
};
</script>
