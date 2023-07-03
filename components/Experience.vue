<template>
  <section
    class="text-gray-600 body-font overflow-hidden min-h-screen mt-10 max-w-7xl mx-auto"
  >
    <div class="flex flex-col text-center w-full mb-20">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200"
      >
        Work experience
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200">
        Places I've worked and met awesome people
      </p>
    </div>

    <div class="container px-5 py-14 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          v-for="w in content"
          class="py-8 flex flex-wrap md:flex-nowrap md:flex-col md:gap-5 md:px-5"
        >
          <div
            class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col md:flex-col-reverse"
          >
            <span
              class="font-semibold title-font text-gray-700 uppercase dark:text-gray-200"
            >
              {{ w.company }}
            </span>
            <span class="mt-1 text-gray-500 dark:text-gray-200 text-sm">{{
              `${convertDate(w.startedAt)} - ${
                w.endedAt ? convertDate(w.endedAt) : "Present"
              }`
            }}</span>
          </div>
          <div class="md:flex-grow">
            <h3
              class="text-xl font-medium text-gray-900 dark:text-gray-200 title-font mb-2"
            >
              {{ w.position }}
            </h3>
            <ul class="list-disc dark:text-gray-200 md:pl-5">
              <li v-for="r in w.responsibility">{{ r }}</li>
            </ul>
            <ul class="list-disc dark:text-gray-200 md:pl-5">
              <li v-for="a in w.achivement">{{ a }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({ content: Object });

const convertDate = (val: string) => {
  const date = new Date(Date.parse(val));

  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};
</script>
