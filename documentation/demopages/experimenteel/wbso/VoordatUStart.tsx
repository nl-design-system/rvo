import {
  ActionGroup,
  Button,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import '../../common/style.scss';

const VoordatUStart = () => {
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
                state: 'doing',
                label: 'Voordat u start',
                onClick: linkTo("Demo pagina's/WBSO/Voordat u start"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
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
            <LayoutFlow gap="md">
              <div className="rvo-form-intro">
                <Link content="Terug" href="#" showIcon="before" icon="terug" />
                <Heading type="h1">Voordat u start</Heading>
                <Heading type="h2">Dit heeft u nodig</Heading>
                <ul className="rvo-list">
                  <li className="rvo-ul-item">Recente gegevens</li>
                  <li className="rvo-ul-item">Kopie van uw paspoort</li>
                  <li className="rvo-ul-item">Uittreksel van het KVK register</li>
                </ul>
                <Heading type="h2">Hieraan moet u voldoen</Heading>
                <ul className="rvo-list">
                  <li className="rvo-ul-item">Ingeschreven bij de Kamer van Koophandel</li>
                  <li className="rvo-ul-item">Minimaal 50 S&O-werknemers</li>
                  <li className="rvo-ul-item">Hoofdkantoor gevestigd in Nederland</li>
                </ul>
              </div>
              <form>
                <LayoutFlow row={false} gap="md">
                  <ActionGroup>
                    <Button
                      kind="warning-subtle"
                      size="sm"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Annuleren
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
                      Start aanvraag
                    </Button>
                  </ActionGroup>
                </LayoutFlow>
              </form>
            </LayoutFlow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default VoordatUStart;
