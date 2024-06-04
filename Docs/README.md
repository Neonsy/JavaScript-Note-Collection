# My Docusaurus Setup

As the time of writing, I've switched to Docusaurus in **version** `3.4.0`, which I'll keep on upgrading as long as there arent any major issues. 

If you want to make sure that you can follow along without any issues, make sure to either use **version** `3.4.0` or whatever my `main` branch holds in the `package.json`.

## Getting Started

To get started, you'll of course need to have NodeJS installed on your machine.
As the time of writing, I'm using NodeJS `20.14.0`.
I'm also **always** using the `pnpm` package manager, which is a great alternative to `npm` (I don't know anything about **yarn** as of now).

## Installation

```bash
pnpx create-docusaurus@latest dirName classic
```

You're basically done, but I'll also show you what I've done.
I've disabled light mode, but I won't show that here.
I'm also not showing the sitemap plugin, because it's [straight forward](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap).

>[!NOTE]
You can always check my [configuration](https://github.com/Neonsy/JavaScript-Note-Collection/tree/main/Docs) to see what I've done.

## Adding TailwindCSS

1. Install TailwindCSS with PostCSS and autoprefixer

    ```bash
    pnpm add tailwindcss postcss autoprefixer postcss-import
    ```

2. Create the configuration files

    ```bash
    pnpx tailwindcss init -p
    ```

3. Put this in your `tailwind.config.js` file

    ```js
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
    ```

4. Create a custom plugin

    Create a `plugins` directory in your project root and create a file called `tailwind-plugin.cjs`

    ```js
    function tailwindPlugin(context, options) {
        return {
            name: "tailwind-plugin",
            configurePostCss(postcssOptions) {
                postcssOptions.plugins = [require("postcss-import"), require("tailwindcss"), require("autoprefixer")];
                return postcssOptions;
            },
        };
    }

    module.exports = tailwindPlugin;
    ```

    Check the content of your `postcss.config.js`

    ```js
    // postcss.config.js
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    };
    ```

5. Add TailwindCSS to your Docusaurus config

    ```js
    // docusaurus.config.js
    import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

    const config: Config = {
        // ...
        plugins: [tailwindPlugin],
    };
    ```

6. Add the Tailwind directives to the global styles `src/css/custom.css`. Alternatively, you can add them to an extra file and import it in the global styles.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

Don't forget to use `className` instead of **class**.

## Local Search

I didn't want to go for algolia, I'm not sure if it's worth the effort for this project.

### Installation

```bash
pnpm add @easyops-cn/docusaurus-search-local
```

### Configuration

```js
// docusaurus.config.js
const config: Config = {
    // ...
    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                // ... Your options.
            },
        ],
    ],
};
```

## Optimized Images

```bash
pnpm add @docusaurus/plugin-ideal-image
```

Read more about the possible options [here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#name).

```js
// docusaurus.config.js
plugins: [
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
```

### Using inside a component

```tsx
import clsx from "clsx";
import Heading from "@theme/Heading";
import IdealImage from "@theme/IdealImage";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    ImgSrc: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "JavaScript",
        ImgSrc: require("./images/javascript.png"), // Removed .default
        description: <>The dynamic, versatile language powering the modern internet and bringing your interactive ideas to life.</>,
    },
    {
        title: "TypeScript",
        ImgSrc: require("./images/typescript.png"), // Removed .default
        description: (
            <>
                Supercharge your JavaScript with robust type-checking, a streamlined development process, the crushing of bugs, and the boosting your
                code quality.
            </>
        ),
    },
    {
        title: "NodeJS",
        ImgSrc: require("./images/nodejs.png"), // Removed .default
        description: (
            <>The lightning-fast, scalable runtime that turns JavaScript into a powerhouse for building robust, high-performance web applications.</>
        ),
    },
];

function Feature({ title, ImgSrc, description }: Readonly<FeatureItem>) {
    return (
        <div className={clsx("col col--4")}>
            <div className="flex justify-center">
                <IdealImage img={ImgSrc} className={styles.featureImg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p className="mt-4">{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
```

### Using inside a markdown file

```md
import Image from '@theme/IdealImage';

<Image img={require('./const vs let.png')} />
```