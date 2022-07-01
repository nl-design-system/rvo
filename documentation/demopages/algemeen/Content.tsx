import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Content = () => {
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
            <a className="utrecht-topnav__link" href="#">
              Uitloggen
            </a>
          </li>
        </ul>
      </nav>

      <main className="rvo-max-width-layout rvo-max-width-layout--sm">
        <div className="rvo-content">
          <h1 className="utrecht-heading-1">Heading 1</h1>
          <p className="rvo-paragraph rvo-paragraph--sm">
            <strong>Paragraph small.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
            ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
            voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
            <a href="#" className="rvo-link">
              Dit is een link.
            </a>
            Tussen bedrijven, kennis- en financiële instellingen, ambassades en lokale overheden.
          </p>
          <h2 className="utrecht-heading-2">Heading 2</h2>
          <p className="rvo-paragraph rvo-paragraph--md">
            <strong>Paragraph medium.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
            ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
            voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
            <a href="#" className="rvo-link">
              Dit is een link.
            </a>
            Tussen bedrijven, kennis- en financiële instellingen, ambassades en lokale overheden.
          </p>
          <h3 className="utrecht-heading-3">Heading 3</h3>
          <p className="rvo-paragraph rvo-paragraph--lg">
            <strong>Paragraph large.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
            ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
            voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
            <a href="#" className="rvo-link">
              Dit is een link.
            </a>
            Tussen bedrijven, kennis- en financiële instellingen, ambassades en lokale overheden.
          </p>
          <ul className="rvo-list rvo-list--unordered">
            <li className="rvo-list-item">Unordered list</li>
            <li className="rvo-list-item">Second item</li>
            <li className="rvo-list-item">Third item</li>
          </ul>
          <ol className="rvo-list rvo-list--ordered">
            <li className="rvo-list-item">Ordered list</li>
            <li className="rvo-list-item">Second item</li>
            <li className="rvo-list-item">Third item</li>
          </ol>
          <blockquote className="rvo-blockquote">
            <strong>Dit is een blockquote.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
            ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
            voor Ondernemend Nederland.
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default Content;
