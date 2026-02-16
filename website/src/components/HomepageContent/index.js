import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeIntro from './HomeIntro.mdx';
import Misc01 from './Misc01.md';
// import SupporterGrid from '@site/src/components/SupporterGrid';
// import Misc01 from '@site/src/components/ProjectGridTemplate';
import styles from './styles.module.css';
// 2026-02-15 Sunday 12:38:42.
import Intro from './intro.mdx';

export default function HomepageContent() {
    // Get baseUrl from Docusaurus context
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;

    return (
        // <main>
        <main className={styles.mainContent}>
            <section className={styles.sectionContainer}>
                {/* <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h1>A header?</h1>
                </div> */}

                <div className={styles.card} style={{ backgroundColor: '#f6f7f8', padding: '10px' }}>
                    <Intro />
                </div>
                <div className={styles.sectionIntro}>
                    <HomeIntro />
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    {/* <h1>AboutCode Projects Overview</h1> */}
                    <h1>Heading 1</h1>
                </div>
                <div className={styles.sectionIntro}>
                    This is inside `/home/jmh/dev/jmh2026/docusaurus-sandbox-2026-01-15/website/src/components/HomepageContent/index.js`.
                </div>

                <div className={styles.sectionIntro}>
                    <Misc01 />
                </div>

                {/* <ProjectGridTemplate /> */}
            </section>

            {/* <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '30px' }}
                >
                    <h1>Supporters</h1>
                </div>
                <div className={styles.sectionIntro}>
                    <Supporters />
                </div>
                <SupporterGrid />
            </section> */}

            {/* temp dummy div to create space above footer */}
            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
