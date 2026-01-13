import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CliSplash from '@site/src/components/CliSplash';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--primary button--lg"
//             to="/docs/introduction">
//             Get Started
//           </Link>
//           <Link
//             className="button button--secondary button--lg"
//             to="https://github.com/ioncakephper/prodcat">
//             GitHub
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }


function HomepageHeader() {
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        background: 'var(--prodcat-hero-bg)',
        color: 'var(--prodcat-hero-text)',
        padding: '6rem 0',
        textAlign: 'center'
      }}
    >
      <div className="container">
        <h1 className="hero__title" style={{ color: 'var(--prodcat-hero-text)' }}>
          Generate Product Documentation Automatically
        </h1>

        <p
          className="hero__subtitle"
          style={{
            maxWidth: '700px',
            margin: '1.5rem auto',
            opacity: 0.9,
            color: 'var(--prodcat-hero-text)'
          }}
        >
          Prodcat turns a simple JavaScript product list into a fully generated
          Docusaurus documentation site — no manual Markdown required.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link
            className="button button--lg"
            style={{
              backgroundColor: 'var(--ifm-color-primary)',
              color: '#fff',
              marginRight: '1rem'
            }}
            to="/docs/introduction"
          >
            Get Started
          </Link>

          <Link
            className="button button--lg"
            style={{
              backgroundColor: '#fff',
              color: 'var(--ifm-color-primary)',
              border: '2px solid var(--ifm-color-primary)'
            }}
            to="https://github.com/ioncakephper/prodcat"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Prodcat CLI turns a simple JavaScript product list into a directory and product landing pages automatically, connecting to product documentation on a Docusaurus documentation site — no manual Markdown required.">
      <HomepageHeader />
      <main>
        <CliSplash />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}


