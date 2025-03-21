import {
  ActionGroup,
  DateInputField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  MobileMenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Import = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
          },
          {
            label: 'Mijn dossier',
            link: '#',
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
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Houder en UBN',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Melden',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story',
                  icon: 'plus',
                  active: true,
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                {
                  label: 'Bekijken',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story',
                  icon: 'oog',
                },
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
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Importmelding Rund
              </Heading>

              <LayoutFlow gap="md">
                <LayoutFlow gap="xs">
                  <LayoutFlow gap="md">
                    <Fieldset legend="">
                      <DateInputField
                        label="Importdatum"
                        helperText="Vul hier de datum in waarop u het dier heeft ge&iuml;mporteerd. Gebruik de kalender om de datum te kiezen of vul de datum zelf in. Gebruik dan het formaat dd-mm-jjjj (bijvoorbeeld 01-09-2020)."
                      ></DateInputField>
                      <TextInputField
                        label="Nummer gezondheidscertificaat"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                        size="sm"
                      ></TextInputField>
                      <SelectField
                        label="Land van herkomst"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                      ></SelectField>
                      <TextInputField
                        label="Transport nummer (optioneel)"
                        helperText="Vult u het transportnummer in? Dan heeft u een extra mogelijkheid om meldingen van hetzelfde transport bij elkaar te zoeken. Bij Bekijken van meldingen kunt u dan ook zoeken op transportnummer. Vul alleen cijfers in, geen letters."
                        size="sm"
                      ></TextInputField>
                    </Fieldset>

                    <ActionGroup>
                      <a
                        href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-importgegevens--default&viewMode=story"
                        className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                      >
                        Opslaan en gegevens runderen invoeren
                      </a>
                    </ActionGroup>
                  </LayoutFlow>
                </LayoutFlow>
              </LayoutFlow>
            </LayoutFlow>
          </div>
        </div>
      </main>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Import;
