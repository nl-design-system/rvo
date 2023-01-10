import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.title}>
      <header className={clsx('hero hero--primary')}>
        <div className="container">
          <h1 className="hero__title">Ontwerp met de componenten van ROOS</h1>
          <p className="hero__subtitle">
            Gebruik het ROOS design system om uw applicatie RVO-consistent te maken. Leer van de research en ervaring
            van andere ontwikkelaars en voorkom werk dat al gedaan is.
          </p>
          <div>
            <Link className="button button--secondary button--lg" to="/introduction">
              Aan de slag 🚀
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section
          style={{ alignItems: 'center', display: 'flex', paddingBlock: '2rem', paddingInline: 0, width: '100%' }}
        >
          <div className="container">
            <div className="row">Put frontend page content here</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
