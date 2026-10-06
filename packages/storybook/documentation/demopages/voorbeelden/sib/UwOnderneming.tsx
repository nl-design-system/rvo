import {
  ActionGroup,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  ProgressTracker,
  FormField,
} from '@nl-rvo/component-library-react';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const UwOnderneming = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutFlow gap="2xl">
        <LayoutFlow gap="xl">
          <div className="navigation">
            <MenuBar
              items={[
                {
                  label: 'Mijn RVO',
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
              iconPlacement="left"
              maxWidth="md"
            />
            <MenuBar
              items={[
                {
                  label: 'SIB 2024: Coaching',
                  link: '#',
                },
                {
                  align: 'right',
                  label: 'Opslaan en afsluiten',
                  link: '#',
                  icon: 'save',
                },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="left"
              maxWidth="md"
            />
          </div>

          <main className="rvo-max-width-layout rvo-max-width-layout--md">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'SIB 2024: Coaching', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Startpagina',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Uw gegevens',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Uw onderneming',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Zaakgegevens',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Maatschappelijk verantwoord ondernemen',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-ondertekening--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <LayoutFlow gap="xl">
              <div>
                <a
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon  rvo-link--normal"
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story"
                >
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                    role="img"
                    aria-label="Terug"
                  ></span>
                  Terug naar Uw gegevens
                </a>
                <Heading type="h1" noMargins={true}>
                  Uw onderneming
                </Heading>
              </div>
              <Fieldset legend="">
                <FormField label="Is voor uw organisatie een verzoek tot surseance van betaling, tot faillissement, of tot het van toepassing verklaren van de schuldsaneringsregeling ingediend?">
                  <FormField.RadioButtonGroup
                    name="schuld"
                    options={[
                      { id: 'schuldA', label: 'Ja' },
                      { id: 'schuldB', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="Is uw organisatie een mkb-onderneming?">
                  <FormField.RadioButtonGroup
                    name="mkb"
                    options={[
                      { id: 'mkb A', label: 'Ja' },
                      { id: 'mkb B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="U beschikt over financiële middelen, potentie en ambitie om structureel internationaal actief te worden en verdere stappen te kunnen nemen. Klopt dit? *">
                  <FormField.RadioButtonGroup
                    name="middelen"
                    options={[
                      { id: 'middelen A', label: 'Ja' },
                      { id: 'middelen B', label: 'Nee' },
                    ]}
                  />
                </FormField>

                <FormField label="Hoeveel medewerkers heeft uw onderneming?">
                  <FormField.Text size="sm" validation="none" />
                </FormField>
                <FormField label="Wat is de website van uw organisatie?">
                  <FormField.Text />
                </FormField>
                <FormField
                  label="SBI-code"
                  helperText="De SBI-code bestaat uit 4 of 5 cijfers. Kijk voor meer informatie op <a href='#' class='rvo-link rvo-link--donkerblauw'>overzicht SBI-codes</a>"
                >
                  <FormField.Text size="sm" validation="none" />
                </FormField>
              </Fieldset>
              <ActionGroup>
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Opslaan en verder gaan
                </a>
              </ActionGroup>
            </LayoutFlow>
          </main>
        </LayoutFlow>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
};

export default UwOnderneming;
