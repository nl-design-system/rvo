import { Heading, Icon } from '@nl-rvo/components';
import '../common/style.scss';

const Maatregelen = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--maatregelen">
        <div className="rvo-app-container rvo-app-container--maatregelen">
          <div className="rvo-app-content">
            <Heading type="h1">Maatregelen</Heading>
            <p>
              Regelmaat heeft de volgende <strong>maatregelen</strong> voor je gevonden
            </p>{' '}
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
              <a href="#" className="rvo-app-menu-item-link">
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
