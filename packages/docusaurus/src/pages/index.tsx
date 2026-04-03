import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Card, Grid, Heading, Icon, LayoutFlow, Link, MaxWidthLayout } from '@nl-rvo/component-library-react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import styles from './index.module.css';

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.title}>
      <header>
        <div className={clsx(styles.heroContainer)}>
          <MaxWidthLayout size="md" className={clsx('rvo-layout-column', 'rvo-layout-gap--md', styles.hero)}>
            <Heading type="h1" noMargins={true}>
              ROOS: Het design system van RVO
            </Heading>
            <LayoutFlow gap="xs">
              <p className={styles.heroParagraph}>
                ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland. ROOS
                is een <strong>gebruiksvriendelijke</strong> en <strong>toegankelijke</strong> vertaling van de
                gemoderniseerde Rijkshuisstijl.
              </p>
              <p className={styles.heroParagraph}>
                Heb je vragen over ROOS of heb je hulp nodig? Stuur dan een e-mail naar{' '}
                <Link href="mailto:designsystem@rvo.nl">designsystem@rvo.nl</Link>.
              </p>
            </LayoutFlow>
            <Link
              style={{ display: 'inline-block', width: 'max-content' }}
              noUnderline={true}
              href={useBaseUrl('/over-roos/introductie')}
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
              linkProps={{ noUnderline: true }}
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
              linkProps={{ noUnderline: true }}
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
              linkProps={{ noUnderline: true }}
            >
              Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren.
            </Card>

            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  Figma <Icon icon="externe-link" />
                </LayoutFlow>
              }
              link="https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0"
              outline={true}
              fullCardLink={true}
              padding="lg"
              linkProps={{ noUnderline: true }}
            >
              Bekijk de ROOS componenten, patronen en templates in de Figma bibliotheek.
            </Card>

            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  Storybook <Icon icon="externe-link" />
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
              linkProps={{ noUnderline: true }}
            >
              Bekijk de code voorbeelden van de ROOS componenten, patronen en templates in Storybook.
            </Card>
            <Card
              background="none"
              title={
                <LayoutFlow row={true} gap="sm">
                  GitHub <Icon icon="externe-link" />
                </LayoutFlow>
              }
              link="https://github.com/nl-design-system/rvo"
              outline={true}
              fullCardLink={true}
              padding="lg"
              linkProps={{ noUnderline: true }}
            >
              Werk mee aan ROOS in de GitHub repository.
            </Card>
          </Grid>
        </MaxWidthLayout>
      </main>
    </Layout>
  );
}
