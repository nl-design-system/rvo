// @ts-ignore
import HomepageContent from '@documentation/pages/index.mdx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={`${siteConfig.title}: ${siteConfig.tagline}`}>
      <main className={styles.content}>
        <HomepageContent />
      </main>
    </Layout>
  );
}
