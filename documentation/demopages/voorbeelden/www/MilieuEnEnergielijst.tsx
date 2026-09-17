/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Alert,
  Button,
  CheckBoxFilter,
  Feedback,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  Label,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  MobileMenuBar,
  PageNumberNavigation,
  Select,
  StatusIcon,
  Tag,
  Textarea,
  TextInput,
} from '@nl-rvo/component-library-react';
import React, { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const noop = () => {};

const bedrijfsmiddelen = [
  { title: '(Biologische) ontzwavelingsinstallatie', code: 'D 4325', regeling: 'MIA\\Vamil' },
  {
    title: '(Zeer) duurzaam utiliteitsgebouw conform Milieulijst 2023, 2024 of 2025',
    code: 'D 5230',
    regeling: 'MIA\\Vamil',
  },
  {
    title: '3D-printer voor het vervangen van (industriële) productieapparatuur',
    code: 'B 1211',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Accu (batterij) voor opslag van duurzaam opgewekte elektriciteit [W]', code: '251118', regeling: 'EIA' },
  { title: 'Accu voor stroomvoorziening van lokale activiteiten', code: 'D 4316', regeling: 'MIA\\Vamil' },
  { title: 'Adiabatische luchtkoeling in stallen', code: '210208', regeling: 'EIA' },
  { title: 'Aerodynamische aanhanger [W]', code: '241228', regeling: 'EIA' },
  { title: 'Aerodynamische vrachtwagencabine [W]', code: '241229', regeling: 'EIA' },
  { title: 'Agrarische drone', code: '221233', regeling: 'EIA' },
  { title: 'Akoestische afschrikkingsapparatuur aan visnetten', code: 'F 2510', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur of voorziening voor demontage ten behoeve van hergebruik of recycling',
    code: 'F 1301',
    regeling: 'MIA\\Vamil',
  },
  {
    title:
      'Apparatuur of voorzieningen voor gescheiden opvang van mest en urine in varkens- of rundveestallen (aanpassen bestaande situatie)',
    code: 'F 2206',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Apparatuur of voorzieningen voor het combineren van akkerbouw of veeteelt met bomen en struiken',
    code: 'A 2300',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Apparatuur of voorzieningen voor het voorkomen van plastics in het milieu',
    code: 'F 1760',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor beheer van metaalbewerkingsvloeistoffen', code: 'G 1230', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor de chemische recycling van kunststof afvalstoffen',
    code: 'F 1409',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor de winning van blad-eiwit', code: 'F 2714', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor de winning van eiwit', code: 'F 2715', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor elektrificatie van processen in de chemische industrie',
    code: 'F 4111',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor emissiereductie van lachgas en methaan', code: 'F 4200', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor het afvangen van CO₂ voor nuttige toepassing', code: 'F 4101', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor het binden van CO₂', code: 'F 4103', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor het opwaarderen van plantaardige (rest)stromen tot voedingsmiddelen',
    code: 'F 2605',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor het opwerken van plantenresten tot grondstof', code: 'F 2150', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor het transport van afgevangen CO₂ voor nuttige toepassing',
    code: 'F 4102',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Apparatuur voor het verminderen van ammoniak- en methaanemissies tijdens uitrijden van dierlijke mest',
    code: 'B 2652',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor het verwijderen van zwavelhoudende geuremissies', code: 'A 4682', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor het voorkomen of vervangen van gefluoreerde broeikasgassen',
    code: 'F 4201',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor het voorkomen van CO₂-vorming', code: 'F 4100', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor natte NOₓ-verwijdering', code: 'F 4306', regeling: 'MIA\\Vamil' },
  {
    title: 'Apparatuur voor procesgeïntegreerde emissiereductie (aanpassen bestaande situatie)',
    code: 'F 4002',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Apparatuur voor rugpapiervrije etiketten', code: 'D 1215', regeling: 'MIA\\Vamil' },
  {
    title:
      'Apparatuur voor verminderd gebruik van grondwater als gietwater in de glastuinbouw (aanpassing bestaande situatie)',
    code: 'D 2812',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Apparatuur voor vermindering van emissies tijdens niet-reguliere bedrijfsvoering',
    code: 'F 4003',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Automatisch meetsysteem voor het continu meten van ammoniakemissie in een stal',
    code: 'F 2207',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Bandenspanningregelsysteem [W]', code: '240906', regeling: 'EIA' },
  { title: 'Belichtingssysteem voor tuinbouwgewassen [W]', code: '220503', regeling: 'EIA' },
  { title: 'Beregeningsboom met lage waterdruk voor het beregenen van gewassen [W]', code: '221228', regeling: 'EIA' },
  { title: 'Besparingssysteem voor klimaatinstallaties [W]', code: '210906', regeling: 'EIA' },
  { title: 'Biobased isolatie voor bestaande constructies [W]', code: '210404', regeling: 'EIA' },
  {
    title: 'Biodiversiteitversterkende voorzieningen voor het aquatisch milieu',
    code: 'F 5140',
    regeling: 'MIA\\Vamil',
  },
  {
    title: 'Biogas- of biopropaanaggregaat voor stroomvoorziening van lokale activiteiten',
    code: 'F 4317',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Biologische waterzuiveringsinstallatie voor een vaartuig', code: 'E 3340', regeling: 'MIA\\Vamil' },
  { title: 'Biotricklingsysteem voor het verwijderen van VOS', code: 'E 4585', regeling: 'MIA\\Vamil' },
  { title: 'Boiler gestookt met ijzerbrandstof [W]', code: '270405', regeling: 'EIA' },
  { title: 'Boomkor vervangende visinstallatie op een bestaand visserijschip', code: 'F 2511', regeling: 'MIA\\Vamil' },
  { title: 'Boosterinstallatie voor het benutten van overtollig groen gas', code: '260403', regeling: 'EIA' },
  { title: 'Brandstofcel in transportmiddelen [W]', code: '240618', regeling: 'EIA' },
  { title: 'Brandstofcelsysteem voor waterstof [W]', code: '270404', regeling: 'EIA' },
  {
    title: 'Cadmium- en fluorvrije zonnepanelen met terugnamegarantie en losmaakbare zonnecellen',
    code: 'C 1250',
    regeling: 'MIA\\Vamil',
  },
];

const investeerInOpties = [
  { id: 'agro-visserij', label: 'Agro en visserij', checked: false },
  { id: 'bouw-infra', label: 'Bouw en infrastructuur', checked: false },
  { id: 'groot-detail', label: 'Groot- en detailhandel', checked: false },
  { id: 'industrie', label: 'Industrie', checked: false },
  { id: 'milieusector', label: 'Milieusector', checked: false },
  { id: 'toerisme', label: 'Toerisme recreatie en horeca', checked: false },
  { id: 'vervoer', label: 'Vervoer en logistiek', checked: false },
];

const milieudoelOpties = [
  { id: 'afvalwater', label: 'Afval(water) verwerken', checked: false },
  { id: 'bodem', label: 'Bodem beschermen', checked: false },
  { id: 'broeikasgassen', label: 'Broeikasgassen reduceren', checked: false },
  { id: 'circulair', label: 'Circulair ondernemen', checked: false },
  { id: 'energie', label: 'Energie besparen', checked: false },
  { id: 'energietransitie', label: 'Energietransitie bevorderen', checked: false },
  { id: 'veiligheid', label: 'Externe veiligheid bevorderen', checked: false },
  { id: 'geluid', label: 'Geluidshinder beperken', checked: false },
  { id: 'grondstoffen', label: 'Grondstoffen besparen', checked: false },
  { id: 'hernieuwbaar', label: 'Hernieuwbare grondstoffen gebruiken', checked: false },
  { id: 'klimaatadaptatie', label: 'Klimaatadaptatie bevorderen', checked: false },
  { id: 'lucht', label: 'Luchtkwaliteit verbeteren', checked: false },
  { id: 'natuur', label: 'Natuurbescherming en biodiversiteit bevorderen', checked: false },
  { id: 'water', label: 'Water beheren en beschermen', checked: false },
];

const regelingOpties = [
  { id: 'eia', label: 'EIA', checked: false },
  { id: 'mia-vamil', label: 'MIA\\Vamil', checked: false },
];

const adviseurResultaten = [
  { title: 'Adiabatische luchtkoeling in stallen', code: '210208', regeling: 'EIA' },
  { title: 'Apparatuur voor het afvangen van CO₂ voor nuttige toepassing', code: 'F 4101', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor het binden van CO₂', code: 'F 4103', regeling: 'MIA\\Vamil' },
  { title: 'Apparatuur voor het voorkomen van CO₂-vorming', code: 'F 4100', regeling: 'MIA\\Vamil' },
  {
    title:
      'Apparatuur voor verminderd gebruik van grondwater als gietwater in de glastuinbouw (aanpassing bestaande situatie)',
    code: 'D 2812',
    regeling: 'MIA\\Vamil',
  },
  { title: 'Belichtingssysteem voor tuinbouwgewassen [W]', code: '220503', regeling: 'EIA' },
  { title: 'Beregeningsboom met lage waterdruk voor het beregenen van gewassen [W]', code: '221228', regeling: 'EIA' },
  { title: 'Besparingssysteem voor klimaatinstallaties [W]', code: '210906', regeling: 'EIA' },
];

const DEFAULT_VRAAG =
  'Wij zijn een glastuinbouwbedrijf gespecialiseerd in tomatenteelt. We zoeken mogelijkheden om energie te besparen en onze CO₂-uitstoot te verminderen.';

const MilieuEnEnergielijst = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [vraagValue, setVraagValue] = useState(DEFAULT_VRAAG);
  const [ingediendVraag, setIngediendVraag] = useState<string | null>(null);
  const [vraagError, setVraagError] = useState(false);
  const [investeerInState, setInvesteerInState] = useState(investeerInOpties);
  const [milieudoelState, setMilieudoelState] = useState(milieudoelOpties);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1020);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStart = () => {
    if (!vraagValue.trim()) {
      setVraagError(true);
      return;
    }
    setVraagError(false);
    setIngediendVraag(vraagValue);
    setInvesteerInState((prev) => prev.map((o) => ({ ...o, checked: o.id === 'agro-visserij' })));
    setMilieudoelState((prev) => prev.map((o) => ({ ...o, checked: o.id === 'energie' || o.id === 'broeikasgassen' })));
  };

  const handleOpnieuw = () => {
    setIngediendVraag(null);
    setInvesteerInState(investeerInOpties);
    setMilieudoelState(milieudoelOpties);
  };

  const removeTag = (group: 'investeer' | 'milieu', id: string) => {
    if (group === 'investeer') {
      setInvesteerInState((prev) => prev.map((o) => (o.id === id ? { ...o, checked: false } : o)));
    } else {
      setMilieudoelState((prev) => prev.map((o) => (o.id === id ? { ...o, checked: false } : o)));
    }
  };

  const resetFilters = (e: React.MouseEvent) => {
    e.preventDefault();
    setInvesteerInState(investeerInOpties);
    setMilieudoelState(milieudoelOpties);
  };

  const activeTags = [
    ...investeerInState
      .filter((o) => o.checked)
      .map((o) => ({ id: o.id, label: o.label, group: 'investeer' as const, prefix: 'Ik wil duurzaam investeren in' })),
    ...milieudoelState
      .filter((o) => o.checked)
      .map((o) => ({ id: o.id, label: o.label, group: 'milieu' as const, prefix: 'Mijn milieudoel is' })),
  ];

  return (
    <body className="rvo-theme">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        {isDesktop ? (
          <MenuBar
            items={[
              { label: 'Home', link: '#' },
              { label: 'Onderwerpen', link: '#' },
              { label: 'Subsidie- en financieringswijzer', link: '#' },
              { label: 'Over ons', link: '#' },
              { label: 'Contact', link: '#' },
              { align: 'right', label: 'Mijn RVO', link: '#', icon: 'user' },
              { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
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

      <MaxWidthLayout size="sm" className="rvo-padding-block-start--2xl rvo-padding-block-end--lg">
        <div className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
          <ol className="rvo-breadcrumbs rvo-breadcrumbs--sm">
            <li className="rvo-breadcrumbs-item">
              <a href="#" className="rvo-link rvo-link--no-underline">
                Home
              </a>
            </li>
            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <span className="rvo-breadcrumb-current-page">Milieu- en Energielijst 2026</span>
            </li>
          </ol>

          <Heading type="h1" noMargins={true}>
            Milieu- en Energielijst 2026
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--xs">
            <i>De inhoud van deze pagina is gecontroleerd op 5 maart 2026</i>
          </p>
          <p className="rvo-paragraph">
            De Milieu- en Energielijst bevat alle bedrijfsmiddelen die in aanmerking komen voor EIA en MIA\Vamil. Op
            deze pagina zoekt u naar bedrijfsmiddelen in deze lijsten.
          </p>

          <div className="rvo-margin-block-start--md">
            <p className="rvo-paragraph rvo-paragraph--no-margin">
              <strong>Zie ook</strong>
            </p>
            <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
              <li>
                <a href="#" className="rvo-link">
                  Investeringsmogelijkheden per sector
                </a>{' '}
                (industrie, landbouw, gebouwde omgeving en mobiliteit)
              </li>
              <li>
                <a href="#" className="rvo-link">
                  Brochure EIA - Energielijst 2026
                </a>{' '}
                (pdf)
              </li>
              <li>
                <a href="#" className="rvo-link">
                  Brochure MIA\Vamil - Milieulijst 2026
                </a>{' '}
                (pdf)
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthLayout>

      <main className="rvo-padding-block-start--2xl rvo-padding-block-end--3xl">
        <MaxWidthLayout size="md">
          <div className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
            <Grid gap="xl" division="1fr 2fr">
              <LayoutFlow gap="xl">
                <form onSubmit={(e) => e.preventDefault()}>
                  <Fieldset legend="Op maat advies">
                    <LayoutFlow gap="sm" className="rvo-margin-block-start--sm">
                      <div className="utrecht-form-field utrecht-form-field--text rvo-form-field" role="group">
                        <div className="rvo-form-field__label">
                          <Label htmlFor="bedrijfsactiviteiten">Omschrijf uw bedrijfsactiviteiten</Label>
                          <div className="utrecht-form-field-description">
                            Vul zo compleet mogelijk in wat uw bedrijf doet en wij helpen u met het instellen van de
                            filters om bedrijfsmiddelen te tonen die mogelijk in aanmerking komen.
                          </div>
                          {vraagError && <Feedback text="Vul een omschrijving in om door te gaan." type="error" />}
                        </div>
                        {React.createElement(Textarea as React.FC<any>, {
                          id: 'bedrijfsactiviteiten',
                          rows: 9,
                          value: DEFAULT_VRAAG,
                          disabled: ingediendVraag !== null,
                          invalid: vraagError,
                          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setVraagValue(e.target.value);
                            if (vraagError) setVraagError(false);
                          },
                        })}
                      </div>
                      <div>
                        {ingediendVraag ? (
                          <Button
                            type="button"
                            kind="warning"
                            size="md"
                            icon="refresh"
                            showIcon="before"
                            onClick={handleOpnieuw}
                          >
                            Opnieuw advies krijgen
                          </Button>
                        ) : (
                          <Button type="button" kind="primary" size="md" onClick={handleStart}>
                            Geef advies
                          </Button>
                        )}
                      </div>
                    </LayoutFlow>
                  </Fieldset>
                </form>

                <form>
                  <Fieldset legend="Filters">
                    <div className="rvo-margin-block-start--sm rvo-margin-block-end--md">
                      <LayoutFlow gap="xs" row={true}>
                        <TextInput placeholder="Zoeken" />
                        <Button kind="primary" size="md">
                          Zoek
                        </Button>
                      </LayoutFlow>
                    </div>
                    <LayoutFlow gap="md">
                      <CheckBoxFilter
                        key={`investeer-${investeerInState.map((o) => o.checked).join('')}`}
                        label="Ik wil duurzaam investeren in"
                        options={investeerInState}
                        optionsOnChange={noop}
                        limit={20}
                      />
                      <CheckBoxFilter
                        key={`milieu-${milieudoelState.map((o) => o.checked).join('')}`}
                        label="Mijn milieudoel is"
                        options={milieudoelState}
                        optionsOnChange={noop}
                        limit={20}
                      />
                      <CheckBoxFilter label="Regeling" options={regelingOpties} optionsOnChange={noop} />
                    </LayoutFlow>
                  </Fieldset>
                </form>
              </LayoutFlow>

              <div>
                {ingediendVraag !== null && (
                  <div className="rvo-margin-block-end--lg">
                    <Alert kind="info" heading="Uw advies op maat" padding="md">
                      <p className="rvo-paragraph">
                        U bent actief in de agrarische sector en richt zich op energiebesparing en reductie van
                        broeikasgassen. Wij hebben de filters ingesteld op <strong>Agro en visserij</strong> en
                        milieudoelen <strong>Energie besparen</strong> en <strong>Broeikasgassen reduceren</strong>.
                        Hieronder ziet u de bedrijfsmiddelen die mogelijk voor u in aanmerking komen.
                      </p>
                    </Alert>
                  </div>
                )}

                {activeTags.length > 0 && (
                  <div className="rvo-margin-block-end--md">
                    <LayoutFlow gap="xs">
                      <LayoutFlow row={true} gap="sm" alignItems="center">
                        <span className="rvo-text--md rvo-text--bold">Actieve filters</span>
                        <a
                          href="#"
                          className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-text--rood"
                          onClick={resetFilters}
                        >
                          <StatusIcon type="foutmelding" size="sm" /> Reset filters
                        </a>
                      </LayoutFlow>
                      <LayoutFlow gap="md" row={true} wrap={true}>
                        {activeTags.map((tag) => (
                          <Tag
                            key={tag.id}
                            type="info"
                            icon="kruis"
                            iconPlacement="after"
                            onClick={() => removeTag(tag.group, tag.id)}
                          >
                            {tag.prefix} <strong>{tag.label}</strong>
                          </Tag>
                        ))}
                      </LayoutFlow>
                    </LayoutFlow>
                  </div>
                )}

                <div className="rvo-margin-block-end--sm">
                  <LayoutFlow row={true} justifyContent="space-between" alignItems="center">
                    <p className="rvo-paragraph rvo-paragraph--no-margin">
                      <strong>{ingediendVraag ? adviseurResultaten.length : 347}</strong> resultaten gevonden
                    </p>
                    <LayoutFlow gap="2xs">
                      <label htmlFor="sorteer" className="rvo-text--md rvo-text--bold">
                        Sorteer resultaten op
                      </label>
                      <Select
                        id="sorteer"
                        options={[
                          { label: 'A-Z', value: 'title-asc' },
                          { label: 'Z-A', value: 'title-desc' },
                          { label: 'Nieuwste eerst', value: 'newest' },
                          { label: 'Oudste eerst', value: 'oldest' },
                          { label: 'Relevantie', value: 'relevance' },
                        ]}
                        size="sm"
                      />
                    </LayoutFlow>
                  </LayoutFlow>
                </div>

                <LayoutFlow gap="sm">
                  {(ingediendVraag ? adviseurResultaten : bedrijfsmiddelen).map((item, i) => (
                    <div key={i} className="rvo-card rvo-card--outline rvo-card--padding-md">
                      <div className="rvo-card--with-link-indicator">
                        <div className="rvo-card__content">
                          <Heading type="h3" noMargins={true}>
                            <a href="#" className="rvo-link rvo-link--no-underline">
                              {item.title}
                            </a>
                          </Heading>
                          <p className="rvo-paragraph rvo-paragraph--no-margin rvo-margin-block-start--2xs">
                            Bedrijfsmiddelcode: {item.code}&nbsp;&nbsp;Regeling: {item.regeling}
                          </p>
                        </div>
                        <Icon icon="delta-naar-rechts" size="md" color="hemelblauw" />
                      </div>
                    </div>
                  ))}
                </LayoutFlow>

                {!ingediendVraag && (
                  <div className="rvo-margin-block-start--xl">
                    <PageNumberNavigation numberOfPages={7} activePage={1} nextLabel="Volgende" />
                  </div>
                )}
              </div>
            </Grid>
          </div>
        </MaxWidthLayout>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export { MilieuEnEnergielijst };
