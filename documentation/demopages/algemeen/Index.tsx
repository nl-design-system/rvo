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
          <Heading type="h1" textContent="Beschikbare demo's" />
          <ul>
            <li>
              <a
                href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-startpagina--default&viewMode=story"
                className="rvo-link"
              >
                Mijn Percelen
              </a>
            </li>
          </ul>
        </main>
      </div>
    </body>
  );
};

export default Index;
