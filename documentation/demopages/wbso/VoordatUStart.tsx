import {
  Button,
  Header,
  Heading,
  LayoutColumnRow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const VoordatUStart = () => {
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
                state: 'doing',
                label: 'Voordat u start',
                link: linkTo("Demo pagina's/WBSO/Voordat u start"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Vormvrije aanvraag',
                link: linkTo("Demo pagina's/WBSO/Vormvrije aanvraag"),
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Aanvrager',
                link: linkTo("Demo pagina's/WBSO/Aanvrager"),
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
                <Link content="Terug" href="#" showIcon="before" icon="terug" />
                <Heading type="h1" textContent="Voordat u start" />
                <Heading type="h2" textContent="Dit heeft u nodig"></Heading>
                <ul className="rvo-list">
                  <li className="rvo-ul-item">Recente gegevens</li>
                  <li className="rvo-ul-item">Kopie van uw paspoort</li>
                  <li className="rvo-ul-item">Uittreksel van het KVK register</li>
                </ul>
                <Heading type="h2" textContent="Hieraan moet u voldoen"></Heading>
                <ul className="rvo-list">
                  <li className="rvo-ul-item">Ingeschreven bij de Kamer van Koophandel</li>
                  <li className="rvo-ul-item">Minimaal 50 S&O-werknemers</li>
                  <li className="rvo-ul-item">Hoofdkantoor gevestigd in Nederland</li>
                </ul>
              </div>
              <form>
                <LayoutColumnRow row={false} size="md">
                  <div className="rvo-button-group">
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

export default VoordatUStart;
