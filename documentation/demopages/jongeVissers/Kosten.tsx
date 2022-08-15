import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const Kosten = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar
        items={[
          { label: 'Home', icon: 'home', link: '#' },
          { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />
      <MaxWidthLayout size="lg">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Jonge Vissers 2020', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Controleer uw gegevens',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Correspondentie',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--correspondentie&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Datum verleningsverzoek',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--datum&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              { state: 'incomplete', label: 'Bijlagen', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Samenvatting', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Ondertekenen', link: '#', size: 'md', line: 'straight' },
              { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="xl">
              <div className="intro">
                <Heading type="h1" textContent="Kosten"></Heading>
              </div>
              <div className="rvo-table--responsive">
                <table className="rvo-table">
                  <caption className="rvo-caption">Aanschafkosten</caption>
                  <thead className="rvo-table-head">
                    <tr className="rvo-table-row">
                      <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                        Aanschafkosten (€)
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                        Eigen aandeel financiering (€)
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                        Subsidiabel bedrag (€)
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--empty-title"></th>
                    </tr>
                  </thead>
                  <tbody className="rvo-table-body">
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell rvo-table-cell--numeric">235.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--numeric">235.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--numeric">200.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--link">
                        <a href="#" className="rvo-link">
                          Wijzigen
                        </a>{' '}
                        <a href="#" className="rvo-link">
                          Verwijderen
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell rvo-table-cell--numeric">135.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--numeric">135.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--numeric">100.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--link">
                        <a href="#" className="rvo-link">
                          Wijzigen
                        </a>{' '}
                        <a href="#" className="rvo-link">
                          Verwijderen
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rvo-table--responsive">
                <table className="rvo-table">
                  <caption className="rvo-caption">Andere subsidies</caption>
                  <thead className="rvo-table-head">
                    <tr className="rvo-table-row">
                      <th scope="col" className="rvo-table-header">
                        Naam subsidieregeling
                      </th>

                      <th scope="col" className="rvo-table-header">
                        Subsidieverstreker
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Status
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                        Subsidiebedrag (€)
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--empty-title"></th>
                    </tr>
                  </thead>
                  <tbody className="rvo-table-body">
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">Naam regeling</td>
                      <td className="rvo-table-cell">Gemeente</td>
                      <td className="rvo-table-cell">Verleend</td>
                      <td className="rvo-table-cell rvo-table-cell--numeric">25.000,00</td>
                      <td className="rvo-table-cell rvo-table-cell--link">
                        <a href="#" className="rvo-link">
                          Wijzigen
                        </a>{' '}
                        <a href="#" className="rvo-link">
                          Verwijderen
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </LayoutColumnRow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Kosten;
