<template>
  <div class="bg-white dark:bg-slate-700 dark:text-white">
    <hero :content="bioFields" />
    <!-- <experiment class="bg-red-300 w-100 h-screen" /> -->
    <experience id="experience" :content="workFields" class="" />
    <skills id="skills" :content="skillData" class="bg-indigo-50" />
    <contact-me id="contact" class="bg-white" />
  </div>
</template>

<script setup>
const { $client } = useNuxtApp();
const bio = await $client.getEntries({ content_type: "bio" });
const works = await $client.getEntries({ content_type: "work" });
const projects = await $client.getEntries({ content_type: "projects" });
const skillData = await $client.getEntries({ content_type: "skills" });
const bioFields = bio.items[0].fields;
var workFields = [];
works.items.forEach((item) => {
  workFields.push(item.fields);
});
// const sortedWork = workFields.reverse();
</script>

<style></style>
