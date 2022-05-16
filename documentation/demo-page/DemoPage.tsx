import React from 'react';
import 'normalize.css';
import './style.css';

export const DemoPage = () => {
  return (
    <>
      <header className="header">
        <div className="max-width-wrapper">
          <div className="logo__wrapper">
            <a href="#" className="logo__link">
              <img src="/img/logo.svg" className="logo__img" />
            </a>
          </div>
        </div>
      </header>
      <div className="navigation navigation--hemelblauw">
        <div className="max-width-wrapper">
          <nav className="main-menu">
            <ul className="menu menu--main-menu">
              <li className="menu-item">
                <a href="#" className="menu-link menu-link--medium">
                  <span className="icon icon--medium icon--before icon--wit icon--home"></span>Mijn aanvragen
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-link--medium">
                  <span className="icon icon--medium icon--before icon--wit icon--plus"></span>Nieuwe aanvraag
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-link--medium">
                  <span className="icon icon--medium icon--before icon--wit icon--user"></span>Mijn gegevens
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link menu-link--medium">
                  Uitloggen
                </a>
              </li>
            </ul>
          </nav>
          <nav className="toggle-menu">
            <ul className="menu menu--toggle-menu">
              <li className="menu-item">
                <a href="#" className="menu-link menu-link--medium menu-link--toggle">
                  <span className="icon icon--medium icon--before icon--wit icon--menu"></span>Menu toggle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="progress-tracker-active">
        <div className="progress-tracker progress-tracker--vertical">
          <div className="main-steps main-steps--no-sub-steps">
            <div className="process-step process-step--process-name">Aanvraag WBSO</div>
            <div className="process-step process-step--default process-step--medium process-step--doing">
              <a href="vormvrije-aanvraag.html" className="process-step-link">
                Vormvrije aanvraag
              </a>
            </div>
            <div className="process-step process-step--default process-step--medium process-step--incomplete">
              <a href="startpagina.html" className="process-step-link">
                Startpagina
              </a>
            </div>
            <div className="process-step process-step--default process-step--medium process-step--incomplete">
              <a href="aanvrager.html" className="process-step-link">
                Aanvrager
              </a>
            </div>
            <div className="process-step process-step--default process-step--medium process-step--incomplete">
              <a href="projecten.html" className="process-step-link">
                Projecten
              </a>
            </div>
            <div className="process-step process-step--default process-step--medium process-step--incomplete">
              <a href="so-uren.html" className="process-step-link">
                S&O uren
              </a>
            </div>
            <div className="process-step process-step--default process-step--medium process-step--incomplete">
              <a href="indienen.html" className="process-step-link">
                Indienen
              </a>
            </div>
            <div className="process-step process-step--process-completed">Aanvraag ingediend</div>
          </div>
        </div>
        <div className="form">
          <form action="startpagina.html" method="get">
            <fieldset>
              <h2>Vormvrije aanvraag</h2>
              <div className="form-field form-field--options">
                <legend>
                  Wilt u een vormvrije aanvraag indienen?
                  <span className="helper-text">
                    Heeft u geen tijd om een volledige WBSO-aanvraag in te dienen? Dien dan een vormvrije aanvraag in. U
                    vult een paar basisgegevens in en vult uw aanvraag later aan.
                  </span>
                </legend>
                <div className="options options--rows">
                  <label htmlFor="radio-a" className="option">
                    <input type="radio" id="radio-a" name="radios" />
                    Ja
                  </label>
                  <label htmlFor="radio-b" className="option">
                    <input type="radio" id="radio-b" name="radios" />
                    Nee
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="button-group">
              <button className="button button--tertiary button--small button--error">Annuleren</button>
              <button className="button button--primary button--medium">Start aanvraag</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
