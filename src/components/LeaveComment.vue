<template>
  <div
    class="bg-light-900 dark:bg-dark-500 shadow border dark:border-dark-800 border-transparent"
  >
    <div class="relative">
      <h1
        :class="titleClass"
        class="bg-white p-3 py-3 shadow text-center text-dark-600 dark:text-white font-semibold font-poppin w-full"
      >
        {{ title }}
      </h1>
      <div
        :class="icon"
        @click="click"
        class="absolute right-0 top-2.5 px-3.5 text-primary cursor-pointer border-l-2 border-dark-50"
      >
        x
      </div>
    </div>
    <div class="p-5">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div class="md:col-span-3">
          <label
            for="comment"
            class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
            >Comment</label
          >
          <div class="mt-1.5">
            <textarea
              rows="5"
              name="comment"
              id="comment"
              class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            for="name"
            class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
            >Name <span class="text-primary">*</span></label
          >
          <div class="mt-1.5">
            <input
              name="name"
              id="name"
              class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
            >Email <span class="text-primary">*</span></label
          >
          <div class="mt-1.5">
            <input
              name="email"
              id="email"
              class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            for="url"
            class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
            >Website</label
          >
          <div class="mt-1.5">
            <input
              name="url"
              id="url"
              class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div class="flex md:items-center items-start my-8">
        <div class="pt-1">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
          />
        </div>
        <div class="ml-2">
          <label
            for="comments"
            class="font-sans font-light text-md text-gray-400 dark:text-gray-200 cursor-pointer"
            >Save my name, email, and website in this browser for the next time
            I comment.</label
          >
        </div>
      </div>
      <router-link
        to=""
        class="bg-primary rounded text-sm text-white font-sans font-light px-6 py-1.5"
      >
        Post Comment
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    titleClass: {
      type: String,
      default: "dark:bg-dark-200",
    },
    title: {
      type: String,
      default: "Leave a Comment",
    },
    icon: {
      type: String,
      default: "hidden",
    },
    click: {
      type: String,
    },
  },
};
</script>
