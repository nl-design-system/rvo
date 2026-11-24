import {
  ActionGroup,
  Alert,
  Button,
  Card,
  Dialog,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { useEffect, useState } from 'react';
import {
  Bijenkast,
  bijenkastTitle,
  getBijenkasten,
  removeBijenkast,
  removeBijenkastenForPand,
  saveEditBijenkastIndex,
  saveTargetPandIndex,
} from './bijenkastenStorage';
import { getPanden, Pand, removePand, saveEditPandIndex } from './pandenStorage';
import { getProject } from './projectStorage';
import { useDialogFocus } from './useDialogFocus';
import { useDemoControls } from './useDemoControls';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-toevoegen--default&viewMode=story';
const URL_PAND_WIJZIGEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-wijzigen--default&viewMode=story';
const URL_BIJENKAST_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-toevoegen--default&viewMode=story';
const URL_BIJENKAST_WIJZIGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-wijzigen--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

const PandenOverzicht = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const [panden, setPanden] = useState<Pand[]>([]);
  const [bijenkasten, setBijenkasten] = useState<Bijenkast[]>([]);
  const [dialogOpenIndex, setDialogOpenIndex] = useState<number | null>(null);
  const [bijenkastDialogIndex, setBijenkastDialogIndex] = useState<number | null>(null);
  useDialogFocus(dialogOpenIndex !== null || bijenkastDialogIndex !== null);

  const projectCompleted = !!getProject();
  const progressSteps = [
    {
      state: (projectCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Projectgegevens',
      link: URL_PROJECTGEGEVENS,
      size: 'md' as const,
      line: 'straight' as const,
    },
    { state: 'doing' as const, label: 'Gebouwen', link: URL_PANDEN, size: 'md' as const, line: 'straight' as const },
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

  useEffect(() => {
    setPanden(getPanden());
    setBijenkasten(getBijenkasten());
  }, []);

  const handleDeleteConfirm = () => {
    if (dialogOpenIndex !== null) {
      removeBijenkastenForPand(dialogOpenIndex);
      removePand(dialogOpenIndex);
      setPanden(getPanden());
      setBijenkasten(getBijenkasten());
      setDialogOpenIndex(null);
    }
  };

  const handleDeleteBijenkastConfirm = () => {
    if (bijenkastDialogIndex !== null) {
      removeBijenkast(bijenkastDialogIndex);
      setBijenkasten(getBijenkasten());
      setBijenkastDialogIndex(null);
    }
  };

  const pandLabel = (pand: Pand) => `${pand.straatnaam} ${pand.huisnummer}, ${pand.plaatsnaam}`;
  const pandBijenkasten = (pandIndex: number) =>
    bijenkasten
      .map((bijenkast, index) => ({ bijenkast, index }))
      .filter(({ bijenkast }) => bijenkast.pandIndex === pandIndex);

  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Bijen op het dak subsidie (FSSBD)', link: URL_VOORBEREIDING },
            { align: 'right', label: 'Hulp & Contact', link: '#' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Marja de Bie', link: '#', icon: 'user' },
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
          gap="2xl"
          division={isDesktop ? '1fr 3fr' : undefined}
          className="rvo-padding-inline-start--md rvo-padding-inline-end--md"
        >
          <aside>
            <ProgressTracker steps={progressSteps} />
          </aside>

          <main>
            <LayoutFlow gap="xl">
              <div>
                <Link href={URL_PROJECTGEGEVENS} iconPlacement="left" icon="terug" noUnderline={true}>
                  Vorige stap
                </Link>
                <Heading type="h1">Gebouwen</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Voeg de gebouwen toe waarop u bijenkasten wilt plaatsen. Voeg daarna per gebouw de bijenkasten toe.
                </p>
              </div>

              {panden.length > 0 && (
                <LayoutFlow gap="3xl">
                  {panden.map((pand, index) => (
                    <LayoutFlow key={index} gap="sm">
                      <Card outline={true} padding="md" title={pandLabel(pand)} headingProps={{ type: 'h2' }}>
                        <LayoutFlow gap="md">
                          <div className="rvo-layout-row rvo-layout-gap--md">
                            <Link
                              href={URL_PAND_WIJZIGEN}
                              iconPlacement="left"
                              icon="bewerken"
                              noUnderline={true}
                              onClick={() => saveEditPandIndex(index)}
                            >
                              Wijzig gebouw
                            </Link>
                            <Button
                              kind="warning-subtle"
                              size="sm"
                              icon="verwijderen"
                              iconPlacement="left"
                              onClick={() => setDialogOpenIndex(index)}
                            >
                              Verwijder gebouw
                            </Button>
                          </div>

                          <hr className="rvo-hr" />

                          <Heading type="h3" noMargins={true}>
                            Bijenkasten
                          </Heading>

                          <LayoutFlow gap="md">
                            {pandBijenkasten(index).map(({ bijenkast, index: bijenkastIndex }) => (
                              <div key={bijenkastIndex}>
                                <Heading type="h4" noMargins={true}>
                                  {bijenkastTitle(bijenkast.aantalKasten, bijenkast.typeBijenkast)}
                                </Heading>
                                <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--xs">
                                  <Link
                                    href={URL_BIJENKAST_WIJZIGEN}
                                    iconPlacement="left"
                                    icon="bewerken"
                                    noUnderline={true}
                                    onClick={() => saveEditBijenkastIndex(bijenkastIndex)}
                                  >
                                    Wijzig bijenkast
                                  </Link>
                                  <Button
                                    kind="warning-subtle"
                                    size="sm"
                                    icon="verwijderen"
                                    iconPlacement="left"
                                    onClick={() => setBijenkastDialogIndex(bijenkastIndex)}
                                  >
                                    Verwijder bijenkast
                                  </Button>
                                </div>
                              </div>
                            ))}
                            <div>
                              <Link
                                href={URL_BIJENKAST_TOEVOEGEN}
                                callToAction={true}
                                outline={true}
                                iconPlacement="left"
                                icon="plus"
                                onClick={() => saveTargetPandIndex(index)}
                              >
                                Voeg een bijenkast toe
                              </Link>
                            </div>
                          </LayoutFlow>
                        </LayoutFlow>
                      </Card>
                    </LayoutFlow>
                  ))}
                  <div>
                    <Link href={URL_PAND_TOEVOEGEN} callToAction={true} outline={true} iconPlacement="left" icon="plus">
                      Voeg nog een gebouw toe
                    </Link>
                  </div>
                </LayoutFlow>
              )}

              <div className="rvo-action-group">
                {panden.length === 0 && (
                  <Link href={URL_PAND_TOEVOEGEN} callToAction={true} outline={true} iconPlacement="left" icon="plus">
                    Voeg een gebouw toe
                  </Link>
                )}
                {panden.length > 0 && bijenkasten.length > 0 && (
                  <Button
                    kind="primary"
                    size="md"
                    onClick={() => {
                      window.location.href = URL_DOCUMENTEN;
                    }}
                  >
                    Volgende stap
                  </Button>
                )}
              </div>
            </LayoutFlow>
          </main>
        </Grid>
      </MaxWidthLayout>

      <Footer
        secondaryMenu={[
          ...defaultSecondaryFooterItems,
          { content: 'Demo', link: '#demo' },
          { content: 'Reset', link: '#reset' },
        ]}
        maxWidth="md"
      />

      {dialogOpenIndex !== null && (
        <Dialog
          isOpen={true}
          onClose={() => setDialogOpenIndex(null)}
          actionGroup={
            <ActionGroup>
              <Button kind="warning" size="md" icon="verwijderen" iconPlacement="left" onClick={handleDeleteConfirm}>
                {pandBijenkasten(dialogOpenIndex).length > 0
                  ? 'Gebouw en bijenkasten verwijderen'
                  : 'Gebouw verwijderen'}
              </Button>
              <Button kind="secondary" size="md" onClick={() => setDialogOpenIndex(null)}>
                Gebouw niet verwijderen
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Gebouw verwijderen</Heading>
          <p className="rvo-paragraph">
            Weet u zeker dat u <strong>{pandLabel(panden[dialogOpenIndex])}</strong> wilt verwijderen?
          </p>
          {pandBijenkasten(dialogOpenIndex).length > 0 && (
            <div className="rvo-margin-block-end--xl">
              <Alert kind="warning" padding="md">
                <strong>Let op: de bijenkasten van dit gebouw worden ook verwijderd.</strong>
                <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
                  {pandBijenkasten(dialogOpenIndex).map(({ bijenkast, index }) => (
                    <li key={index}>{bijenkastTitle(bijenkast.aantalKasten, bijenkast.typeBijenkast)}</li>
                  ))}
                </ul>
              </Alert>
            </div>
          )}
        </Dialog>
      )}

      {bijenkastDialogIndex !== null && (
        <Dialog
          isOpen={true}
          onClose={() => setBijenkastDialogIndex(null)}
          actionGroup={
            <ActionGroup>
              <Button
                kind="warning"
                size="md"
                icon="verwijderen"
                iconPlacement="left"
                onClick={handleDeleteBijenkastConfirm}
              >
                Bijenkast verwijderen
              </Button>
              <Button kind="secondary" size="md" onClick={() => setBijenkastDialogIndex(null)}>
                Bijenkast niet verwijderen
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Bijenkast verwijderen</Heading>
          <p className="rvo-paragraph">
            Weet u zeker dat u{' '}
            <strong>
              {bijenkastTitle(
                bijenkasten[bijenkastDialogIndex].aantalKasten,
                bijenkasten[bijenkastDialogIndex].typeBijenkast,
              )}
            </strong>{' '}
            wilt verwijderen?
          </p>
        </Dialog>
      )}
    </body>
  );
};

export default PandenOverzicht;
