<template>
  <div
    :class="mainClass"
    class="border dark:border-dark-800 border-transparent"
  >
    <div class="pt-4 md:pt-5">
      <div class="flex items-center space-x-4">
        <img
          class="w-16 h-16 border-4 border-white shadow rounded-full"
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
      <div class="lg:ml-20 pt-2 lg:pt-0">
        <div class="border-b border-dark-50 pb-4 md:pb-5">
          <p
            class="text-gray-400 dark:text-gray-200 font-light md:text-base text-sm md:pb-6 pb-3"
          >
            I couldn’t agree more with you Patrick! Thanks for sharing this
            brilliant article!
          </p>
          <div class="flex justify-between items-center">
            <button
              @click="reply = true"
              class="hover:bg-primary border border-primary rounded text-xs hover:text-white text-primary font-sans font-light px-3 py-0.5 transition-all"
            >
              Reply
            </button>
            <button
              @click="onClick"
              :class="showClass"
              class="text-xs text-primary font-sans font-light px-3 py-0.5 transition-all"
            >
              <ChevronDownIcon class="w-4" v-if="show !== true" />
              <ChevronUpIcon class="w-4" v-else />
            </button>
          </div>
        </div>
        <transition name="fade">
          <div class="py-4" v-if="reply === true">
            <LeaveComment
              titleClass="dark:bg-dark-800"
              title="Reply to Lisa Scholfield"
              icon="flex"
              :click="onHandle"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import LeaveComment from "./LeaveComment.vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/outline";
export default {
  props: {
    mainClass: String,
    onClick: String,
    show: String,
    showClass: { type: String, default: "hidden" },
  },
  components: {
    LeaveComment,
    ChevronDownIcon,
    ChevronUpIcon,
  },
  data() {
    return {
      reply: false,
      childReply: false,
    };
  },
  methods: {
    onHandle() {
      this.reply = !this.reply;
    },
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
