import React from 'react';
import styles from './CliSplash.module.css';

const CliSplash = () => (
  <div className={styles.cliSplash}>
    <div className="container">
      <h2 className={styles.cliHeader}>Generate Product Pages in Seconds</h2>
      <p className={styles.cliSubheader}>
        Use prodcat CLI to generate products directory and landing pages from a simple JS products file.
      </p>
      <div className={styles.cliCommand}>
        <pre>
          <code>npx prodcat generate products.js</code>
        </pre>
      </div>
      <h2 className={styles.cliHeader}>Get Started in Seconds</h2>
      <p className={styles.cliSubheader}>
        Use prodcat CLI to initialize a new project and see the magic happen.
      </p>
      <div className={styles.cliCommand}>
        <pre>
          <code>npx prodcat init my-products.config.js</code>
        </pre>
      </div>
    </div>
  </div>
);

export default CliSplash;
