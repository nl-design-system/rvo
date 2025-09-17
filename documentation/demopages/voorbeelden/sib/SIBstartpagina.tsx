import {
  ActionGroup,
  Alert,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const SIBstartpagina = () => {
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
                  state: 'doing',
                  label: 'Startpagina',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-startpagina--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Uw gegevens',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
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
                <Heading type="h1">SIB 2024: Coaching</Heading>
                <p className="rvo-text--no-margins">
                  Met dit formulier kunt u subsidie aanvragen voor het sparren met en leren van een coach over de
                  organisatie van export naar een specifiek doelland. De subsidie bedraagt 50% van de kosten, tot ten
                  hoogste € 1.000 exclusief btw.
                </p>
              </div>
              <Fieldset legend="Welke rol heeft u? ">
                <RadioButtonField
                  name="rol"
                  label="U doet deze aanvraag als"
                  helperText=""
                  options={[
                    { id: 'rolA', label: 'Aanvrager' },
                    { id: 'rolB', label: 'Intermediar' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="aanmerking"
                  label="Dient u deze aanvraag in namens een eenmanszaak, Vennootschap onder firma (VOF), Commanditaire vennootschap (CV) of maatschap?"
                  expandableHelperText={true}
                  expandableHelperTextTitle="Meer uitleg"
                  helperText="Bedrijven zonder rechtspersoonlijkheid, zoals een eenmanszaak, Vennootschap onder firma (VOF), Commanditaire vennootschap (CV) en een maatschap, komen niet voor SIB in aanmerking. "
                  options={[
                    { id: 'aanmerkingA', label: 'Ja' },
                    { id: 'aanmerkingB', label: 'Nee' },
                  ]}
                ></RadioButtonField>
                <RadioButtonField
                  name="anders"
                  label="Klopt het dat u deze aanvraag voor iemand anders doet?"
                  helperText=""
                  options={[
                    { id: 'andersA', label: 'Ja' },
                    { id: 'andersB', label: 'Nee' },
                  ]}
                ></RadioButtonField>
              </Fieldset>

              <div>
                <Heading type="h2" noMargins={true}>
                  Aanvrager
                </Heading>
                <dl className="rvo-data-list">
                  <dt>Naam organisatie</dt>
                  <dd>Albert Heijn B.V.</dd>
                  <dt>KVK-nummer</dt>
                  <dd>35012085</dd>
                  <dt>Rechtsvorm</dt>
                  <dd>Besloten vennootschap (bv)</dd>
                </dl>
              </div>

              <div>
                <Heading type="h2" noMargins={true}>
                  Sluitingsdatum
                </Heading>
                <p className="rvo-text--no-margins">
                  U kunt uw aanvraag voor deze regeling tot en met 31-12-2024 15:00 uur indienen.
                </p>
              </div>
              <div>
                <Heading type="h2" noMargins={true}>
                  Tussendoor opslaan
                </Heading>
                <p className="rvo-text--no-margins">
                  Wilt u deze aanvraag tussendoor opslaan en later afmaken? Klik op &lsquo;Opslaan en formulier
                  verlaten&rsquo;.
                </p>
              </div>
              <div>
                <Heading type="h2" noMargins={true}>
                  Persoonsgegevens
                </Heading>
                <p className="rvo-text--no-margins">
                  Wij gaan zorgvuldig om met uw persoonsgegevens. Lees meer over ons{' '}
                  <a href="#" className="rvo-link">
                    privacybeleid
                  </a>
                  .
                </p>
              </div>
              <Alert kind="info">
                Extra toelichting bij vragen vindt u in het informatie icoon bij de vraag en in toelichtende teksten in
                het formulier. Informatie over de regeling leest u op{' '}
                <a href="#" className="rvo-link rvo-link--logoblauw">
                  de website
                </a>{' '}
                Heeft u vragen? Bel met RVO via{' '}
                <a href="tel:088 042 42 42" className="rvo-link rvo-link--logoblauw">
                  088 042 42 42
                </a>
              </Alert>
              <ActionGroup>
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-sib-uw-gegevens--default&viewMode=story"
                  className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md rvo-link--no-underline"
                >
                  Start aanvraag
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

export default SIBstartpagina;
