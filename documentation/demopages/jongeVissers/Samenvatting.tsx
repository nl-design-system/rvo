import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Samenvatting = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--correspondentie&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--datum&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Project vragen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--project&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--kosten&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Bijlagen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--bijlagen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Samenvatting',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--samenvatting',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--ondertekening&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <Heading type="h1" textContent="Samenvatting"></Heading>
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
                          Subsidiabele investering (€)
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                          Aangevraagde subsidie (€)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rvo-table-body">
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell rvo-table-cell--numeric">235.000,00</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">200.000,00</td>
                        <td className="rvo-table-cell rvo-table-cell--numeric">25.000,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rvo-alert rvo-alert--warning">
                  <Icon icon="waarschuwing" classNames={['rvo-status-icon-waarschuwing']} size="lg" />
                  <div className="rvo-alert-text">
                    <p>
                      U kunt het vissersvaartuig aanschaffen na uw aanvraag voor subsidie. Dat betekent dat ook betaling
                      en levering van het vissersvaartuig pas na aanvraag voor de subsidie kan. U heeft na de
                      toewijsbrief maximaal 6 maanden de tijd om een vissersvaartuig aan te schaffen. Hou er wel
                      rekening mee dat u alleen subsidie ontvangt voor deze activiteiten als uw aanvraag wordt
                      toegewezen.
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

export default Samenvatting;
