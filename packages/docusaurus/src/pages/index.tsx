import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Card, Grid, Heading, Icon, LayoutFlow, Link, MaxWidthLayout } from '@nl-rvo/components';
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
            <Heading noMargins={true}>ROOS: Het design system van RVO</Heading>
            <p className={styles.heroParagraph}>
              ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland. ROOS
              is een <strong>gebruiksvriendelijke</strong> en <strong>toegankelijke</strong> vertaling van de
              gemoderniseerde Rijkshuisstijl.
            </p>
            <Link
              style={{ display: 'inline-block', width: 'max-content' }}
              noUnderline={true}
              href={useBaseUrl('/aan-de-slag/introductie')}
            >
              <Button>Aan de slag met ROOS</Button>
            </Link>
          </MaxWidthLayout>
        </div>
      </header>
      <main>
        <MaxWidthLayout size="md" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
          <Grid columns="three" gap="xl">
            <Card
              title="Huisstijl"
              background="none"
              link={useBaseUrl('/design-tokens/kleuren')}
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              De kleuren, lettertypes, de space en sizes die er beschikbaar zijn binnen ROOS.
            </Card>
            <Card
              title="Componenten"
              background="none"
              link={useBaseUrl('/componenten/accordion')}
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              Een collectie aan gebruiksvriendelijke, toegankelijke componenten die voldoen aan de Rijkshuisstijl.
            </Card>
            <Card
              title="Patronen"
              background="none"
              link={useBaseUrl('/patronen/layout/applicatie-layout')}
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren.
            </Card>

            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  Voor designers <Icon icon="externe-link" />
                </LayoutFlow>
              }
              link="https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0"
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              Ben je een designer en wil je ROOS gebruiken? Gebruik dan ons Figma bestand.
            </Card>

            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  Voor developers <Icon icon="externe-link" />
                </LayoutFlow>
              }
              link={
                process.env.NODE_ENV === 'development'
                  ? 'http://localhost:6006'
                  : 'https://nl-design-system.github.io/rvo/'
              }
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              Ben je een developer en wil je ROOS gebruiken? Ga dan naar onze Storybook omgeving.
            </Card>
            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  Hulp nodig? <Icon icon="externe-link" />
                </LayoutFlow>
              }
              link={
                process.env.NODE_ENV === 'development'
                  ? 'http://localhost:6006'
                  : 'https://nl-design-system.github.io/rvo/'
              }
              outline={true}
              fullCardLink={true}
              padding="lg"
            >
              Kom je er niet uit? We vinden het altijd leuk als iemand ons Design System wil gebruiken, dus stuur ons
              een e-mail naar&nbsp;
              <Link href="mailto:designsystem@rvo.nl">designsystem@rvo.nl</Link>.
            </Card>
          </Grid>
        </MaxWidthLayout>
      </main>
    </Layout>
  );
}
