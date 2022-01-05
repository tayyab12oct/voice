<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-7">
      <div
        class="bg-light-900 dark:bg-dark-500 shadow border border-transparent dark:border-dark-20"
      >
        <h1
          class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
        >
          Ask Question
        </h1>
        <div class="w-full md:p-5 p-4 space-y-8">
          <p
            class="text-gray-400 dark:text-gray-200 font-sans text-sm font-light"
          >
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque.
          </p>
          <div class="grid md:grid-cols-12 grid-cols-1 items-start w-full">
            <label
              class="md:col-span-3 pt-2 font-sans font-normal md:text-base text-sm text-gray-400 dark:text-gray-200"
              >Question Title <span class="text-primary">*</span></label
            >
            <div class="w-full md:col-span-9 pt-3 md:pt-0">
              <input
                type="text"
                class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
              <p
                class="text-gray-400 dark:text-gray-200 font-sans text-xs font-light pt-1.5"
              >
                Please choose an appropriate title for the question to answer it
                even easier.
              </p>
            </div>
          </div>
          <div class="grid md:grid-cols-12 grid-cols-1 items-start w-full">
            <label
              class="md:col-span-3 pt-2 font-sans font-normal md:text-base text-sm text-gray-400 dark:text-gray-200"
              >Tag
            </label>
            <div class="w-full md:col-span-9 pt-3 md:pt-0">
              <input
                type="text"
                class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
              <p
                class="text-gray-400 dark:text-gray-200 font-sans text-xs font-light pt-1.5"
              >
                Please choose suitable Keywords Ex : post.
              </p>
            </div>
          </div>
          <div class="grid md:grid-cols-12 grid-cols-1 items-start w-full">
            <label
              class="md:col-span-3 pt-2 font-sans font-normal md:text-base text-sm text-gray-400 dark:text-gray-200"
              >Category <span class="text-primary">*</span></label
            >
            <div class="w-full md:col-span-9 pt-3 md:pt-0 relative">
              <input id="file" type="file" class="hidden" />
              <select
                id="location"
                name="location"
                class="border bg-transparent text-sm cursor-pointer text-gray-200 dark:bg-dark-300 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-2 md:px-3 focus:outline-none"
              >
                <option selected="">Select a Category</option>
                <option>Mexico</option>
              </select>
              <div
                class="bg-primary absolute right-1 top-0 transform md:translate-y-1/4 translate-y-4 cursor-pointer rounded-sm text-white h-7 w-7 flex items-center justify-center"
              >
                <ChevronDownIcon class="w-3.5" />
              </div>
              <p
                class="text-gray-400 dark:text-gray-200 font-sans text-xs font-light pt-1.5"
              >
                Please choose the appropriate section so easily search for your
                question.
              </p>
            </div>
          </div>
          <div class="grid md:grid-cols-12 grid-cols-1 items-start w-full">
            <label
              class="md:col-span-3 pt-2 font-sans font-normal md:text-base text-sm text-gray-400 dark:text-gray-200"
              >Attachment</label
            >
            <div class="w-full md:col-span-9 pt-3 md:pt-0 relative">
              <input id="file" type="file" class="hidden" />
              <label
                for="file"
                class="border bg-transparent text-sm cursor-pointer text-primary dark:bg-dark-300 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              >
                Select File
                <div
                  class="bg-primary text-xs absolute right-1 top-0 transform md:translate-y-1/4 translate-y-4 cursor-pointer rounded-sm text-white h-7 px-2 flex items-center justify-center"
                >
                  Browse
                  <!-- <ChevronDownIcon class="w-3.5" /> -->
                </div>
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-12 grid-cols-1 items-start w-full">
            <label
              class="md:col-span-3 pt-2 font-sans font-normal md:text-base text-sm text-gray-400 dark:text-gray-200"
              >Details <span class="text-primary">*</span></label
            >
            <div class="w-full md:col-span-9 pt-3 md:pt-0">
              <textarea
                rows="7"
                name="details"
                id="details"
                class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
              <p
                class="text-gray-400 dark:text-gray-200 font-sans text-xs font-light pt-1.5"
              >
                Type the description thoroughly and in detail.
              </p>
            </div>
          </div>
          <router-link
            to="/login"
            class="bg-primary block text-center w-full rounded-sm text-sm text-white font-sans px-6 py-2 font-semibold"
          >
            Publish Your Post
          </router-link>
        </div>
      </div>
    </div>
    <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
      <Asside />
    </div>
  </div>
</template>
<script>
import Asside from "../components/asside.vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Asside,
    ChevronDownIcon,
  },
  data() {
    return {};
  },
};
</script>
