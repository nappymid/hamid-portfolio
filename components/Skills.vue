<template>
  <section
    class="text-gray-600 bg-white dark:bg-slate-700 dark:text-white body-font"
  >
    <div class="container px-5 py-24 max-w-7xl mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white"
        >
          Skills
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Some of the things I've learnt
        </p>
      </div>
      <div class="flex flex-wrap text-center justify-items-center">
        <div v-for="s in data" class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div
            class="dark:bg-slate-500 border-2 border-gray-200 px-4 py-6 rounded-lg"
          >
            <img
              :src="s.fields.imgUrl"
              v-if="s.fields.imgUrl"
              class="h-12 mx-auto mb-6"
              alt=""
            />
            <div
              class="text-indigo-500 dark:text-green-400 w-12 h-12 mb-3 inline-block mx-auto"
              v-else-if="s.fields.svg"
              v-html="s.fields.svg"
            ></div>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 dark:text-green-400 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
              v-else
            >
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 class="title-font text-lg text-gray-900 dark:text-white">
              {{ s.fields.title }}
            </h2>
            <p class="leading-relaxed"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = defineProps({ content: Object });
const data = skills.content.items;
</script>

<style lang="scss" scoped></style>
