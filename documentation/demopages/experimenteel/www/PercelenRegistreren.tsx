import { Button, Footer, Header, Heading, Icon, LayoutColumnRow, Link, MenuBar } from '@nl-rvo/components';
import '../../common/rhs-update.scss';
import '../../common/www.scss';

const PercelenRegistreren = () => {
  return (
    <body className="rvo-theme rvo-www">
      <div className="rvo-www rvo-rhs-update">
        <Header />
        <div className="rvo-rhs-update-component">
          <div className="rvo-responsive-menu-wrapper">
            <details className="rvo-responsive-menu">
              <summary className="rvo-responsive-menu-toggle">
                <Icon icon="menu" size="lg" /> Menu
              </summary>
              <div className="rvo-sidebar-menu">
                <MenuBar
                  items={[
                    {
                      label: 'Home',
                      active: true,
                      link: '#',
                    },
                    {
                      label: 'Onderwerpen',
                      link: '#',
                    },
                    {
                      label: 'Subsidie- en financieringswijzer',
                      link: '#',
                    },
                    {
                      label: 'Over ons',
                      link: '#',
                    },
                    {
                      label: 'Contact',
                      link: '#',
                    },
                    {
                      label: 'Mijn RVO',
                      link: '#',
                      icon: 'user',
                    },
                    {
                      label: 'English',
                      icon: 'wereldbol',
                      link: '#',
                    },
                    {
                      label: 'Zoeken',
                      icon: 'zoek',
                      link: '#',
                    },
                  ]}
                  size="lg"
                  useIcons={true}
                  iconPlacement="before"
                  maxWidth="lg"
                />
              </div>
            </details>
          </div>
          <div className="rvo-topnav--w-line">
            <MenuBar
              items={[
                {
                  label: 'Home',
                  active: true,
                  link: '#',
                },
                {
                  label: 'Onderwerpen',
                  link: '#',
                },
                {
                  label: 'Subsidie- en financieringswijzer',
                  link: '#',
                },
                {
                  label: 'Over ons',
                  link: '#',
                },
                {
                  label: 'Contact',
                  link: '#',
                },
                {
                  align: 'right',
                  label: 'Mijn RVO',
                  link: '#',
                  active: true,
                  icon: 'user',
                },
                {
                  align: 'right',
                  label: 'English',
                  icon: 'wereldbol',
                  link: '#',
                },
                {
                  align: 'right',
                  label: 'Zoeken',
                  icon: 'zoek',
                  link: '#',
                },
              ]}
              size="lg"
              useIcons={true}
              iconPlacement="before"
              maxWidth="lg"
            />
          </div>
        </div>

        <main className="rvo-main--www rvo-max-width-layout rvo-max-width-layout--sm rvo-main--w-line rvo-main--content-page">
          <LayoutColumnRow size="xl">
            <div className="rvo-content--www rvo-content--home">
              <LayoutColumnRow size="sm">
                <Heading type="h1">Alles over percelen registreren</Heading>
                <p className="rvo-paragraph rvo-paragraph--subtle rvo-paragraph--sm rvo-paragraph--no-spacing">
                  <em>Gepubliceerd op: </em>22 januari 2015 | <em>Laatst gecontroleerd op: </em> 12 oktober 2023
                </p>
              </LayoutColumnRow>
              <p className="rvo-paragraph rvo-paragraph--lg">
                Heeft u landbouwgrond of natuurgrond in gebruik? Dat registreert u bij ons. Dit doet u in Mijn percelen.
                Wij gebruiken uw registratie bijvoorbeeld voor het mestbeleid en grondgebonden subsidies die u
                aanvraagt.
              </p>
              <LayoutColumnRow size="xl">
                <div className="rvo-quick-links">
                  <Heading type="h2" textContent="Op deze pagina" />
                  <ul className="rvo-quick-links-list">
                    <li className="rvo-quick-links-list-item">
                      <Link
                        content="Waarom percelen registreren?"
                        target="#"
                        noUnderline={true}
                        showIcon="before"
                        icon="pijl-omlaag"
                      />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link
                        content="Wat registreert u en waar doet u dat?"
                        target="#"
                        noUnderline={true}
                        showIcon="before"
                        icon="pijl-omlaag"
                      />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link
                        content="Hoe registreert en wijzigt u uw percelen?"
                        target="#"
                        noUnderline={true}
                        showIcon="before"
                        icon="pijl-omlaag"
                      />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link
                        content="Welke wijzigingen geeft u door?"
                        target="#"
                        noUnderline={true}
                        showIcon="before"
                        icon="pijl-omlaag"
                      />
                    </li>
                    <li className="rvo-quick-links-list-item">
                      <Link
                        content="Gebruik van uw registratie"
                        target="#"
                        noUnderline={true}
                        showIcon="before"
                        icon="pijl-omlaag"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading type="h2">Waarom percelen registreren?</Heading>
                  <p className="rvo-paragraph">
                    Het is belangrijk dat u uw percelen goed bij ons registreert. Wij gebruiken de informatie namelijk
                    voor de grondgebonden subsidies die u aanvraagt in de{' '}
                    <a href="#" className="rvo-link">
                      Gecombineerde opgave.
                    </a>{' '}
                    Ook gebruiken we de gegevens voor verschillende onderdelen van het mestbeleid. Houd veranderingen in
                    oppervlakte, gebruik en gewas daarom zorgvuldig bij en zorg dat de registratie op orde is voordat u
                    de Gecombineerde opgave invult.
                  </p>
                </div>
              </LayoutColumnRow>
              <Heading type="h2">Wat registreert u en waar doet u dat?</Heading>
              <p className="rvo-paragraph">
                U registreert bij ons uw bedrijfssituatie. Dit betekent dat u alle grond registreert die u in gebruik
                heeft. Deze registratie doet u in de applicatie Mijn percelen.
              </p>
              <p className="rvo-paragraph">
                In Mijn percelen tekent en wijzigt u uw landbouwgrond (percelen) en alle landschapselementen die bij die
                grond horen. Denk hierbij aan bomen, water en hout. Bij elk perceel geeft u een gebruikstitel en een
                gewas op. Daarvoor kunt u gebruikmaken van de tabellen die u vindt bij:
              </p>
              <div className="rvo-rhs-update-component">
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Mijn Percelen registreren
                </a>
              </div>
              <p className="rvo-paragraph">
                Doet u aan strokenteelt? Hoe u dat registreert, leest u op de pagina Strokenteelt registreren. U beheert
                uw eigen bedrijfssituatie. Wij voeren hier geen wijzigingen in door. Wel kunnen we uw regelingspercelen
                wijzigen. Dit zijn de percelen die u opgeeft voor een regeling in de Gecombineerde opgave.
              </p>
              <Heading type="h2">Gebruik van uw registratie</Heading>
              <p className="rvo-paragraph">
                In de Gecombineerde opgave vraagt u subsidie aan voor verschillende regelingen. Ook geeft u hierin
                gegevens door voor de mestwetgeving. Uw intekening gebruiken wij daarvoor als basis. Houd daarbij onder
                meer rekening met verschillen per regeling.
              </p>{' '}
              <hr className="rvo-divider"></hr>
            </div>
            <div className="rvo-feedback">
              <LayoutColumnRow row={true} wrap={true} size="sm">
                <Icon icon="tekstballon-met-hart" size="2xl" />
                <em>Bent u tevreden over deze pagina?</em>
                <span className="rvo-rhs-update-component">
                  <Button kind="secondary" size="sm">
                    Geef uw mening
                  </Button>
                </span>
              </LayoutColumnRow>
            </div>
          </LayoutColumnRow>
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

export default PercelenRegistreren;
