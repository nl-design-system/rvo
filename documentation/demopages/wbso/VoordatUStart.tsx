import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
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
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-wbso--01-voordat-u-start&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Vormvrije aanvraag',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-wbso--02-vormvrije-aanvraag&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
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
                      textContent="Annuleren"
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
                      textContent="Start aanvraag"
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

export default VoordatUStart;
