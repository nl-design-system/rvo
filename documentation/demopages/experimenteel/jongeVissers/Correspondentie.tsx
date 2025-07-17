import {
  ActionGroup,
  Fieldset,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../common/style.scss';

const Correspondentie = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow gap="2xl">
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
                  state: 'doing',
                  label: 'Correspondentie',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Correspondentie"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Datum verleningsverzoek',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Datum"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
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
              <LayoutFlow gap="xl">
                <div className="rvo-form-intro">
                  <Heading type="h1" title="Correspondentie"></Heading>
                </div>
                <form>
                  <LayoutFlow gap="md">
                    <Fieldset legend="">
                      <RadioButtonField
                        name="radio-buttons"
                        label="Hoe wilt u correspondentie ontvangen?"
                        options={[
                          {
                            id: 'cora',
                            label:
                              'Ik ontvang berichten digitaal in Mijn Dossier.Ik verklaar dat ik voldoende bereikbaar ben via e-mail en Mijn Dossier',
                          },
                          { id: 'corb', label: 'Ik ontvang berichten liever op papier.' },
                        ]}
                      ></RadioButtonField>
                      <div className="rvo-alert rvo-alert--warning">
                        <Icon icon="waarschuwing" className="rvo-status-icon-waarschuwing" size="lg" />
                        <div className="rvo-alert-text">
                          <p>
                            U heeft aangegeven dat u de correspondentie digitaal wil ontvangen. Hiermee geeft u akkoord
                            dat RVO berichten plaatst over uw aanvraag in Mijn Dossier en u een e-mail stuurt over
                            statuswijzigingen van uw aanvraag.
                          </p>
                        </div>
                      </div>
                    </Fieldset>
                    <Fieldset legend="Contactpersoon">
                      <RadioButtonField
                        name="radio-buttons"
                        label="Is de contactpersoon iemand anders dan de indiener?"
                        options={[
                          { id: 'cpa', label: 'Ja' },
                          { id: 'cpb', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <ActionGroup>
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Datum")}
                      >
                        Opslaan en verder
                      </a>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default Correspondentie;
