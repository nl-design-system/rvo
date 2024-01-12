import {
  Button,
  Fieldset,
  Header,
  Heading,
  LayoutColumnRow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';

const Aanvrager = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="md" />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Aanvraag WBSO', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Voordat u start',
                onClick: linkTo("Demo pagina's/WBSO/Voordat u start"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Vormvrije aanvraag',
                onClick: linkTo("Demo pagina's/WBSO/Vormvrije aanvraag"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Aanvrager',
                onClick: linkTo("Demo pagina's/WBSO/Aanvrager"),
                size: 'md',
                line: 'straight',
              },
              { state: 'incomplete', label: 'Projecten', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'S&O uren', link: '#', size: 'md', line: 'straight' },
              { state: 'end', label: 'Aanvraag ingediend', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="md">
              <div className="rvo-form-intro">
                <Link content="Terug" href="#" showIcon="before" icon="terug" />
                <Heading type="h1" textContent="Aanvrager" />
                <Heading type="h2" textContent="Bedrijfsgegevens (NHR)" />
                <dl className="rvo-data">
                  <dt>KVK-nummer</dt>
                  <dd>35012085</dd>
                  <dt>Naam</dt>
                  <dd>Albert Heijn B.V.</dd>
                  <dt>Rechtsvorm</dt>
                  <dd>bv</dd>
                  <dt>RSIN</dt>
                  <dd>002230884</dd>
                </dl>
                <Heading type="h2" textContent="Bedrijfsgegevens" />
                <dl className="rvo-data">
                  <dt>Website</dt>
                  <dd className="rvo-url">https://www.streetplanet.nl</dd>
                  <dt>Maakt u deel uit van een fiscale eenheid voor de vennootschapbelasting?</dt>
                  <dd>Ja</dd>
                  <dt>RSIN-Nummer fiscale moeder</dt>
                  <dd>200000007</dd>
                </dl>
              </div>
              <form>
                <LayoutColumnRow row={false} size="md">
                  <LayoutColumnRow row={false} size="md">
                    <Fieldset legend="Contactpersoon">
                      <SelectField
                        label="Contactpersoon"
                        options={[
                          { value: '1', label: 'Contactpersoon 1' },
                          { value: '2', label: 'Contactpersoon 2' },
                          { value: '3', label: 'Contactpersoon 3' },
                        ]}
                      ></SelectField>
                    </Fieldset>
                    <Fieldset legend="Organisatie">
                      <RadioButtonField
                        name="radio-buttons"
                        label="U drijft een onderneming in de zin van de Wet IB of Wet Vpb en bent geen publieke kennisinstelling?"
                        helperText="Bent u geen ondernemer in de zin van de Wet IB (Inkomstenbelasting 2001) of Wet VpB
                      (Vennootschapsbelasting 1969), dan kunt u geen WBSO aanvragen. U kunt ook geen WBSO aanvragen
                      indienen als u een publieke kennisinstelling bent (zie artikel 1, onderdeel m van de WVA)."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer uitleg"
                        options={[
                          { id: 'wet-ib', label: 'Ja' },
                          { id: 'wet-ib2', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="Gegevens aanvrager in aanvraagperiode">
                      <TextInputField label="Prognose totaal aantal werknemers" validation="number" />
                      <TextInputField label="(Waarvan) eigen S&O-werknemers" validation="number" />
                    </Fieldset>
                    <Fieldset legend="S&O-uurloon">
                      <RadioButtonField
                        name="radio-buttons"
                        label="Heeft u in 2020 S&O-werkzaamheden verricht waarvoor u een S&O-verklaring heeft ontvangen?"
                        warningText="Voor u geldt in 2022 een forfaitar uurloon van €29."
                        options={[
                          { id: 'so', label: 'Ja' },
                          { id: 'so2', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="Technologiegebied">
                      <SelectField
                        label="Technologiegebied"
                        helperText={
                          <dl>
                            <dt>aard- en milieuwetenschappen</dt>
                            <dd>geowetenschappen | meteorologie | klimaatonderzoek | water & ecologie onderzoek</dd>
                          </dl>
                        }
                        expandableHelperText={true}
                        expandableHelperTextTitle="Uitleg over technologiegebieden"
                        options={[{ value: '1', label: 'aard- en milieuwetenschappen' }]}
                      ></SelectField>
                    </Fieldset>
                    <Fieldset legend="Periode aanvraag">
                      <SelectField label="Maand aanvang" options={[{ value: '1', label: 'Januari' }]}></SelectField>
                    </Fieldset>
                  </LayoutColumnRow>
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
    </div>
  );
};

export default Aanvrager;
