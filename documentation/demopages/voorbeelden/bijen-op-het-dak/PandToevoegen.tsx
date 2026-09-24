import {
  ActionGroup,
  Button,
  Fieldset,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/component-library-react';
import { useEffect, useState } from 'react';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-toevoegen--default&viewMode=story';

const progressSteps = [
  {
    state: 'completed' as const,
    label: 'Voorbereiding',
    link: URL_VOORBEREIDING,
    size: 'md' as const,
    line: 'straight' as const,
  },
  { state: 'doing' as const, label: 'Panden', link: URL_PANDEN, size: 'md' as const, line: 'substep-start' as const },
  {
    state: 'doing' as const,
    label: 'Pand toevoegen',
    link: URL_PAND_TOEVOEGEN,
    size: 'sm' as const,
    line: 'substep-end' as const,
  },
  {
    state: 'incomplete' as const,
    label: 'Bijenkasten & project',
    link: '#',
    size: 'md' as const,
    line: 'straight' as const,
  },
  { state: 'incomplete' as const, label: 'Documenten', link: '#', size: 'md' as const, line: 'straight' as const },
  {
    state: 'disabled' as const,
    label: 'Controleren & indienen',
    link: '#',
    size: 'md' as const,
    line: 'none' as const,
  },
];

const PandToevoegen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1020);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        {isDesktop ? (
          <MenuBar
            items={[
              { label: 'Bijen op het dak subsidie (FSSBD)', link: '#' },
              { align: 'right', label: 'Hulp & Contact', link: '#' },
              { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
              { align: 'right', label: 'Rosita van der Helm', link: '#', icon: 'user' },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />
        ) : (
          <MobileMenuBar
            iconPlacement="before"
            useIcons={true}
            isOpen={false}
            size="md"
            items={[
              { label: 'Overzicht', link: '#', icon: 'home' },
              { label: 'Mijn aanvragen', link: '#', icon: 'map' },
              { label: 'Berichten', link: '#', icon: 'mail' },
              { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
            ]}
          />
        )}
      </div>

      <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl rvo-padding-block-end--3xl">
        <Grid
          columns="two"
          gap="xl"
          division="1fr 3fr"
          className="rvo-padding-inline-start--md rvo-padding-inline-end--md"
        >
          <aside>
            <ProgressTracker steps={progressSteps} />
          </aside>

          <main>
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div>
                  <Link href={URL_PANDEN} showIcon="before" icon="terug" noUnderline={true}>
                    Terug
                  </Link>
                  <Heading type="h1">Pand toevoegen</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Voer de gegevens in van het pand waarop u bijenkasten wilt plaatsen.
                  </p>
                </div>

                <form>
                  <LayoutFlow>
                    <Fieldset legend="Locatie van het pand">
                      <TextInputField
                        label="Land"
                        disabled={true}
                        value="Nederland"
                        warningText="Alleen panden in Nederland komen in aanmerking."
                      />
                      <TextInputField label="Straatnaam" />
                      <TextInputField label="Huisnummer" size="xs" />
                      <TextInputField label="Postcode" size="sm" />
                      <TextInputField label="Plaatsnaam" />
                    </Fieldset>

                    <Fieldset legend="Informatie over het dak">
                      <RadioButtonField
                        name="daktype"
                        label="Type dak"
                        options={[
                          { id: 'plat-dak', label: 'Plat dak' },
                          { id: 'schuin-dak', label: 'Schuin dak' },
                        ]}
                      />
                      <TextInputField
                        label="Dakoppervlak (m²)"
                        helperText="Het beschikbare dakoppervlak waarop de bijenkasten worden geplaatst."
                        validation="none"
                      />
                      <RadioButtonField
                        name="dak-bereikbaar"
                        label="Is het dak bereikbaar voor onderhoud?"
                        helperText="Het dak moet minimaal 2 keer per jaar bereikbaar zijn voor de imker."
                        options={[
                          { id: 'bereikbaar-ja', label: 'Ja' },
                          { id: 'bereikbaar-nee', label: 'Nee' },
                        ]}
                      />
                    </Fieldset>

                    <ActionGroup>
                      <Button kind="primary" size="md">
                        Volgende stap
                      </Button>
                      <Button kind="secondary" size="md">
                        Opslaan en later verdergaan
                      </Button>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
          </main>
        </Grid>
      </MaxWidthLayout>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />
    </body>
  );
};

export default PandToevoegen;
