/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Footer, Header, Heading, Icon, LayoutFlow, Link, MenuBar } from '@nl-rvo/components';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const BlogDetail = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <MenuBar
        items={[
          { label: 'ROOS', link: '#' },
          { label: 'Aan de slag', link: '#' },
          { label: 'Huisstijl', link: '#' },
          { label: 'Componenten', link: '#' },
          { label: 'Patronen', link: '#' },
          { label: 'Schrijfwijzer', link: '#' },
          { label: 'Figma', link: '#', align: 'right' },
          { label: 'GitHub', link: '#', align: 'right' },
          { label: 'Storybook', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={false}
        horizontalRule={true}
        maxWidth="md"
      />

      <LayoutFlow gap="3xl">
        <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md rvo-padding-block-start--xl">
          <div>
            <Heading type="h1" noMargins={true}>
              Waarom toegankelijkheid begint bij het ontwerp
            </Heading>

            <div className="rvo-margin-block-start--sm rvo-margin-block-end--xl">
              <LayoutFlow row={true} gap="sm" alignItems="center">
                <span
                  className="rvo-bg--lichtblauw-150 rvo-padding-block-start--xs rvo-padding-block-end--xs rvo-padding-inline-start--xs rvo-padding-inline-end--xs"
                  style={{ borderRadius: '50%', display: 'inline-flex', alignItems: 'center' }}
                  aria-hidden="true"
                >
                  <Icon icon="user" size="sm" />
                </span>
                <LayoutFlow gap="0">
                  <span className="rvo-text--sm rvo-text--bold">Lisanne de Groot</span>
                  <span className="rvo-text--sm rvo-text--grijs-600">3 maart 2026</span>
                </LayoutFlow>
              </LayoutFlow>
            </div>

            <p className="rvo-text--lg">
              <span className="rvo-text--bold">Toegankelijkheid is geen afvinklijst, maar een ontwerpprincipe.</span> In
              dit artikel laat ik zien hoe je het al in de eerste schetsen meeneemt en waarom dat uiteindelijk minder
              werk oplevert dan achteraf repareren.
            </p>

            <Heading type="h2" noMargins={true} className="rvo-margin-block-start--xl">
              Waarom het zo vaak misgaat
            </Heading>
            <p>
              De meeste toegankelijkheidsproblemen ontstaan niet in de code, maar in het ontwerp. Wanneer een designer
              een kleurencombinatie kiest die onvoldoende contrast heeft, of een formulier ontwerpt zonder duidelijke
              foutmeldingen, wordt dat probleem later zelden teruggedraaid. Developers implementeren wat ze te zien
              krijgen. <Link href="#">WCAG 2.2</Link> biedt een helder kader, maar helpt pas als het vroeg in het proces
              wordt meegenomen.
            </p>

            <Heading type="h2" noMargins={true} className="rvo-margin-block-start--xl">
              Toegankelijkheid als ontwerpprincipe
            </Heading>
            <p>
              Als je toegankelijkheid als randvoorwaarde behandelt — net als responsiviteit of veiligheid — verandert de
              aanpak fundamenteel. In de praktijk betekent dit:
            </p>
            <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
              <li>Contrastratios controleren tijdens het kleurenpalet, niet pas bij de oplevering</li>
              <li>Focusvolgorde bepalen als onderdeel van de interactieontwerpen</li>
              <li>Foutmeldingen en statusindicatoren al in wireframes uitdenken</li>
              <li>Alternatieve teksten voor afbeeldingen opnemen in de inhoudsstrategie</li>
            </ul>

            <Heading type="h2" noMargins={true} className="rvo-margin-block-start--xl">
              Hoe ROOS dit ondersteunt
            </Heading>
            <p>
              Binnen het ROOS design system zijn toegankelijkheidskeuzes al ingebakken in de componenten. De
              kleurentokens zijn gecontroleerd op WCAG AA-niveau, focusstijlen zijn zichtbaar en consistent, en
              formuliercomponenten bevatten standaard de juiste ARIA-attributen. Dat geeft designers en developers een
              stevige basis — maar het ontslaat niemand van de verantwoordelijkheid om ook op paginaniveau te blijven
              nadenken.
            </p>

            <Heading type="h3" noMargins={true} className="rvo-margin-block-start--lg">
              Praktische tip
            </Heading>
            <p>
              Gebruik bij elk nieuw schermontwerp de <Link href="#">WCAG Quick Reference</Link> als checklist. Niet als
              bureaucratisch vinkjeslijstje, maar als gespreksstarter met je team. De meest impactvolle problemen zijn
              ook de makkelijkst te voorkomen.
            </p>

            <p>
              Heb je vragen of wil je met ons sparren over toegankelijkheid in jouw project? Stuur ons een e-mail op{' '}
              <Link href="mailto:designsystem@rvo.nl">designsystem@rvo.nl</Link>.
            </p>
          </div>
        </main>

        <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </div>
  );
};

export default BlogDetail;
