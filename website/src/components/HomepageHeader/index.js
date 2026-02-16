import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Welcome to this Docusaurus sandbox.
        </h1>
        <p className={styles.heroSubtitle}>
          Let's see what can be done with the `repository_dispatch` event.
        </p>
      </div>
    </div>
  );
}
