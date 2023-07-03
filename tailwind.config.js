/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        themeBackground: "var(--background)",
        themeText: "var(--text)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: false,
  },
};
