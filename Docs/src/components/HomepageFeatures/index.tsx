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
