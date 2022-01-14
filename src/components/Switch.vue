<template>
  <Switch
    @click="click"
    v-model="enabled"
    :class="[
      enabled
        ? 'bg-white bg-opacity-80 shadow border border-primary'
        : 'bg-gray-700',
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:outline-none',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-primary shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <span
        :class="[
          enabled
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <MoonIcon class="w-3 text-white" />
      </span>
      <span
        :class="[
          enabled
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <SunIcon class="w-3 text-yellow-400" />
      </span>
    </span>
  </Switch>
</template>
<script>
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
import { Switch } from "@headlessui/vue";
export default {
  props: {
    click: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    Switch,
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      enabled: false,
    };
  },
};
</script>
