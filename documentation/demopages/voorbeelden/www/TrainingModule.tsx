import { Footer, Header, LayoutFlow, Link, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import React, { useEffect, useState } from 'react';

const TrainingModule = () => {
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
              src="https://www.imvotraining.nl/imvo-duediligence/imvo/module_1/13420/Hoofdbeeld_Gespiegeld_iStock_1378159183.1600_0_1.jpg"
              className="rvo-hero__image"
              alt=""
            />
          </div>
          <div className="rvo-hero__content">
            <span className="rvo-text rvo-text--small rvo-paragraph--wit">MODULE 1</span>
            <h1 className="rvo-hero__title utrecht-heading-1 rvo-heading--no-margins">
              Internationaal Maatschappelijk Verantwoord Ondernemen
            </h1>
            <span className="rvo-hero__subtitle">Hoe doe je dat?</span>
          </div>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg ">
            Je leert wat Internationaal Maatschappelijk Verantwoord Ondernemen is, hoe je ‘gepaste zorgvuldigheid’
            toepast en wat dit concreet betekent voor jouw bedrijf.
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <div>
            <LayoutFlow gap="2xs">
              <Link
                icon="pijl-naar-rechts"
                showIcon="before"
                noUnderline={true}
                href="iframe.html?args=&id=pagina-s-voorbeelden-www-training-module-detailpagina--default&viewMode=story"
              >
                Internationaal Maatschappelijk Verantwoord Ondernemen
              </Link>
              <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                De due diligence stappen
              </Link>
              <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                Voordelen IMVO
              </Link>
              <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                IMVO voor verschillende functies in het bedrijf
              </Link>
              <Link
                icon="pijl-naar-rechts"
                showIcon="before"
                noUnderline={true}
                href="iframe.html?args=&id=pagina-s-voorbeelden-www-training-module-test--default&viewMode=story"
              >
                Test je kennis!
              </Link>
            </LayoutFlow>
          </div>

          <div></div>
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default TrainingModule;
