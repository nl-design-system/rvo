import { Heading } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/rhs-demos.scss';

const Index = () => {
  return (
    <body className="rvo-theme rvo-demos">
      <div className="rvo-rhs-update">
        <header className="rvo-header">
          <div className="rvo-rhs-update-component">
            <a className="rvo-logo" href="#">
              <div className="rvo-logo-lint">
                <img src="images/lint.svg" alt=""></img>
              </div>
              <div className="rvo-logo-text">
                Rijksdienst voor Ondernemend
                <br />
                Nederland
              </div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component"></div>
        <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-main--demo">
          <Heading type="h1" textContent="Beschikbare prototypes" />
          <ul>
            <li>
              <a
                href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-startpagina--default&viewMode=story"
                className="rvo-link"
              >
                Mijn Percelen
              </a>
              <p className="rvo-paragraph--sm">
                <a
                  href="iframe.html?args=&id=pagina-s-experimenteel-mijn-percelen-screenshots-uitgangspositie--default&viewMode=story"
                  className="rvo-link rvo-link--no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Screenshots uitgangspositie
                </a>
              </p>
            </li>
            <li>
              <a
                href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story"
                className="rvo-link"
              >
                Centrale Mijn Omgeving RVO (CMOR)
              </a>
              <p className="rvo-paragraph--sm">
                <a
                  href="https://www.figma.com/proto/QpMO6STbDvz0YB8ND87v5o/CMOR-Specifiek-Ontwerp?page-id=7871%3A31861&type=design&node-id=8043-17660&viewport=643%2C149%2C0.02&t=Zv0paCJYenlnqBLR-1&scaling=scale-down&starting-point-node-id=8043%3A17660&mode=design"
                  className="rvo-link rvo-link--no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma prototype uitgangspositie
                </a>
              </p>
            </li>
            <li>
              <a
                href="iframe.html?args=&id=pagina-s-experimenteel-www-home--default&viewMode=story"
                className="rvo-link"
              >
                WWW RVO (rvo.nl)
              </a>
              <p className="rvo-paragraph--sm">
                <a
                  href="https://www.rvo.nl"
                  className="rvo-link rvo-link--no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Huidige website als uitgangspositie
                </a>
              </p>
            </li>
            <li>
              <a
                href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story"
                className="rvo-link"
              >
                Identificatie en Registratie van uw dieren (I&R)
              </a>
            </li>
            <li>
              <a href="iframe.html?args=&id=demo-pagina-s-sib-startpagina--default&viewMode=story" className="rvo-link">
                Support International Business (SIB) Coaching 2024 - UPNL
              </a>
            </li>
          </ul>
        </main>
      </div>
    </body>
  );
};

export default Index;
