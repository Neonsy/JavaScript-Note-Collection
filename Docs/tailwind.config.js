const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false, // Disable Tailwind's base styles to prevent conflicts
    },
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./{src,docs,blog}/**/*.{jsx,tsx,html,md,mdx}"],
    theme: {
        extend: {
        },
    },
    plugins: [],
};
