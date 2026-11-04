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
import { useDemoControls } from './useDemoControls';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';

const Bevestiging = () => {
  useDemoControls();

  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Bijen op het dak subsidie (FSSBD)', link: URL_VOORBEREIDING },
            { align: 'right', label: 'Hulp & Contact', link: '#' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Rosita van der Helm', link: '#', icon: 'user' },
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
            <strong>Uw aanvraag is verstuurd.</strong>
          </Alert>

          <LayoutFlow gap="xs">
            <Heading type="h1" noMargins={true}>
              Aanvraag ontvangen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
              Uw aanvraag voor de subsidie Bijen op het dak (FSSBD) is succesvol verstuurd.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="xs">
            <Heading type="h2" noMargins={true}>
              Uw aanvraagnummer
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-paragraph--lg">FSSBD-2026-00547</p>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Bewaar dit nummer voor uw administratie. U heeft ook een bevestiging ontvangen op het e-mailadres dat
              bekend is bij RVO.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h2" noMargins={true}>
              Wat gebeurt er nu?
            </Heading>
            <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding">
              <li>
                Wij beoordelen uw aanvraag. Dit duurt maximaal 13 weken na de sluitingsdatum van de
                openstellingsperiode.
              </li>
              <li>
                U ontvangt een brief of e-mail met onze beslissing over uw aanvraag. Hierin staat ook het subsidiebedrag
                als de aanvraag is goedgekeurd.
              </li>
              <li>
                Na goedkeuring kunt u beginnen met de plaatsing van de bijenkasten. Bewaar alle facturen en
                betalingsbewijzen.
              </li>
              <li>
                Na afronding van het project dient u een vaststellingsverzoek in via Mijn RVO. Hierna ontvangt u de
                subsidie uitbetaald.
              </li>
            </ol>
          </LayoutFlow>

          <LayoutFlow gap="xs">
            <Heading type="h2" noMargins={true}>
              Vragen?
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Heeft u vragen over uw aanvraag? Neem dan contact op via{' '}
              <a href="#" className="rvo-link">
                Hulp & Contact
              </a>{' '}
              of bel 088 042 42 42 (maandag t/m vrijdag 8.30–17.00 uur).
            </p>
          </LayoutFlow>

          <Link href="#" iconPlacement="right" icon="externe-link">
            Ga naar Mijn aanvragen
          </Link>
        </LayoutFlow>
      </MaxWidthLayout>

      <Footer
        secondaryMenu={[
          ...defaultSecondaryFooterItems,
          { content: 'Demo', link: '#demo' },
          { content: 'Reset', link: '#reset' },
        ]}
        maxWidth="md"
      />
    </body>
  );
};

export default Bevestiging;
