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

const Project = () => {
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
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
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
                state: 'doing',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Bijlagen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen',
                size: 'md',
                line: 'straight',
              },

              {
                state: 'incomplete',
                label: 'Ondertekening',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--ondertekening&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Samenvatting',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--samenvatting',
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
                      layout="horizontal"
                      name="vv"
                      labelText="Heeft u een vissersvaartuig in bezit of in bezit gehad?"
                      options={[
                        {
                          id: 'vva',
                          labelText: 'Ja',
                        },
                        { id: 'vvb', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                    <RadioButtonField
                      layout="vertical"
                      name="vvg"
                      labelText="Waar gaat u het aan te schaffen visservaartuig voor gebruiken?"
                      options={[
                        {
                          id: 'vvga',
                          labelText: 'Zee- of kustvisserij',
                        },
                        { id: 'vvgb', labelText: 'Binnenvisserij' },
                      ]}
                    ></RadioButtonField>
                    <RadioButtonField
                      layout="vertical"
                      name="vvu"
                      labelText="Voor welke vorm van visserij is het vissersvaartuig uitgerust?"
                      options={[
                        {
                          id: 'vvua',
                          labelText: 'Zee- of kustvisserij',
                        },
                        { id: 'vvub', labelText: 'Binnenvisserij' },
                        { id: 'vvuc', labelText: 'Geen uitrusting' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>
                  <Fieldset legend="">
                    <RadioButtonField
                      layout="horizontal"
                      name="vveu"
                      labelText="Heeft het vaartuig dat u aanschaft een nummer in het EU-vlootregister (een EU-identificatienummer)?"
                      options={[
                        {
                          id: 'vveua',
                          labelText: 'Ja',
                        },
                        { id: 'vveub', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                    <TextInputField labelText="Wat is dit EU-identificatienummer?" valueType="number"></TextInputField>
                    <TextInputField labelText="In welk land is het vaartuig dat u aanschaft geregistreerd in het EU-vlootregister?"></TextInputField>
                  </Fieldset>
                  <Fieldset legend="">
                    <TextInputField
                      labelText="Hoeveel personen (in fte per jaar) verwacht u dat er op het visservaartuig komen werken, met uzelf erbij?"
                      valueType="number"
                    ></TextInputField>
                    <TextInputField
                      labelText="Hoeveel personen (in fte per jaar) verwacht u hebben niet eerder gewerkt in de visserij of maritieme sector?"
                      valueType="number"
                    ></TextInputField>
                  </Fieldset>

                  <Fieldset legend="">
                    {' '}
                    <RadioButtonField
                      layout="horizontal"
                      name="com"
                      labelText="Gaat u met het publiek communiceren over uw investering (bijvoorbeeld via een brochure, flyer of persbericht)?"
                      options={[
                        {
                          id: 'coma',
                          labelText: 'Ja',
                        },
                        { id: 'comb', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>

                  <div className="rvo-button-group">
                    <Button
                      kind="secondary"
                      size="md"
                      textContent="Opslaan en sluiten"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                    <Button
                      kind="primary"
                      size="md"
                      textContent="Opslaan en verder"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                  </div>
                </LayoutColumnRow>
              </form>
            </LayoutColumnRow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Project;
