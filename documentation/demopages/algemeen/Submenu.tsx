import { Header } from '@nl-rvo/components/header/css/template';
import '../common/style.scss';

const Submenu = () => {
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
            <a className="utrecht-topnav__link rvo-topnav__link--expanded" href="#">
              Expanded menu item <div className="rvo-icon rvo-icon--delta-omlaag rvo-icon--md rvo-icon--wit"></div>
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Menu item
            </a>
          </li>
        </ul>
      </nav>
      <nav className="rvo-topnav rvo-topnav--md rvo-topnav--submenu">
        <ul className="utrecht-topnav__list rvo-topnav__list--submenu">
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--plus rvo-icon--md rvo-icon--wit"></div> Start
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Another submenu item
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Another submenu item
            </a>
          </li>
        </ul>
      </nav>
      <main className="rvo-max-width-layout rvo-max-width-layout--sm">
        <div className="rvo-content">
          <h1 className="utrecht-heading-1">Default submenu</h1>
          <p className="rvo-paragraph rvo-paragraph--md">
            A submenu is expanded when a user clicks on an expandable menu item which label is followed by a downwards
            chevron. The submenu expands in place not overlapping existing content.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Submenu;
