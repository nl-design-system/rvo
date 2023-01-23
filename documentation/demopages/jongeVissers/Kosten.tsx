import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Kosten = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
        <MaxWidthLayout size="lg">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--correspondentie&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--datum&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Project vragen',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--samenvatting',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--ondertekening&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <Heading type="h1" textContent="Kosten en subsidies"></Heading>
                </div>
                <div className="rvo-table--responsive">
                  <LayoutColumnRow size="sm">
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
                            <form>
                              <Button kind="warning-subtle" size="xs">
                                <Icon
                                  icon="verwijderen"
                                  size="md"
                                  classNames={['rvo-button__icon--warning-subtle-action']}
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" classNames={['rvo-button__icon--tertiary-action']} />
                                Wijzigen
                              </Button>
                            </form>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell rvo-table-cell--numeric">135.000,00</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">135.000,00</td>
                          <td className="rvo-table-cell rvo-table-cell--numeric">100.000,00</td>
                          <td className="rvo-table-cell rvo-table-cell--link">
                            <form>
                              <Button kind="warning-subtle" size="xs">
                                <Icon
                                  icon="verwijderen"
                                  size="md"
                                  classNames={['rvo-button__icon--warning-subtle-action']}
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" classNames={['rvo-button__icon--tertiary-action']} />
                                Wijzigen
                              </Button>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link
                      content="Kosten toevoegen"
                      icon="plus"
                      showIcon="before"
                      url="iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten-opvoeren"
                    ></Link>
                  </LayoutColumnRow>
                </div>

                <div className="rvo-table--responsive">
                  <LayoutColumnRow size="sm">
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
                            <form>
                              <Button kind="warning-subtle" size="xs">
                                <Icon
                                  icon="verwijderen"
                                  size="md"
                                  classNames={['rvo-button__icon--warning-subtle-action']}
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" classNames={['rvo-button__icon--tertiary-action']} />
                                Wijzigen
                              </Button>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link content="Subsidie toevoegen" icon="plus" showIcon="before" url="#"></Link>
                  </LayoutColumnRow>
                </div>
                <Heading type="h2" textContent="Berekening"></Heading>
                <dl className="rvo-data">
                  <dt>Andere subsidies</dt>
                  <dd>€ 25.000,00</dd>
                  <dt>Deze subsidie</dt>
                  <dd>€ 25.000,00</dd>
                </dl>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" classNames={['rvo-status-icon-waarschuwing']} size="lg" />
                  <div className="rvo-alert-text">
                    <p>
                      De subsidie van uw investering kan maximaal € 25.000,00 bedragen. Dit is berekend aan de hand van
                      de subsidiabele kosten van uw investering en uw andere subsidies.
                    </p>
                  </div>
                </div>
                <div className="rvo-button-group">
                  <Button
                    kind="secondary"
                    size="md"
                    active={false}
                    busy={false}
                    focus={false}
                    focusVisible={false}
                    disabled={false}
                    hover={false}
                    showIcon="no"
                  >
                    Opslaan en sluiten
                  </Button>
                  <Button
                    kind="primary"
                    size="md"
                    active={false}
                    busy={false}
                    focus={false}
                    focusVisible={false}
                    disabled={false}
                    hover={false}
                    showIcon="no"
                  >
                    Opslaan en verder
                  </Button>
                </div>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Kosten;
