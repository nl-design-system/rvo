import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Heading, Link, MaxWidthLayout } from '@nl-rvo/components';
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
            <Heading noMargins={true}>Het design system van RVO</Heading>
            <p className={styles.heroParagraph}>
              ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland.
            </p>
            <Link href={useBaseUrl('/aan-de-slag/introductie')}>
              <Button>Aan de slag met ROOS</Button>
            </Link>
          </MaxWidthLayout>
        </div>
      </header>
      <main>
        <MaxWidthLayout size="lg" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
          <section className={styles.articleGrid}>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Huisstijl
              </Heading>
              De kleuren, lettertypes, de space en sizes die er beschikbaar zijn binnen ROOS.
              <Link href={useBaseUrl('/design-tokens/kleuren')}>Bekijk de huisstijl</Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Componenten
              </Heading>
              Een collectie aan gebruiksvriendelijke, toegankelijke componenten die voldoen aan de Rijkshuisstijl.
              <Link href={useBaseUrl('/componenten/accordion')}>Bekijk de componenten</Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Patronen
              </Heading>
              Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren
              <Link href={useBaseUrl('/patronen/layout/applicatie-layout')}>Bekijk de patronen</Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Voor designers
              </Heading>
              Ben je een designer en wil je ROOS gebruiken? Gebruik dan ons Figma bestand.
              <Link
                href="https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0"
                showIcon="after"
                icon="externe-link"
              >
                Figma bestand
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Voor developers
              </Heading>
              Ben je een developer en wil je ROOS gebruiken? Ga dan naar onze Storybook omgeving.
              <Link
                href={
                  process.env.NODE_ENV === 'development'
                    ? 'http://localhost:6006'
                    : 'https://nl-design-system.github.io/rvo/'
                }
                showIcon="after"
                icon="externe-link"
              >
                Storybook omgeving
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2" noMargins={true}>
                Hulp nodig?
              </Heading>
              Kom je er niet uit? We vinden het altijd leuk als iemand ons Design System wil gebruiken, dus stuur ons
              een e-mail.
              <Link href="mailto:designsystem@rvo.nl" showIcon="after" icon="externe-link">
                designsystem@rvo.nl
              </Link>
            </div>
          </section>
        </MaxWidthLayout>
      </main>
    </Layout>
  );
}
