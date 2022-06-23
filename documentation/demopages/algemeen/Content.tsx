import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Content = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-layout--md">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  Menu item
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Menu item with icon
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  Last menu item
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

      <main className="rvo-max-width-layout--md">
        <div className="rvo-content">
          <h1>Heading 1</h1>
          <p className="rvo-paragraph">
            De overheid zet zich in voor een uitstekend ondernemersklimaat. De ministeries stippelen daar beleid voor
            uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst voor Ondernemend Nederland. Onze mensen
            maken wereldwijd verbinding.{' '}
            <a href="#" className="rvo-link">
              Dit is een link.
            </a>
            Tussen bedrijven, kennis- en financiële instellingen, ambassades en lokale overheden.
          </p>
          <ul className="rvo-list">
            <li className="rvo-list-item">First item</li>
            <li className="rvo-list-item">Second item</li>
            <li className="rvo-list-item">Third item</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Content;
