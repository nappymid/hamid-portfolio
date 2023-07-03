<template>
  <ColorScheme>
    <AppHeader />
    <div class="min-h-screen mx-auto">
      <slot />
    </div>
    <AppFooter />
  </ColorScheme>
</template>

<script setup lang="ts">
// onMounted(() => {
//   const isDarkModePreferred = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;

//   const themeFromLocalStorage = localStorage.getItem(
//     LOCAL_STORAGE_THEME_KEY
//   ) as Theme;

//   if (themeFromLocalStorage) {
//     setTheme(themeFromLocalStorage);
//   } else {
//     setTheme(isDarkModePreferred ? "dark" : "light");
//   }
// });

// watch(darkMode, (selected) => {
//   setTheme(selected ? "dark" : "light");
// });
</script>

<style scoped></style>
