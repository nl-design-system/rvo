import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Heading, MaxWidthLayout } from '@nl-rvo/components';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.title}>
      <header>
        <div className={clsx(styles.heroContainer)}>
          <MaxWidthLayout size="lg" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
            <Heading>Het design system van RVO</Heading>
            <p className={styles.heroParagraph}>
              ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland.
            </p>
            <Link to="/introduction">
              <Button>Aan de slag met ROOS</Button>
            </Link>
          </MaxWidthLayout>
        </div>
      </header>
      <main>
        <section
          style={{ alignItems: 'center', display: 'flex', paddingBlock: '2rem', paddingInline: 0, width: '100%' }}
        ></section>
      </main>
    </Layout>
  );
}
