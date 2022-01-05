<template>
  <div class="flex justify-between flex-wrap">
    <div class="lg:w-9/12 lg:pr-8 w-full space-y-7">
      <div
        class="bg-white dark:bg-dark-200 shadow flex flex-col font-sans pt-9 items-center text-center"
      >
        <router-link
          to=""
          class="lg:text-md text-xs font-light text-blue-100 hover:underline"
        >
          Technology</router-link
        >
        <router-link
          to=""
          class="text-dark-600 dark:text-white pb-2 pt-1 md:px-2 px-7 md:text-4xl text-2xl font-semibold md:leading-wide hover:text-primary font-poppin transform transition-all"
        >
          The Features of the Best Ergonomic Keyboard</router-link
        >
        <p class="md:text-sm text-xs font-light text-gray-900 pt-1 pb-8 px-8">
          1 week ago 13 Comments by Patrick Callahan 18,727 Views
        </p>
        <img
          class="w-full"
          src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_13-1536x1024.jpg.webp"
          alt=""
        />
        <div class="flex flex-col items-center md:-mt-12 -mt-7">
          <img
            class="md:w-24 w-14 md:h-24 h-14 border-4 border-white shadow rounded-full"
            src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/meks_1-128x128.jpg.webp"
            alt=""
          />
          <p class="text-gray-900 font-sans font-light text-base pt-2">
            Written by
            <router-link to="" class="text-primary hover:underline"
              >Patrick Callahan</router-link
            >
          </p>
        </div>
        <div class="md:p-8 p-5 text-left max-w-2xl">
          <h2
            class="text-gray-400 dark:text-gray-200 font-semibold font-poppin md:text-lg text-base pb-4"
          >
            Flexitarian Cosby sweater artisan yr, banjo 90’s listicle butcher
            raw denim normcore shabby chic pug swag mustache.
          </h2>
          <p
            class="text-gray-400 dark:text-gray-200 md:font-normal font-light text-sm md:leading-7 leading-6 traking-tighter py-4"
          >
            Brooklyn Carles squid single-origin coffee YOLO, Cosby sweater deep
            v mumblecore High Life. Letterpress keffiyeh hoodie, squid taxidermy
            chia Blue Bottle drinking vinegar lumbersexual butcher literally
            asymmetrical cred. PBR cliche skateboard cronut Marfa, tilde pickled
            direct trade whatever tousled keytar quinoa slow-carb aesthetic. Wes
            Anderson crucifix whatever, listicle hoodie squid hella. Ennui 3
            wolf moon YOLO pug +1 disrupt. Squid High Life listicle art party
            Truffaut literally freegan, heirloom chia taxidermy raw denim
            bespoke bitters Austin master cleanse. Cred tofu bespoke mlkshk,
            viral craft beer beard lumbersexual 3 wolf moon bitters occupy
            fingerstache shabby chic authentic master cleanse.
          </p>
          <p
            class="text-gray-400 dark:text-gray-200 md:font-normal font-light text-sm md:leading-7 leading-6 traking-tighter py-4"
          >
            Shoreditch you probably haven’t heard of them kitsch hoodie.
            Whatever ugh brunch pickled four loko. Typewriter trust fund street
            art VHS kitsch bespoke. Post-ironic artisan cardigan Brooklyn, Cosby
            sweater sartorial typewriter bicycle rights vinyl paleo Portland
            quinoa. Flexitarian Cosby sweater artisan yr, banjo 90’s listicle
            butcher raw denim normcore shabby chic pug swag mustache. Lomo Vice
            leggings, normcore Odd Future fingerstache Kickstarter. Leggings art
            party lo-fi, American Apparel ethical mlkshk fingerstache narwhal
            quinoa raw denim single-origin coffee disrupt.
          </p>
          <p
            class="text-gray-400 dark:text-gray-200 md:font-normal font-light text-sm md:leading-7 leading-6 traking-tighter py-4"
          >
            Keffiyeh Thundercats wolf, bitters farm-to-table gastropub whatever
            fashion axe tofu polaroid typewriter. Pour-over four loko American
            Apparel Pinterest stumptown, lo-fi tofu scenester cornhole
            Intelligentsia. Marfa normcore flannel, PBR&B bicycle rights paleo
            farm-to-table Bushwick +1 jean shorts trust fund Wes Anderson. 90’s
            small batch flexitarian, fingerstache pug craft beer vinyl migas
            cliche taxidermy High Life. Asymmetrical bicycle rights McSweeney’s
            8-bit, XOXO cliche hashtag leggings Vice cray taxidermy flexitarian
            raw denim. Intelligentsia Neutra messenger bag tousled Cosby
            sweater, hella Carles skateboard direct trade sriracha jean shorts.
            8-bit occupy aesthetic chillwave tote bag fashion axe.
          </p>
          <p
            class="text-gray-400 dark:text-gray-200 md:font-normal font-light text-sm md:leading-7 leading-6 traking-tighter py-4"
          >
            Tattooed Kickstarter bitters lomo raw denim. Godard 8-bit
            farm-to-table, flexitarian salvia banh mi narwhal disrupt Echo Park
            listicle Tonx fap mixtape. Flexitarian American Apparel Vice street
            art crucifix. Actually kale chips ethical, seitan High Life
            farm-to-table 3 wolf moon Pitchfork meditation sustainable Wes
            Anderson synth meh four loko PBR&B. Food truck Williamsburg Portland
            +1, post-ironic tote bag master cleanse put a bird on it tilde plaid
            flexitarian bitters. Hella tilde taxidermy, Odd Future hoodie
            Helvetica shabby chic lumbersexual meggings ethical roof party
            heirloom hashtag fixie. DIY craft beer Brooklyn cray slow-carb
            single-origin coffee.
          </p>
          <div
            class="grid md:grid-cols-4 grid-cols-1 md:gap-1.5 gap-2.5 md:pt-4"
          >
            <div
              v-for="n in 4"
              :key="n"
              class="bg-blue-100 p-2 py-1.5 text-white rounded cursor-pointer flex items-center justify-center"
            >
              F
            </div>
          </div>
        </div>
        <div
          class="bg-light-900 dark:bg-dark-500 border-t border-dark-50 md:p-6 p-5 w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-3"
        >
          <div class="group">
            <div
              class="h-48 overflow-hidden relative z-10 flex items-center justify-center"
            >
              <div
                class="w-full h-full overflow-hidden absolute top-0 left-0"
                style="z-index: -1"
              >
                <img
                  src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp"
                  class="transform transition duration-500 cursor-pointer w-full h-full hover:scale-110"
                  alt=""
                />
              </div>
              <div
                class="bg-gray-80 rounded-full p-2 border-4 border-white cursor-pointer"
              >
                <ChevronLeftIcon class="md:w-12 w-10 text-white" />
              </div>
            </div>
            <div class="flex flex-col font-sans">
              <router-link
                to=""
                class="text-dark-600 dark:text-white text-lg md:px-12 px-4 pt-2 text-center font-medium group-hover:text-primary font-poppin transform transition-all"
              >
                The Ultimate Cheat Sheet On Ecology</router-link
              >
            </div>
          </div>
          <div class="group">
            <div
              class="h-48 overflow-hidden relative z-10 flex items-center justify-center"
            >
              <div
                class="w-full h-full overflow-hidden absolute top-0 left-0"
                style="z-index: -1"
              >
                <img
                  src="https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp"
                  class="transform transition duration-500 cursor-pointer w-full h-full hover:scale-110"
                  alt=""
                />
              </div>
              <div
                class="bg-gray-80 rounded-full p-2 border-4 border-white cursor-pointer"
              >
                <ChevronRightIcon class="md:w-12 w-10 text-white" />
              </div>
            </div>
            <div class="flex flex-col font-sans">
              <router-link
                to=""
                class="text-dark-600 dark:text-white text-lg md:px-12 px-4 pt-2 text-center font-medium group-hover:text-primary font-poppin transform transition-all"
              >
                Entrepreneurship ideas for young and ambitious
                people</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <LayoutCard
        :list="listD"
        title="YOU MAY ALSO LIKE"
        mainClass="border-transparent"
        gridClass="md:p-5 p-3 md:gap-5 gap-3 md:grid-cols-2 grid-cols-1"
        textMainClass="pt-1 w-full"
        cardMainClass="bg-white dark:bg-dark-200 flex items-start space-x-3 md:pr-5 md:h-26 h-20"
        imgClass="h-full md:w-72 w-46"
        titleClass="md:text-sm text-xs md:leading-5 h-16 pr-3 overflow-hidden"
      />
      <AboutAuthor />
      <Comments />
      <LeaveComment />
    </div>
    <div class="lg:w-3/12 md:w-5/12 mx-auto w-full pt-6 lg:pt-0">
      <Asside />
    </div>
  </div>
</template>
<script>
import Asside from "../components/asside.vue";
import LayoutCard from "../components/LayoutCard.vue";
import AboutAuthor from "../components/AboutAuthor.vue";
import LeaveComment from "../components/LeaveComment.vue";
import Comments from "../components/Comments.vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Asside,
    ChevronRightIcon,
    ChevronLeftIcon,
    LayoutCard,
    AboutAuthor,
    LeaveComment,
    Comments,
  },
  data() {
    return {
      listD: [
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-1536x1020.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
          icon: true,
          iconClass: "lg:w-4 md:w-4 w-4",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1536x1017.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Entrepreneurship ideas for young and ambitious people",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-1536x1024.jpg.webp",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Success Is a Choice – What Are You Going to Do?",
        },
        {
          src: "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_17-375x195.jpg",
          category: "Lifestyle",
          color: "text-yellow-100",
          title: "Success Is a Choice – What Are You Going to Do?",
        },
      ],
    };
  },
};
</script>
