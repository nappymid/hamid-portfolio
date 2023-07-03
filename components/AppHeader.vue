<template>
  <nav
    :class="{
      'bg-white dark:bg-slate-700 shadow-lg py-0': isScrolled,
      'py-2': !isScrolled,
    }"
    class="fixed w-full z-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        :class="{ 'h-12': isScrolled }"
        class="flex justify-between items-center h-16 transition-all ease-in"
      >
        <div class="flex-shrink-0 flex items-center">
          <a
            href="/"
            class="flex flex-row items-center space-x-2 font-bold text-lg text-gray-800"
          >
            <icons-logo />
            <span
              class="text-2xl"
              :class="{ 'text-gray-700 dark:text-white': isScrolled }"
              >Hamid
              <span
                class="px-2 italic text-lg text-indigo-300 outline-dashed outline-orange-400 outline-offset-1"
                >.tech</span
              >
            </span>
          </a>
        </div>
        <!-- nav items -->
        <div class="flex items-center space-x-5">
          <div class="hidden md:block">
            <ul
              class="ml-10 flex items-center text-gray-700 dark:text-gray-200 font-bold space-x-4 uppercase"
              :class="{ 'text-black dark:text-white': isScrolled }"
            >
              <!-- <li><a href="/" class="hover:text-slate-900">HOME</a></li> -->
              <li>
                <a
                  href="#work"
                  class="hover:text-slate-900 hover:dark:text-slate-400"
                >
                  work Experience
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  class="hover:text-slate-900 hover:dark:text-slate-400"
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  class="hover:text-slate-900 hover:dark:text-slate-400"
                  >Projects</a
                >
              </li>
              <li>
                <button
                  @click="toggleDarkMode"
                  class="text-gray-800 dark:text-gray-200 focus:outline-none"
                >
                  <i v-show="!isDarkMode" class="fas fa-moon"></i>
                  <i v-show="isDarkMode" class="fas fa-sun"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="w-auto hidden lg:block">
            <div class="inline-block">
              <a class="btn-cta" type="button" href="#contact">Contact Me</a>
            </div>
          </div>
          <label class="swap swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input
              type="checkbox"
              class="tooltip tooltip-bottom"
              data-tip="Toggle Dark/Light mode"
              @change="
                setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
              "
            />

            <!-- sun icon -->
            <svg
              class="swap-on fill-white w-6 h-6"
              :class="{ 'fill-yellow-500': isScrolled }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>

            <!-- moon icon -->
            <svg
              class="swap-off fill-white w-6 h-6"
              :class="{ 'fill-purple-500': isScrolled }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

type Theme = "light" | "dark";

const LOCAL_STORAGE_THEME_KEY = "theme";

const darkMode = useState("theme", () => false);

const setTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<style scoped>
.logo {
  height: 40px;
  width: 40px;
}
nav {
  transition: background-color 0.2s ease-out;
}
</style>
