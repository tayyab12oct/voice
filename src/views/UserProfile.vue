<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-7">
      <div
        class="bg-light-900 dark:bg-dark-500 shadow border border-transparent dark:border-dark-20"
      >
        <h1
          class="bg-white dark:bg-dark-200 p-3 py-3 shadow text-center uppercase text-dark-600 dark:text-white font-semibold font-poppin border-b border-transparent dark:border-dark-20"
        >
          About admin
        </h1>
        <div class="w-full md:p-5 p-4 space-y-8">
          <div class="w-full flex items-center">
            <div class="h-22 w-32 flex items-center">
              <img
                src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp"
                alt=""
                class="md:h-20 md:w-20 h-16 w-16 rounded-full"
              />
            </div>
            <div class="w-full space-y-2">
              <p
                class="flex items-center font-sans font-light md:text-sm text-xs text-gray-400 dark:text-gray-200"
              >
                <PlusSmIcon class="w-4 mr-1 md:mr-2" /> Registerd : Jan 10, 2014
              </p>
              <p
                class="flex items-center font-sans font-light md:text-sm text-xs text-gray-400 dark:text-gray-200"
              >
                <LocationMarkerIcon class="md:w-4 w-3 mr-2" /> Country : Egypt
              </p>
              <p
                class="flex items-center font-sans font-light md:text-sm text-xs text-gray-400 dark:text-gray-200"
              >
                <GlobeIcon class="md:w-4 w-3 mr-2" />Website :
                <router-link to="/" class="text-primary hover:underline ml-0.5">
                  view</router-link
                >
              </p>
            </div>
          </div>
          <p
            class="text-gray-400 dark:text-gray-200 font-sans text-sm leading-6 font-light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat. Vivamus vulputate posuere
            nisl quis consequat. Donec congue commodo mi, sed commodo velit
            fringilla ac. Fusce placerat venenatis mi. Pellentesque habitant
            morbi tristique senectus et netus et malesuada.
          </p>
          <div class="flex items-center space-x-3 pt-3">
            <p
              class="flex items-center font-sans font-light text-sm text-gray-400 dark:text-gray-200"
            >
              Follow Me
            </p>
            <div
              class="flex items-center justify-center cursor-pointer h-7 w-7 bg-primary text-white"
            >
              <PlusSmIcon class="w-4" />
            </div>
            <div
              class="flex items-center justify-center cursor-pointer h-7 w-7 bg-primary text-white"
            >
              <PlusSmIcon class="w-4" />
            </div>
            <div
              class="flex items-center justify-center cursor-pointer h-7 w-7 bg-primary text-white"
            >
              <PlusSmIcon class="w-4" />
            </div>
            <div
              class="flex items-center justify-center cursor-pointer h-7 w-7 bg-primary text-white"
            >
              <PlusSmIcon class="w-4" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-4 bg-light-900 dark:bg-dark-500 shadow border border-transparent dark:border-dark-20"
      >
        <table
          class="w-full border border-light-300 dark:border-dark-20 divide-y divide-light-500 dark:divide-dark-20"
        >
          <thead class="bg-light-800 dark:bg-dark-20">
            <tr
              class="font-sans font-light text-sm text-center divide-x divide-light-500 dark:divide-dark-20"
            >
              <th class="py-2.5 dark:text-primary">#</th>
              <th class="py-2.5 text-primary">Today</th>
              <th class="py-2.5 text-primary">Month</th>
              <th class="py-2.5 text-primary">Total</th>
            </tr>
          </thead>
          <tbody
            class="bg-light-400 divide-y divide-light-500 dark:divide-dark-20"
          >
            <tr
              class="bg-light-400 dark:bg-dark-800 text-center text-sm font-sans divide-x divide-light-500 dark:divide-dark-20"
            >
              <td class="py-2.5 dark:text-gray-200">Questions</td>
              <td class="py-2.5 dark:text-gray-200">5</td>
              <td class="py-2.5 dark:text-gray-200">20</td>
              <td class="py-2.5 dark:text-gray-200">100</td>
            </tr>
            <tr
              class="bg-light-400 dark:bg-dark-800 text-center text-sm font-sans divide-x divide-light-500 dark:divide-dark-20"
            >
              <td class="py-2.5 dark:text-gray-200">Answers</td>
              <td class="py-2.5 dark:text-gray-200">5</td>
              <td class="py-2.5 dark:text-gray-200">20</td>
              <td class="py-2.5 dark:text-gray-200">100</td>
            </tr>
            <tr
              class="bg-light-400 dark:bg-dark-800 text-center text-sm font-sans divide-x divide-light-500 dark:divide-dark-20"
            >
              <td class="py-2.5 dark:text-gray-200">Visitors</td>
              <td class="py-2.5 dark:text-gray-200">5</td>
              <td class="py-2.5 dark:text-gray-200">20</td>
              <td class="py-2.5 dark:text-gray-200">100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="bg-light-900 dark:bg-dark-500 shadow border border-transparent dark:border-dark-20 divide-y divide-light-500 dark:divide-dark-20"
      >
        <div class="py-5 px-5" v-for="n in 4" :key="n">
          <div class="flex items-center justify-between">
            <router-link
              to=""
              class="hover:text-primary dark:text-white font-semibold text-xl font-sans transform transition-all cursor-pointer"
            >
              This is my first Question
            </router-link>
            <div
              class="flex items-center bg-primary text-xs px-2 py-1 rounded-xs cursor-pointer text-white dark:text-gray-200 hover:text-white transition-all"
            >
              <PencilAltIcon class="w-3.5 mr-1" /> Edit
            </div>
          </div>
          <div
            class="flex flex-wrap text-sm pt-4 font-light font-sans text-gray-400 dark:text-gray-200"
          >
            <p class="pr-4 text-primary font-semibold flex items-center">
              <CheckIcon class="w-4 mr-1" /> in progress
            </p>
            <p class="pr-4 text-yellow-200 flex items-center">
              <StarIcon class="w-4 mr-1" /> 5
            </p>
            <router-link
              to=""
              class="pr-4 hover:text-primary transition-all flex items-center"
              ><FolderIcon class="w-4 mr-1" /> wordpress</router-link
            >
            <p class="pr-4 text flex items-center">
              <ClockIcon class="w-4 mr-1" /> 15 secs ago
            </p>
            <router-link
              to=""
              class="pr-4 hover:text-primary transition-all flex items-center"
              ><ChatIcon class="w-4 mr-1" /> 5 Answers</router-link
            >
            <router-link
              to=""
              class="pr-4 hover:text-primary transition-all flex items-center"
              ><ReplyIcon class="w-4 mr-1" /> Reply</router-link
            >
            <p class="pr-4 text flex items-center">
              <UserIcon class="w-4 mr-1" /> 5 views
            </p>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
    <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
      <Asside />
    </div>
  </div>
</template>
<script>
import Asside from "../components/asside.vue";
import Pagination from "../components/Pagination.vue";
import {
  PlusSmIcon,
  LocationMarkerIcon,
  GlobeIcon,
  CheckIcon,
  StarIcon,
  FolderIcon,
  ChatIcon,
  UserIcon,
  ReplyIcon,
  PencilAltIcon,
} from "@heroicons/vue/solid";
import { ClockIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Asside,
    PlusSmIcon,
    LocationMarkerIcon,
    GlobeIcon,
    CheckIcon,
    Pagination,
    StarIcon,
    FolderIcon,
    ClockIcon,
    ChatIcon,
    UserIcon,
    ReplyIcon,
    PencilAltIcon,
  },
  data() {
    return {};
  },
};
</script>
