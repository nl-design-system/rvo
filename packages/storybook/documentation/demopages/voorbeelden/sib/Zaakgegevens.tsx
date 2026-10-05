import {
  ActionGroup,
  FormField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  ProgressTracker
} from '@nl-rvo/component-library-react';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const Zaakgegevens = () => {
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
              // steps={[
              //   { state: 'start', label: 'SIB 2024: Coaching', link: '#', size: 'md', line: 'straight' },
              //   {
              //     state: 'completed',
              //     label: 'Startpagina',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'completed',
              //     label: 'Uw gegevens',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'completed',
              //     label: 'Uw onderneming',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'doing',
              //     label: 'Zaakgegevens',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'incomplete',
              //     label: 'Kosten',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },

              //   {
              //     state: 'incomplete',
              //     label: 'Uitvoerder coaching traject',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'incomplete',
              //     label: 'Maatschappelijk verantwoord ondernemen',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },
              //   {
              //     state: 'incomplete',
              //     label: 'Ondertekening',
              //     link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-ondertekening--default&viewMode=story',
              //     size: 'md',
              //     line: 'straight',
              //   },

              //   { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              // ]}
            />
            <LayoutFlow gap="xl">
              <div>
                <a
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story"
                >
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                    role="img"
                    aria-label="Terug"
                  ></span>
                  Terug naar Uw onderneming
                </a>
                <Heading type="h1">Zaakgegevens</Heading>
                <p className="rvo-text--no-margins">
                  Geef hieronder, door middel van een begin- en einddatum, de periode aan waarbinnen u verwacht de
                  coaching te volgen. Er mag pas met de coaching gestart worden na het indienen van de aanvraag.
                </p>
              </div>
              <Fieldset legend="">
                <FormField label="Geef uw aanvraag een toepasselijke zaaknaam">
                  <FormField.Text />
                </FormField>
                <FormField 
                  label="Startdatum (van)" 
                  helperText="Geef hier de begindatum van uw coachingstraject op."
                >
                  <FormField.Date />
                </FormField>
                <FormField 
                  label="Einddatum (t/m)" 
                  helperText="Geef hier de einddatum van uw coachingstraject op."
                >
                  <FormField.Date />
                </FormField>
                <FormField 
                  label="Voor export naar welk land wilt u coaching ontvangen?" 
                  helperText="U kunt hier één land noemen, niet Nederland. Als u meerderde doellanden heeft, maakt u dan een keuze."
                >
                  <FormField.Text />
                </FormField>
                <FormField 
                  label="Heeft u, de groep of fiscale eenheid reeds het maximale subsidiebedrag van € 6.500 per mkb-onderneming in dit kalenderjaar ontvangen?"
                  helperText="U kunt maximaal € 6.500 SIB subsidie per kalenderjaar ontvangen. Dit betekent dat u in één kalenderjaar verschillende onderdelen van SIB mag aanvragen en de subsidie kunt stapelen tot dit maximum bedrag. Zie voor de voorwaarden en subsidiebedragen <a href='#' class='rvo-link rvo-link--donkerblauw'>Support International Business (SIB) (rvo.nl)</a>"
                  expandableHelperText={{title: "Meer uitleg", children: ""}}
                >
                  <FormField.RadioButtonGroup 
                    name="bedrag"
                    options={[
                      { id: 'bedrag A', label: 'Ja' },
                      { id: 'bedrag B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="Welke kansen ziet u in dit land?">
                    <FormField.TextArea />
                </FormField>

                <FormField label="Bent u al actief in dit doelland?">
                  <FormField.RadioButtonGroup 
                    name="actief"
                    options={[
                      { id: 'actief A', label: 'Ja' },
                      { id: 'actief B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField 
                  label="Gaat u exporteren met een eigen product of dienst?"
                  helperText="Het gaat om zelfgeproduceerde of zelfontwikkelde goederen en/of diensten en niet om ingekochte goederen en/of diensten die ongewijzigd worden doorverkocht. U komt alleen in aanmerking voor SIB als u wilt gaan exporteren met een eigen product of dienst."
                >
                  <FormField.RadioButtonGroup 
                    name="export"
                    options={[
                      { id: 'export A', label: 'Ja' },
                      { id: 'export B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="Beschikt u over capaciteit/financiële middelen/etc om structureel internationaal actief te worden en verdere stappen te kunnen nemen?">
                  <FormField.RadioButtonGroup 
                    name="capaciteit"
                    options={[
                      { id: 'capaciteit A', label: 'Ja' },
                      { id: 'capaciteit B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="Bent u met uw product of dienst al actief op de Nederlandse markt?">
                  <FormField.RadioButtonGroup 
                    name="nlmarkt"
                    options={[
                      { id: 'nlmarkt A', label: 'Ja' },
                      { id: 'nlmarkt B', label: 'Nee' },
                    ]}
                  />
                </FormField>
              </Fieldset>
              <ActionGroup>
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story"
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

export default Zaakgegevens;
