import {
  ButtonGroup,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../common/style.scss';

const Samenvatting = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="md">
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
                  label: 'Project vragen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Kosten"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Bijlagen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Bijlagen"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
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
                  <Icon icon="waarschuwing" className="rvo-status-icon-waarschuwing" size="lg" />
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
                <ButtonGroup>
                  <a
                    className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                  >
                    Opslaan en sluiten
                  </a>
                  <a
                    className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    onClick={linkTo("Demo pagina's/Jonge Vissers/Ondertekening")}
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

export default Samenvatting;
