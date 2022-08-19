import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const Ondertekening = () => {
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
                state: 'completed',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Bijlagen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
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
                <Heading type="h1" textContent="Ondertekening"></Heading>
              </div>
              <form>
                <LayoutColumnRow size="md">
                  <Fieldset legend="Overtreding en fraude">
                    <RadioButtonField
                      layout="horizontal"
                      name="radio-buttons"
                      helperText="Uitgebreide informatie over overtredingen."
                      labelText="Zijn er één of meerdere overtredingen bij u vastgesteld?"
                      expandableHelperText={true}
                      expandableHelperTextTitle="Meer informatie"
                      options={[
                        { id: 'overa', labelText: 'Ja' },
                        { id: 'overb', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                    <RadioButtonField
                      layout="horizontal"
                      name="radio-buttons"
                      helperText="Uitgebreide informatie over fraude."
                      labelText="Is er fraude bij u vastgesteld?"
                      expandableHelperText={true}
                      expandableHelperTextTitle="Meer informatie"
                      options={[
                        { id: 'fraua', labelText: 'Ja' },
                        { id: 'fraub', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>
                  <Heading type="h2" textContent="Verklaring"></Heading>
                  <p>
                    Ik verklaar dat ik voldoe aan de voorwaarden en dat dit formulier en de bijlagen naar waarheid zijn
                    ingevuld.
                  </p>
                  <Heading type="h2" textContent="Ondertekening"></Heading>
                  <p>Ondertekening m.b.v. TAN is alleen noodzakelijker voor klanten.</p>
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

export default Ondertekening;
