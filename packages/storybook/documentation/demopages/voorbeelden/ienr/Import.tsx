/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  FormField,
  ActionGroup,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const landOpties = [
  { value: 'nl', label: 'Nederland' },
  { value: 'be', label: 'België' },
  { value: 'de', label: 'Duitsland' },
  { value: 'fr', label: 'Frankrijk' },
  { value: 'pl', label: 'Polen' },
];

export default function ImportPage(): ReactElement {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
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

            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
        horizontalRule={true}
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <nav aria-label="Menu">
              <LayoutFlow gap="sm">
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story"
                  icon="home"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  icon="user"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Houder en UBN
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story"
                  icon="plus"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="bold"
                >
                  Melden
                </Link>
                <Link
                  href="#"
                  icon="terug"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Wijzigen & intrekken
                </Link>
                <Link
                  href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story"
                  icon="oog"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Bekijken
                </Link>
                <Link
                  href="#"
                  icon="refund"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Machtigen
                </Link>
                <Link
                  href="#"
                  icon="opsomming"
                  iconPlacement="left"
                  color="zwart"
                  iconColor="zwart"
                  noUnderline={true}
                  weight="normal"
                >
                  Overzichten
                </Link>
              </LayoutFlow>
            </nav>
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
                      <FormField
                        id="importdatum"
                        label="Importdatum"
                        helperText="Vul hier de datum in waarop u het dier heeft ge&iuml;mporteerd. Gebruik de kalender om de datum te kiezen of vul de datum zelf in. Gebruik dan het formaat dd-mm-jjjj (bijvoorbeeld 01-09-2020)."
                      >
                        <FormField.Text />
                      </FormField>
                      <FormField
                        id="nummer-gezondheidscertificaat"
                        label="Nummer gezondheidscertificaat"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                      >
                        <FormField.Text sizeInput="sm" />
                      </FormField>
                      <FormField
                        id="land-van-herkomst"
                        label="Land van herkomst"
                        helperText="Vul hier het nummer van het gezondheidscertificaat in. Het formaat van het certificaatnummer is INTRA(of Intra).EU.landcode.jaartal.7cijfers (bijvoorbeeld Intra.EU.BE.2021.0025455)"
                      >
                        <FormField.Select options={landOpties} />
                      </FormField>
                      <FormField
                        id="transport-nummer-optioneel"
                        label="Transport nummer (optioneel)"
                        helperText="Vult u het transportnummer in? Dan heeft u een extra mogelijkheid om meldingen van hetzelfde transport bij elkaar te zoeken. Bij Bekijken van meldingen kunt u dan ook zoeken op transportnummer. Vul alleen cijfers in, geen letters."
                      >
                        <FormField.Text sizeInput="sm" />
                      </FormField>
                    </Fieldset>

                    <ActionGroup>
                      <a
                        href="iframe.html?args=&id=pagina-s-voorbeelden-i-r-importgegevens--default&viewMode=story"
                        className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
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
}
