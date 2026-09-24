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
import { Bijenkast, getBijenkasten, removeBijenkast, saveEditBijenkastIndex } from './bijenkastenStorage';
import { getPanden } from './pandenStorage';
import { getProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_BIJENKAST_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-toevoegen--default&viewMode=story';
const URL_BIJENKAST_WIJZIGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-wijzigen--default&viewMode=story';

const BijenkastenOverzicht = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [bijenkasten, setBijenkasten] = useState<Bijenkast[]>([]);
  const [dialogOpenIndex, setDialogOpenIndex] = useState<number | null>(null);

  const projectCompleted = !!getProject();
  const pandenCompleted = getPanden().length > 0;
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
      state: (pandenCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Panden',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: 'doing' as const,
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
    setBijenkasten(getBijenkasten());
  }, []);

  const handleDeleteConfirm = () => {
    if (dialogOpenIndex !== null) {
      removeBijenkast(dialogOpenIndex);
      setBijenkasten(getBijenkasten());
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
                <Link href={URL_PANDEN} showIcon="before" icon="terug" noUnderline={true}>
                  Terug
                </Link>
                <Heading type="h1">Bijenkasten</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Voeg de bijenkasten toe die u wilt plaatsen. Geef per bijenkast aan op welk pand deze komt.
                </p>
              </div>

              {bijenkasten.length === 0 ? (
                <Alert kind="warning" padding="md">
                  Er zijn nog geen bijenkasten toegevoegd.
                </Alert>
              ) : (
                <LayoutFlow gap="sm">
                  {bijenkasten.map((bijenkast, index) => (
                    <Card key={index} outline={true} padding="md" title={`Bijenkast ${index + 1}`}>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-margin-block-start--xs">
                        {bijenkast.pandLabel}
                      </p>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                        {bijenkast.typeBijenkast} · {bijenkast.aantalKasten}{' '}
                        {Number(bijenkast.aantalKasten) === 1 ? 'kast' : 'kasten'}
                      </p>
                      <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--sm">
                        <Link href={URL_BIJENKAST_WIJZIGEN} onClick={() => saveEditBijenkastIndex(index)}>
                          Wijzig bijenkast
                        </Link>
                        <Button kind="warning" size="sm" onClick={() => setDialogOpenIndex(index)}>
                          Verwijder bijenkast
                        </Button>
                      </div>
                    </Card>
                  ))}
                </LayoutFlow>
              )}

              <div className="rvo-action-group">
                {bijenkasten.length > 0 && (
                  <Button
                    kind="primary"
                    size="md"
                    onClick={() => {
                      window.location.href = '#';
                    }}
                  >
                    Volgende stap
                  </Button>
                )}
                <Link href={URL_BIJENKAST_TOEVOEGEN} callToAction={bijenkasten.length === 0}>
                  {bijenkasten.length === 0 ? 'Voeg een bijenkast toe' : 'Voeg nog een bijenkast toe'}
                </Link>
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
                Bijenkast verwijderen
              </Button>
              <Button kind="secondary" size="md" onClick={() => setDialogOpenIndex(null)}>
                Bijenkast niet verwijderen
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Bijenkast verwijderen</Heading>
          <p className="rvo-paragraph">Weet u zeker dat u deze bijenkast wil verwijderen?</p>
        </Dialog>
      )}
    </body>
  );
};

export default BijenkastenOverzicht;
