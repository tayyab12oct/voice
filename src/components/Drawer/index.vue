<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog
      as="div"
      class="absolute w-full inset-0 flex md:hidden bg-light-gray"
      style="z-index: 1000 !important"
    >
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex flex-col px-7 w-96 drawer"
          style="background: #1d1f24"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leavea="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 pt-2"></div>
          </TransitionChild>
          <div
            class="flex items-center justify-between h-32 flex-shrink-0 px-3"
          >
            <div class="w-40">
              <img alt="" src="@/assets/logo.png" />
            </div>
            <button class="focus:outline-none" @click="close">
              <span class="sr-only">Open sidebar</span>
              <XIcon class="h-9 w-9 text-primary" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto w-full">
            <nav class="flex-1 py-4 w-full">
              <template v-for="item in navigation" :key="item.name">
                <Disclosure as="div" class="space-y-0.5">
                  <DisclosureButton
                    :class="[
                      item.current
                        ? 'bg-black-100 text-white'
                        : 'text-white hover:text-white',
                      'group flex items-center w-full py-0.5 text-2xl cursor-pointer font-semibold tracking-wide transition-all',
                    ]"
                  >
                    <router-link
                      :to="item.to"
                      v-if="!item.children"
                      class="text-gray-300 w-full rounded bg-info p-5"
                    >
                      <div class="w-full" @click="close">
                        <span class="w-full pl-2 text-left flex items-center">
                          {{ item.name }}
                          <component
                            :is="item.iconR"
                            :class="[
                              item.current
                                ? 'text-gray-100 rotate-180'
                                : 'text-gray-100 group-hover:text-gray-100',
                              'ml-auto h-7',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </router-link>
                    <div
                      class="text-gray-300 w-full rounded bg-info p-5"
                      v-if="item.children"
                    >
                      <div class="w-full">
                        <span class="w-full pl-2 text-left flex items-center">
                          {{ item.name }}
                          <component
                            :is="item.iconR"
                            :class="[
                              item.current
                                ? 'text-gray-100 rotate-180'
                                : 'text-gray-100 group-hover:text-gray-100',
                              'ml-auto h-7',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    class="space-y-0.5 pb-3 transition-all"
                    v-if="item.children"
                  >
                    <router-link
                      v-for="subItem in item.children"
                      :key="subItem.name"
                      :to="subItem.to"
                      @click="close"
                      class="group w-full flex px-7 py-5 text-xl rounded text-white font-semibold tracking-wide"
                    >
                      {{ subItem.name }}
                    </router-link>
                  </DisclosurePanel>
                </Disclosure>
              </template>
            </nav>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  TransitionChild,
  TransitionRoot,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  UserIcon,
  MenuAlt2Icon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  XIcon,
  ChipIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

const navigation = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/ask-question",
    name: "Ask Question",
  },
  {
    to: "#Questions",
    name: "Questions",
    iconR: ChevronDownIcon,
    current: true,
    children: [
      {
        to: "/question-category",
        name: "Questions Category",
      },
      {
        to: "/single_question",
        name: "Question Single",
      },
    ],
  },
  {
    to: "#",
    name: "User",
    iconR: ChevronDownIcon,
    children: [
      {
        to: "/user_profile",
        name: "User Profile",
      },
      {
        to: "/user_questions",
        name: "User Questions",
      },
      {
        to: "/user_answers",
        name: "User Answers",
      },
      {
        to: "/user_favorite_questions",
        name: "User Favorite Questions",
      },
      {
        to: "/user_points",
        name: "User Points",
      },
      {
        to: "/edit_profile",
        name: "Edit Profile",
      },
    ],
  },
  {
    to: "#",
    name: "Blog",
    iconR: ChevronDownIcon,
    children: [
      {
        to: "/blog",
        name: "Blog",
      },
      {
        to: "/single_post",
        name: "Post Single",
      },
    ],
  },
  {
    to: "#",
    name: "Pages",
    iconR: ChevronDownIcon,
    children: [
      {
        to: "/login",
        name: "Login",
      },
      {
        to: "/contact",
        name: "Contact Us",
      },
      {
        to: "/ask-question",
        name: "Ask Question",
      },
      {
        to: "/404",
        name: "404",
      },
    ],
  },
  {
    to: "/contact",
    name: "Contact Us",
  },
];

export default {
  props: ["sidebarOpen"],
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    TransitionChild,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
    MenuAlt2Icon,
    SearchIcon,
    ChevronDoubleRightIcon,
    XIcon,
    ChipIcon,
    UserIcon,
  },
  data() {
    return {
      navigation,
    };
  },
  methods: {
    close() {
      this.$emit("closeSidebar");
    },
  },
};
</script>
<style>
.drawer a.router-link-exact-active {
  background-color: #ff7361;
  box-shadow: 0px 0px 6px #ff7361;
  color: #fff;
}
.drawer a.router-link-exact-active .menu-nav-arrow {
  color: #fff !important;
}
</style>
