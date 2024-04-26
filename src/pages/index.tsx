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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container flex justify-center flex-col items-center">
        <Heading as="h1" className="hero__title">
        <h1 className="font-bold text-3xl mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">"Minimum Complexity Maximum Security"</h1>
        </Heading>
        <p className="w-[80%] my-5">Your custom app, meticulously tailored to your language preference, fortified with robust security measures, and primed for seamless deployment in the cloud.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
           Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
