import { Header } from '@nl-rvo/components/header/css/template';
import '../common/style.scss';

const SearchInNav = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
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
            <a className="utrecht-topnav__link rvo-topnav__link--search-active" href="#">
              <div className="rvo-icon rvo-icon--zoek rvo-icon--md rvo-icon--hemelblauw"></div> Zoeken
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-form">
        <fieldset>
          <div className="rvo-form-layout">
            <div className="rvo-inline-form">
              <div className="rvo-form-field">
                <label className="rvo-form-field__label" htmlFor="search">
                  <span className="rvo-form-field__label-text">Zoekterm</span>
                </label>
                <input id="search" className="utrecht-textbox utrecht-textbox--html-input" value=""></input>
              </div>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--md">
                <div className="rvo-button__icon--primary-action rvo-icon rvo-icon--zoek rvo-icon--md"></div>
                Zoeken
              </button>
            </div>
          </div>
        </fieldset>
      </div>
      <main className="rvo-max-width-layout rvo-max-width-layout--sm">
        <div className="rvo-content">
          <h1 className="utrecht-heading-1">Search in Navigation</h1>

          <p className="rvo-paragraph rvo-paragraph--md">
            This demopage demonstrates how a search element can be included in the navbar.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SearchInNav;
