import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { SelectField } from '@nl-rvo/components/form-field/css/select-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const Aanvrager = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Aanvraag WBSO', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Voordat u start',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-wbso--01-voordat-u-start&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Vormvrije aanvraag',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-wbso--02-vormvrije-aanvraag&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Aanvrager',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-wbso--03-aanvrager&viewMode=story',
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
              <div className="intro">
                <Link content="Terug" url="#" showIcon="before" icon="terug" />
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
                        labelText="Contactpersoon"
                        options={[
                          { value: '1', label: 'Contactpersoon 1' },
                          { value: '2', label: 'Contactpersoon 2' },
                          { value: '3', label: 'Contactpersoon 3' },
                        ]}
                      ></SelectField>
                    </Fieldset>
                    <Fieldset legend="Organisatie">
                      <RadioButtonField
                        layout="horizontal"
                        name="radio-buttons"
                        labelText="U drijft een onderneming in de zin van de Wet IB of Wet Vpb en bent geen publieke kennisinstelling?"
                        helperText="Bent u geen ondernemer in de zin van de Wet IB (Inkomstenbelasting 2001) of Wet VpB
                      (Vennootschapsbelasting 1969), dan kunt u geen WBSO aanvragen. U kunt ook geen WBSO aanvragen
                      indienen als u een publieke kennisinstelling bent (zie artikel 1, onderdeel m van de WVA)."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer uitleg"
                        options={[
                          { id: 'wet-ib', labelText: 'Ja' },
                          { id: 'wet-ib', labelText: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="Gegevens aanvrager in aanvraagperiode">
                      <TextInputField labelText="Prognose totaal aantal werknemers" valueType="number" />
                      <TextInputField labelText="(Waarvan) eigen S&O-werknemers" valueType="number" />
                    </Fieldset>
                    <Fieldset legend="S&O-uurloon">
                      <RadioButtonField
                        layout="horizontal"
                        name="radio-buttons"
                        labelText="Heeft u in 2020 S&O-werkzaamheden verricht waarvoor u een S&O-verklaring heeft ontvangen?"
                        warningText="Voor u geldt in 2022 een forfaitar uurloon van €29."
                        options={[
                          { id: 'so', labelText: 'Ja' },
                          { id: 'so', labelText: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="Technologiegebied">
                      <SelectField
                        labelText="Technologiegebied"
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
                      <SelectField labelText="Maand aanvang" options={[{ value: '1', label: 'Januari' }]}></SelectField>
                    </Fieldset>
                  </LayoutColumnRow>
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

export default Aanvrager;
