import {
  Button,
  ButtonGroup,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../common/style.scss';

const Kosten = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="lg">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Controleer uw gegevens"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Correspondentie"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Datum"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  label: 'Project vragen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Kosten',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Kosten"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Bijlagen"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Samenvatting"),
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Ondertekening"),
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutFlow size="xl">
                <div className="rvo-form-intro">
                  <Heading type="h1" textContent="Kosten en subsidies"></Heading>
                </div>
                <div className="rvo-table--responsive">
                  <LayoutFlow size="sm">
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
                                  className="rvo-button__icon--warning-subtle-action"
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" className="rvo-button__icon--tertiary-action" />
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
                                  className="rvo-button__icon--warning-subtle-action"
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" className="rvo-button__icon--tertiary-action" />
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
                      href="iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten-opvoeren"
                    ></Link>
                  </LayoutFlow>
                </div>

                <div className="rvo-table--responsive">
                  <LayoutFlow size="sm">
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
                                  className="rvo-button__icon--warning-subtle-action"
                                />
                                Verwijderen
                              </Button>
                              <Button kind="tertiary" size="xs">
                                <Icon icon="bewerken" size="md" className="rvo-button__icon--tertiary-action" />
                                Wijzigen
                              </Button>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link content="Subsidie toevoegen" icon="plus" showIcon="before" href="#"></Link>
                  </LayoutFlow>
                </div>
                <Heading type="h2" textContent="Berekening"></Heading>
                <dl className="rvo-data">
                  <dt>Andere subsidies</dt>
                  <dd>€ 25.000,00</dd>
                  <dt>Deze subsidie</dt>
                  <dd>€ 25.000,00</dd>
                </dl>
                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" className="rvo-status-icon-waarschuwing" size="lg" />
                  <div className="rvo-alert-text">
                    <p>
                      De subsidie van uw investering kan maximaal € 25.000,00 bedragen. Dit is berekend aan de hand van
                      de subsidiabele kosten van uw investering en uw andere subsidies.
                    </p>
                  </div>
                </div>
                <ButtonGroup>
                  <a
                    className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                  >
                    Opslaan en sluiten
                  </a>
                  <a
                    className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    onClick={linkTo("Demo pagina's/Jonge Vissers/Bijlagen")}
                  >
                    Opslaan en verder
                  </a>
                </ButtonGroup>
              </LayoutFlow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default Kosten;
