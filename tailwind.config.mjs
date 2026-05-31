/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          darkest: "#0d6b32",
          dark: "#0f8b3e",
          DEFAULT: "#16a34a",
          medium: "#22c55e",
          light: "#86efac",
          lighter: "#bbf7d0",
          lightest: "#dcfce7",
          wash: "#f0fdf4",
        },
      },
    },
  },
  plugins: [],
};
