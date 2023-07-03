// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      contentfulSpace: process.env.CONTENTFUL_SPACE,
      contentfulToken: process.env.CONTENTFUL_TOKEN,
      contentfulURL: process.env.CONTENTFUL_URL,
      emailjsPublic: process.env.EMAILJS_PUBLIC,
      emailjsServiceID: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateID: process.env.EMAILJS_TEMPLATE_ID,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Hamid El awad | IT/Coder",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vite-pwa/nuxt"],

  colorMode: {
    classSuffix: "",
  },
});
