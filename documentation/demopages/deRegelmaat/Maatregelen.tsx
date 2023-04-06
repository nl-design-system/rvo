import { Heading, Icon } from '@nl-rvo/components';
import '../common/style.scss';

const Maatregelen = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--maatregelen">
        <div className="rvo-app-container rvo-app-container--maatregelen">
          <div className="rvo-app-content">
            <Heading type="h1">Suggesties</Heading>
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
                      className="rvo-link rvo-link--no-underline"
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
                <details>
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="favoriet"></Icon>Bewaar
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="favoriet"></Icon>Bewaard
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Vroeg oogsten rooigewas
                </a>
                <details>
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="favoriet"></Icon>Bewaar
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="favoriet"></Icon>Bewaard
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Grasland met kruiden
                </a>
                <details>
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="favoriet"></Icon>Bewaar
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="favoriet"></Icon>Bewaard
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Rustgewas
                </a>
                <details>
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="favoriet"></Icon>Bewaar
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="favoriet"></Icon>Bewaard
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
            Mogelijk ook interessant
            <ul className="rvo-maatregelen">
              <li className="rvo-maatregel">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregel&viewMode=story"
                  className="rvo-maatregel-link"
                >
                  Verlengde weidegang
                </a>
                <details>
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="favoriet"></Icon>Bewaar
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="favoriet"></Icon>Bewaard
                    </span>
                  </summary>
                </details>
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
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                className="rvo-app-menu-item-link rvo-app-menu-item-link--active"
              >
                <Icon icon="plus" color="wit" size="2xl" />
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
