import { Footer, Header, Heading, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Training = () => {
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
              src="https://www.imvotraining.nl/imvo-duediligence/imvo/startpagina/13389/EDUCATION_b657042e_58a1_4f7b_b83c_0f8c237796bb_2160x.1600_0_1.jpg"
              className="rvo-hero__image"
              alt=""
            />
          </div>
          <div className="rvo-hero__content">
            <h1 className="rvo-hero__title utrecht-heading-1 rvo-heading--no-margins">
              Internationaal Maatschappelijk Verantwoord Ondernemen voor het MKB
            </h1>
            <span className="rvo-hero__subtitle">
              Praktische tips voor het bestrijden van kinderarbeid, het ondersteunen goede arbeidsomstandigheden en het
              werken naar leefbare lonen en inkomens in toeleveringsketens.
            </span>
          </div>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
          <Heading type="h2">Trainingsmodules</Heading>

          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg ">
            De training Internationaal Maatschappelijk Verantwoord Ondernemen voor het MKB is onderverdeeld in 10
            modules. Elke module biedt inzicht, hulpmiddelen, praktische tips en de mogelijkheid om je kennis te testen.
          </p>
        </div>
        <div className="rvo-uitgelicht rvo-margin-block-end--3xl rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--lg">
          <div className="rvo-layout-grid-container rvo-margin-block-end--md">
            <div className="rvo-layout-grid rvo-layout-gap--xl rvo-layout-grid-columns--four">
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13401/Hoofdbeeld_iStock_1378159183_Copy.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 1:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a
                      className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline"
                      href="iframe.html?args=&id=pagina-s-voorbeelden-www-training-module--default&viewMode=story"
                    >
                      IMVO: Hoe doe je dat?
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13402/Hoofdbeeld_iStock_1208832300_Copy_2.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 2:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Zorg voor duidelijkheid
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13403/Hoofdbeeld_iStock_1319102103_Copy.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 3:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Ken je keten en duurzaamheidsrisico’s
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13404/Hoofdbeeld_MicrosoftTeams_image_Copy.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 4:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Inzoomen op: Kinderarbeid
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13405/Hoofdbeeld_iStock_1204452444_Copy_2.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 5a:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Inzoomen op: Leefbaar inkomen
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13406/Hoofdbeeld_iStock_1279973983_Copy_2.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 5b:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Inzoomen op: Leefbaar loon
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13415/iStock-1425345605.2048_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 6:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Inzoomen op: Goede arbeidsomstandigheden
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13411/Hoofdbeeld_MicrosoftTeams_image.2048_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 7:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Risico’s aanpakken
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13408/Hoofdbeeld_iStock_647003996_Copy.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 8:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Controleer en monitor voortgang
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13413/iStock_1156269847.2048_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 9:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Communiceer over resultaten
                    </a>
                  </h3>
                </div>
              </div>
              <div className="rvo-card rvo-card--with-image rvo-card--with-image-md rvo-card--outline rvo-card--padding-xl">
                <div className="rvo-card__image-container">
                  <img
                    src="https://www.imvotraining.nl/imvo-duediligence/imvo/inhoudsopgave_trainingsmodules/13409/Hoofdbeeld_iStock_542016734_Copy_2.960_0_1.jpg"
                    className="rvo-card__image"
                  />
                </div>

                <div className="rvo-card__content">
                  Module 10:
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">
                    <a className="rvo-link rvo-card__link rvo-card__full-card-link rvo-link--no-underline" href="#">
                      Neem verantwoordelijkheid
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Training;
