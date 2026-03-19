/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Button,
  CheckBoxFilter,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  MobileMenuBar,
  Select,
  TextInput,
} from '@nl-rvo/component-library-react';
import { useEffect, useState } from 'react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const footerItems = [
  {
    label: 'RVO',
    items: [
      { content: 'Contact', link: '#' },
      { content: 'Over ons', link: '#' },
      { content: 'Onze klantbeloften', link: '#' },
      { content: 'Pers', link: '#' },
      { content: 'Zaken regelen bij RVO', link: '#' },
      { content: 'Werken bij RVO', link: '#' },
      { content: 'english.rvo.nl', link: '#' },
    ],
  },
  {
    label: 'We helpen u graag vooruit!',
    items: [
      { content: 'Privacy', link: '#' },
      { content: 'Cookies en anti-spam', link: '#' },
      { content: 'Toegankelijkheid', link: '#' },
      { content: 'Proclaimer', link: '#' },
      { content: 'Open data', link: '#' },
      { content: 'Kwetsbaarheid melden', link: '#' },
    ],
  },
  {
    label: 'Snel naar',
    items: [
      { content: 'Gratis Nieuwsbrief', link: '#' },
      { content: 'Webarchief', link: '#' },
      { content: 'Documenten en publicaties', link: '#' },
      { content: 'projecten.rvo.nl', link: '#' },
      { content: "Problemen met pdf's oplossen", link: '#' },
      { content: 'Aanmelden klantenpanel', link: '#' },
    ],
  },
];

const evenementenData = [
  {
    id: 1,
    title: 'Kopie van Kopie van Ontmoet Britse en internationale bouwinnovators op Futurebuild 2026 in Londen',
    dateLabel: 'dinsdag 3 maart tot en met donderdag 5 maart 2026',
    location: 'London, GB',
    description:
      'Bent u actief in duurzame bouw, circulaire economie of innovatieve materialen? Ontdek dan nieuwe internationale kansen tijdens de één-op-één-matchmakingsessies van Futurebuild 2026 op 3 maart in Londe...',
    aanmeldenGesloten: false,
  },
  {
    id: 2,
    title: 'Kopie van Ontmoet Britse en internationale bouwinnovators op Futurebuild 2026 in Londen',
    dateLabel: 'dinsdag 3 maart tot en met donderdag 5 maart 2026',
    location: 'London, GB',
    description:
      'Bent u actief in duurzame bouw, circulaire economie of innovatieve materialen? Ontdek dan nieuwe internationale kansen tijdens de één-op-één-matchmakingsessies van Futurebuild 2026 op 3 maart in Londe...',
    aanmeldenGesloten: false,
  },
  {
    id: 3,
    title: 'Save the date: NL Paviljoen op de Hannover Messe 2026',
    dateLabel: 'maandag 20 april tot en met vrijdag 24 april 2026',
    location: 'Hannover, DE',
    description:
      'Bent u actief op het gebied van industriële technologie? Zet dan de Hannover Messe in uw agenda. Deze beurs is dé plek om innovatieve oplossingen, producten en diensten te verbinden met internationale...',
    aanmeldenGesloten: false,
  },
  {
    id: 4,
    title: 'Testevenement Angela IH',
    dateLabel: 'maandag 1 december tot en met woensdag 3 december 2026',
    location: 'NL',
    description: 'Testevenement Angela IH',
    aanmeldenGesloten: false,
  },
  {
    id: 5,
    title: 'Testevenement Angela IH',
    dateLabel: 'maandag 1 december tot en met woensdag 3 december 2026',
    location: 'NL',
    description: 'Testevenement Angela IH',
    aanmeldenGesloten: false,
  },
  {
    id: 6,
    title:
      'Economische missie naar India met staatssecretaris de Vries en minister Tieman: tuinbouw, zuivel en maritiem',
    dateLabel: 'maandag 23 februari tot en met maandag 2 maart',
    location: 'IN',
    description:
      'Bent u internationaal actief in de tuinbouw (bedekte teelt), navel of maritieme sector? Wilt u nieuwe markten verkennen in India? Ga dan mee met deze economische missie onder leiding van Aukje de Vri...',
    aanmeldenGesloten: true,
  },
];

const onderwerpenOpties = [
  { id: 'onderwerp-1', label: 'Innovatie, Onderzoek en Onderwijs', checked: false },
  { id: 'onderwerp-2', label: 'Internationaal ondernemen', checked: false },
];

const subsidiesOpties = [
  { id: 'subsidie-1', label: 'Enterprise Europe Network', checked: false },
  { id: 'subsidie-2', label: 'Programma zakendoen', checked: false },
];

const sectorenOpties = [
  { id: 'sector-1', label: 'Beveiligingsindustrie', checked: false },
  { id: 'sector-2', label: 'Bouw en infrastructuur', checked: false },
  { id: 'sector-3', label: 'Chemie en kunststoffen', checked: false },
  { id: 'sector-4', label: 'Energiesector', checked: false },
  { id: 'sector-5', label: 'Havenwerken', checked: false },
];

const landenOpties = [
  { id: 'land-1', label: 'Duitsland', checked: false },
  { id: 'land-2', label: 'India', checked: false },
  { id: 'land-3', label: 'Verenigd Koninkrijk', checked: false },
  { id: 'land-4', label: 'Wereldwijd', checked: false },
  { id: 'land-5', label: 'Zuid-Azië', checked: false },
];

const noop = () => {};

