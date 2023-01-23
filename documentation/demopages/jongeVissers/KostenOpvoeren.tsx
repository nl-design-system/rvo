import { RadioButtonField } from '@nl-rvo/components/form-field-radio-button/css/template';
import { TextInputField } from '@nl-rvo/components/form-field-textinput/css/template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const KostenOpvoeren = () => {
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
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten',
                  size: 'md',
                  line: 'substep-start',
                },
                {
                  state: 'doing',
                  label: 'Kosten opvoeren',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten-opvoeren&viewMode=story',
                  size: 'sm',
                  line: 'substep-end',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: 'iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen&viewMode=story',
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
                  <LayoutColumnRow size="md">
                    <Heading type="h1" textContent="Kosten opvoeren"></Heading>
                    <dl className="rvo-data">
                      <dt>Omschrijving van de investering</dt>
                      <dd>Aanschaf voertuig</dd>
                    </dl>
                  </LayoutColumnRow>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <TextInputField
                        label="Hoeveel kost het vissersvaartuig (exclusief btw)?"
                        validation="number"
                      ></TextInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <RadioButtonField
                        name="vv-eigenaar"
                        label="Wordt u volledig of gedeeltelijk eigenaar van het vissersvaartuig?"
                        options={[
                          {
                            id: 'vveiga',
                            label: 'Volledig eigenaar',
                          },
                          { id: 'vveigb', label: 'Mede eigenaar' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="">
                      <TextInputField
                        label="Wat zijn de kosten waarvoor u subsidie wilt aanvragen?"
                        helperText="Uitgebreide uitleg over de subsidie."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer informatie"
                        validation="number"
                      ></TextInputField>
                    </Fieldset>

                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        href="iframe.html?args=&id=demo-pagina-s-mijn-rvo--zaak&viewMode=story"
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        href="iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten"
                      >
                        Opslaan en verder
                      </a>
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

export default KostenOpvoeren;
