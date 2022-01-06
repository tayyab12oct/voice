<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-7">
      <div
        class="bg-light-900 dark:bg-dark-500 shadow border border-transparent dark:border-dark-20"
      >
        <h1
          class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
        >
          Edit Profile
        </h1>
        <div class="w-full md:p-5 p-4 space-y-8">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >First Name
              </label>
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Last Name
              </label>
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >E-Mail <span class="text-primary">*</span>
              </label>
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Website</label
              >
              <input
                type="url"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Password <span class="text-primary">*</span>
              </label>
              <input
                type="password"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Confirm Password <span class="text-primary">*</span>
              </label>
              <input
                type="password"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Country</label
              >
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full md:col-span-2 flex items-center">
              <div class="h-22 w-32 flex items-center">
                <img
                  src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp"
                  alt=""
                  class="md:h-20 md:w-20 h-16 w-16 rounded-full"
                />
              </div>
              <div class="w-full">
                <label
                  class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                  >Profile Picture</label
                >
                <input id="file" type="file" class="hidden" />
                <label
                  for="file"
                  class="mt-1 relative border bg-transparent text-sm cursor-pointer text-primary dark:bg-dark-300 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
                >
                  Select File
                  <div
                    class="bg-primary text-xs absolute right-1 top-1 md:top-1.5 transform cursor-pointer rounded-sm text-white h-7 px-2 flex items-center justify-center"
                  >
                    Browse
                  </div>
                </label>
              </div>
            </div>
            <div class="w-full md:col-span-2">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >About Yourself</label
              >
              <textarea
                rows="8"
                name="details"
                id="details"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Facebook</label
              >
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Twitter</label
              >
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Linkedin</label
              >
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label
                class="font-sans font-normal md:text-md text-sm text-gray-400 dark:text-gray-200"
                >Google plus</label
              >
              <input
                type="text"
                class="mt-1 border bg-transparent dark:bg-dark-300 dark:text-gray-200 focus:border-dark-20 block w-full sm:text-sm border-dark-10 rounded md:p-2.5 p-2 px-3 md:px-4 focus:outline-none"
              />
            </div>
          </div>
          <router-link
            to="/login"
            class="bg-primary block text-center w-full rounded-sm text-sm text-white font-sans px-6 py-2 font-semibold"
          >
            Update
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
// import { ChevronDownIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Asside,
  },
  data() {
    return {};
  },
};
</script>
