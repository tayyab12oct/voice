<template>
  <div class="flex md:justify-end justify-center">
    <nav class="flex items-center space-x-1.5" aria-label="Pagination">
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        1
      </a>
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        2
      </a>
      <span
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        ...
      </span>
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        9
      </a>
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        10
      </a>
      <a
        href="#"
        class="flex items-center justify-center p-2 w-9 h-9 bg-light-900 dark:bg-dark-800 text-sm font-medium text-gray-500 dark:text-white hover:bg-primary rounded-sm hover:text-white transform transition-all focus:bg-primary focus:text-white shadow"
      >
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </a>
    </nav>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
};
</script>
