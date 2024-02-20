import {
  DateInputField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const Import = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
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
            label: 'Identificatie en Registratie van uw dieren',
            link: '#',
          },
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
        maxWidth="lg"
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="zwart"
              horizontalRule={false}
              items={[
                {
                  label: 'Dashboard',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Houder en UBN',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Melden',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-import--default&viewMode=story',
                  icon: 'plus',
                  active: true,
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                { label: 'Bekijken', link: '#', icon: 'oog' },
                { label: 'Machtigen', link: '#', icon: 'refund' },
                { label: 'Overzichten', link: '#', icon: 'opsomming' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutColumnRow size="xl">
              <Heading type="h1" noMargins={true}>
                Mijn I&R
              </Heading>
              <LayoutColumnRow size="md">
                <LayoutColumnRow size="xs">
                  <LayoutColumnRow size="md">
                    <Fieldset legend="Importmelding Rund">
                      <DateInputField
                        label="Importdatum"
                        helperText="Vul hier de datum in waarop u het dier heeft ge&iuml;mporteerd. Gebruik de kalender om de datum te kiezen of vul de datum zelf in. Gebruik dan het formaat dd-mm-jjjj (bijvoorbeeld 01-09-2020)."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer uitleg"
                      ></DateInputField>
                      <TextInputField
                        expandableHelperTextTitle="Meer uitleg"
                        expandableHelperText={true}
                        label="Nummer gezondheidscertificaat"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                        size="sm"
                      ></TextInputField>
                      <SelectField
                        expandableHelperTextTitle="Meer uitleg"
                        expandableHelperText={true}
                        label="Land van herkomst"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                      ></SelectField>
                    </Fieldset>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>
            </LayoutColumnRow>
          </div>
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
    </body>
  );
};

export default Import;
