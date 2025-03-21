import {
  Button,
  Fieldset,
  Footer,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  Link,
  MenuBar,
  MobileMenuBar,
  RadioButtonField,
} from '@nl-rvo/components';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Subsidiepagina = () => {
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
              { label: 'Subsidie- en financieringswijzer', active: true, link: '#' },
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
        <div className="rvo-max-width-layout rvo-max-width-layout--sm">
          <Fieldset legend="Krijgt u subsidie?">
            <p className="rvo-margin-block-end--lg rvo-margin-block-start--2xs">
              Beantwoord maximaal 5 vragen en u ziet direct of u kans maakt op deze subsidie.
            </p>
            <RadioButtonField
              name="subsidie"
              label="Bent u eigenaar van het gebouw?"
              options={[
                { id: 'ja', label: 'Ja', checked: true },
                { id: 'nee', label: 'Nee' },
              ]}
            />
            <RadioButtonField
              name="subsidie"
              label="Heeft u toestemming van de VvE?"
              options={[
                { id: 'toestemming-ja', label: 'Ja', checked: true },
                { id: 'toestemming-nee', label: 'Nee' },
              ]}
            />
            <Heading type="h3" noMargins={true}>
              U kunt subsidie aanvragen
            </Heading>
            <p className="rvo-paragraph--no-spacing">
              Op basis van uw antwoorden komt u in aanmerking voor de FSSBD-subsidie.
            </p>
            <a href="#" className="rvo-link rvo-link--donkerblauw">
              Lees hoe u subsidie aanvraagt
            </a>
          </Fieldset>
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

        <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Webinar: stap voor stap naar subsidie voor bijen op het dak
          </Heading>
          <p className="rvo-paragraph">
            Meer weten over de voorwaarden van deze subsidie? Wilt u tips krijgen voor een goede aanvraag? Meld u aan
            voor het webinar op 2 juni 2025 van 12:00 tot 13:00 uur. U verhoogt zo de kans dat wij uw voorstel
            goedkeuren.
          </p>
          <Button kind="secondary" size="sm">
            Aanmelden webinar
          </Button>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Ervaringen van andere bedrijven
          </Heading>
          <p className="rvo-paragraph">
            Elk jaar vragen zo'n 10.000 dakeigenaren deze subsidie aan. U ook? Lees wat hen dit oplevert.
          </p>
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

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--lg ">
          <Heading type="h2">Subsidieproces in 4 stappen</Heading>
          <img src="https://www.rvo.nl/sites/default/files/2024-10/Fictieve%20infographic%20Bijen%20op%20het%20dak.svg" />
        </div>
        <div className="rvo-accordion  rvo-max-width-layout rvo-max-width-layout--sm ">
          <details className="rvo-accordion__item">
            <summary className="rvo-accordion__item-summary">
              <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                <span
                  className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                  role="img"
                  aria-label="Delta omlaag"
                ></span>
                <span
                  className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                  role="img"
                  aria-label="Delta omhoog"
                ></span>
                Uitgeschreven tekst
              </h3>
            </summary>
            <div className="rvo-accordion__content rvo-margin-block-start--md">
              {' '}
              <Heading type="h3" noMargins={true}>
                Hoe vraagt u subsidie aan?
              </Heading>{' '}
              <p className="rvo-paragraph">We leggen het stap voor stap voor u uit.</p>
              <Heading type="h4" noMargins={true}>
                Stap 1: uw aanvraag voorbereiden
              </Heading>
              <p className="rvo-paragraph">Verzamel alle documenten en gegevens die nodig zijn voor uw aanvraag.</p>{' '}
              <Heading type="h4" noMargins={true}>
                Stap 2: aanvragen
              </Heading>{' '}
              <p className="rvo-paragraph">
                Vul het aanvraagformulier in via Mijn RVO. Binnen 13 weken ontvangt u ons besluit.
              </p>
              <Heading type="h4" noMargins={true}>
                Stap 3: Uw project uitvoeren
              </Heading>{' '}
              <p className="rvo-paragraph">
                Na goedkeuring ontvangt u het subsidiebedrag. U start met uw project en geeft ons jaarlijks de voortgang
                door.
              </p>{' '}
              <Heading type="h4" noMargins={true}>
                Stap 4: Vaststelling aanvragen
              </Heading>{' '}
              <p className="rvo-paragraph">
                Als uw project klaar is, vraagt u vaststelling aan via Mijn RVO. U geeft de gemaakte kosten aan ons
                door.
              </p>
            </div>
          </details>
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

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2">Veelgestelde vragen</Heading>

          <div className="rvo-accordion">
            <details className="rvo-accordion__item">
              <summary className="rvo-accordion__item-summary">
                <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                    role="img"
                    aria-label="Delta omlaag"
                  ></span>
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                    role="img"
                    aria-label="Delta omhoog"
                  ></span>
                  Welke kosten krijg ik vergoed met de subsidie?
                </h3>
              </summary>
              <div className="rvo-accordion__content">
                {' '}
                <p className="rvo-paragraph">
                  De subsidie vergoedt kosten zoals de aanschaf van bijenkasten, bijenvolken en beschermende kleding.
                  Ook kunt u subsidie krijgen voor het volgen van een bijenteeltcursus. Meer informatie over welke
                  kosten deze subsidie precies dekt, vindt u op de pagina{' '}
                  <a href="#" className="rvo-link">
                    SFFBD: Voorwaarden.
                  </a>
                </p>
              </div>
            </details>
            <details className="rvo-accordion__item">
              <summary className="rvo-accordion__item-summary">
                <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                    role="img"
                    aria-label="Delta omlaag"
                  ></span>
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                    role="img"
                    aria-label="Delta omhoog"
                  ></span>
                  Hoe kan ik aantonen dat mijn dak geschikt is voor bijenkasten?
                </h3>
              </summary>
              <div className="rvo-accordion__content">
                {' '}
                <p className="rvo-paragraph">
                  U kunt een geschiktheidsverklaring van een erkende bijenhouderijorganisatie meesturen bij uw aanvraag.
                  Of u laat een professional een inspectierapport opstellen. Dit rapport bevestigt dat uw dak voldoet
                  aan de eisen voor het veilig houden van bijen. Het gaat dan onder andere om de stabiliteit van het dak
                  en het onderhoud van het dak.
                </p>
              </div>
            </details>
            <details className="rvo-accordion__item">
              <summary className="rvo-accordion__item-summary">
                <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                    role="img"
                    aria-label="Delta omlaag"
                  ></span>
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                    role="img"
                    aria-label="Delta omhoog"
                  ></span>
                  Moet ik een cursus volgen om de subsidie te krijgen?
                </h3>
              </summary>
              <div className="rvo-accordion__content">
                {' '}
                <p className="rvo-paragraph">
                  Heeft u geen ervaring hebt met het houden van bijen? Dan is het verplicht om een erkende
                  bijenteeltcursus te volgen. Als u al ervaring heeft, moet u aantonen dat u voldoende kennis en
                  vaardigheden hebt. U doet dit met certificaten of referenties.
                </p>
              </div>
            </details>
          </div>

          <p className="rvo-paragraph">
            <a href="#" className="rvo-link">
              Bekijk alle veelgestelde vragen
            </a>
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2">Meer informatie</Heading>

          <div className="rvo-accordion">
            <details className="rvo-accordion__item">
              <summary className="rvo-accordion__item-summary">
                <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                    role="img"
                    aria-label="Delta omlaag"
                  ></span>
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                    role="img"
                    aria-label="Delta omhoog"
                  ></span>
                  Waarom bestaat deze subsidie?
                </h3>
              </summary>
              <div className="rvo-accordion__content">
                {' '}
                <p className="rvo-paragraph">
                  Bijen spelen een cruciale rol in het ecosysteem. Ze helpen bij bestuiving, wat heel belangrijk is voor
                  de voortplanting van veel gewassen. Maar de afgelopen jaren ging de bijenpopulatie wereldwijd erg
                  achteruit. Dit komt vooral door verlies aan habitat (de omgeving waar bijen zich het meest
                  thuisvoelen), het gebruik van pesticiden en klimaatverandering. Om de bijen te ondersteunen en de
                  biodiversiteit te vergroten, zijn bijvriendelijke initiatieven, zoals bijen op daken, belangrijk.
                </p>
              </div>
            </details>
            <details className="rvo-accordion__item">
              <summary className="rvo-accordion__item-summary">
                <h3 className="rvo-accordion__item-title utrecht-heading-3 rvo-heading--no-margins rvo-heading--mixed">
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                    role="img"
                    aria-label="Delta omlaag"
                  ></span>
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                    role="img"
                    aria-label="Delta omhoog"
                  ></span>
                  Officiële wettekst van de regeling
                </h3>
              </summary>
              <div className="rvo-accordion__content">
                {' '}
                <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
                  <li>
                    <a href="#" className="rvo-link">
                      Aankondiging regeling 12 december 2023
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rvo-link">
                      Wijzigingen regeling 1 januari 2024
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <p className="rvo-paragraph">
            <em>In opdracht van:</em>
            <br /> Ministerie van Klimaat en Groene Groei
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Zie ook
          </Heading>
          <p className="rvo-paragraph">
            <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Home"
              ></span>
              Zonne-energie op gebouwen
            </a>
          </p>
        </div>

        <div className="rvo-feedback rvo-margin-block-start--3xl">
          <LayoutFlow row={true} wrap={true} gap="sm" justifyContent="center">
            <Icon icon="tekstballon-met-hart" size="2xl" />
            <em className="rvo-text--xl">Bent u tevreden over deze pagina?</em>
            <span className="rvo-rhs-update-component">
              <Button kind="secondary">Geef uw mening</Button>
            </span>
          </LayoutFlow>
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

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Subsidiepagina;
