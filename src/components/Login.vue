<template>
  <div class="bg-light-900 dark:bg-dark-500 shadow">
    <h1
      class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin"
    >
      Login
    </h1>
    <div class="w-full p-5 space-y-4">
      <div
        class="flex items-center border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 w-full sm:text-sm font-semibold border-dark-10 rounded pl-2 py-0 overflow-hidden"
      >
        <UserIcon class="w-6 mr-2 text-primary" />
        <input
          name="user_name"
          id="name"
          placeholder="Username"
          class="bg-transparent block w-full p-2 pl-0 dark:placeholder-gray-200 focus:outline-none"
        />
      </div>
      <div
        class="flex items-center relative border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 w-full sm:text-sm font-semibold border-dark-10 rounded pl-2 py-0 overflow-hidden"
      >
        <LockClosedIcon class="w-6 mr-2 text-primary" />
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          class="bg-transparent block w-full p-2 pl-0 dark:placeholder-gray-200 focus:outline-none"
        />
        <router-link
          to="/login"
          class="bg-dark-500 absolute right-2 top-0 transform translate-y-1/4 text-center rounded-sm text-xs text-white font-sans px-3 py-1 font-light"
        >
          Forget
        </router-link>
      </div>
      <div class="flex items-start">
        <div class="pt-0.5">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
          />
        </div>
        <div class="ml-2">
          <label
            for="remember"
            class="font-sans font-light text-sm text-gray-400 dark:text-gray-200 cursor-pointer"
            >Remember Me</label
          >
        </div>
      </div>
      <router-link
        to="/"
        class="bg-primary block text-center w-full rounded-sm text-sm text-white font-sans px-6 py-2 font-semibold"
      >
        Login
      </router-link>
    </div>
  </div>
</template>
<script>
import { UserIcon, LockClosedIcon } from "@heroicons/vue/solid";
export default {
  components: { UserIcon, LockClosedIcon },
  props: {},
  data() {
    return {};
  },
};
</script>
