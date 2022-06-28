import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Aanvrager = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-wrapper">
          <nav className="rvo-topnav rvo-topnav--md">
            <ul className="utrecht-topnav__list">
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="#">
                  <div className="rvo-icon rvo-icon--home rvo-icon--md rvo-icon--wit"></div> Home
                </a>
              </li>
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="#">
                  <div className="rvo-icon rvo-icon--publicatie rvo-icon--md rvo-icon--wit"></div> Mijn aanvragen
                </a>
              </li>
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="#">
                  <div className="rvo-icon rvo-icon--plus rvo-icon--md rvo-icon--wit"></div> Nieuwe aanvraag
                </a>
              </li>
              <div className="rvo-topnav__spacer"></div>
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="#">
                  Uitloggen
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium rvo-menu-link--toggle">
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
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--completed">
              <a href="vormvrije-aanvraag.html" className="rvo-process-step-link">
                Vormijvrije aanvraag
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--completed">
              <a href="startpagina.html" className="rvo-process-step-link">
                Voordat u begint
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--doing">
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
              Opslaan
            </button>
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
          <form>
            <fieldset>
              <h2>Contactpersoon</h2>
              <div className="rvo-form-field">
                <label htmlFor="contactpersoon">Contactpersoon</label>
                <select id="contactpersoon">
                  <option>Optie A</option>
                </select>
                <button className="rvo-button rvo-button--tertiary rvo-button--sm rvo-button-in-form">
                  <span className="rvo-icon rvo-icon--sm rvo-icon-before rvo-icon--hemelblauw rvo-icon--bewerken"></span>
                  Contactpersoon & bedrijfsgegevens wijzigen
                </button>
              </div>
              <h2>Organisatie</h2>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>
                  U drijft een onderneming in de zin van de Wet IB of Wet Vpb en bent geen publieke kennisinstelling?
                  <span className="rvo-helper-text">
                    Bent u geen ondernemer in de zin van de Wet IB (Inkomstenbelasting 2001) of Wet VpB
                    (Vennootschapsbelasting 1969), dan kunt u geen WBSO aanvragen. U kunt ook geen WBSO aanvragen
                    indienen als u een publieke kennisinstelling bent (zie artikel 1, onderdeel m van de WVA).
                  </span>
                </legend>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="ib-ja" className="rvo-option">
                    <input type="radio" id="ib-ja" name="ib"></input>Ja
                  </label>
                  <label htmlFor="ib-nee" className="rvo-option">
                    <input type="radio" id="ib-nee" name="ib"></input>Nee
                  </label>
                </div>
                <h2>Gegevens aanvrager in aanvraagperiode</h2>
                <div className="rvo-form-field">
                  <label htmlFor="aantal-werknemers">Prognose totaal aantal werknemers</label>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" id="aantal-werknemers"></input>
                </div>
                <div className="rvo-form-field">
                  <label htmlFor="eigen-werknemers">(Waarvan) eigen S&O-werknemers</label>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" id="eigen-werknemers"></input>
                </div>
                <h2>S&O-uurloon</h2>
                <label htmlFor="so-verklaring">
                  Heeft u in 2020 S&O-werkzaamheden verricht waarvoor u een S&O-verklaring heeft ontvangen?
                  <div className="rvo-helper-text rvo-helper-text--warning">
                    Voor u geldt in 2022 een forfaitar uurloon van €29.
                  </div>
                </label>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="so-ja" className="rvo-option">
                    <input type="radio" id="so-ja" name="so"></input>Ja
                  </label>
                  <label htmlFor="so-nee" className="rvo-option">
                    <input type="radio" id="so-nee" name="so"></input>Nee
                  </label>
                </div>
                <h2>Technologiegebied</h2>
                <div className="rvo-form-field">
                  <label htmlFor="technologiegebied">Technologiegebied</label>
                  <select id="technologiegebied">
                    <option>Optie A</option>
                  </select>
                </div>
                <details>
                  <summary>Overzicht technologiegebieden</summary>
                  <dl className="rvo-data">
                    <dt>aard- en milieuwetenschappen</dt>
                    <dd>geowetenschappen | meteorologie | klimaatonderzoek | water & ecologie onderzoek</dd>
                  </dl>
                </details>
                <h2>Periode aanvraag</h2>
                <div className="rvo-form-field">
                  <label htmlFor="maand-aanvang">
                    Maand aanvang
                    <div className="rvo-helper-text">
                      Vul hier de startmaand in van de periode waarover u WBSO aanvraagt.
                    </div>
                  </label>
                  <select id="maand-aanvang">
                    <option>Januari</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <div className="rvo-button-group">
              <button className="utrecht-button utrecht-button--secondary-action rvo-button--md">
                Opslaan en sluiten
              </button>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--md">
                Opslaan en verder
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Aanvrager;