const boldDayMonth = (dateLabel: string) => {
  const parts = dateLabel.split(
    /(\d+\s+(?:januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december))/g,
  );
  return parts.map((part, i) => (/^\d+\s+\w+$/.test(part) ? <strong key={i}>{part}</strong> : part));
};

const Evenementen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1020);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <body className="rvo-theme">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        {isDesktop ? (
          <MenuBar
            items={[
              { label: 'Home', link: '#' },
              { label: 'Onderwerpen', link: '#' },
              { label: 'Subsidies en financiering', link: '#' },
              { label: 'Over ons', link: '#' },
              { label: 'Contact', link: '#' },
              { align: 'right', label: 'Mijn RVO', link: '#', icon: 'user' },
              { align: 'right', label: 'Zoeken', icon: 'zoek', link: '#' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="lg"
          />
        ) : (
          <MobileMenuBar />
        )}
      </div>

      <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl rvo-padding-block-end--lg">
        <div className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
          <Heading type="h1" noMargins={true}>
            Evenementen
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--xs">
            <a href="#" className="rvo-link">
              View this page in English
            </a>
          </p>
          <p className="rvo-paragraph">
            <em>Laatst gecontroleerd:</em> 28 mei 2025
          </p>
          <p className="rvo-paragraph rvo-text--lg rvo-text--bold">
            Wij organiseren jaarlijks veel evenementen. Vaak ook in samenwerking met onze samenwerkingspartners. U kunt
            bijvoorbeeld deelnemen aan informatiebijeenkomsten of congressen, meegaan met internationale handelsmissies
            of netwerken op beurzen. Daarnaast organiseren wij verschillende workshops, cursussen, trainingen en
            webinars.
          </p>
        </div>
      </MaxWidthLayout>

      <main className="rvo-padding-block-end--3xl">
        <MaxWidthLayout size="md">
          <Grid gap="xl" division="1fr 2fr" className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
            {/* Filterkolom links */}
            <form>
              <Fieldset legend="Filters">
                <div className="rvo-margin-block-start--sm rvo-margin-block-end--md">
                  <LayoutFlow gap="xs" row={true}>
                    <TextInput />
                    <Button kind="primary" size="md">
                      Zoek
                    </Button>
                  </LayoutFlow>
                </div>

                <LayoutFlow gap="sm">
                  <CheckBoxFilter label="Onderwerpen" options={onderwerpenOpties} optionsOnChange={noop} />
                  <CheckBoxFilter
                    label="Subsidies &amp; financieringen"
                    options={subsidiesOpties}
                    optionsOnChange={noop}
                  />
                  <CheckBoxFilter
                    label="Sectoren"
                    options={sectorenOpties}
                    optionsOnChange={noop}
                    limit={4}
                    showMoreText="+ Toon meer"
                    showLessText="- Toon minder"
                  />
                  <CheckBoxFilter
                    label="Landen"
                    options={landenOpties}
                    optionsOnChange={noop}
                    limit={4}
                    showMoreText="+ Toon meer"
                    showLessText="- Toon minder"
                  />
                </LayoutFlow>
              </Fieldset>
            </form>

            {/* Resultatenkolom rechts */}
            <div>
              <div className="rvo-margin-block-end--sm">
                <LayoutFlow row={true} justifyContent="space-between" alignItems="center">
                  <p className="rvo-paragraph rvo-paragraph--no-margin">
                    <strong>6</strong> resultaten
                  </p>
                  <LayoutFlow row={true} gap="sm" alignItems="center">
                    <label htmlFor="sorteer" className="rvo-text--md">
                      Sorteer resultaten op
                    </label>
                    <Select
                      id="sorteer"
                      options={[
                        { label: 'Oudste eerst', value: 'oudste' },
                        { label: 'Nieuwste eerst', value: 'nieuwste' },
                      ]}
                      size="md"
                    />
                  </LayoutFlow>
                </LayoutFlow>
              </div>

              <LayoutFlow gap="sm">
                {evenementenData.map((event) => (
                  <div key={event.id} className="rvo-card rvo-card--outline rvo-card--padding-md">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <Heading type="h3" noMargins={true}>
                          <a href="#" className="rvo-link rvo-link--no-underline">
                            {event.title}
                          </a>
                        </Heading>
                        <p className="rvo-paragraph rvo-paragraph--no-margin rvo-margin-block-start--xs">
                          {boldDayMonth(event.dateLabel)}
                          <br />
                          <em>{event.location}</em>
                        </p>
                        <p className="rvo-paragraph rvo-margin-block-end--xs">{event.description}</p>
                        {event.aanmeldenGesloten ? (
                          <LayoutFlow row={true} gap="xs">
                            <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
                            <span>Aanmelden gesloten</span>
                          </LayoutFlow>
                        ) : (
                          <Button kind="secondary" size="sm">
                            Aanmelden
                          </Button>
                        )}
                      </div>
                      <Icon
                        icon="delta-naar-rechts"
                        size="sm"
                        color="hemelblauw"
                        className="rvo-card__link-indicator"
                      />
                    </div>
                  </div>
                ))}
              </LayoutFlow>
            </div>
          </Grid>
        </MaxWidthLayout>
      </main>
      <Footer
        primaryMenu={footerItems}
        secondaryMenu={defaultSecondaryFooterItems}
        maxWidth="lg"
        payOff="We helpen u graag vooruit!"
      />
    </body>
  );
};

export default Evenementen;
