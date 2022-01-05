<template>
  <div class="bg-light-900 dark:bg-dark-500 shadow">
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin"
    >
      Register Now
    </h1>
    <div class="w-full p-5 space-y-4">
      <div>
        <label
          for="name"
          class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
          >Username <span class="text-primary">*</span></label
        >
        <div class="mt-1.5">
          <input
            name="user_name"
            type="text"
            id="name"
            class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label
          for="email"
          class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
          >E-Mail <span class="text-primary">*</span></label
        >
        <div class="mt-1.5">
          <input
            name="email"
            type="email"
            id="email"
            class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label
          for="password"
          class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
          >Password <span class="text-primary">*</span></label
        >
        <div class="mt-1.5">
          <input
            name="password"
            type="password"
            id="password"
            class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label
          for="password"
          class="block font-sans font-light md:text-base text-md text-gray-400 dark:text-gray-200"
          >Confirm Password <span class="text-primary">*</span></label
        >
        <div class="mt-1.5">
          <input
            name="password"
            type="password"
            id="password"
            class="border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded p-2 focus:outline-none"
          />
        </div>
      </div>
      <div class="flex items-start">
        <div class="pt-0.5">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
          />
        </div>
        <div class="ml-2">
          <label
            for="terms"
            class="font-sans font-light text-sm text-gray-400 dark:text-gray-200 cursor-pointer"
            >By registering, you agree to the
            <router-link to="/" class="text-primary hover:underline"
              >Terms of Service</router-link
            >
            and
            <router-link to="/" class="text-primary hover:underline"
              >Privacy Policy</router-link
            >.</label
          >
        </div>
      </div>
      <router-link
        to="/login"
        class="bg-primary block text-center w-full rounded-sm text-sm text-white font-sans px-6 py-2 font-semibold"
      >
        Signup
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>
