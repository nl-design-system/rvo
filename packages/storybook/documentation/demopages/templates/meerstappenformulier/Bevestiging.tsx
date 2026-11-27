/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Alert,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
} from '@nl-rvo/component-library-react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { URL_VOORDAT_U_BEGINT } from './urls';

export default function BevestigingPage() {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Naam formulier', link: URL_VOORDAT_U_BEGINT },
            { align: 'right', label: 'Hulp & Contact', link: '#' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Naam gebruiker', link: '#', icon: 'user' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
          horizontalRule={true}
        />
      </div>

      <MaxWidthLayout
        size="sm"
        className="rvo-max-width-layout-inline-padding--md rvo-padding-block-start--2xl rvo-padding-block-end--3xl"
      >
        <LayoutFlow gap="xl">
          <Alert kind="success" padding="md">
            <strong>Uw formulier is verstuurd.</strong>
          </Alert>

          <LayoutFlow gap="xs">
            <Heading type="h1" noMargins={true}>
              Formulier ontvangen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
              Hier staat een korte bevestiging dat het formulier is ontvangen.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="xs">
            <Heading type="h2" noMargins={true}>
              Uw referentienummer
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-paragraph--lg">XXXX-0000-0000</p>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Bewaar dit nummer voor uw administratie. U heeft ook een bevestiging ontvangen per e-mail.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h2" noMargins={true}>
              Wat gebeurt er nu?
            </Heading>
            <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding">
              <li>Hier staat wat er als eerste gebeurt met het formulier.</li>
              <li>Hier staat wanneer en hoe u een reactie ontvangt.</li>
              <li>Hier staat wat u nog moet doen, als dat nodig is.</li>
            </ol>
          </LayoutFlow>

          <LayoutFlow gap="xs">
            <Heading type="h2" noMargins={true}>
              Vragen?
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Heeft u vragen over het formulier? Neem dan contact op via{' '}
              <a href="#" className="rvo-link">
                Hulp & Contact
              </a>
              .
            </p>
          </LayoutFlow>

          <Link href="#" iconPlacement="left" icon="terug" noUnderline={true}>
            Ga naar het overzicht
          </Link>
        </LayoutFlow>
      </MaxWidthLayout>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />
    </div>
  );
}
