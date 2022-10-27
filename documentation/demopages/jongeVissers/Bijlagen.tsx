import { Button } from '@nl-rvo/components/button/css/template';
import { CheckboxField } from '@nl-rvo/components/form-field/css/checkbox-field.template';
import { FileInputField } from '@nl-rvo/components/form-field/css/fileinput-field.template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const Bijlagen = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
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
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--kosten',
                  size: 'md',
                  line: 'straight',
                },
                { state: 'doing', label: 'Bijlagen', link: '#', size: 'md', line: 'straight' },

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
                  <Heading type="h1" textContent="Bijlagen"></Heading>
                  <ul>
                    <li>
                      U kunt alleen bijlagen versturen in PDF-formaat. Als u een ander type document wil versturen maakt
                      u hier eerst een PDF van waarvoor u eventueel de gratis{' '}
                      <Link content="PDF Creator" url="#"></Link> kan gebruiken.
                    </li>
                    <li>
                      Iedere bijlage mag <strong>maximaal 25MB</strong> groot zijn.
                    </li>
                    <li>Voeg eventueel gelijksoortige bijlagen samen in een PDF, bijvoorbeeld alle offertes.</li>
                    <li>Geef het PDF-bestand een logische naam.</li>
                  </ul>
                </div>

                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="Financiële capaciteit">
                      <CheckboxField
                        invalid={false}
                        labelText="Wat stuurt u mee om uw financiële capaciteit aan te tonen?"
                        options={[
                          {
                            id: 'fca',
                            labelText: 'Bewijs van het eigen vermogen',
                          },
                          { id: 'fcb', labelText: 'Bewijs van de lening die is toegezegd' },
                        ]}
                      ></CheckboxField>
                      <FileInputField
                        labelText="Bewijs van het eigen vermogen"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Opleiding of werkervaring">
                      <CheckboxField
                        invalid={false}
                        labelText="Wat stuurt u mee om uw opleiding of werkervaring aan te tonen?"
                        options={[
                          {
                            id: 'wea',
                            labelText: 'Bewijs van de opleiding',
                          },
                          { id: 'web', labelText: 'Bewijs dat u vijf jaar werkervaring heeft' },
                        ]}
                      ></CheckboxField>
                      <FileInputField
                        labelText="Bewijs dat u vijf jaar werkervaring heeft"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <FileInputField
                        labelText="Offerte vaartuig"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Marktwaarde vissersvaartuig">
                      <RadioButtonField
                        name="vv"
                        labelText="Wat stuurt u mee om de marktwaarde van het visservaartuig aan te tonen?"
                        options={[
                          {
                            id: 'mwa',
                            labelText: 'Taxatierapport',
                          },
                          { id: 'mwb', labelText: 'Twee andere offertes van vergelijkbare voertuigen' },
                        ]}
                      ></RadioButtonField>
                      <FileInputField labelText="Taxatierapport"></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Bewijs andere subsidies">
                      <FileInputField
                        labelText="U stuurt de beslissing mee van deze andere subsidies"
                        helperText="Heeft u nog geen beslissing ontvangen? Stuur dan een kopie van de aanvraag mee. Het is mogelijk meerdere bestanden te selecteren."
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Niet verplichte bijlagen">
                      <FileInputField
                        labelText="Voeg hier de overige (niet verplichte) bijlagen toe"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
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

export default Bijlagen;
