import { Header } from '@nl-rvo/components/header/css/template';
import '../common/style.scss';

const VormvrijeAanvraag = () => {
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

      <main className="rvo-progress-tracker-active rvo-max-width-layout rvo-max-width-layout--lg">
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
                Voordat u start
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
              Opslaan
            </button>
          </div>
        </div>
        <div className="rvo-form">
          <form action="startpagina.html" method="get">
            <fieldset>
              <h2>Vormvrije aanvraag</h2>
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

export default VormvrijeAanvraag;
