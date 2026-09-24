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
  MobileMenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { useEffect, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { getPanden, Pand, removePand, saveEditPandIndex } from './pandenStorage';
import { getProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-toevoegen--default&viewMode=story';
const URL_PAND_WIJZIGEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-wijzigen--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';

const PandenOverzicht = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [panden, setPanden] = useState<Pand[]>([]);
  const [dialogOpenIndex, setDialogOpenIndex] = useState<number | null>(null);

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
    { state: 'doing' as const, label: 'Panden', link: URL_PANDEN, size: 'md' as const, line: 'straight' as const },
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

  useEffect(() => {
    setPanden(getPanden());
  }, []);

  const handleDeleteConfirm = () => {
    if (dialogOpenIndex !== null) {
      removePand(dialogOpenIndex);
      setPanden(getPanden());
      setDialogOpenIndex(null);
    }
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
            <LayoutFlow gap="xl">
              <div>
                <Link href={URL_PROJECTGEGEVENS} showIcon="before" icon="terug" noUnderline={true}>
                  Terug
                </Link>
                <Heading type="h1">Panden</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Voeg de panden toe waarop u bijenkasten wilt plaatsen. U kunt meerdere panden opgeven.
                </p>
              </div>

              {panden.length === 0 ? (
                <Alert kind="warning" padding="md">
                  Er zijn nog geen panden toegevoegd.
                </Alert>
              ) : (
                <LayoutFlow gap="sm">
                  {panden.map((pand, index) => (
                    <Card key={index} outline={true} padding="md" title={`Pand ${index + 1}`}>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-margin-block-start--xs">
                        {pand.straatnaam} {pand.huisnummer}, {pand.postcode} {pand.plaatsnaam}
                      </p>
                      <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--sm">
                        <Link href={URL_PAND_WIJZIGEN} onClick={() => saveEditPandIndex(index)}>
                          Wijzig pand
                        </Link>
                        <Button kind="warning" size="sm" onClick={() => setDialogOpenIndex(index)}>
                          Verwijder pand
                        </Button>
                      </div>
                    </Card>
                  ))}
                  <Link href={URL_PAND_TOEVOEGEN} showIcon="before" icon="plus">
                    Voeg nog een pand toe
                  </Link>
                </LayoutFlow>
              )}

              <div className="rvo-action-group">
                {panden.length === 0 && (
                  <Link href={URL_PAND_TOEVOEGEN} callToAction={true}>
                    Voeg een pand toe
                  </Link>
                )}
                {panden.length > 0 && (
                  <Button
                    kind="primary"
                    size="md"
                    onClick={() => {
                      window.location.href = URL_BIJENKASTEN;
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

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />

      {dialogOpenIndex !== null && (
        <Dialog
          isOpen={true}
          onClose={() => setDialogOpenIndex(null)}
          actionGroup={
            <ActionGroup>
              <Button kind="warning" size="md" onClick={handleDeleteConfirm}>
                Pand verwijderen
              </Button>
              <Button kind="secondary" size="md" onClick={() => setDialogOpenIndex(null)}>
                Pand niet verwijderen
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Pand verwijderen</Heading>
          <p className="rvo-paragraph">Weet u zeker dat u dit pand wil verwijderen?</p>
        </Dialog>
      )}
    </body>
  );
};

export default PandenOverzicht;
