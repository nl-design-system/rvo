import {
  Button,
  ButtonGroup,
  Fieldset,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import '../../common/style.scss';

const VormvrijeAanvraag = () => {
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
                state: 'doing',
                label: 'Vormvrije aanvraag',
                onClick: linkTo("Demo pagina's/WBSO/Vormvrije aanvraag"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
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
            <LayoutFlow size="md">
              <div className="rvo-form-intro">
                <Link content="Terug" href="#" showIcon="before" icon="terug" />
                <Heading type="h1" textContent="Vormvrije aanvraag" />
              </div>
              <form>
                <LayoutFlow row={false} size="md">
                  <LayoutFlow row={false} size="md">
                    <Fieldset legend="">
                      <RadioButtonField
                        name="radio-buttons"
                        label="Wilt u een vormvrije aanvraag indienen?"
                        helperText="Heeft u geen tijd om een volledige WBSO-aanvraag in te dienen? Dien dan een vormvrije aanvraag in. U vult een paar basisgegevens in en vult uw aanvraag later aan."
                        options={[
                          { id: 'vva', label: 'Ja' },
                          { id: 'vva2', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                  </LayoutFlow>
                  <ButtonGroup>
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
                  </ButtonGroup>
                </LayoutFlow>
              </form>
            </LayoutFlow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default VormvrijeAanvraag;
