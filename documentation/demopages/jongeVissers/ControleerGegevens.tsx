import { Button } from '@nl-rvo/components/button/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const ControleerGegevens = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'doing',
                  label: 'Controleer uw gegevens',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Correspondentie',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--correspondentie&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Datum verleningsverzoek',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--datum&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--project&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--kosten',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: 'iframe.html?args=&id=pagina-s-jonge-vissers--bijlagen',
                  size: 'md',
                  line: 'straight',
                },

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
                  <LayoutColumnRow size="md">
                    <Heading type="h1" textContent="Controleer uw gegevens"></Heading>
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
                  </LayoutColumnRow>
                </div>
                <form>
                  <LayoutColumnRow size="md">
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

export default ControleerGegevens;
