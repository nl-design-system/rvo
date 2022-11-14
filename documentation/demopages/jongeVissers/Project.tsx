import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Project = () => {
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
                  state: 'doing',
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
                  <Heading type="h1" textContent="Project vragen"></Heading>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <label>Wat is uw geboortedatum?</label>
                      <input type="date" className="rvo-date"></input>
                    </Fieldset>
                    <Fieldset legend="">
                      <RadioButtonField
                        name="vv"
                        label="Heeft u een vissersvaartuig in bezit of in bezit gehad?"
                        options={[
                          {
                            id: 'vva',
                            label: 'Ja',
                          },
                          { id: 'vvb', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="vvg"
                        label="Waar gaat u het aan te schaffen visservaartuig voor gebruiken?"
                        options={[
                          {
                            id: 'vvga',
                            label: 'Zee- of kustvisserij',
                          },
                          { id: 'vvgb', label: 'Binnenvisserij' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="vvu"
                        label="Voor welke vorm van visserij is het vissersvaartuig uitgerust?"
                        options={[
                          {
                            id: 'vvua',
                            label: 'Zee- of kustvisserij',
                          },
                          { id: 'vvub', label: 'Binnenvisserij' },
                          { id: 'vvuc', label: 'Geen uitrusting' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="">
                      <RadioButtonField
                        name="vveu"
                        label="Heeft het vaartuig dat u aanschaft een nummer in het EU-vlootregister (een EU-identificatienummer)?"
                        options={[
                          {
                            id: 'vveua',
                            label: 'Ja',
                          },
                          { id: 'vveub', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                      <TextInputField label="Wat is dit EU-identificatienummer?" validation="number"></TextInputField>
                      <TextInputField label="In welk land is het vaartuig dat u aanschaft geregistreerd in het EU-vlootregister?"></TextInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <TextInputField
                        label="Hoeveel personen (in fte per jaar) verwacht u dat er op het visservaartuig komen werken, met uzelf erbij?"
                        validation="number"
                      ></TextInputField>
                      <TextInputField
                        label="Hoeveel personen (in fte per jaar) verwacht u hebben niet eerder gewerkt in de visserij of maritieme sector?"
                        validation="number"
                      ></TextInputField>
                    </Fieldset>

                    <Fieldset legend="">
                      {' '}
                      <RadioButtonField
                        name="com"
                        label="Gaat u met het publiek communiceren over uw investering (bijvoorbeeld via een brochure, flyer of persbericht)?"
                        options={[
                          {
                            id: 'coma',
                            label: 'Ja',
                          },
                          { id: 'comb', label: 'Nee' },
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

export default Project;
