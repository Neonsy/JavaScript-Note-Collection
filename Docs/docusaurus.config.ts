import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

const config: Config = {
    title: "Javascript Note Collection",
    tagline: "",
    favicon: "/JavaScript-Note-Collection/img/favicon.png",

    // Set the production url of your site here
    url: "https://neonsy.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/JavaScript-Note-Collection",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Neonsy", // Usually your GitHub org/user name.
    projectName: "JavaScript-Note-Collection", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {
                    blogTitle: "Blog",
                    blogDescription: "Notes and thoughts about JavaScript, TypeScript and NodeJS",
                    postsPerPage: 5, // Number of posts on the blog index page
                    blogSidebarTitle: "All posts",
                    blogSidebarCount: "ALL", // Number of posts on the blog sidebar
                    showReadingTime: true,
                    readingTime: ({ content, defaultReadingTime }) => defaultReadingTime({ content, options: { wordsPerMinute: 120 } }),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    lastmod: "date",
                    changefreq: "daily",
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                    createSitemapItems: async (params) => {
                        const { defaultCreateSitemapItems, ...rest } = params;
                        const items = await defaultCreateSitemapItems(rest);
                        return items.filter((item) => !item.url.includes("/page/"));
                    },
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            {
                name: "keywords",
                content:
                    "javascript, typescript, nodejs, javascript-note-collection, neonsy, neonsy.github.io, neonsy.github.io/javascript-note-collection",
            },
            { name: "theme-color", content: "#d9aa00" },
        ],
        // Replace with your project's social card
        image: "img/social.png",
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "Home",
            logo: {
                alt: "My Site Logo",
                src: "/JavaScript-Note-Collection/img/logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "javaScriptSidebar",
                    position: "left",
                    label: "JavaScript",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    type: "search",
                    position: "right",
                },
                {
                    href: "https://github.com/Neonsy/JavaScript-Note-Collection",
                    position: "right",
                    "aria-label": "GitHub repository",
                    html: '<img src="/JavaScript-Note-Collection/img/github-logo.svg" alt="GitHub" style="height: 24px; width: 24px;"/>',
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Neonsy",
                },
                {
                    label: "Discord",
                    href: "https://discord.gg/aK3B9QyGU4",
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()}`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
    plugins: [
        tailwindPlugin,
        [
            "@docusaurus/plugin-ideal-image",
            {
                quality: 75,
                max: 1920, // max image size in pixels
                min: 128, // min image size in pixels
                steps: 3, // number of sizes to generate
                disableInDev: false,
            },
        ],
    ],
    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                hashed: true,
                indexDocs: true,
                indexBlog: true,
                indexPages: false,
                language: ["en"],
                highlightSearchTermsOnTargetPage: true,
                searchResultLimits: 9,
                searchResultContextMaxLength: 57,
            },
        ],
    ],
};

export default config;
