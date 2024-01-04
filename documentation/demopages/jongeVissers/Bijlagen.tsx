import {
  CheckboxField,
  Fieldset,
  FileInputField,
  Header,
  Heading,
  LayoutColumnRow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';
import '../common/style.scss';

const Bijlagen = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
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
                { state: 'doing', label: 'Bijlagen', link: '#', size: 'md', line: 'straight' },

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
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <Heading type="h1" textContent="Bijlagen"></Heading>
                  <ul>
                    <li>
                      U kunt alleen bijlagen versturen in PDF-formaat. Als u een ander type document wil versturen maakt
                      u hier eerst een PDF van waarvoor u eventueel de gratis{' '}
                      <Link content="PDF Creator" href="#"></Link> kan gebruiken.
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
                        label="Wat stuurt u mee om uw financiële capaciteit aan te tonen?"
                        options={[
                          {
                            id: 'fca',
                            label: 'Bewijs van het eigen vermogen',
                          },
                          { id: 'fcb', label: 'Bewijs van de lening die is toegezegd' },
                        ]}
                      ></CheckboxField>
                      <FileInputField
                        label="Bewijs van het eigen vermogen"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Opleiding of werkervaring">
                      <CheckboxField
                        invalid={false}
                        label="Wat stuurt u mee om uw opleiding of werkervaring aan te tonen?"
                        options={[
                          {
                            id: 'wea',
                            label: 'Bewijs van de opleiding',
                          },
                          { id: 'web', label: 'Bewijs dat u vijf jaar werkervaring heeft' },
                        ]}
                      ></CheckboxField>
                      <FileInputField
                        label="Bewijs dat u vijf jaar werkervaring heeft"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <FileInputField
                        label="Offerte vaartuig"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Marktwaarde vissersvaartuig">
                      <RadioButtonField
                        name="vv"
                        label="Wat stuurt u mee om de marktwaarde van het visservaartuig aan te tonen?"
                        options={[
                          {
                            id: 'mwa',
                            label: 'Taxatierapport',
                          },
                          { id: 'mwb', label: 'Twee andere offertes van vergelijkbare voertuigen' },
                        ]}
                      ></RadioButtonField>
                      <FileInputField label="Taxatierapport"></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Bewijs andere subsidies">
                      <FileInputField
                        label="U stuurt de beslissing mee van deze andere subsidies"
                        helperText="Heeft u nog geen beslissing ontvangen? Stuur dan een kopie van de aanvraag mee. Het is mogelijk meerdere bestanden te selecteren."
                      ></FileInputField>
                    </Fieldset>
                    <Fieldset legend="Niet verplichte bijlagen">
                      <FileInputField
                        label="Voeg hier de overige (niet verplichte) bijlagen toe"
                        helperText="Het is mogelijk meerdere bestanden te selecteren"
                      ></FileInputField>
                    </Fieldset>

                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Jonge Vissers/Samenvatting")}
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

export default Bijlagen;
