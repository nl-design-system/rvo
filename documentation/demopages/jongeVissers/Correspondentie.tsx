import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field-radio-button/css/template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Correspondentie = () => {
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
                  state: 'doing',
                  label: 'Correspondentie',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--correspondentie&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Datum verleningsverzoek',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--datum&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--project&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--kosten',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--bijlagen',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
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
                  <Heading type="h1" textContent="Correspondentie"></Heading>
                </div>
                <form>
                  <LayoutColumnRow size="md">
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
                        <Icon icon="waarschuwing" classNames={['rvo-status-icon-waarschuwing']} size="lg" />
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
                </form>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Correspondentie;
