<template>
  <div class="flex-shrink-0">
    <div class="flex flex-col">
      <div class="flex flex-col h-0 flex-1">
        <div
          class="flex items-center justify-between h-12 flex-shrink-0 px-3 bg-red-100"
        >
          <img
            class="h-7 w-auto mx-auto"
            src="Logo_wiztopic_blanc.svg"
            alt="AirControl"
          />
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto bg-gray-500 pt-4">
          <nav class="flex-1 py-4 bg-gray-500 space-y-1">
            <template v-for="item in navigation" :key="item.name">
              <Disclosure as="div">
                <DisclosureButton
                  :class="[
                    item.current
                      ? 'bg-gray-400 text-white border-red-100'
                      : 'text-gray-700 hover:bg-gray-400 hover:text-white hover:border-red-100',
                    `group flex items-center justify-center px-3 py-3.5 text-xs tracking-wide
                      w-full cursor-pointer mainMenu border-l-4 transition-all border-transparent`,
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="h-4 w-4 text-gray-700"
                    aria-hidden="true"
                  />
                  <span
                    class="w-40 pl-2 text-left flex justify-between items-center uppercase font-medium tracking-wide text-xs"
                  >
                    {{ item.name }}
                    <DisclosurePanel>
                      <XIcon class="w-4" />
                    </DisclosurePanel>
                    <PlusIcon class="w-4" v-if="0" />
                  </span>
                </DisclosureButton>
                <DisclosurePanel
                  v-if="item.toggle === true"
                  :class="[item.current ? 'bg-gray-400' : '', 'pb-1.5 pt-1']"
                >
                  <div v-if="visible === true">
                    <a
                      v-for="subItem in item.children"
                      :key="subItem.name"
                      :href="subItem.href"
                      :class="[
                        subItem.current
                          ? 'font-bold text-white'
                          : 'text-gray-700',
                        'group w-full flex items-center pl-4 pr-2 py-1 text-xs font-semibold hover:text-white',
                      ]"
                      >{{ subItem.name }}
                    </a>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </nav>
          <img
            class="h-7 w-auto mb-20 mx-auto opacity-25"
            src="Logo_wiztopic_blanc.svg"
            alt="AirControl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  UserIcon,
  MenuAlt2Icon,
  BookmarkAltIcon,
  ChevronDownIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  ChipIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

const navigation = [
  {
    name: "Distribution",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: true,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Ressources",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Public",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Clippings",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Mesure",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Parametres",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
  {
    name: "Distribution",
    icon: BookmarkAltIcon,
    current: false,
    toggle: false,
    href: "#",
  },
  {
    name: "Wizadmin",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    toggle: true,
    children: [
      { name: "Campagnes", href: "#", current: true },
      { name: "Newsletters", href: "#" },
      { name: "Evenements", href: "#" },
    ],
  },
];

export default {
  props: ["sidebarOpen"],
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuAlt2Icon,
    SearchIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    ChipIcon,
    UserIcon,
    PlusIcon,
    XIcon,
  },
  data() {
    return {
      navigation,
      visible: true,
    };
  },
  methods: {
    showVisible() {
      this.visible = !this.visible;
    },
    close() {
      this.$emit("closeSidebar");
    },
  },
};
</script>
<style>
.showMenuHover {
  visibility: hidden;
}
.mainMenu:hover .showMenuHover {
  visibility: visible;
  transition: all 0.5s;
}
</style>
