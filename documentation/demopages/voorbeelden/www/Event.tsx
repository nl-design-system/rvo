import { Button, Footer, Header, Heading, Icon, LayoutFlow, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const Event = () => {
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
              <span className="rvo-breadcrumb-current-page">Bijeenkomst intermediairs Duurzaam Wonen</span>
            </li>
          </ol>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h1">Bijeenkomst intermediairs Duurzaam Wonen</Heading>

          <p>
            <em>De inhoud van deze pagina is gecontroleerd op 22 januari 2025</em>
          </p>
          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg">
            Wilt u meer weten over de financieringskansen voor duurzame projecten voor bijvoorbeeld klimaat, energie,
            natuur en mobiliteit? Laat u inspireren en informeren tijdens de informatiebijeenkomst Europese programma’s
            voor duurzame oplossingen.
          </p>
          <div className="utrecht-button-group">
            <Button>Aanmelden</Button>
          </div>
        </div>
        <div className="rvo-custom-aanvraagperiode-budget rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--xl">
            <div className="rvo-card__content">
              <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--two rvo-margin-block-end--lg">
                <div>
                  <Icon icon="kalender" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Datum:</strong>
                  <br /> maandag 1 januari 2027
                  <br /> 09:00 - 17:00{' '}
                </div>
                <div>
                  <Icon icon="locatiemarker" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Locatie:</strong>
                  <br /> NBC Congrescentrum
                  <br />
                  Blokhoeve 1
                  <br />
                  3438 LC Nieuwegein
                  <br />
                  NL
                </div>
              </div>
            </div>

            <div className="rvo-card__content">
              <Heading type="h3"></Heading>

              <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--two rvo-margin-block-end--lg">
                <div>
                  <Icon icon="toegangspas" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Deelname:</strong>
                  <br /> Deelname is gratis
                  <br /> Aanmelden tot 21 januari, 12:00 uur{' '}
                </div>
                <div>
                  <Icon icon="kring-3-personen-torso" size="2xl" color="zwart"></Icon>
                  <br />
                  <strong>Organisatoren:</strong>
                  <br />
                  Rijksdienst voor Ondernemend Nederland
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Nieuws uit verduurzamingssector
          </Heading>
          <p className="rvo-paragraph">
            Tijdens deze jaarlijkse bijeenkomst praten we u bij over de nieuwste ontwikkelingen in de
            verduurzamingssector. Twee subsidieregelingen staan deze keer centraal: de Subsidieregeling Verduurzaming en
            Onderhoud Huurwoningen (SVOH) en de Subsidieregeling Verduurzaming voor Verenigingen van Eigenaars (SVVE). U
            krijgt een overzicht van recente wijzigingen, praktische aandachtspunten en nuttige ervaringen uit de
            praktijk, onder meer in 4 workshops.
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Workshops
          </Heading>
          <p className="rvo-paragraph">Tijdens 2 rondes met workshops zoomen we dieper in op onderwerpen zoals:</p>

          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding  rvo-max-width-layout rvo-max-width-layout--sm ">
            <li>aanvraagprocedures</li>
            <li>uitvoeringsvraagstukken</li>
            <li>praktijkvoorbeelden</li>
            <li>aanvullende subsidiemogelijkheden</li>
          </ul>

          <p className="rvo-paragraph">
            De sessies zijn interactief opgezet en bieden deelnemers praktische handvatten. Die zijn direct toe te
            passen in de dagelijkse praktijk van advisering en begeleiding.{' '}
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Onderwerpen workshops
          </Heading>

          <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding  rvo-max-width-layout rvo-max-width-layout--sm ">
            <li>SVVE in 2026 / Succesvol verduurzamen als VvE-beheerder</li>
            <li>SVOH in de praktijk</li>
            <li>SVVE in de praktijk</li>
            <li>SVOH in 2026 / Succesvol SVOH aanvragen</li>
          </ol>
        </div>

        <div className="rvo-margin-block-start--2xl  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Meer weten?
          </Heading>
          <p className="rvo-paragraph">
            <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Home"
              ></span>
              Subsidieregeling verduurzaming voor verenigingen van eigenaars (SVVE)
            </a>
            <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                role="img"
                aria-label="Home"
              ></span>
              Subsidieregeling Verduurzaming en Onderhoud Huurwoningen (SVOH)
            </a>
          </p>
        </div>

        <div className="rvo-card rvo-card--outline rvo-card--padding-lg rvo-margin-block-start--2xl rvo-card--full-colour--grijs-100  rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Aanmelden
          </Heading>
          <p className="rvo-paragraph">
            U kunt zich aanmelden via het{' '}
            <a href="#" className="rvo-link rvo-link--donkerblauw">
              online aanmeldformulier
            </a>
            . U ontvangt binnenkort een mail met uitnodiging. Wij gaan zorgvuldig om met uw persoonsgegevens. Lees meer
            over ons{' '}
            <a href="#" className="rvo-link rvo-link--donkerblauw">
              privacybeleid
            </a>
            .
          </p>
          <Button kind="primary" size="md">
            Aanmelden
          </Button>
        </div>

        <div className="rvo-max-width-layout rvo-max-width-layout--sm rvo-margin-block-start--2xl">
          <span>Hoort bij:</span>
          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
            <li>
              <a href="#" className="rvo-link">
                Bouwen en wonen
              </a>
            </li>
            <li>
              <a href="#" className="rvo-link">
                Klimaat en energie
              </a>
            </li>
          </ul>
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
        <Heading type="h2">Uitgelicht</Heading>
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
                <Heading type="h3" noMargins>
                  <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                    Energieprojecten in Nederland
                  </a>
                </Heading>
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
                <Heading type="h3" noMargins>
                  <a className="rvo-link  rvo-link--no-underline" href="#">
                    Energie & Klimaat Nieuws
                  </a>
                </Heading>
                Lees al het nieuws over Energie & Klimaat.
                <br />
                <br />
                <Icon icon="kalender" size="2xl" color="zwart"></Icon>
                <br />
                <Heading type="h3" noMargins>
                  <a className="rvo-link  rvo-link--no-underline" href="#">
                    Energie & Klimaat Evenementen
                  </a>
                </Heading>
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
                <Heading type="h3" noMargins>
                  <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                    Energie & Klimaat Nieuwsbrief
                  </a>
                </Heading>
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

export default Event;
