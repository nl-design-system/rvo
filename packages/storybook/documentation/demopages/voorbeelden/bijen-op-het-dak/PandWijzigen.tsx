import '../../../../../../components/footer/style/src/footer.scss';
import {
  ActionGroup,
  Button,
  Dialog,
  Fieldset,
  FormField,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { clearEditPandIndex, getEditPandIndex, getPanden, updatePand } from './pandenStorage';
import { getProject } from './projectStorage';
import { useDemoControls } from './useDemoControls';
import { useFormLeaveGuard } from './useFormLeaveGuard';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_WIJZIGEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-wijzigen--default&viewMode=story';

const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

const PandWijzigen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const { showLeaveDialog, leaveTarget, dismissLeaveDialog } = useFormLeaveGuard(URL_VOORBEREIDING);

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
    {
      state: 'doing' as const,
      label: 'Gebouwen',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'substep-start' as const,
    },
    {
      state: 'doing' as const,
      label: 'Gebouw wijzigen',
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
    {
      state: 'incomplete' as const,
      label: 'Documenten',
      link: URL_DOCUMENTEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: 'incomplete' as const,
      label: 'Controleren en versturen',
      link: URL_CONTROLEREN,
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
        <MenuBar
          items={[
            { label: 'Bijen op het dak subsidie (FSSBD)', link: URL_VOORBEREIDING },
            { align: 'right', label: 'Hulp & Contact', link: '#' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Rosita van der Helm', link: '#', icon: 'user' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
          horizontalRule={true}
        />
      </div>

      <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl rvo-padding-block-end--3xl">
        <Grid
          columns={isDesktop ? 'two' : 'one'}
          gap="xl"
          division={isDesktop ? '1fr 3fr' : undefined}
          className="rvo-padding-inline-start--md rvo-padding-inline-end--md"
        >
          <aside>
            <ProgressTracker steps={progressSteps} />
          </aside>

          <main>
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div>
                  <Link href={URL_PANDEN} iconPlacement="left" icon="terug" noUnderline={true}>
                    Terug
                  </Link>
                  <Heading type="h1">Gebouw wijzigen</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Pas de gegevens aan van het gebouw waarop u bijenkasten wilt plaatsen.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <LayoutFlow>
                    <Fieldset legend="Locatie van het gebouw">
                      <FormField label="Land" warningText="Alleen gebouwen in Nederland komen in aanmerking.">
                        <FormField.Text disabled={true} value="Nederland" />
                      </FormField>
                      <FormField label="Straatnaam">
                        <FormField.Text value={straatnaam} onChange={(e) => setStraatnaam(e.target.value)} />
                      </FormField>
                      <FormField label="Huisnummer">
                        <FormField.Text
                          sizeInput="xs"
                          value={huisnummer}
                          onChange={(e) => setHuisnummer(e.target.value)}
                        />
                      </FormField>
                      <FormField label="Postcode">
                        <FormField.Text sizeInput="sm" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                      </FormField>
                      <FormField label="Plaatsnaam">
                        <FormField.Text value={plaatsnaam} onChange={(e) => setPlaatsnaam(e.target.value)} />
                      </FormField>
                    </Fieldset>

                    <Fieldset legend="Informatie over het dak">
                      <div
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setDaktype(e.target.id === 'plat-dak' ? 'Plat dak' : 'Schuin dak')
                        }
                      >
                        <FormField id="daktype" label="Type dak">
                          <FormField.RadioButtonGroup
                            name="daktype"
                            options={[
                              { id: 'plat-dak', label: 'Plat dak', checked: daktype === 'Plat dak' },
                              { id: 'schuin-dak', label: 'Schuin dak', checked: daktype === 'Schuin dak' },
                            ]}
                          />
                        </FormField>
                      </div>
                      <FormField
                        label="Dakoppervlak (m²)"
                        helperText="Het beschikbare dakoppervlak waarop de bijenkasten worden geplaatst."
                      >
                        <FormField.Text value={dakoppervlak} onChange={(e) => setDakoppervlak(e.target.value)} />
                      </FormField>
                      <div
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setBereikbaar(e.target.id === 'bereikbaar-ja' ? 'Ja' : 'Nee')
                        }
                      >
                        <FormField
                          id="bereikbaar"
                          label="Is het dak bereikbaar voor onderhoud?"
                          helperText="Het dak moet minimaal 2 keer per jaar bereikbaar zijn voor de imker."
                        >
                          <FormField.RadioButtonGroup
                            name="dak-bereikbaar"
                            options={[
                              { id: 'bereikbaar-ja', label: 'Ja', checked: bereikbaar === 'Ja' },
                              { id: 'bereikbaar-nee', label: 'Nee', checked: bereikbaar === 'Nee' },
                            ]}
                          />
                        </FormField>
                      </div>
                    </Fieldset>

                    <ActionGroup>
                      <Button kind="primary" size="md" type="submit">
                        Gebouw opslaan
                      </Button>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
          </main>
        </Grid>
      </MaxWidthLayout>

      <footer className="rvo-footer">
        <div className="rvo-footer__container rvo-footer__container--md">
          <div className="rvo-footer__menu-container rvo-footer__menu-container--secondary">
            <a
              href="https://www.rvo.nl/onderwerpen/contact"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Contact
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/privacy"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Privacy
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/cookies"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Cookies en anti-spam
            </a>
            <a href="#" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Toegankelijkheid
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/proclaimer"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Proclaimer
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/kwetsbaarheid"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Kwetsbaarheid op website
            </a>
            <a href="#demo" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Demo
            </a>
            <a href="#reset" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Reset
            </a>
          </div>
        </div>
      </footer>
      {showLeaveDialog && (
        <Dialog
          isOpen={true}
          onClose={dismissLeaveDialog}
          isModal={true}
          actionGroup={
            <ActionGroup>
              <Button
                kind="primary"
                size="md"
                onClick={() => {
                  window.location.href = URL_VOORBEREIDING;
                }}
              >
                Opslaan en sluiten
              </Button>
              <Button kind="secondary" size="md" onClick={dismissLeaveDialog}>
                Terug
              </Button>
              <Button
                kind="warning"
                size="md"
                onClick={() => {
                  window.location.href = leaveTarget;
                }}
              >
                Sluiten zonder opslaan
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Wilt u het formulier sluiten?</Heading>
          <p className="rvo-paragraph">
            Uw wijzigingen zijn nog niet opgeslagen. Als u sluit zonder op te slaan, gaan uw wijzigingen verloren.
          </p>
        </Dialog>
      )}
    </body>
  );
};

export default PandWijzigen;
