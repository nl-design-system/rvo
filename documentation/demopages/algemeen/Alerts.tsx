import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Alerts = () => {
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

          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--versleutelen rvo-icon--md rvo-icon--wit"></div> Uitloggen
            </a>
          </li>
        </ul>
      </nav>

      <main className=" rvo-max-width-layout rvo-max-width-layout--sm">
        <div className="rvo-alerts">
          <div className="rvo-alert rvo-alert--info">
            <h2 className="utrecht-heading-2">Info</h2>
            <p>
              Dit is een uitleg lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac leo sem. Vivamus diam
              risus, vestibulum vitae bibendum finibus.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
