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
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { clearEditPandIndex, getEditPandIndex, getPanden, updatePand } from './pandenStorage';
import { getProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_WIJZIGEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-wijzigen--default&viewMode=story';

const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';

const PandWijzigen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  const editIndex = getEditPandIndex();
  const existingPand = editIndex !== null ? getPanden()[editIndex] : null;

  const [straatnaam, setStraatnaam] = useState(existingPand?.straatnaam ?? '');
  const [huisnummer, setHuisnummer] = useState(existingPand?.huisnummer ?? '');
  const [postcode, setPostcode] = useState(existingPand?.postcode ?? '');
  const [plaatsnaam, setPlaatsnaam] = useState(existingPand?.plaatsnaam ?? '');
  const [daktype, setDaktype] = useState(existingPand?.daktype ?? '');
  const [dakoppervlak, setDakoppervlak] = useState(existingPand?.dakoppervlak ?? '');
  const [bereikbaar, setBereikbaar] = useState(existingPand?.bereikbaar ?? '');

  const projectCompleted = !!getProject();
  const bijenkastenCompleted = getBijenkasten().length > 0;
  const progressSteps = [
    {
      state: 'completed' as const,
      label: 'Voorbereiding',
      link: URL_VOORBEREIDING,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (projectCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Projectgegevens',
      link: URL_PROJECTGEGEVENS,
      size: 'md' as const,
      line: 'straight' as const,
    },
    { state: 'doing' as const, label: 'Panden', link: URL_PANDEN, size: 'md' as const, line: 'substep-start' as const },
    {
      state: 'doing' as const,
      label: 'Pand wijzigen',
      link: URL_PAND_WIJZIGEN,
      size: 'sm' as const,
      line: 'substep-end' as const,
    },
    {
      state: (bijenkastenCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Bijenkasten',
      link: URL_BIJENKASTEN,
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

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1020);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editIndex !== null) {
      updatePand(editIndex, { straatnaam, huisnummer, postcode, plaatsnaam, daktype, dakoppervlak, bereikbaar });
      clearEditPandIndex();
    }
    window.location.href = URL_PANDEN;
  };

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
                  <Heading type="h1">Pand wijzigen</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Pas de gegevens aan van het pand waarop u bijenkasten wilt plaatsen.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <LayoutFlow>
                    <Fieldset legend="Locatie van het pand">
                      <TextInputField
                        label="Land"
                        disabled={true}
                        value="Nederland"
                        warningText="Alleen panden in Nederland komen in aanmerking."
                      />
                      <TextInputField
                        label="Straatnaam"
                        value={straatnaam}
                        onChange={(e) => setStraatnaam(e.target.value)}
                      />
                      <TextInputField
                        label="Huisnummer"
                        size="xs"
                        value={huisnummer}
                        onChange={(e) => setHuisnummer(e.target.value)}
                      />
                      <TextInputField
                        label="Postcode"
                        size="sm"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                      />
                      <TextInputField
                        label="Plaatsnaam"
                        value={plaatsnaam}
                        onChange={(e) => setPlaatsnaam(e.target.value)}
                      />
                    </Fieldset>

                    <Fieldset legend="Informatie over het dak">
                      <div
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setDaktype(e.target.id === 'plat-dak' ? 'Plat dak' : 'Schuin dak')
                        }
                      >
                        <RadioButtonField
                          name="daktype"
                          label="Type dak"
                          options={[
                            { id: 'plat-dak', label: 'Plat dak', checked: daktype === 'Plat dak' },
                            { id: 'schuin-dak', label: 'Schuin dak', checked: daktype === 'Schuin dak' },
                          ]}
                        />
                      </div>
                      <TextInputField
                        label="Dakoppervlak (m²)"
                        helperText="Het beschikbare dakoppervlak waarop de bijenkasten worden geplaatst."
                        value={dakoppervlak}
                        onChange={(e) => setDakoppervlak(e.target.value)}
                      />
                      <div
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setBereikbaar(e.target.id === 'bereikbaar-ja' ? 'Ja' : 'Nee')
                        }
                      >
                        <RadioButtonField
                          name="dak-bereikbaar"
                          label="Is het dak bereikbaar voor onderhoud?"
                          helperText="Het dak moet minimaal 2 keer per jaar bereikbaar zijn voor de imker."
                          options={[
                            { id: 'bereikbaar-ja', label: 'Ja', checked: bereikbaar === 'Ja' },
                            { id: 'bereikbaar-nee', label: 'Nee', checked: bereikbaar === 'Nee' },
                          ]}
                        />
                      </div>
                    </Fieldset>

                    <ActionGroup>
                      <Button kind="primary" size="md" type="submit">
                        Opslaan
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

export default PandWijzigen;
