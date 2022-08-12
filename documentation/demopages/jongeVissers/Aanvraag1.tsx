import { Button } from '@nl-rvo/components/button/css/template';
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

const Aanvraag1 = () => {
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
      />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Jonge Vissers 2020', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Aanvraag', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Kosten', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Bijlagen', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Samenvatting', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Ondertekenen', link: '#', size: 'md', line: 'straight' },
              { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="xl">
              <div className="intro">
                <Heading type="h1" textContent="Aanvraag formulier subsidie"></Heading>
                <LayoutColumnRow size="sm">
                  <dl className="rvo-data">
                    <dt>BSN</dt>
                    <dd>35012085</dd>
                    <dt>Naam</dt>
                    <dd>Albert Heijn B.V.</dd>
                    <dt>Rekeningnummer</dt>
                    <dd>NLSNBD093845843</dd>
                    <dt>Adres</dt>
                    <dd>Haarsteeweg 25, 4560 KL, Zutphen</dd>
                    <dt>E-mailadres</dt>
                    <dd>albert@heijn.nl</dd>
                  </dl>
                  <Link showIcon="before" url="#" icon="bewerken" content="Wijzig deze gegevens"></Link>
                </LayoutColumnRow>
              </div>
              <form>
                <LayoutColumnRow size="md">
                  <Fieldset legend="Correspondentie">
                    <RadioButtonField
                      layout="vertical"
                      name="radio-buttons"
                      labelText="Hoe wilt u correspondentie ontvangen?"
                      warningText="U heeft aangegeven dat u de correspondentie digitaal wil ontvangen. Hiermee geeft u akkoord dat RVO berichten plaatst over uw aanvraag in Mijn Dossier en u een e-mail stuurt over statuswijzigingen van uw aanvraag."
                      options={[
                        {
                          id: 'cor',
                          labelText:
                            'Ik ontvang berichten digitaal in Mijn Dossier.Ik verklaar dat ik voldoende bereikbaar ben via e-mail en Mijn Dossier',
                        },
                        { id: 'cor', labelText: 'Ik ontvang berichten liever op papier.' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>
                  <Fieldset legend="Contactpersoon">
                    <RadioButtonField
                      layout="horizontal"
                      name="radio-buttons"
                      labelText="Is de contactpersoon iemand anders dan de indiener?"
                      options={[
                        { id: 'cp', labelText: 'Ja' },
                        { id: 'cp', labelText: 'Nee' },
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

export default Aanvraag1;
