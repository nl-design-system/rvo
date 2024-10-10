import {
  ButtonGroup,
  Fieldset,
  FileInputField,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/components';
import '../../../../components/text-helpers/index.scss';

const Uitvoerder = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <LayoutColumnRow size="2xl">
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
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                  active: true,
                },
                {
                  label: 'Mijn dossier',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-mijn-dossier--default&viewMode=story',
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
            <ProgressTracker
              steps={[
                { state: 'start', label: 'SIB 2024: Coaching', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Startpagina',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-startpagina--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Uw gegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-gegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Uw onderneming',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uw-onderneming--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Zaakgegevens',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-zaakgegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-kosten--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'doing',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Maatschappelijk verantwoord ondernemen',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-mvo--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-ondertekening--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <LayoutColumnRow size="xl">
              <div>
                <a
                  className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                  href="iframe.html?args=&id=demo-pagina-s-sib-kosten--default&viewMode=story"
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
                <TextInputField
                  inputType="textarea"
                  label="Waarom heeft u voor de opgegeven coach gekozen?"
                ></TextInputField>
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
              <ButtonGroup>
                <a
                  href="iframe.html?args=&id=demo-pagina-s-sib-mvo--default&viewMode=story"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Opslaan en verder gaan
                </a>
              </ButtonGroup>
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
      </LayoutColumnRow>
    </body>
  );
};

export default Uitvoerder;
