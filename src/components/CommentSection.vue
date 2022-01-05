<template>
  <div :class="mainClass">
    <div class="border-b border-dark-50 py-4 md:py-5">
      <div class="flex items-center space-x-4">
        <img
          class="w-18 h-18 border-4 border-white shadow rounded-full"
          src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/meks_1-128x128.jpg.webp"
          alt=""
        />
        <div>
          <a
            href="https://mekshq.com/"
            target="_blank"
            class="text-primary block font-semibold text-base cursor-pointer"
          >
            Lisa Scholfield
          </a>
          <a
            href="#"
            class="text-gray-900 block font-light text-sm hover:underline md:py-1 pb-2 cursor-pointer"
          >
            November 30, 2014 at 1:06 am
          </a>
        </div>
      </div>
      <!-- <img
          class="w-28 h-28 border-4 border-white shadow rounded-full"
          src="https://demo.mekshq.com/voice/wp-content/litespeed/avatar/74b5d55bca527a09bce6a2184e47a11b.jpg"
          alt=""
        /> -->
      <div class="lg:pl-22">
        <p class="text-gray-400 font-light md:text-base text-sm md:pb-6 pb-3">
          I couldn’t agree more with you Patrick! Thanks for sharing this
          brilliant article!
        </p>
        <button
          @click="reply = true"
          class="hover:bg-primary border border-primary rounded text-xs hover:text-white text-primary font-sans font-light px-3 py-0.5 transition-all"
        >
          Reply
        </button>
      </div>
    </div>
    <transition name="fade">
      <div class="py-4" v-if="reply === true">
        <LeaveComment
          title="Reply to Lisa Scholfield"
          icon="flex"
          @click="reply = false"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import LeaveComment from "./LeaveComment.vue";
export default {
  props: {
    mainClass: String,
  },
  components: {
    LeaveComment,
  },
  data() {
    return {
      reply: false,
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
