import { Button, Footer, Header, Heading, Hero, Icon, LayoutFlow, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const LinkBlocks = () => {
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
            horizontalRule={false}
          />
        ) : (
          <MobileMenuBar />
        )}
      </div>
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <Hero
          size="lg"
          image={{
            src: 'https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-03%2FUrk%2520windmolens%2520Klimaat%2520en%2520energie.jpg%3Fitok%3Dtq-sOBAR&w=3840&q=85',
            alt: '',
          }}
          title="Klimaat & Energie"
          subtitle="Wilt u verduurzamen? Wij helpen u met advies, netwerken, kennis, subsidies en financiering. Zodat u plannen kunt maken, investeren en vernieuwen. Zo werken we samen aan een duurzaam en economisch sterk Nederland."
        />
      </div>
      <main className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--3xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-snel-naar rvo-text--xl rvo-layout-row rvo-layout-gap--md rvo-layout--wrap rvo-margin-block-end--2xl rvo-margin-block-start--xl">
          Snel naar{' '}
          <a
            className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
            href="#"
          >
            <span
              className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
              role="img"
              aria-label="Pijl naar rechts"
            ></span>
            ISDE
          </a>
          <a
            className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
            href="#"
          >
            <span
              className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
              role="img"
              aria-label="Pijl naar rechts"
            ></span>
            Energiebesparingsplicht
          </a>
          <a
            className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
            href="#"
          >
            <span
              className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
              role="img"
              aria-label="Pijl naar rechts"
            ></span>
            Netcongestie
          </a>
          <a
            className="rvo-link rvo-link--no-underline rvo-layout-column rvo-layout-align-content-center rvo-layout-row rvo-layout-gap--2xs"
            href="#"
          >
            <span
              className="utrecht-icon rvo-icon rvo-icon-pijl-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
              role="img"
              aria-label="Pijl naar rechts"
            ></span>
            EIA
          </a>
        </div>

        <div className="rvo-overzichten rvo-margin-block-start--2xl rvo-margin-block-end--2xl">
          <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/bedrijven.webp" className="rvo-card-img" width="100px" height="66px" />
                <Heading type="h3" noMargins>
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Bedrijven
                  </a>
                </Heading>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/particulieren.webp" className="rvo-card-img" width="100px" height="66px" />
                <Heading type="h3" noMargins>
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Particulieren
                  </a>
                </Heading>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/overheden.webp" className="rvo-card-img" width="100px" height="66px" />
                <Heading type="h3" noMargins>
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Overheden
                  </a>
                </Heading>
              </div>
            </div>
            <div className="rvo-card rvo-card--full-colour--hemelblauw">
              <div className="rvo-card__content rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md">
                <img src="images/www/kennisinstellingen.webp" className="rvo-card-img" width="100px" height="66px" />
                <Heading type="h3" noMargins>
                  <a href="#" className="rvo-link--no-underline rvo-link--wit rvo-link--full-container">
                    Kennisinstellingen
                  </a>
                </Heading>
              </div>
            </div>
          </div>
        </div>

        <div className="rvo-onderwerpen rvo-margin-block-end--2xl">
          <Heading type="h2">Ga direct aan de slag</Heading>
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="warmte" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energiebesparing
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Energie besparen voor bedrijven
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Energie besparen voor woningen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Voldoen aan regels voor energie besparen en CO2 verminderen
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Voldoen aan de Energiebesparingsplicht
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="zonnepaneel" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energie opwekken
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Zonne-energie opwekken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Windenergie op land opwekken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Windenergie op zee opwekken en aansluiten
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Aansluiten op het elektriciteitsnet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="kantoor-vol-energie" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energie omzetten en (her)gebruiken
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Waterstof produceren of gebruiken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Bio-energie produceren of gebruiken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Warmte duurzaam (her)gebruiken
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="smartphone-bedienen-met-vinger" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energie flexibel inzetten
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Energie opslaan en flexibel gebruiken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Samenwerken in een energiehub
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Lokaal energie-initiatief starten met buurtgenoten
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="auto-voor-bestelbus" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Rijden en vervoeren
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Elektrisch rijden, vervoeren en laden
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Prijs vergelijken: elektrisch, waterstof of brandstof
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Financiering krijgen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Verplicht aangeven: zakelijk verkeer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Kansen benutten voor fietsen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="blad-met-wereldbol" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Beter omgaan met grondstoffen
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Aan de slag met circulair ondernemen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Financiering krijgen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Maakindustrie circulair maken
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Circulair bouwen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Grondstoffen zekerstellen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="lamp" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energie-innovaties ontwikkelen
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Onderzoeken, testen en demonstreren
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Slimme energiesystemen ontwikkelen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        CO₂ opslaan, hergebruiken en verwijderen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Internationaal kennisdelen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="groene-energie" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Energiesysteem verbeteren
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Overbelasting elektriciteitsnet verminderen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Energiesysteem in uw regio inrichten
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Projecten nationale energie-infrastructuur
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rvo-more-info-block rvo-margin-block-end--2xl">
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--two">
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="groene-energie" size="2xl" color="zwart" />
                  <Heading type="h3" noMargins>
                    Andere onderwerpen met duurzaamheid
                  </Heading>
                  <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Bouwen & Wonen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Landbouw
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Dier & Natuur
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rvo-link rvo-link--no-underline">
                        Internationaal ondernemen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rvo-uitgelicht rvo-margin-block-end--md">
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
                  In Nederland wordt hard gewerkt aan de verbouwing van ons energiesysteem. Daarvoor is nieuwe
                  energie-infrastructuur nodig, op land en op zee. We voorkomen daarmee netcongestie in de toekomst en
                  we kunnen alle duurzame energie vervoeren. Daarom werken we aan ruim 60 grote energieprojecten door
                  het hele land. Bekijk ze in ons jaaroverzicht.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-06%2FCultuurverschillen_blok.png%3Fitok%3D5hnBoB9g&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Cultuurverschillen bij internationaal ondernemen
                    </a>
                  </Heading>
                  Iedere ondernemer die zakendoet over de grens krijgt ermee te maken. Bekijk de praktische tips van
                  onze adviseurs, het ambassadenetwerk en cultuurexperts waarmee wij samenwerken. Een goede
                  voorbereiding kan doorslaggevend zijn voor uw succes.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-10%2FRWS20210909JV09-1920.jpg%3Fitok%3DGQh170Uc&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      10 jaar DEI+: Honderden innovaties voor de toekomst
                    </a>
                  </Heading>
                  Met de DEI+ demonstreren en testen ondernemers hun ideeën voor energie- en klimaatinnovatie. Alle
                  DEI+-projecten droegen bij aan het verminderen van het gebruik van fossiele brandstoffen, het
                  verbeteren van energie-efficiëntie en het inzetten van hernieuwbare energiebronnen.
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-11%2FDuurzame%2520glastuinbouw.jpg%3Fitok%3D7TUACyBz&w=750&q=85"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Veranderingen voor agrarische ondernemers in 2025
                    </a>
                  </Heading>
                  Bent u agrarisch ondernemer? Het kan zijn dat er voor de regelingen die u gebruikt iets verandert in
                  2025. Deze veranderingen vindt u nu in ons overzicht.
                </div>
              </div>
            </div>
          </div>
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

        {/* <div className="rvo-cards">
          <LayoutFlow gap="md">
            <Heading type="h2">Uitgelicht</Heading>
            <div className="rvo-cards-grid">
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/socialfund.webp" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Social Sustainability Fund
                    </a>
                  </Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Wilt u in uw internationale waardeketen de sociale duurzaamheid vergroten? Dat kan door inkomens en
                    arbeidsomstandigheden te verbeteren en kinderarbeid te bestrijden. Vraag nu subsidie aan.
                  </p>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/besparen.jpeg" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Energie besparen
                    </a>
                  </Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Energie besparen is belangrijk voor het klimaat en uw portemonnee. Bedrijven en organisaties kunnen
                    een forse bijdrage leveren. Doe ook mee en bespaar flink op uw energiekosten.
                  </p>
                </div>
              </div>
              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/beursbezoek.jpeg" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Subsidie voor groen beursbezoek
                    </a>
                  </Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    Om klimaatverandering tegen te gaan, is vergroening nodig. Daarom kunt u nu ook subsidie aanvragen
                    om mee te doen aan een handelsmissie of beurs, die zich hierop richt.
                  </p>
                </div>
              </div>

              <div className="rvo-card rvo-card--w-link rvo-card--outline rvo-card--w-img rvo-card--md">
                <div className="rvo-card-img-container">
                  <img src="images/www/lbv.png" className="rvo-card-img" />
                </div>
                <div className="rvo-card__content">
                  <Heading type="h3" noMargins>
                    <a href="#" className="rvo-link rvo-link--full-click">
                      Lbv en Lbv-plus actueel
                    </a>
                  </Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                    De Landelijke beëindigingsregeling veehouderijlocaties (Lbv) en de Lbv-plus zijn sinds 3 juli 2023
                    open voor aanvragen. We houden bij hoeveel veehouders een aanvraag hebben gedaan.
                  </p>
                </div>
              </div>
            </div>
          </LayoutFlow>
        </div> */}
        {/* <div className="rvo-feedback">
          
        </div> */}
      </main>
      {/* <div className="rvo-section rvo-section--www rvo-section--coloured-bg rvo-section--grijs-3">
        <MaxWidthLayout size="lg">
          <div className="rvo-cards">
            <LayoutFlow gap="md">
              <Heading type="h2">Blijf op de hoogte</Heading>
              <div className="rvo-cards-grid">
                <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                  <div className="rvo-card-img-container">
                    <img src="images/www/mobiel.webp" className="rvo-card-img" />
                  </div>
                  <div className="rvo-card__content">
                    <Heading type="h3" noMargins>
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Volg ons op social media
                      </a>
                    </Heading>
                    <br />
                    <span className="rvo-rhs-update-component">
                      <Button kind="primary" size="sm">
                        Volg ons
                      </Button>
                    </span>
                  </div>
                </div>
                <div className="rvo-card rvo-card--w-link  rvo-card--md">
                  <div className="rvo-card__content">
                    <LayoutFlow gap="sm">
                      <Heading type="h2">Over ons</Heading>
                      <LayoutFlow gap="md">
                        <div className="rvo-card__content-item">
                          <Icon icon="laptop" size="2xl"></Icon>
                          <Heading type="h3" noMargins>
                            <a href="#" className="rvo-link rvo-link--no-underline">
                              Zaken regelen bij RVO
                            </a>
                          </Heading>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                            Alles over inloggen, machtigen, uw persoonsgegevens en onze rekeningnummers.
                          </p>
                        </div>
                        <div className="rvo-card__content-item">
                          <Icon icon="vrouw-met-laptop" size="2xl"></Icon>
                          <Heading type="h3" noMargins>
                            <a href="#" className="rvo-link rvo-link--no-underline">
                              Werken bij RVO
                            </a>
                          </Heading>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                            Leer onze organisatie kennen en vind vacatures.
                          </p>
                        </div>
                      </LayoutFlow>
                    </LayoutFlow>
                  </div>
                </div>
                <div className="rvo-card rvo-card--w-link rvo-card--md">
                  <div className="rvo-card__content">
                    <Heading type="h3" noMargins>
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Zo kunnen we oneindig recyclen met onze nieuwe persmachine
                      </a>
                    </Heading>
                    <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--subtle">
                      Financiële steun van MIA\Vamil hielp bij ontwikkeling proces om snijafval met een pers te
                      verwerken tot nieuwe grondstoffen.
                      <br />
                      <br />
                    </p>
                    <p className="rvo-paragraph rvo-paragraph--no-spacing">
                      <strong>Jordy de Jong</strong>
                      <br />
                      <em>Customer success manager Probo</em>
                    </p>
                  </div>
                </div>

                <div className="rvo-card rvo-card--w-link rvo-card--img-bg rvo-card--w-img rvo-card--md rvo-card--inverted-colours">
                  <div className="rvo-card-img-container">
                    <img src="images/www/nieuwsbrief.webp" className="rvo-card-img" />
                  </div>
                  <div className="rvo-card__content">
                    <Heading type="h3" noMargins>
                      <a href="#" className="rvo-link rvo-link--full-click">
                        Blijf scherp met onze gratis, wekelijkse nieuwsbrief
                      </a>
                    </Heading>
                    <br />
                    <span className="rvo-rhs-update-component">
                      <Button kind="primary" size="sm">
                        Aanmelden
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </LayoutFlow>
          </div>
        </MaxWidthLayout>
      </div> */}
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default LinkBlocks;
