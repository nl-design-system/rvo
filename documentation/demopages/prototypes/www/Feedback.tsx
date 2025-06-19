import { Button, Fieldset, Header, Heading, Icon, LayoutFlow, Link, MenuBar } from '@nl-rvo/components';
import { useState } from 'react';

const Feedback = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  return (
    <body className="rvo-theme">
      <Header />
      <MenuBar maxWidth="md" size="lg" />
      <main className="rvo-padding-block-end--3xl rvo-padding-block-start--2xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-margin-block-end--md rvo-max-width-layout rvo-max-width-layout--sm ">
          <ol className="rvo-breadcrumbs rvo-breadcrumbs--md">
            <li className="rvo-breadcrumbs-item">
              <a className="rvo-link rvo-link--no-underline" href="#">
                Home
              </a>
            </li>

            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <span className="rvo-breadcrumb-current-page">
                Fictieve subsidieregeling voor het stimuleren van bijen op het dak (FSSBD)
              </span>
            </li>
          </ol>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h1">Fictieve subsidieregeling voor het stimuleren van bijen op het dak (FSSBD)</Heading>
          <LayoutFlow gap="xs" row={true}>
            <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
            <strong>Open voor aanvragen </strong> tot 31 december 2025
          </LayoutFlow>
          <p>
            <em>
              Deze inhoud van deze pagina is gecontroleerd op <strong>22 januari 2025</strong>
            </em>
          </p>

          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg">
            Wilt u het dak van uw huis of bedrijfspand geschikt maken voor bijen? Met deze subsidie krijgt u de kosten
            vergoed voor uw bijvriendelijke dak. Zo helpt u de hoeveelheid bijen in Nederland én het klimaat. Uw dak
            ziet er mooier uit en isoleert beter. Vraag net als 10.000 andere dakeigenaren nu subsidie bij ons aan.
          </p>
          <div className="utrecht-button-group">
            <Button>Aanvragen</Button>
            <Button kind="secondary">Uw aanvraag bekijken</Button>
          </div>
        </div>
        <div className="rvo-custom-aanvraagperiode-budget rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--xl">
            <div className="rvo-card__content">
              <h3 className="utrecht-heading-3">Aanvraagperiode</h3>
              <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--two rvo-margin-block-end--lg">
                <div>
                  <Icon icon="kalender" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Startdatum:</strong>
                  <br /> maandag 1 januari 2024
                  <br /> 09:00
                </div>
                <div>
                  <Icon icon="kalender-met-vinkje" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Einddatum:</strong>
                  <br /> woensdag 31 december 2025 <br />
                  17:00{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--xl">
            <div className="rvo-card__content">
              <h3 className="utrecht-heading-3">Budget</h3>

              <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--two rvo-margin-block-end--lg">
                <div>
                  <Icon icon="stapel-munten" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>U ontvangt maximaal:</strong>
                  <br />€ 7.500
                </div>
                <div>
                  <Icon icon="zak-met-geld" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Totaal budget:</strong>
                  <br /> € 6.500.000
                </div>
                <div>
                  <Icon icon="hand-met-rekening" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Verleend:</strong>
                  <br /> € 3.500.000
                </div>
                <div>
                  <Icon icon="circulaire-economie" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>In behandeling:</strong>
                  <br /> € 1.000.000
                </div>
                <div>
                  <Icon icon="loonheffingen" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Nog beschikbaar op 17 april 2024:</strong>
                  <br /> 31% (€ 2.000.000)
                </div>
                <div>
                  <Icon icon="info" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Aanvullende informatie:</strong>
                  <br /> Het beschikbare budget kan nog veranderen als aanvragen worden afgewezen of ingetrokken. Dan
                  komt er weer geld vrij.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rvo-margin-block-start--2xl">
                <Heading type="h2">Budget en aanvraagperiode</Heading>
                <dl className="rvo-data-list">
                  <dt>Startdatum</dt>
                  <dd>maandag 1 januari 2024 om 09:00 </dd>
                  <dt>Einddatum</dt>
                  <dd>woensdag 31 december 2025 om 17:00 </dd>
                  <dt>U ontvangt maximaal</dt>
                  <dd>€ 7.500</dd>
                  <dt>Totaal budget</dt>
                  <dd>€ 6.500.000</dd>
                  <dt>Verleend</dt>
                  <dd>€ 3.500.000</dd>
                  <dt>In behandeling</dt>
                  <dd>€ 1.000.000</dd>
                  <dt>Nog beschikbaar op 17 april 2024</dt>
                  <dd>31 % (€ 2.000.000)</dd>
                  <dt>Aanvullende informatie</dt>
                  <dd>
                    Het beschikbare budget kan nog veranderen als aanvragen worden afgewezen of ingetrokken. Dan komt er weer
                    geld vrij.
                  </dd>
                </dl>
              </div> */}
        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2">Op deze pagina:</Heading>
          <div className="rvo-layout-grid rvo-layout-grid-columns--two rvo-layout-gap--md">
            <div>
              <LayoutFlow gap="2xs">
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Krijgt u subsidie?
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Hoeveel subsidie krijgt u?
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Voorwaarden
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Subsidieproces in 4 stappen
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Uw aanvraag voorbereiden
                </Link>
              </LayoutFlow>
            </div>
            <div>
              <LayoutFlow gap="2xs">
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Aanvragen
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Na uw aanvraag
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Veelgestelde vragen
                </Link>
                <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                  Meer weten?
                </Link>
              </LayoutFlow>
            </div>
            <div></div>
          </div>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Hoeveel subsidie krijgt u?
          </Heading>
          <p className="rvo-paragraph">Bekijk met onze rekentool wat deze subsidie u oplevert. </p>
          <Button kind="secondary" size="sm">
            Bereken uw voordeel
          </Button>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Voorwaarden
          </Heading>
          <p className="rvo-paragraph">U ontvangt subsidie als u voldoet aan deze voorwaarden:</p>

          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
            <li>
              U bent eigenaar van het gebouw. Of u heeft toestemming van de eigenaar om het dak te gebruiken voor een
              bijenkast.
            </li>
            <li>
              Uw voorstel past binnen de{' '}
              <a href="#" className="rvo-link">
                richtlijnen en regels voor bijenvriendelijke praktijken en duurzaamheid
              </a>
              . U laat dit zien door een aantal vragen te beantwoorden in het aanvraagformulier.
            </li>
            <li>
              U heeft een plan voor de aanleg en het onderhoud van de bijenkast. Met ons voorbeeld bent u snel op weg.
            </li>
            <li>
              U houdt in de gaten wat de effecten zijn van uw aangepaste dak op de hoeveelheid bijen in uw omgeving. Met
              een voorbeeld laten we zien hoe u dat doet.
            </li>
          </ul>
          <div className="rvo-margin-block-start--md">
            <a href="#" className="rvo-link">
              Bekijk alle voorwaarden
            </a>
          </div>
        </div>

        <div className="rvo-quote  rvo-max-width-layout rvo-max-width-layout--sm ">
          <div className="rvo-card rvo-card--outline rvo-card--padding-md">
            <div className="rvo-card__content">
              <LayoutFlow>
                <span className="rvo-text--italic  rvo-text--xl">
                  "Als start-up doen wij er alles aan om een gezonde, toekomstbestendige leefomgeving te maken. Deze
                  subsidie voor bijen op het dak helpt ons hierbij."
                </span>
                <LayoutFlow row={true} gap="sm">
                  <div className="rvo-quote__image">
                    <img src="images/berichtenbox/profiel-foto-2.png" width="64px" height="64px" />
                  </div>
                  <div className="rvo-quote__person">
                    <LayoutFlow gap="0">
                      <span className="rvo-text rvo-text--bold">Rosita van der Helm</span>
                      <span className="rvo-text rvo-text--sm">Office manager bij Powerbod</span>
                    </LayoutFlow>
                  </div>
                </LayoutFlow>
              </LayoutFlow>
            </div>
          </div>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Uw aanvraag voorbereiden
          </Heading>
          <p className="rvo-paragraph">
            Bereid uw aanvraag goed voor door deze stappen te volgen. Dit kost u maximaal 5 uur. Met ons voorbeeld bent
            u snel op weg.
          </p>

          <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding  rvo-max-width-layout rvo-max-width-layout--sm ">
            <li>
              Regel inloggegevens van{' '}
              <a href="#" className="rvo-link">
                eHerkenning
              </a>{' '}
              op niveau 2+. Hiermee logt u in wanneer u uw aanvraagt doet. richtlijnen en regels voor bijenvriendelijke
              praktijken en duurzaamheid . U laat dit zien door een aantal vragen te beantwoorden in het
              aanvraagformulier.
            </li>
            <li>Maak een gedetailleerd projectvoorstel. Hoe u dit doet, ziet u in ons voorbeeld.</li>
            <li>Maak een overzicht van de kosten die u verwacht te maken. Ook dit vindt u in ons voorbeeld.</li>
          </ol>
          <div className="rvo-margin-block-start--md  rvo-max-width-layout rvo-max-width-layout--sm ">
            <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
              <span
                className="utrecht-icon rvo-icon rvo-icon-document-met-lijnen rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Home"
              ></span>
              Format voor projectvoorstel en kostenoverzicht
            </a>
          </div>
        </div>

        <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--2xl rvo-card--full-colour--grijs-100  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Aanvragen
          </Heading>
          <p className="rvo-paragraph">
            Vraag deze subsidie aan vanaf 1 januari 2024, 9:00 uur tot 31 januari 2025, 17:00 uur. U logt in met
            eHerkenning. Voor uw aanvraag heeft u minimaal nodig: eHerkenning niveau 2+ met machtiging 'RVO diensten op
            niveau 2+ (o.a. mijn.rvo.nl, eLoket, NVWA e-Cert)'.
          </p>
          <Button kind="primary" size="md">
            Aanvragen
          </Button>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Na uw aanvraag
          </Heading>
          <p className="rvo-paragraph">
            Na uw subsidieaanvraag ontvangt u een bevestiging per e-mail. U vindt deze bevestiging ook in Mijn RVO. Wij
            behandelen de aanvragen op volgorde van binnenkomst. De beoordeling duurt maximaal 13 weken. Maar we doen
            ons best uw aanvraag binnen 4 weken te beoordelen. U ontvangt dan een brief met ons besluit.
            <br />
            <a className="rvo-link" href="#">
              Volg de status van uw aanvraag op Mijn RVO
            </a>
          </p>
          <Heading type="h3">Uw aanvraag is goedgekeurd</Heading>
          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding  rvo-max-width-layout rvo-max-width-layout--sm ">
            <li>
              U ontvangt binnen 8 weken na de beslissing het subsidiebedrag. U kunt dan direct starten met de uitvoering
              van uw projectvoorstel.
            </li>
            <li>
              Elk jaar houdt u ons op de hoogte van de voortgang van uw project. Uw voortgangsrapportage stuurt u in via
              Mijn RVO.
            </li>
            <li>
              Is uw project klaar? Dan vraagt u vaststelling aan via Mijn RVO. Zodra wij uw vaststelling hebben
              goedgekeurd, is uw subsidieaanvraag afgerond.
            </li>
          </ul>
          <div className="rvo-margin-block-start--md rvo-margin-block-end--lg  rvo-max-width-layout rvo-max-width-layout--sm ">
            <div className=" utrecht-button-group">
              <Button kind="secondary" size="sm">
                Voortgang doorgeven
              </Button>
              <Button kind="secondary" size="sm">
                Vaststelling aanvragen
              </Button>
            </div>
          </div>
          <Heading type="h3">Uw aanvraag is afgekeurd</Heading>
          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding  rvo-max-width-layout rvo-max-width-layout--sm ">
            <li>
              We kunnen verschillende redenen hebben om uw aanvraag af te keuren. De reden leest u in de brief met het
              besluit. Heeft u hierover vragen? Neem contact met ons op via e-mail:{' '}
              <a href="#" className="rvo-link">
                bijenophetdak@rvo.nl
              </a>
            </li>
            <li>
              Bent u het niet eens met ons besluit? Dat kunt u aangeven door bezwaar te maken. Dit doet u binnen 6 weken
              na de datum die op de brief met het besluit staat. Wat u hiervoor nodig heeft en hoe u dit doet, leest u
              op onze pagina{' '}
              <a href="#" className="rvo-link">
                Bezwaar maken
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="rvo-feedback rvo-margin-block-start--2xl">
          <div className="rvo-feedback__form rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--md">
            <Fieldset legend="">
              <Heading type="h3">Wat vindt u van deze pagina?</Heading>
              <div className="rvo-layout-row rvo-layout-align-content-center rvo-padding-block-end--md">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                  <span
                    key={star}
                    style={{
                      display: 'inline-block',
                      paddingBottom: '2px',
                      borderBottom:
                        hoveredStar >= star || selectedStar >= star
                          ? '3px solid var(--rvo-color-logoblauw, #007BC7)'
                          : '3px solid transparent',
                      marginRight: idx < 4 ? '0' : '0', // geen ruimte tussen borders
                      borderRight: idx < 4 ? 'none' : undefined, // geen border tussen sterren
                      cursor: 'pointer',
                      lineHeight: 0,
                    }}
                    tabIndex={0}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setSelectedStar(star)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedStar(star);
                    }}
                  >
                    <span
                      className={`utrecht-icon rvo-icon rvo-icon-ster rvo-icon--xl`}
                      role="img"
                      aria-label="Ster"
                      style={{
                        color:
                          hoveredStar >= star || selectedStar >= star ? 'var(--rvo-color-groen, #009639)' : '#64748B',
                        transition: 'color 0.2s',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                  </span>
                ))}
                <span className="rvo-text rvo-margin-inline-start--xs">
                  {(() => {
                    const labels = [null, 'Onvoldoende', 'Redelijk', 'Voldoende', 'Goed', 'Uitstekend'];
                    const active = hoveredStar || selectedStar;
                    return labels[active] || '';
                  })()}
                </span>
              </div>
              {(selectedStar === 1 || selectedStar === 2) && (
                <div className="utrecht-form-field rvo-form-field rvo-margin-block-end--md">
                  <div className="rvo-form-field__label">
                    <label className="rvo-label" htmlFor="feedback-ontevreden">
                      Dat vinden wij jammer. Wilt u ons vertellen waarom u ontevreden bent?
                    </label>
                  </div>
                  <div className="rvo-form-field__input">
                    <textarea
                      id="feedback-ontevreden"
                      name="feedback-ontevreden"
                      className="utrecht-textarea rvo-textarea"
                      rows={4}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              )}
              {(selectedStar === 3 || selectedStar === 4 || selectedStar === 5) && (
                <div className="utrecht-form-field rvo-form-field rvo-margin-block-end--md">
                  <div className="rvo-form-field__label">
                    <label className="rvo-label" htmlFor="feedback-tips">
                      Dat horen wij graag. Heeft u verder nog tips voor ons?
                    </label>
                  </div>
                  <div className="rvo-form-field__input">
                    <textarea
                      id="feedback-tips"
                      name="feedback-tips"
                      className="utrecht-textarea rvo-textarea"
                      rows={4}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              )}
              {selectedStar > 0 && <Button kind="primary">Verstuur feedback</Button>}
            </Fieldset>
          </div>
        </div>
      </main>
      <div className="rvo-uitgelicht rvo-margin-block-end--3xl rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--lg">
        <h2 className="utrecht-heading-2">Uitgelicht</h2>
        <div className="rvo-layout-grid-container rvo-margin-block-end--md">
          <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
            <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
              <div className="rvo-card__image-container">
                <img
                  src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-12%2FProjectenboek-MIEK-en-Projectprocedure-2024.jpg%3Fitok%3DI7uP9ni9&w=750&q=85"
                  className="rvo-card__image"
                />
              </div>

              <div className="rvo-card__content">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                    Energieprojecten in Nederland
                  </a>
                </h3>
                In Nederland wordt hard gewerkt aan de verbouwing van ons energiesysteem.
              </div>
            </div>
            <div className="rvo-card rvo-card--outline rvo-card--padding-md">
              <div className="rvo-card__content">
                <LayoutFlow>
                  <span className="rvo-text--italic  rvo-text--xl">
                    "Als start-up doen wij er alles aan om een gezonde, toekomstbestendige leefomgeving te maken. Deze
                    subsidie voor bijen op het dak helpt ons hierbij."
                  </span>
                  <LayoutFlow row={true} gap="sm">
                    <div className="rvo-quote__image">
                      <img src="images/berichtenbox/profiel-foto-2.png" width="64px" height="64px" />
                    </div>
                    <div className="rvo-quote__person">
                      <LayoutFlow gap="0">
                        <span className="rvo-text rvo-text--bold">Rosita van der Helm</span>
                        <span className="rvo-text rvo-text--sm">Office manager bij Powerbod</span>
                      </LayoutFlow>
                    </div>
                  </LayoutFlow>
                </LayoutFlow>
              </div>
            </div>
            <div className="rvo-card rvo-card--outline rvo-card--padding-md">
              <div className="rvo-card__content">
                <Icon icon="nieuws" size="2xl" color="zwart"></Icon>
                <br />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link  rvo-link--no-underline" href="#">
                    Energie & Klimaat Nieuws
                  </a>
                </h3>
                Lees al het nieuws over Energie & Klimaat.
                <br />
                <br />
                <Icon icon="kalender" size="2xl" color="zwart"></Icon>
                <br />
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link  rvo-link--no-underline" href="#">
                    Energie & Klimaat Evenementen
                  </a>
                </h3>
                Bekijk alle evenementen over Energie & Klimaat.
              </div>
            </div>
            <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
              <div className="rvo-card__image-container">
                <img
                  src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2022-11%2Fzonnepanelen%2520plaatsen%25201600x1066%2520-%2520gradient.jpg%3Fitok%3DFoy6rQAY&w=640&q=85"
                  className="rvo-card__image"
                />
              </div>

              <div className="rvo-card__content">
                <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                  <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                    Energie & Klimaat Nieuwsbrief
                  </a>
                </h3>
                Schrijf u in voor onze gratis nieuwsbrief over Energie & Klimaat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Feedback;
