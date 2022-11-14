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
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const VormvrijeAanvraag = () => {
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
                link: 'iframe.html?args=&id=demo-pagina-s-wbso--01-voordat-u-start&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Vormvrije aanvraag',
                link: 'iframe.html?args=&id=demo-pagina-s-wbso--02-vormvrije-aanvraag&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Aanvrager',
                link: 'iframe.html?args=&id=demo-pagina-s-wbso--03-aanvrager&viewMode=story',
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
                <Heading type="h1" textContent="Vormvrije aanvraag" />
              </div>
              <form>
                <LayoutColumnRow row={false} size="md">
                  <LayoutColumnRow row={false} size="md">
                    <Fieldset legend="">
                      <RadioButtonField
                        name="radio-buttons"
                        label="Wilt u een vormvrije aanvraag indienen?"
                        helperText="Heeft u geen tijd om een volledige WBSO-aanvraag in te dienen? Dien dan een vormvrije aanvraag in. U vult een paar basisgegevens in en vult uw aanvraag later aan."
                        options={[
                          { id: 'vva', label: 'Ja' },
                          { id: 'vva', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
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

export default VormvrijeAanvraag;
