import {
  ButtonGroup,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  TextInputField,
} from '@nl-rvo/components';
import '../../../../components/text-helpers/index.scss';

const Mvo = () => {
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
                  state: 'completed',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=demo-pagina-s-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
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
                  Terug naar Uitvoerder coaching traject
                </a>
                <Heading type="h1" noMargins={true}>
                  Maatschappelijk Verantwoord Ondernemen (MVO)
                </Heading>
                <p className="rvo-text--no-margins">
                  Als Nederlandse overheid vinden we investeren in duurzaamheid erg belangrijk. Sterker nog: de ambitie
                  is om Europees koploper te zijn bij het tegengaan van de opwarming van de aarde en het stimuleren van
                  een eerlijke, innovatieve, groene en circulaire economie. Om dit mogelijk te maken, is het belangrijk
                  dat individuen en (publieke en private) organisaties ook environmental, social en governance (ESG)
                  aspecten meenemen in hun ambities, dagelijkse activiteiten en reflecties.
                </p>
                <p>
                  De Sustainable Development Goals (SDGs) van de Verenigde Naties helpen organisaties om hier concretere
                  invulling aan te geven. Wanneer organisaties zich richten op het maken van impact op één of meerdere
                  specifieke SDGs, dragen zij actief bij aan o.a. het oplossen van armoede, ongelijkheid, onrecht,
                  milieuschade en klimaatverandering. Ook brengt het één gemeenschappelijke taal, een betere
                  samenwerking met (gelijkgestemde) partners, en een efficiëntere wijze om acties en ambities van
                  organisaties te vergelijken en te verbeteren. Bij de subsidies die RVO verstrekt, en zo ook binnen
                  SIB, besteden we daarom aandacht aan de SDGs en duurzaam internationaal ondernemen.
                </p>
              </div>
              <Fieldset legend="">
                <CheckboxField
                  helperText="Kies één of meerdere van de onderstaande antwoorden"
                  label="Bent u actief op het gebied van duurzaamheid? "
                  invalid={false}
                  options={[
                    {
                      id: 'optionA-cb',
                      label: 'Waardige werkomstandigheden en eerlijke beloning',
                    },
                    { id: 'optionB-cb', label: 'Efficiënter verbouwen voedsel en tegengaan van voedselverspilling ' },
                    { id: 'optionC-cb', label: 'Inclusiviteit en vermindering ongelijkheid ' },
                    { id: 'optionD-cb', label: 'Duurzaam gebruik van water en maritieme hulpbronnen ' },
                  ]}
                ></CheckboxField>
                <TextInputField
                  inputType="textarea"
                  label="Kunt u deze geselecteerde activiteiten (of anders) toelichten?"
                ></TextInputField>
              </Fieldset>

              <div>
                <Heading type="h2" noMargins={true}>
                  MVO Risico checker
                </Heading>
                <p className="rvo-text rvo-text--no-margins">
                  Naast gerichte ambities op het maken van positieve impact, zoals hierboven genoemd, kunnen
                  organisaties ook aan duurzaamheid en de SDGs bijdragen door potentiële negatieve impact zo veel
                  mogelijk te voorkomen. Wanneer organisaties actief inzicht ophalen over potentiële
                  duurzaamheidsrisico’s op mens en milieu en acties ondernemen ter voorkoming of vermindering hiervan -
                  wordt dit Maatschappelijk Verantwoord Ondernemen (MVO) genoemd. Wanneer MVO (goed) wordt toegepast,
                  leidt dit ook tot een toekomstbestendig bedrijfsmodel en sterke business case. Zo prikkelt het
                  innovatie, stimuleert het efficiëntie (op kosten en grondstoffen), en biedt het kansen tot het
                  aanboren van nieuwe markten. Ook leidt het vaak tot tevreden medewerkers en loyale consumenten door
                  bijvoorbeeld een sterke reputatie. Een handige tool om een eerste inzicht te krijgen in de potentiële
                  risico’s binnen uw organisatie, is de{' '}
                  <a href="#" className="rvo-link">
                    MVO Risico Checker
                  </a>
                  .
                </p>
              </div>
              <Fieldset legend="">
                <TextInputField
                  inputType="textarea"
                  label="Kunt u met behulp van de MVO risico checker aangeven welke sociale- en milieurisico’s het meest van toepassing zijn op uw bedrijfsactiviteiten (max. 3)? "
                ></TextInputField>
                <TextInputField
                  inputType="textarea"
                  label="Welke acties denkt u te kunnen ondernemen om deze risico’s te voorkomen of te verminderen?"
                ></TextInputField>
              </Fieldset>
              <div>
                <Heading type="h2" noMargins={true}>
                  Verklaring MVO
                </Heading>
                <p className="rvo-text rvo-text--no-margins">
                  De kern van MVO is de bewustwording van potentiële risico’s van de bedrijfsvoering, en de wil om dit
                  als kans te zien om hier positief op de acteren. Dit is gebaseerd op de internationale richtlijnen van
                  de Organisatie voor Economische Samenwerking en Ontwikkeling (OESO). De Nederlandse overheid hecht er
                  grote waarde aan dat ondernemers die actief zijn over de grens deze richtlijnen onderschrijven. Alleen
                  organisaties die verklaren dit te doen, ontvangen overheidssteun om internationaal te ondernemen. Meer
                  informatie over Maatschappelijk Verantwoord Ondernemen in het buitenland vindt u op onze website:
                  <a href="#" className="rvo-link">
                    Maatschappelijk Verantwoord Ondernemen (MVO)
                  </a>
                  . Daar vindt u ook de verwijzing naar de site met de OESO richtlijnen (www.oesorichtlijnen.nl) en de
                  ILO (www.ilo.org).
                </p>
              </div>
              <Fieldset legend="">
                <CheckboxField
                  label=" "
                  invalid={false}
                  options={[
                    {
                      id: 'verklaring',
                      label:
                        'Ik verklaar dat de activiteiten worden uitgevoerd in overeenstemming met de richtlijnen voor Maatschappelijk Verantwoord Ondernemen (MVO) van de OESO en met de Verklaring Fundamentele Beginselen en Rechten op het werk (ILO). ',
                    },
                  ]}
                ></CheckboxField>
              </Fieldset>
              <ButtonGroup>
                <a
                  href="iframe.html?args=&id=demo-pagina-s-sib-ondertekening--default&viewMode=story"
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

export default Mvo;
