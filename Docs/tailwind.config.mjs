import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = { 200: '#f3c200', 600: '#846800', 900: '#3f3000', 950: '#2e2200' };
const gray = { 100: '#f3f7fa', 200: '#e8eef6', 300: '#bbc3cc', 400: '#7f8d9e', 500: '#4c5969', 700: '#2d3948', 800: '#1c2835', 900: '#13191f' };

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};
