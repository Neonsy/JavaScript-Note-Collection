import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
              <Heading as="h1" className="text-slate-900 text-6xl">
                  {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                  <Link className="button button--secondary button--lg" to="/docs/JavaScript/Introduction">
                      Get Started 🚀
                  </Link>
                  <Link className="ml-8 button button--secondary button--lg" to="https://github.com/Neonsy/JavaScript-Note-Collection">
                      Repository 📦
                  </Link>
              </div>
          </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Join me on my journey to becoming well versed in JavaScript, TypeScript and NodeJS">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
