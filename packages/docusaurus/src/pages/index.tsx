import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Button, Grid, Heading, LayoutFlow, Link, MaxWidthLayout } from '@nl-rvo/component-library-react';
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
            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href={useBaseUrl('/design-tokens/kleuren')}
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      Huisstijl
                    </Link>
                  </Heading>
                  De kleuren, lettertypes, de space en sizes die er beschikbaar zijn binnen ROOS.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>
            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href={useBaseUrl('/componenten/accordion')}
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      Componenten
                    </Link>
                  </Heading>
                  Een collectie aan gebruiksvriendelijke, toegankelijke componenten die voldoen aan de Rijkshuisstijl.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>
            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href={useBaseUrl('/patronen/layout/applicatie-layout')}
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      Patronen
                    </Link>
                  </Heading>
                  Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>

            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href="https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=484-13305&t=vZTjQBvAiufxd5Qs-0"
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      <span className="rvo-layout-row rvo-layout-gap--sm">
                        Figma{' '}
                        <span
                          aria-hidden="true"
                          className="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw"
                        ></span>
                      </span>
                    </Link>
                  </Heading>
                  Bekijk de ROOS componenten, patronen en templates in de Figma bibliotheek.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>

            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href={
                        process.env.NODE_ENV === 'development'
                          ? 'http://localhost:6006'
                          : 'https://nl-design-system.github.io/rvo/'
                      }
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      <span className="rvo-layout-row rvo-layout-gap--sm">
                        Storybook{' '}
                        <span
                          aria-hidden="true"
                          className="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw"
                        ></span>
                      </span>
                    </Link>
                  </Heading>
                  Bekijk de code voorbeelden van de ROOS componenten, patronen en templates in Storybook.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>
            <div className="rvo-card rvo-card--outline rvo-card--padding--lg">
              <div className="rvo-card--with-link-indicator">
                <div className="rvo-card__content">
                  <Heading type="h3">
                    <Link
                      href="https://github.com/nl-design-system/rvo"
                      className="rvo-card__link rvo-card__full-card-link"
                      noUnderline={true}
                    >
                      <span className="rvo-layout-row rvo-layout-gap--sm">
                        GitHub{' '}
                        <span
                          aria-hidden="true"
                          className="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw"
                        ></span>
                      </span>
                    </Link>
                  </Heading>
                  Werk mee aan ROOS in de GitHub repository.
                </div>
                <span
                  aria-hidden="true"
                  className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                ></span>
              </div>
            </div>
          </Grid>
        </MaxWidthLayout>
      </main>
    </Layout>
  );
}
