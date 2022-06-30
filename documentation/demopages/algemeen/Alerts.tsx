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
            <div className="rvo-icon rvo-icon--info rvo-icon--lg rvo-icon--hemelblauw"></div>
            <div className="rvo-alert-text">
              <p>This is an example of an info alert.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--info">
            <div className="rvo-icon rvo-icon--info rvo-icon--lg rvo-icon--hemelblauw"></div>
            <div className="rvo-alert-text">
              <h2 className="rvo-heading utrecht-heading-2">Info with heading</h2>
              <p>This is an example of an info alert with a heading.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--info">
            <div className="rvo-icon rvo-icon--info rvo-icon--lg rvo-icon--hemelblauw"></div>
            <div className="rvo-alert-text">
              <p>This is an example of an info alert with a button.</p>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--info">
            <div className="rvo-icon rvo-icon--info rvo-icon--lg rvo-icon--hemelblauw"></div>
            <div className="rvo-alert-text">
              <p>This is an example of an info alert with an optional close button.</p>
            </div>
            <button className="utrecht-button rvo-button--tertiary-action rvo-button--sm">
              <div className="rvo-button__icon--tertiary-action rvo-icon rvo-icon--kruis rvo-icon--md"></div>
            </button>
          </div>
          <div className="rvo-alert rvo-alert--warning">
            <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a warning alert.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--warning">
            <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <h2 className="rvo-heading utrecht-heading-2">Warning with heading</h2>
              <p>This is an example of a warning alert with a heading.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--warning">
            <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a warning alert with a button.</p>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--warning">
            <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a warning alert with an optional close button.</p>
            </div>
            <button className="utrecht-button rvo-button--tertiary-action rvo-button--sm">
              <div className="rvo-button__icon--tertiary-action rvo-icon rvo-icon--kruis rvo-icon--md"></div>
            </button>
          </div>
          <div className="rvo-alert rvo-alert--error">
            <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a error alert.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--error">
            <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <h2 className="rvo-heading utrecht-heading-2">error with heading</h2>
              <p>This is an example of a error alert with a heading.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--error">
            <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a error alert with a button.</p>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--error">
            <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a error alert with an optional close button.</p>
            </div>
            <button className="utrecht-button rvo-button--tertiary-action rvo-button--sm">
              <div className="rvo-button__icon--tertiary-action rvo-icon rvo-icon--kruis rvo-icon--md"></div>
            </button>
          </div>
          <div className="rvo-alert rvo-alert--succes">
            <div className="rvo-icon rvo-icon--bevestiging rvo-status-icon--bevestiging rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a succes alert.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--succes">
            <div className="rvo-icon rvo-icon--bevestiging rvo-status-icon--bevestiging rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <h2 className="rvo-heading utrecht-heading-2">succes with heading</h2>
              <p>This is an example of a succes alert with a heading.</p>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--succes">
            <div className="rvo-icon rvo-icon--bevestiging rvo-status-icon--bevestiging rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a succes alert with a button.</p>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--sm">Button</button>
            </div>
          </div>
          <div className="rvo-alert rvo-alert--succes">
            <div className="rvo-icon rvo-icon--bevestiging rvo-status-icon--bevestiging rvo-icon--lg"></div>
            <div className="rvo-alert-text">
              <p>This is an example of a succes alert with an optional close button.</p>
            </div>
            <button className="utrecht-button rvo-button--tertiary-action rvo-button--sm">
              <div className="rvo-button__icon--tertiary-action rvo-icon rvo-icon--kruis rvo-icon--md"></div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
