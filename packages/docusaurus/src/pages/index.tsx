import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Heading, MaxWidthLayout, Link as RVOLink } from '@nl-rvo/components';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.title}>
      <header>
        <div className={clsx(styles.heroContainer)}>
          <MaxWidthLayout size="md" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
            <Heading>Het design system van RVO</Heading>
            <p className={styles.heroParagraph}>
              ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland.
            </p>
            <Link to="/getting-started/introduction">
              <Button>Aan de slag met ROOS</Button>
            </Link>
          </MaxWidthLayout>
        </div>
      </header>
      <main>
        <MaxWidthLayout size="md" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
          <section className={styles.articleGrid}>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Huisstijl</Heading>
              <p>De kleuren, lettertypes, de space en sizes die er beschikbaar zijn binnen ROOS</p>
              <Link to="/design-tokens/color">
                <RVOLink>Bekijk de huisstijl</RVOLink>
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Componenten</Heading>
              <p>Een collectie aan gebruiksvriendelijke, toegankelijke componenten die voldoen aan de Rijkshuisstijl</p>
              <Link to="/components/accordion">
                <RVOLink>Bekijk de componenten</RVOLink>
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Patronen</Heading>
              <p>Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren</p>
              <Link to="/patterns/patterns">
                <RVOLink>Bekijk de patronen</RVOLink>
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Voor designers</Heading>
              <p>Ben je een designer en wil je ROOS gebruiken? Gebruik dan ons Figma bestand</p>
              <Link to="https://www.figma.com/file/NHV1JYxJ28vKZInSI9u200/ROOS-(RVO-Design-System)?node-id=282%3A5324">
                <RVOLink showIcon="after" icon="externe-link">
                  Figma bestand
                </RVOLink>
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Voor developers</Heading>
              <p>Ben je een developer en wil je ROOS gebruiken? Ga dan naar onze Storybook omgeving</p>
              <Link
                to={
                  process.env.NODE_ENV === 'development'
                    ? 'http://localhost:6006'
                    : 'https://nl-design-system.github.io/rvo/'
                }
              >
                <RVOLink>Storybook omgeving</RVOLink>
              </Link>
            </div>
            <div className={clsx('rvo-layout-column', 'rvo-layout-gap--sm')}>
              <Heading type="h2">Hulp nodig?</Heading>
              <p>
                Kom je er niet uit? We vinden het altijd leuk als iemand ons Design System wil gebruiken, dus stuur ons
                een e-mail
              </p>
              <Link to="mailto:designsystem@rvo.nl">
                <RVOLink>designsystem@rvo.nl</RVOLink>
              </Link>
            </div>
          </section>
        </MaxWidthLayout>
      </main>
    </Layout>
  );
}
