import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const VoordatUStart = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-wrapper">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--home"></span>Mijn
                  aanvragen
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Nieuwe aanvraag
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--user"></span>Mijn
                  gegevens
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  Uitloggen
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md rvo-menu-link--toggle">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--menu"></span>Menu
                  toggle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="rvo-progress-tracker-active">
        <div className="rvo-progress-tracker rvo-progress-tracker--vertical">
          <div className="rvo-main-steps rvo-main-steps--no-sub-steps">
            <div className="rvo-process-step rvo-process-step--process-name">Aanvraag WBSO</div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--doing">
              <a href="vormvrije-aanvraag.html" className="rvo-process-step-link">
                Vormvrije aanvraag
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="startpagina.html" className="rvo-process-step-link">
                Voordat u begint
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="aanvrager.html" className="rvo-process-step-link">
                Aanvrager
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="projecten.html" className="rvo-process-step-link">
                Projecten
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="so-uren.html" className="rvo-process-step-link">
                S&O uren
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="indienen.html" className="rvo-process-step-link">
                Indienen
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--process-completed">Aanvraag ingediend</div>
            <button className="utrecht-button rvo-button--quaternary-action rvo-button--sm" type="button">
              <span className="rvo-button__icon--quaternary-action rvo-icon rvo-icon--downloaden rvo-icon--sm"></span>
              Opslaan
            </button>
          </div>
        </div>
        <div className="rvo-form">
          <form action="startpagina.html" method="get">
            <fieldset>
              <h2>Voordat u start</h2>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>
                  Wilt u een vormvrije aanvraag indienen?
                  <span className="rvo-helper-text">
                    Heeft u geen tijd om een volledige WBSO-aanvraag in te dienen? Dien dan een vormvrije aanvraag in. U
                    vult een paar basisgegevens in en vult uw aanvraag later aan.
                  </span>
                </legend>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="radio-a" className="rvo-option">
                    <input type="radio" id="radio-a" name="radios" />
                    Ja
                  </label>
                  <label htmlFor="radio-b" className="rvo-option">
                    <input type="radio" id="radio-b" name="radios" />
                    Nee
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="rvo-button-group">
              <button className="utrecht-button rvo-button--tertiary-action rvo-button--sm rvo-button--error">
                Annuleren
              </button>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--md">Start aanvraag</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default VoordatUStart;
