import { Footer, Header, Heading, LayoutColumnRow, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const SIBstartpagina = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutColumnRow size="xl">
        <div className="navigation">
          <MobileMenuBar
            iconPlacement="before"
            useIcons={true}
            isOpen={false}
            submenuItems={[]}
            size="md"
            items={[
              {
                label: 'Overzicht',
                link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
                icon: 'home',
                active: true,
              },
              {
                label: 'Mijn dossier',
                link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
                icon: 'map',
              },
              { label: 'Mijn berichten', link: '#', icon: 'mail' },
              { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
            ]}
          ></MobileMenuBar>
          <MenuBar
            items={[
              {
                align: 'right',
                label: 'Hulp & Contact',
                link: '#',
              },
              {
                align: 'right',
                label: 'English',
                icon: 'wereldbol',
                link: '#',
              },
              {
                align: 'right',
                label: 'Boer Overveen B.V',
                link: '#',
                active: true,
                icon: 'user',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />
          <MenuBar
            items={[
              {
                label: 'SIB',
                link: '#',
              },
              {
                align: 'right',
                label: 'Opslaan en afsluiten',
                link: '#',
                active: true,
                icon: 'save',
              },
            ]}
            size="md"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
            type="sub"
          />
        </div>

        <main className="rvo-max-width-layout rvo-max-width-layout--md">
          <LayoutColumnRow size="xl">
            <Heading type="h1" noMargins={true}>
              Voordat u start
            </Heading>
          </LayoutColumnRow>
        </main>
      </LayoutColumnRow>
      <Footer
        columns={[
          {
            label: 'RVO',
            items: [
              { content: 'Over ons', link: '#' },
              { content: 'Contact', link: '#' },
              { content: 'Pers', link: '#' },
              { content: 'Zaken regelen bij RVO', link: '#' },
            ],
          },
          {
            label: 'Over deze site',
            items: [
              { content: 'Privacy', link: '#' },
              { content: 'Cookies en anti-spam', link: '#' },
              { content: 'Toegankelijkheid', link: '#' },
              { content: 'Proclaimer', link: '#' },
            ],
          },
          {
            label: 'Snel naar',
            items: [
              { content: 'Onderwerpen A t/m Z', link: '#' },
              { content: 'Klantenpanel', link: '#' },
              { content: 'Documenten en publicaties', link: '#' },
              { content: 'Overheidspublicaties en auteursrecht', link: '#' },
            ],
          },
          {
            label: 'Blijf op de hoogte',
            items: [
              { content: 'Social media', link: '#' },
              { content: 'RSS', link: '#' },
              { content: 'Gratis nieuwsbrief', link: '#' },
            ],
          },
        ]}
      />
    </body>
  );
};

export default SIBstartpagina;
