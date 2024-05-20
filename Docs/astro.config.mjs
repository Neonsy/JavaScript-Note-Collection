import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
    site: "https://drneonsy.github.io",
    base: "/JavaScript-Note-Collection",
    trailingSlash: "ignore",
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: "_blank",
                    rel: ["noopener", "noreferrer"],
                },
            ],
        ],
    },
    integrations: [
        starlight({
            title: "JavaScript Note Collection",
            head: [
                {
                    tag: "meta",
                    attrs: {
                        property: "og:title",
                        content: "JavaScript Note Collection",
                    }
                },
                {
                    tag: "meta",
                    attrs: {
                        property: "og:description",
                        content: "This is my personal note collection for JavaScript, TypeScript and NodeJS.",
                    }
                },
                {
                    tag: "meta",
                    attrs: {
                        property: "og:image",
                        content: "https://drneonsy.github.io/JavaScript-Note-Collection/og.png",
                    }
                },
                {
                    tag: "meta",
                    attrs: {
                        property: "theme-color",
                        content: "#ffd900",
                    }
                },
            ],
            social: {
                github: "https://github.com/drneonsy",
            },
            sidebar: [
                {
                    label: "Introduction",
                    link: "introduction",
                },
                {
                    label: "Getting Started",
                    link: "getting-started",
                },
                {
                    label: "JavaScript",
                    autogenerate: { directory: "JavaScript" },
                },
            ],
            customCss: ["./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
