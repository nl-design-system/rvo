import {
  ActionGroup,
  Alert,
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

const Ondertekening = () => {
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
                  state: 'completed',
                  label: 'Uitvoerder coaching traject',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uitvoerder--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Maatschappelijk verantwoord ondernemen',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
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
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-mvo--default&viewMode=story"
                >
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                    role="img"
                    aria-label="Terug"
                  ></span>
                  Terug naar Maatschappelijk verantwoord ondernemen
                </a>
                <Heading type="h1">Ondertekening</Heading>
                <Heading type="h2">Verklaring De-minimissteun</Heading>
                <p className="rvo-text--no-margins">
                  De Europese Commissie wil oneerlijke concurrentie voorkomen en staat staatssteun daarom normaal niet
                  toe. De overheid kan, zonder steunkader, soms toch - onder strenge voorwaarden en tot een bepaald
                  maximum - steun bieden aan bedrijven. Dit heet 'de-minimissteun'. Ook deze subsidieregeling valt
                  hieronder.{' '}
                  <a href="#" className="rvo-link">
                    Meer uitleg over de-minimissteun
                  </a>
                </p>
              </div>
              <Fieldset legend="Uw bedrijf en het doel van de steun ">
                <FormField label="Is er al eerder steun verleend door een overheidsorganisatie voor dezelfde kosten als waar u nu steun voor aanvraagt?">
                  <FormField.RadioButtonGroup
                    name="eerder"
                    options={[
                      { id: 'eerder A', label: 'Ja' },
                      { id: 'eerder B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField
                  label="Vraagt u om exportsteun?"
                  helperText="Exportsteun is bijvoorbeeld de financiering van exportwerkzaamheden of steun voor de oprichting of exploitatie van een distributienetwerk. Subsidies voor deelname aan handelsbeurzen of voor onderzoek naar nieuwe markten vallen hier niet onder."
                >
                  <FormField.RadioButtonGroup
                    name="export"
                    options={[
                      { id: 'export A', label: 'Ja' },
                      { id: 'export B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField
                  label="Vraagt u om steun die afhankelijk is van het gebruik van binnenlandse goederen in plaats van ingevoerde goederen?"
                  helperText="De-minimissteun is niet mogelijk als daardoor binnenlandse producten worden bevoordeeld boven ingevoerde producten."
                >
                  <FormField.RadioButtonGroup
                    name="afhank"
                    options={[
                      { id: 'afhank A', label: 'Ja' },
                      { id: 'afhank B', label: 'Nee' },
                    ]}
                  />
                </FormField>
              </Fieldset>
              <Alert>
                <strong>U kunt gebeld worden</strong>
                <br />U kunt door RVO gebeld worden om uw antwoorden in het aanvraagformulier toe te lichten. Deze
                toelichting zal worden meegenomen in de beoordeling van uw aanvraag.
              </Alert>
              <div>
                <Heading type="h2">Gegevens ondertekenaar</Heading>
                <dl className="rvo-data-list">
                  <dt>Naam organisatie</dt>
                  <dd>Albert Heijn B.V.</dd>
                  <dt>KVK-nummer</dt>
                  <dd>35012085</dd>
                  <dt>Rechtsvorm</dt>
                  <dd>Besloten vennootschap (bv)</dd>
                </dl>
              </div>
              <Fieldset legend="Verklaring">
                <FormField label="Is de contactpersoon tevens de ondertekenaar?">
                  <FormField.RadioButtonGroup
                    name="cp"
                    options={[
                      { id: 'cp A', label: 'Ja' },
                      { id: 'cp B', label: 'Nee' },
                    ]}
                  />
                </FormField>
                <FormField label="">
                  <FormField.CheckboxGroup
                    options={[
                      {
                        id: 'verklaring',
                        label: 'Ik ben bevoegd en/of gemachtigd om deze aanvraag te ondertekenen.',
                      },
                    ]}
                  />
                </FormField>
                <FormField label="">
                  <FormField.CheckboxGroup
                    options={[
                      {
                        id: 'verklaring',
                        label: 'Ik verklaar dat dit formulier en de bijlagen naar waarheid zijn ingevuld. ',
                      },
                    ]}
                  />
                </FormField>
              </Fieldset>
              <ActionGroup>
                <a
                  href="#"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Opslaan en verzenden
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

export default Ondertekening;
