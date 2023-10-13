import { MenuBar } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/mijn-percelen.scss';

const Percelen = () => {
  return (
    <body className="rvo-theme rvo-mijn-percelen">
      <div className="rvo-mijn-percelen rvo-rhs-update">
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
        <div className="rvo-rhs-update-component">
          <MenuBar
            items={[
              {
                label: 'Mijn Percelen',
                active: true,
                link: '#',
              },
              { label: 'English', icon: 'wereldbol', link: '#', align: 'right' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </div>
        <main className="rvo-main--mijn-percelen">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#wijzigen" id="tab1" aria-selected="true">
                  Wijzigen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#oplossen" id="tab2">
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a role="tab" href="#versturen" id="tab3">
                  Versturen
                </a>
              </li>
            </ul>
          </div>
          <div className="rvo-main-mijn-percelen--map"></div>
        </main>
      </div>
    </body>
  );
};

export default Percelen;
