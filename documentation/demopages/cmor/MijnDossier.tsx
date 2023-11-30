import { Footer, Icon, LayoutColumnRow, MenuBar, Tag } from '@nl-rvo/components';
import '../common/rhs-update.scss';
import '../common/cmor.scss';

const MijnDossier = () => {
  return (
    <body className="rvo-theme rvo-cmor rvo-sidebar-menu-active">
      <div className="rvo-cmor rvo-rhs-update">
        <header className="rvo-header">
          <div className="rvo-rhs-update-component">
            <a className="rvo-logo" href="#">
              <div className="rvo-logo-lint">
                <img src="images/lint.svg" alt="" />
              </div>
              <div className="rvo-logo-text rvo-logo-text--full">
                Rijksdienst voor Ondernemend <br />
                Nederland
              </div>
              <div className="rvo-logo-text rvo-logo-text--abv">RVO</div>
            </a>
          </div>
        </header>
        <div className="rvo-rhs-update-component">
          <div className="rvo-responsive-menu-wrapper">
            <details className="rvo-responsive-menu">
              <summary className="rvo-responsive-menu-toggle">
                <Icon icon="menu" size="lg" /> Menu
              </summary>
              <div className="rvo-sidebar-menu">
                <MenuBar
                  items={[
                    { label: 'Overzicht', link: '#', icon: 'home' },
                    { label: 'Mijn dossier', link: '#', icon: 'map', active: true },
                    { label: 'Mijn berichten', link: '#', icon: 'mail' },
                    { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
                  ]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
                />
                <MenuBar
                  items={[{ label: 'Hulp & Contact', link: '#', icon: 'communicatie' }]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
                />
                <MenuBar
                  items={[
                    { label: 'English', link: '#', icon: 'wereldbol' },
                    { label: 'Uitloggen', link: '#', icon: 'externe-link' },
                  ]}
                  size="md"
                  useIcons={true}
                  iconPlacement="before"
                  menuMaxWidth="md"
                />
              </div>
            </details>
          </div>
          <div className="rvo-topnav--w-line">
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
                  link: 'iframe.html?args=&id=demo-pagina-s-mijn-percelen-profiel--default&viewMode=story',
                  active: true,
                  icon: 'user',
                },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              menuMaxWidth="lg"
            />
          </div>
        </div>
        <main className="rvo-main--cmor rvo-main--sidebar-active rvo-max-width-layout rvo-max-width-layout--lg rvo-main--w-line">
          <div className="rvo-sidebar-menu">
            <MenuBar
              items={[
                { label: 'Overzicht', link: '#', icon: 'home' },
                { label: 'Mijn dossier', link: '#', icon: 'map', active: true },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              menuMaxWidth="md"
            />
          </div>
          <div className="rvo-content--cmor rvo-content--mijn-dossier">
            <LayoutColumnRow size="xl">
              <h1 className="utrecht-heading-1">
                <strong>Mijn dossier</strong>
              </h1>
              <p className="rvo-paragraph">Naar welke aanvraag bent u op zoek?</p>
              <a className="rvo-tag rvo-tag--default" href="#">
                ISDE
              </a>
              <Tag content="ISDE" type="default" />
            </LayoutColumnRow>
          </div>
        </main>
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
      </div>
    </body>
  );
};

export default MijnDossier;
