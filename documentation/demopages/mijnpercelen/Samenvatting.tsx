import { MenuBar } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/mijn-percelen.scss';

const Samenvatting = () => {
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
                link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-startpagina--default&viewMode=story',
                icon: 'home',
              },
              {
                label: 'Boer Overveen B.V',
                link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                icon: 'user',
              },
              { label: 'Uitloggen', link: '#', align: 'right' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </div>
        <main className="rvo-main--mijn-percelen rvo-main--mijn-percelen-samenvatting">
          <div className="rvo-main-mijn-percelen--data">
            <ul role="tablist" className="rvo-tabs">
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-percelen--default&viewMode=story"
                  id="tab1"
                  aria-selected="true"
                  className="rvo-tabs-item-link"
                >
                  Wijzigen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-oplossen--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link"
                >
                  Oplossen
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-samenvatting--default&viewMode=story"
                  id="tab2"
                  className="rvo-tabs-item-link rvo-tabs-item-link--active"
                >
                  Samenvatting
                </a>
              </li>
              <li role="presentation" className="rvo-tabs-item">
                <a
                  role="tab"
                  href="iframe.html?args=&id=demo-pagina-s-mijn-percelen-versturen--default&viewMode=story"
                  id="tab3"
                  className="rvo-tabs-item-link"
                >
                  Versturen
                </a>
              </li>
            </ul>
            <div className="rvo-tab-content rvo-tab-content--wijzigen">
              <div className="rvo-rhs-update-component">
                <div className="rvo-table--responsive">
                  <table className="rvo-table">
                    <thead className="rvo-table-head">
                      <tr className="rvo-table-row">
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable"></th>
                        <th scope="col" className="rvo-table-header rvo-table-cell--numeric">
                          Huidig
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-cell--numeric">
                          Na wijziging
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                          Huidig
                        </th>
                        <th scope="col" className="rvo-table-header  rvo-table-cell--numeric">
                          Na wijziging
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rvo-table-body">
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Totaal grond in gebruik of beheer</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">177,7315</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">8,889</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,0</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell" colSpan={5}>
                          <br />
                          <strong>Gebruikstitel</strong>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Eigendom</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">173,75</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">1,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">4,839</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,2</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Overige exploitatievormen</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">1,75</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">22,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">42,33</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,2114</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell" colSpan={5}>
                          <br />
                          <strong>Gewas (zonder landschapselementen)</strong>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Aardappelen, bestrijdingsmaatregel AM (2025)</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">1,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">2,10</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,2</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Aardappelen, poot TBM (2016)</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">2,75</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">21,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">12,33</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,25</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Aardappelen, zetmeel (2017)</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">23</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">68,01</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">10,12</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">1,44</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Aardbeien op stellingen, productie (2706)</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,75</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">21,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">66,33</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,24</td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">Aardperen (1949)</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">2,75</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,0</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">41,33</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">0,1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="rvo-main-mijn-percelen--map">
            <img src="images/map.svg" alt="" className="rvo-perceel-kaart" />
          </div>
        </main>
      </div>
    </body>
  );
};

export default Samenvatting;
