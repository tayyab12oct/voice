<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-6">
      <LayoutA />
      <LayoutB />
      <LayoutC />
      <LayoutD />
      <LayoutE />
      <LayoutF />
      <LayoutG />
      <LayoutH />
      <LayoutCategories2 />
      <LayoutCategories />
    </div>
    <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
      <Asside />
    </div>
  </div>
</template>

<script>
import Asside from "../components/asside.vue";
import LayoutA from "../components/LayoutA.vue";
import LayoutB from "../components/LayoutB.vue";
import LayoutC from "../components/LayoutC.vue";
import LayoutD from "../components/LayoutD.vue";
import LayoutE from "../components/LayoutE.vue";
import LayoutF from "../components/LayoutF.vue";
import LayoutG from "../components/LayoutG.vue";
import LayoutH from "../components/LayoutH.vue";
import LayoutCategories from "../components/LayoutCategories.vue";
import LayoutCategories2 from "../components/LayoutCategories2.vue";
export default {
  name: "Home",
  components: {
    Asside,
    LayoutA,
    LayoutB,
    LayoutC,
    LayoutD,
    LayoutE,
    LayoutF,
    LayoutG,
    LayoutH,
    LayoutCategories,
    LayoutCategories2,
  },
};
</script>
