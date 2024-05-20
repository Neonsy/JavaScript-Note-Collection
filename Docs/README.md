# Repo Documentation: Powered by Starlight

[Starlight Documentation](https://starlight.astro.build)

## Setup

I've used the TailwindCSS version for this Documentaion:

```
pnpm create astro@latest -- --template starlight/tailwind
```

>[!NOTE]
If you want websites to open in a new tab when using markdown links, you will need to use an additional plugin.

```
pnpm install rehype-external-links
```
Add
```mjs
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
```

inside of the `astro.config.mjs` function

```js
export default defineConfig
```

### General info

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

[Happy read'in!](https://drneonsy.github.io/JavaScript-Note-Collection/)