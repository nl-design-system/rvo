import {
  ActionGroup,
  Fieldset,
  FileInputField,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
  TextareaField,
  TextInputField,
} from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Uitvoerder = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutFlow gap="2xl">
        <LayoutFlow gap="xl">
          <div className="navigation">
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
              iconPlacement="before"
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
              iconPlacement="before"
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
                  state: 'completed',
                  label: 'Uw onderneming',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-onderneming--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Zaakgegevens',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-zaakgegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'doing',
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
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-kosten--default&viewMode=story"
                >
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                    role="img"
                    aria-label="Terug"
                  ></span>
                  Terug naar Kosten
                </a>
                <Heading type="h1" noMargins={true}>
                  Uitvoerder coaching traject
                </Heading>
              </div>
              <Fieldset legend="">
                <RadioButtonField
                  name="uitvoerder"
                  label="Uitvoerder coachingtraject"
                  helperText=""
                  options={[
                    { id: 'uitvoerderA', label: 'Albert Heijn' },
                    { id: 'uitvoerderB', label: 'Nieuwe organisatie toevoegen' },
                  ]}
                ></RadioButtonField>
                <div
                  role="group"
                  aria-labelledby="fieldId-label"
                  className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                >
                  <div className="rvo-form-field__label">
                    <label className="rvo-label">Kies een vestiging</label>
                  </div>
                  <div className="rvo-select-wrapper">
                    <select id="field" className="utrecht-select utrecht-select--html-select">
                      <option>Albert Heijn, Stadionweg 159, 1076NN AMSTERDAM, 000018364012</option>
                      <option>Albert Heijn B.V., Prinses Margrietplnts 25, 2595AM</option>
                    </select>
                  </div>
                  <p className="rvo-text--sm rvo-text--no-margins">
                    <a
                      href="#"
                      className="rvo-link rvo-link--logoblauw rvo-link--sm rvo-link--with-icon rvo-link--no-underline"
                    >
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-ondernemingen rvo-icon--sm rvo-icon--logoblauw  rvo-link__icon--before"
                        role="img"
                        aria-label="Ondernemingen"
                      ></span>
                      Haal vestigingen op van dit KVK nummer
                    </a>
                  </p>
                </div>
              </Fieldset>
              <Fieldset legend="Contactpersoon coach">
                <TextInputField label="Voorletters" size="sm"></TextInputField>
                <TextInputField label="Tussenvoegsels" size="sm"></TextInputField>
                <TextInputField label="Achternaam"></TextInputField>
                <TextInputField label="Telefoonnummer" size="md"></TextInputField>
                <TextInputField label="E-mailadres"></TextInputField>
                <TextInputField label="Wat is de website (URL) van de opgegeven coach?"></TextInputField>
                <TextareaField label="Waarom heeft u voor de opgegeven coach gekozen?"></TextareaField>
              </Fieldset>
              <Fieldset legend="Curriculum Vitae (CV) coach">
                <p className="rvo-text rvo-text--no-margins">
                  Het CV van de opgegeven coach is opgesteld in het Nederlands of Engels en bevat maximaal 5 pagina's.
                  Uit het CV blijkt dat de opgegeven coach:
                </p>
                <ul className="rvo-ul rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                  <li>beschikt over tenminste hbo denk- werkniveau;</li>
                  <li>de coaching uitvoert namens een organisatie die exportadvies als kerntaak heeft;</li>
                  <li>
                    aantoonbaar ten minste drie jaar praktijkervaring heeft in het uitvoeren van exportactiviteiten in
                    het doelland.
                  </li>
                </ul>
                <FileInputField
                  label="CV bestand coach"
                  warningText="Let op: Gebruik in de bestandsnaam alleen cijfers en letters."
                ></FileInputField>
              </Fieldset>
              <ActionGroup>
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story"
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

export default Uitvoerder;
