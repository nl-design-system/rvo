import { Heading, Icon } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../../common/style.scss';

const Bewaard = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--maatregelen">
        <div className="rvo-app-container rvo-app-container--maatregelen">
          <div className="rvo-app-content">
            <Heading type="h1">Bewaarde maatregelen</Heading>
            <p>
              Dit zijn de <strong>maatregelen</strong> die u zelf heeft bewaard
            </p>
            <ul className="rvo-maatregelen">
              <li className="rvo-maatregel">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregel")} className="rvo-maatregel-link">
                  Onderzaai vanggewas
                </a>
                <details className="rvo-bewaar-knop">
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="verwijderen"></Icon>Verwijder
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="verwijderen"></Icon>Verwijderd
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregel")} className="rvo-maatregel-link">
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Vroeg oogsten rooigewas
                </a>
                <details className="rvo-bewaar-knop">
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="verwijderen"></Icon>Verwijder
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="verwijderen"></Icon>Verwijderd
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregel")} className="rvo-maatregel-link">
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Grasland met kruiden
                </a>
                <details className="rvo-bewaar-knop">
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="verwijderen"></Icon>Verwijder
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="verwijderen"></Icon>Verwijderd
                    </span>
                  </summary>
                </details>
              </li>
              <li className="rvo-maatregel">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregel")} className="rvo-maatregel-link">
                  {/* <img src="images/regelmaat/grond-icon.svg" className="rvo-maatregel-icon" /> */}
                  Rustgewas
                </a>
                <details className="rvo-bewaar-knop">
                  <summary className="rvo-maatregel-bewaar-link">
                    <span className="rvo-bewaar">
                      <Icon icon="verwijderen"></Icon>Verwijder
                    </span>
                    <span className="rvo-bewaard">
                      <Icon icon="verwijderen"></Icon>Verwijderd
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
          </div>
          <ul className="rvo-app-menu">
            <li className="rvo-app-menu-item">
              <a onClick={linkTo("Demo pagina's/de Regelmaat/Zoeken")} className="rvo-app-menu-item-link">
                <Icon icon="zoek" color="hemelblauw" size="2xl" />
                Zoeken
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a
                onClick={linkTo("Demo pagina's/de Regelmaat/Bewaard")}
                className="rvo-app-menu-item-link rvo-app-menu-item-link--active"
              >
                <Icon icon="favoriet" color="wit" size="2xl" />
                Bewaard
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")} className="rvo-app-menu-item-link">
                <Icon icon="plus" color="hemelblauw" size="2xl" />
                Suggesties
              </a>
            </li>
            <li className="rvo-app-menu-item">
              <a onClick={linkTo("Demo pagina's/de Regelmaat/Profiel")} className="rvo-app-menu-item-link">
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

export default Bewaard;
