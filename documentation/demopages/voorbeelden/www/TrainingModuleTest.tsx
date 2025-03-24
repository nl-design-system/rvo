import { Footer, Header, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import { Fieldset } from '@utrecht/component-library-react';
import React, { useEffect, useState } from 'react';

const TrainingModuleTest = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [isVraag1Correct, setIsVraag1Correct] = useState(false);
  const [isVraag1Incorrect, setIsVraag1Incorrect] = useState(false);
  const [isVraag1Answered, setIsVraag1Answered] = useState(false);
  const [isVraag2Correct, setIsVraag2Correct] = useState(false);
  const [isVraag2Incorrect, setIsVraag2Incorrect] = useState(false);
  const [isVraag2Answered, setIsVraag2Answered] = useState(false);
  const [isVraag3Correct, setIsVraag3Correct] = useState(false);
  const [isVraag3Incorrect, setIsVraag3Incorrect] = useState(false);
  const [isVraag3Answered, setIsVraag3Answered] = useState(false);
  const [isVraag4Correct, setIsVraag4Correct] = useState(false);
  const [isVraag4Incorrect, setIsVraag4Incorrect] = useState(false);
  const [isVraag4Answered, setIsVraag4Answered] = useState(false);
  const [isVraag5Correct, setIsVraag5Correct] = useState(false);
  const [isVraag5Incorrect, setIsVraag5Incorrect] = useState(false);
  const [isVraag5Answered, setIsVraag5Answered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1020);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVraag1Change = (event) => {
    setIsVraag1Answered(true);
    if (event.target.value === 'Ja') {
      setIsVraag1Correct(true);
      setIsVraag1Incorrect(false);
    } else {
      setIsVraag1Correct(false);
      setIsVraag1Incorrect(true);
    }
  };

  const handleVraag2Change = (event) => {
    setIsVraag2Answered(true);
    if (event.target.value === 'Nee') {
      setIsVraag2Correct(true);
      setIsVraag2Incorrect(false);
    } else {
      setIsVraag2Correct(false);
      setIsVraag2Incorrect(true);
    }
  };

  const handleVraag3Change = (event) => {
    setIsVraag3Answered(true);
    if (event.target.value === 'Ja') {
      setIsVraag3Correct(true);
      setIsVraag3Incorrect(false);
    } else {
      setIsVraag3Correct(false);
      setIsVraag3Incorrect(true);
    }
  };

  const handleVraag4Change = (event) => {
    setIsVraag4Answered(true);
    if (event.target.value === 'Ja') {
      setIsVraag4Correct(true);
      setIsVraag4Incorrect(false);
    } else {
      setIsVraag4Correct(false);
      setIsVraag4Incorrect(true);
    }
  };

  const handleVraag5Change = (event) => {
    setIsVraag5Answered(true);
    if (event.target.value === 'Nee') {
      setIsVraag5Correct(true);
      setIsVraag5Incorrect(false);
    } else {
      setIsVraag5Correct(false);
      setIsVraag5Incorrect(true);
    }
  };

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
              src="https://www.imvotraining.nl/imvo-duediligence/imvo/module_1_3/13464/iStock_694050758.1600_0_1.jpg"
              className="rvo-hero__image"
              alt=""
            />
          </div>
          <div className="rvo-hero__content">
            <h1 className="rvo-hero__title utrecht-heading-1 rvo-heading--no-margins">Test je kennis</h1>
          </div>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
          <div className="rvo-margin-block-end--lg">
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
                <span className="rvo-breadcrumb-current-page">Test je kennis</span>
              </li>
            </ol>
          </div>
          <Fieldset>
            <div
              role="vraag-1"
              aria-labelledby="vraag-1-label"
              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
            >
              <div className="rvo-form-field__label">
                <label className="rvo-label" id="vraag-1-label" htmlFor="vraag-1">
                  Het proces van gepaste zorgvuldigheid is een continu proces.
                </label>
              </div>
              {!isVraag1Answered && (
                <div className="rvo-radio-button__group">
                  <label className="rvo-radio-button" htmlFor="vraag-1-ja">
                    <input
                      id="vraag-1-ja"
                      name="vraag-1"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Ja"
                      onChange={handleVraag1Change}
                    />
                    Juist
                  </label>
                  <label className="rvo-radio-button" htmlFor="vraag-1-nee">
                    <input
                      id="vraag-1-nee"
                      name="vraag-1"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Nee"
                      onChange={handleVraag1Change}
                    />
                    Onjuist
                  </label>
                </div>
              )}
            </div>
            {isVraag1Correct && (
              <div className="vraag-1-goed rvo-margin-block-end--lg">
                <p className="rvo-pargraph rvo-pargraph--no-spacing">
                  Deze vraag heb je <strong>goed</strong> beantwoord, de stelling is juist. <br />
                  <br />
                  Gepaste zorgvuldigheid is een continu proces waarbij je steeds de 6 stappen doorloopt voor de
                  producten die je inkoopt.
                </p>
              </div>
            )}
            {isVraag1Incorrect && (
              <div className="vraag-1-fout rvo-margin-block-end--lg">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is <strong>juist.</strong> <br />
                  <br />
                  Gepaste zorgvuldigheid is een continu proces waarbij je steeds de 6 stappen doorloopt voor de
                  producten die je inkoopt.
                </p>
              </div>
            )}

            <div
              role="vraag-2"
              aria-labelledby="vraag-2-label"
              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
            >
              <div className="rvo-form-field__label">
                <label className="rvo-label" id="vraag-2-label" htmlFor="vraag-2">
                  Gepaste zorgvuldigheid is alleen voor grotere bedrijven.
                </label>
              </div>
              {!isVraag2Answered && (
                <div className="rvo-radio-button__group">
                  <label className="rvo-radio-button" htmlFor="vraag-2-ja">
                    <input
                      id="vraag-2-ja"
                      name="vraag-2"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Ja"
                      onChange={handleVraag2Change}
                    />
                    Juist
                  </label>
                  <label className="rvo-radio-button" htmlFor="vraag-2-nee">
                    <input
                      id="vraag-2-nee"
                      name="vraag-2"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Nee"
                      onChange={handleVraag2Change}
                    />
                    Onjuist
                  </label>
                </div>
              )}
            </div>
            {isVraag2Correct && (
              <div className="vraag-2-goed">
                <p className="rvo-pargraph rvo-pargraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is onjuist. <br />
                  <br />
                  Wetgeving zal ‘gepaste zorgvuldigheid’ verplicht maken voor de grootste bedrijven maar ook voor het
                  MKB is het belangrijk. Grote bedrijven in de keten zullen namelijk meer vragen stellen aan MKB’ers die
                  hen toeleveren. Daarnaast verwachten belanghebbenden (‘stakeholders’) steeds meer dat bedrijven
                  duurzaamheidsrisico’s in hun keten kennen en aanpakken.
                </p>
              </div>
            )}
            {isVraag2Incorrect && (
              <div className="vraag-2-fout">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is <strong>onjuist.</strong>{' '}
                  <br />
                  <br />
                  Gepaste zorgvuldigheid is voor alle bedrijven, ongeacht hun grootte.
                </p>
              </div>
            )}

            <div
              role="vraag-3"
              aria-labelledby="vraag-3-label"
              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
            >
              <div className="rvo-form-field__label">
                <label className="rvo-label" id="vraag-3-label" htmlFor="vraag-3">
                  Het is belangrijk om het beleid ook extern te delen.
                </label>
              </div>
              {!isVraag3Answered && (
                <div className="rvo-radio-button__group">
                  <label className="rvo-radio-button" htmlFor="vraag-3-ja">
                    <input
                      id="vraag-3-ja"
                      name="vraag-3"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Ja"
                      onChange={handleVraag3Change}
                    />
                    Juist
                  </label>
                  <label className="rvo-radio-button" htmlFor="vraag-3-nee">
                    <input
                      id="vraag-3-nee"
                      name="vraag-3"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Nee"
                      onChange={handleVraag3Change}
                    />
                    Onjuist
                  </label>
                </div>
              )}
            </div>
            {isVraag3Correct && (
              <div className="vraag-3-goed">
                <p className="rvo-pargraph rvo-pargraph--no-spacing">
                  Deze vraag heb je <strong>goed</strong> beantwoord, de stelling is juist. <br />
                  <br />
                  Het delen van het beleid extern zorgt voor transparantie en kan bijdragen aan het vertrouwen van
                  belanghebbenden.
                </p>
              </div>
            )}
            {isVraag3Incorrect && (
              <div className="vraag-3-fout">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is <strong>juist.</strong> <br />
                  <br />
                  Het delen van het beleid extern zorgt voor transparantie en kan bijdragen aan het vertrouwen van
                  belanghebbenden.
                </p>
              </div>
            )}

            <div
              role="vraag-4"
              aria-labelledby="vraag-4-label"
              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
            >
              <div className="rvo-form-field__label">
                <label className="rvo-label" id="vraag-4-label" htmlFor="vraag-4">
                  Als ik aan de slag ga met het proces van gepaste zorgvuldigheid moet ik al mijn ketens in beeld
                  brengen.
                </label>
              </div>
              {!isVraag4Answered && (
                <div className="rvo-radio-button__group">
                  <label className="rvo-radio-button" htmlFor="vraag-4-ja">
                    <input
                      id="vraag-4-ja"
                      name="vraag-4"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Ja"
                      onChange={handleVraag4Change}
                    />
                    Juist
                  </label>
                  <label className="rvo-radio-button" htmlFor="vraag-4-nee">
                    <input
                      id="vraag-4-nee"
                      name="vraag-4"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Nee"
                      onChange={handleVraag4Change}
                    />
                    Onjuist
                  </label>
                </div>
              )}
            </div>
            {isVraag4Correct && (
              <div className="vraag-4-goed">
                <p className="rvo-pargraph rvo-pargraph--no-spacing">
                  Deze vraag heb je <strong>goed</strong> beantwoord, de stelling is juist. <br />
                  <br />
                  Het is belangrijk om een goed overzicht te hebben van alle ketens om risico's effectief te kunnen
                  beheren.
                </p>
              </div>
            )}
            {isVraag4Incorrect && (
              <div className="vraag-4-fout">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is <strong>juist.</strong> <br />
                  <br />
                  Het is belangrijk om een goed overzicht te hebben van alle ketens om risico's effectief te kunnen
                  beheren.
                </p>
              </div>
            )}

            <div
              role="vraag-5"
              aria-labelledby="vraag-5-label"
              className="utrecht-form-field utrecht-form-field--text rvo-form-field"
            >
              <div className="rvo-form-field__label">
                <label className="rvo-label" id="vraag-5-label" htmlFor="vraag-5">
                  Als bedrijf heb je alleen verantwoordelijkheid voor de praktijken van je eigen bedrijf.
                </label>
              </div>
              {!isVraag5Answered && (
                <div className="rvo-radio-button__group">
                  <label className="rvo-radio-button" htmlFor="vraag-5-ja">
                    <input
                      id="vraag-5-ja"
                      name="vraag-5"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Ja"
                      onChange={handleVraag5Change}
                    />
                    Juist
                  </label>
                  <label className="rvo-radio-button" htmlFor="vraag-5-nee">
                    <input
                      id="vraag-5-nee"
                      name="vraag-5"
                      type="radio"
                      className="utrecht-radio-button"
                      value="Nee"
                      onChange={handleVraag5Change}
                    />
                    Onjuist
                  </label>
                </div>
              )}
            </div>
            {isVraag5Correct && (
              <div className="vraag-5-goed">
                <p className="rvo-pargraph rvo-pargraph--no-spacing">
                  Deze vraag heb je <strong>goed</strong> beantwoord, de stelling is onjuist. <br />
                  <br />
                  Als bedrijf heb je ook verantwoordelijkheid voor de praktijken in je toeleveringsketen.
                </p>
              </div>
            )}
            {isVraag5Incorrect && (
              <div className="vraag-5-fout">
                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  Deze vraag heb je <strong>niet goed</strong> beantwoord, de stelling is <strong>onjuist.</strong>{' '}
                  <br />
                  <br />
                  Als bedrijf heb je ook verantwoordelijkheid voor de praktijken in je toeleveringsketen.
                </p>
              </div>
            )}
          </Fieldset>
        </div>
      </main>

      <Footer />
    </body>
  );
};

export default TrainingModuleTest;
