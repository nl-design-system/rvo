import { Footer, Header, Heading, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import React, { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const TrainingModuleDetail = () => {
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

      <main className="rvo-padding-block-end--3xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--none rvo-hero ">
          <div className="rvo-hero__image-container">
            <img
              src="https://www.imvotraining.nl/imvo-duediligence/imvo/module_1_1/13422/AdobeStock_119067326.1600_0_1.jpg"
              className="rvo-hero__image"
              alt=""
            />
          </div>
          <div className="rvo-hero__content">
            <h1 className="rvo-hero__title utrecht-heading-1 rvo-heading--no-margins">
              Internationaal Maatschappelijk Verantwoord Ondernemen
            </h1>
          </div>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
          <ol className="rvo-breadcrumbs rvo-breadcrumbs--md">
            <li className="rvo-breadcrumbs-item">
              <a
                className="rvo-link rvo-link--no-underline"
                href="iframe.html?args=&id=pagina-s-voorbeelden-www-training--default&viewMode=story"
              >
                IMVO Trainingmodules
              </a>
            </li>
            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <a
                className="rvo-link rvo-link--no-underline"
                href="iframe.html?args=&id=pagina-s-voorbeelden-www-training-module--default&viewMode=story"
              >
                Module 1
              </a>
            </li>

            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <span className="rvo-breadcrumb-current-page">IMVO</span>
            </li>
          </ol>
          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg">
            Bedrijven in Nederland kopen producten en grondstoffen vanuit de hele wereld. Denk bijvoorbeeld aan gewassen
            zoals katoen en cacao of aan mijnbouwproducten zoals mica. Via de handel met bedrijven aan de andere kant
            van de wereld, hebben bedrijven een positief maar soms ook een negatief effect op de mensen en omgeving ver
            weg.
          </p>
          <p className="rvo-paragraph rvo-text--italic">
            Let op! Deze training is speciaal gemaakt voor MKB-bedrijven. Maar de stappen zijn ook relevant voor grote
            organisaties!
          </p>
        </div>
        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2" noMargins={true}>
            Ken je keten
          </Heading>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            Hoe zit dat voor jouw bedrijf? Om te snappen welke effecten jouw bedrijf ergens anders op de wereld heeft,
            moet je weten waar je producten precies vandaan komen en onder welke omstandigheden de producten worden
            gemaakt. Uit welke landen komen ze? Welke producenten zijn allemaal betrokken? Wie maken de producten en
            onder welke omstandigheden? Met die kennis krijg je meer grip op risico’s zoals kinderarbeid of (te) lage
            lonen van arbeiders of boeren.
          </p>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            Vervolgens ga je op zoek naar oplossingen om negatieve gevolgen te stoppen, voorkomen of beperken. Als
            bedrijf kan je negatieve gevolgen veroorzaken, aan hebben bijgedragen of aan verbonden zijn. Afhankelijk van
            de mate waarin jouw bedrijf betrokken is onderneem je acties. Deze acties vallen onder Internationaal
            Maatschappelijk Verantwoord Ondernemen (IMVO). Bij IMVO houdt een bedrijf rekening met de gevolgen van
            (internationaal) zakendoen voor mens, dier en milieu. Dat betekent dat bedrijven met 'gepaste
            zorgvuldigheid' handelen. Het begrip ‘gepaste zorgvuldigheid’ vormt de kern van IMVO.
          </p>
          <Heading type="h2" noMargins={true}>
            Gepaste zorgvuldigheid
          </Heading>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            Het proces van gepaste zorgvuldigheid (in het Engels: Due Diligence), bestaat uit zes stappen. In die
            stappen neemt een bedrijf verantwoordelijkheid voor (mogelijke) negatieve gevolgen van de eigen acties in de
            keten. De zes stappen volgen elkaar logisch op. Als alle stappen genomen zijn, begint het proces weer
            opnieuw.
          </p>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            Toekomstige wetgeving zal ‘gepaste zorgvuldigheid’ verplicht maken voor de grootste bedrijven maar ook voor
            het MKB is IMVO belangrijk. Zo verwachten belanghebbenden (‘stakeholders’) steeds meer dat bedrijven
            duurzaamheidsrisico’s in hun keten kennen en aanpakken. Het is belangrijk om te beseffen dat de keten niet
            ophoudt bij directe leveranciers (Tier 1), ook de leveranciers van die leverancier (Tier 2) en de
            leveranciers van die leverancier (Tier 3) maken onderdeel uit van de keten. Dat betekent dat samenwerking
            met de directe leveranciers (Tier 1) essentieel is om meer te leren over de schakels daarvoor (Tier 2, 3
            enzovoorts).
          </p>
          <Heading type="h2" noMargins={true}>
            De zes due diligence stappen
          </Heading>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            Afbeelding laat de zes stappen zien. Hieronder staan ze kort beschreven.
          </p>
        </div>
        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--lg ">
          <img
            src="https://www.imvotraining.nl/imvo-duediligence/imvo/module_1_1/13427/IntegreerMVO.1440_0_1.jpg"
            width="1200px"
          />
        </div>
        <div className="rvo-margin-block-start--md rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          Na deze opdracht heb je duidelijk in beeld in welke mate IMVO een rol speelt in jouw bedrijf.
        </div>
        <div className="rvo-margin-block-start--md rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <div className="rvo-card rvo-card--padding-lg rvo-card--full-colour--grijs-100">
            <div className="rvo-card__content">
              <h3 className="utrecht-heading-3">Handige hulpmiddelen</h3>
              <ul className="">
                <li>
                  Verschillende bedrijven in de voedingsmiddelensector werkten samen aan de verduurzaming van hun
                  ketens. Zij verenigden zich onder het Convenant Voedingsmiddelen. Het convenant loopt tot juni 2023 op
                  de{' '}
                  <a href="#" className="rvo-link rvo-link--donkerblauw">
                    website
                  </a>{' '}
                  is alles te vinden over het convenant.
                </li>
                <li>
                  Nederlandse bedrijven in de metaalsector committeren zich aan gepaste zorgvuldigheid en bundelen hun
                  krachten onder het IMVO-convenant. Op de{' '}
                  <a href="#" className="rvo-link rvo-link--donkerblauw">
                    website
                  </a>{' '}
                  is alles te vinden over het convenant, dat loopt tot 2024.
                </li>
                <li>
                  Verschillende bedrijven committeerden zich aan een verantwoorde goudketen. Zij bundelden hun krachten
                  onder het Convenant Verantwoord Goud, dat liep tot 2022.{' '}
                  <a href="#" className="rvo-link rvo-link--donkerblauw">
                    De pagina
                  </a>{' '}
                  van het convenant staat nog live en wordt regelmatig geüpdatet.
                </li>
                <li>
                  Deze{' '}
                  <a href="#" className="rvo-link rvo-link--donkerblauw">
                    animatie
                  </a>{' '}
                  van RVO laat zien hoe gepaste zorgvuldigheid helpt om kinderarbeid tegen te gaan.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rvo-margin-block-start--md rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <div className="rvo-card rvo-card--padding-lg rvo-card--outline">
            <div className="rvo-card__content">
              <h3 className="utrecht-heading-3">Huiswerk opdracht</h3>
              <p className="rvo-paragraph rvo-paragraph--no-margins">
                Na deze opdracht heb je duidelijk in beeld in welke mate IMVO een rol speelt in jouw bedrijf.
              </p>
              <ul className="">
                <li>Ga na of er voor jouw bedrijf een visie is voor IMVO.</li>
                <li>Is de hoogst belanghebbende (bijvoorbeeld de directeur) betrokken bij IMVO?</li>
                <li>Ga na in welke beleidsdocumenten naar IMVO verwezen wordt.</li>
                <li>
                  Ga na welke van de 6 stappen uit gepaste zorgvuldigheid een rol spelen in jullie bedrijfsprocessen.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h3" noMargins={true}>
            OESO-richtlijnen en het due diligence proces
          </Heading>
          <p className="rvo-paragraph rvo-paragraph--no-margins">
            In 2018 is de OESO Due Diligence Handreiking voor Maatschappelijk Verantwoord Ondernemen gepubliceerd. Dit
            uitgebreide document geeft bedrijven praktische handvatten om IMVO toe te passen.
            <br />
            <a href="#" className="rvo-link">
              Download de handreiking (PDF 2,1MB)
            </a>
          </p>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default TrainingModuleDetail;
