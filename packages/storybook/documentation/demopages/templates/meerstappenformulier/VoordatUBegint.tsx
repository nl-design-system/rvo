/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Footer, Header, Heading, LayoutFlow, Link, MenuBar } from '@nl-rvo/component-library-react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { URL_STAP_1, URL_VOORDAT_U_BEGINT } from './urls';

export default function VoordatUBegintPage() {
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

      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md rvo-padding-block-end--3xl rvo-padding-block-start--2xl">
        <LayoutFlow gap="xl">
          <LayoutFlow gap="xs">
            <Heading type="h1" noMargins={true}>
              Naam formulier
            </Heading>
            <Heading type="h2" noMargins={true}>
              Voordat u begint
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--zwart rvo-paragraph--lg rvo-text--bold">
              Hier staat een korte inleiding over het formulier. Leg uit waarvoor het formulier dient en wat u nodig
              heeft om het in te vullen.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h3" noMargins={true}>
              Controleer uw gegevens
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Omdat u bent ingelogd, hebben wij de volgende gegevens al van u. Kloppen deze niet meer? Wijzig ze dan
              voordat u begint.
            </p>
            <dl className="rvo-data-list">
              <dt>Gegeven 1</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>Voorbeeldwaarde 1</span>
                <Link href="#" iconPlacement="left" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
              <dt>Gegeven 2</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>Voorbeeldwaarde 2</span>
                <Link href="#" iconPlacement="left" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
              <dt>Gegeven 3</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>Voorbeeldwaarde 3</span>
                <Link href="#" iconPlacement="left" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
            </dl>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h3" noMargins={true}>
              Voorbereidingen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Zet deze stappen voordat u begint met het formulier:
            </p>
            <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding">
              <li>Hier staat de eerste voorbereiding.</li>
              <li>Hier staat de tweede voorbereiding.</li>
              <li>Hier staat de derde voorbereiding.</li>
            </ol>
          </LayoutFlow>

          <div className="rvo-action-group">
            <Link href={URL_STAP_1} callToAction={true}>
              Start formulier
            </Link>
          </div>
        </LayoutFlow>
      </main>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />
    </div>
  );
}
