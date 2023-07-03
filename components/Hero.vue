<template>
  <div
    class="hero min-h-screen bg-gradient-to-t from-orange-200 to-orange-200 dark:from-slate-700 dark:to-slate-600"
  >
    <!-- <experiment></experiment> -->
    <div
      class="hero-content justify-items-center grid grid-cols-1 md:grid-cols-2 pt-10 gap-10"
    >
      <div class="">
        <h1 class="text-5xl font-bold dark:text-white">
          Hi, I'm
          <span class="text-blue-700 dark:text-blue-300">{{
            content.name.split(" ")[0]
          }}</span>
        </h1>
        <p class="py-6 dark:text-white">Love to code</p>
      </div>
      <img
        class="mask mask-hexagon max-w-sm rounded-lg shadow-2xl align-middle justify-center w-100"
        src="~/assets/img/img1.jpg"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const bio = defineProps({ content: Object });
</script>
<style scoped></style>
