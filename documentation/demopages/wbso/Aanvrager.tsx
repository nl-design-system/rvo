import React from 'react';
import 'normalize.css';
import './style.scss';
import Header from './components/Header';

const Aanvrager = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-wrapper">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--home"></span>Mijn
                  aanvragen
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Nieuwe aanvraag
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--user"></span>Mijn
                  gegevens
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  Uitloggen
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium rvo-menu-link--toggle">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--menu"></span>Menu
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
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--completed">
              <a href="vormvrije-aanvraag.html" className="rvo-process-step-link">
                Vormijvrije aanvraag
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--completed">
              <a href="startpagina.html" className="rvo-process-step-link">
                Voordat u begint
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--doing">
              <a href="aanvrager.html" className="rvo-process-step-link">
                Aanvrager
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--incomplete">
              <a href="projecten.html" className="rvo-process-step-link">
                Projecten
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--incomplete">
              <a href="so-uren.html" className="rvo-process-step-link">
                S&O uren
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--incomplete">
              <a href="indienen.html" className="rvo-process-step-link">
                Indienen
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--process-completed">Aanvraag ingediend</div>
          </div>
        </div>
        <div className="rvo-form">
          <div className="intro">
            <a href="startpagina.html" className="back-link">
              <span className="rvo-icon rvo-icon--sm rvo-icon--before rvo-icon--hemelblauw rvo-icon--terug"></span>Terug
              naar Voordat u begint
            </a>
            <h1>Aanvrager</h1>
            <h2>Bedrijfsgegevens (NHR)</h2>
            <dl className="rvo-data">
              <dt>KVK-nummer</dt>
              <dd>35012085</dd>
              <dt>Naam</dt>
              <dd>Albert Heijn B.V.</dd>
              <dt>Rechtsvorm</dt>
              <dd>bv</dd>
              <dt>RSIN</dt>
              <dd>002230884</dd>
            </dl>
            <h2>Bedrijfsgegevens</h2>
            <dl className="rvo-data">
              <dt>Website</dt>
              <dd className="rvo-url">https://www.streetplanet.nl</dd>
              <dt>Maakt u deel uit van een fiscale eenheid voor de vennootschapbelasting?</dt>
              <dd>Ja</dd>
              <dt>RSIN-Nummer fiscale moeder</dt>
              <dd>200000007</dd>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aanvrager;
