import { Heading, Icon, Link } from '@nl-rvo/components';
import '../common/style.scss';

const Maatregel = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--maatregelen">
        <div className="rvo-app-container rvo-app-container--maatregel">
          <div className="rvo-app-content">
            <Heading type="h1">Onderzaai vanggewas</Heading>

            <Heading type="h3">Wat is het?</Heading>
            <p>
              Grasland met kruiden zorgt voor een diepere doorworteling en een betere bodemstructuur. En voor
              diversiteit in ruwvoer.
            </p>
            <Heading type="h3">Wat levert het op?</Heading>
            <p>
              Staan er op het perceel minimaal 25% kruiden en vlinderbloemige gewassen (ingezaaid of spontane opkomst);
              en minimaal 25% gras.
            </p>
            <Heading type="h3">In welke situatie geschikt?</Heading>
            <p>
              Uw perceel is zichtbaar bedekt en u verdeelt het gras, de kruiden en vlinderbloemige gewassen gelijkmatig
              over het perceel.
            </p>
            <Heading type="h3">Wat moet ik er voor doen?</Heading>
            <p>
              In het document Gewascodes en gewassen eco-activiteiten leest u welke gewassen meetellen voor deze
              eco-activiteit. En welke grassen, kruiden en vlinderbloemige gewassen uit de lijst Stikstofbindend gewas.
            </p>
            <div className="rvo-maatregel-actions">
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
              <Link content="Meer informatie op rvo.nl" icon="externe-link" showIcon="after" noUnderline={true}></Link>
            </div>
            <div className="rvo-maatregel-img-container">
              <img src="images/regelmaat/boer-computer.svg" className="rvo-maatregel-img" />
            </div>
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

export default Maatregel;
