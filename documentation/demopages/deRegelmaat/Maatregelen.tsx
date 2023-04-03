import { Heading, Icon } from '@nl-rvo/components';
import '../common/style.scss';

const Maatregelen = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--maatregelen">
        <div className="rvo-app-container rvo-app-container--maatregelen">
          <div className="rvo-app-content">
            <Heading type="h1">Gevonden maatregelen</Heading>
            <p>
              Regelmaat heeft de volgende <strong>maatregelen</strong> voor u gevonden
            </p>
            <div className="rvo-alert rvo-alert--warning">
              <span
                className="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"
                role="img"
                aria-label="Waarschuwing"
              ></span>
              <div className="rvo-alert-text">
                <div>
                  <div>
                    Uw profiel is momenteel voor <strong>80%</strong> ingevuld.&nbsp;
                    <a
                      href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--profiel&viewMode=story"
                      className="rvo-link"
                    >
                      Maak uw profiel compleet
                    </a>
                    &nbsp;om betere suggesties voor maatregelen te krijgen
                  </div>
                </div>
              </div>
            </div>
            <ul className="rvo-maatregelen">
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  Onderzaai vanggewas
                </a>
                <a href="#" className="rvo-maatregel-bewaar-link">
                  <Icon icon="favoriet"></Icon>Bewaar
                </a>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Vroeg oogsten rooigewas
                </a>
                <a href="#" className="rvo-maatregel-bewaar-link">
                  <Icon icon="favoriet"></Icon>Bewaar
                </a>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Grasland met kruiden
                </a>
                <a href="#" className="rvo-maatregel-bewaar-link">
                  <Icon icon="favoriet"></Icon>Bewaar
                </a>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Rustgewas
                </a>
                <a href="#" className="rvo-maatregel-bewaar-link">
                  <Icon icon="favoriet"></Icon>Bewaar
                </a>
              </li>
            </ul>
          </div>
          <ul className="rvo-app-menu">
            <li className="rvo-app-menu-item">
              <a href="#" className="rvo-app-menu-item-link">
                <Icon icon="zoek" color="hemelblauw" size="2xl" />
                Zoeken
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a href="#" className="rvo-app-menu-item-link">
                <Icon icon="favoriet" color="hemelblauw" size="2xl" />
                Bewaard
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a href="#" className="rvo-app-menu-item-link">
                <Icon icon="plus" color="hemelblauw" size="2xl" />
                Suggesties
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--profiel&viewMode=story"
                className="rvo-app-menu-item-link"
              >
                <Icon icon="user" color="hemelblauw" size="2xl" />
                Profiel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Maatregelen;
