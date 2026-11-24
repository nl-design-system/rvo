import {
  ActionGroup,
  Button,
  Dialog,
  Footer,
  FormField,
  Grid,
  Header,
  Heading,
  Hr,
  LayoutFlow,
  Link,
  List,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { ChangeEvent, useEffect, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import {
  addOfferte,
  addTekening,
  DocumentInfo,
  getOffertes,
  getTekeningen,
  removeOfferte,
  removeTekening,
} from './documentenStorage';
import { getPanden } from './pandenStorage';
import { getProject } from './projectStorage';
import { useDialogFocus } from './useDialogFocus';
import { useDemoControls } from './useDemoControls';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_VOORBEELD_PDF = 'bijen-op-het-dak-voorbeeld.pdf';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

interface DeleteTarget {
  type: 'offerte' | 'tekening';
  index: number;
}

const Documenten = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const [offertes, setOffertes] = useState<DocumentInfo[]>([]);
  const [tekeningen, setTekeningen] = useState<DocumentInfo[]>([]);
  const [showOfferteForm, setShowOfferteForm] = useState(true);
  const [showTekeningForm, setShowTekeningForm] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null);
  useDialogFocus(deleteTarget !== null);

  const projectCompleted = !!getProject();
  const pandenCompleted = getPanden().length > 0 && getBijenkasten().length > 0;
  const progressSteps = [
    {
      state: (projectCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Projectgegevens',
      link: URL_PROJECTGEGEVENS,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (pandenCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Gebouwen',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: 'doing' as const,
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
    const storedOffertes = getOffertes();
    const storedTekeningen = getTekeningen();
    setOffertes(storedOffertes);
    setTekeningen(storedTekeningen);
    setShowOfferteForm(storedOffertes.length === 0);
    setShowTekeningForm(storedTekeningen.length === 0);
  }, []);

  const handleOfferteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    addOfferte({ bestandsnaam: file.name });
    setOffertes(getOffertes());
    setShowOfferteForm(false);
  };

  const handleTekeningChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    addTekening({ bestandsnaam: file.name });
    setTekeningen(getTekeningen());
    setShowTekeningForm(false);
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    if (deleteTarget.type === 'offerte') {
      removeOfferte(deleteTarget.index);
      const updated = getOffertes();
      setOffertes(updated);
      if (updated.length === 0) setShowOfferteForm(true);
    } else {
      removeTekening(deleteTarget.index);
      const updated = getTekeningen();
      setTekeningen(updated);
      if (updated.length === 0) setShowTekeningForm(true);
    }
    setDeleteTarget(null);
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
                <Link href={URL_PANDEN} iconPlacement="left" icon="terug" noUnderline={true}>
                  Vorige stap
                </Link>
                <Heading type="h1">Documenten</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Upload de benodigde documenten voor uw aanvraag. Elk bestand mag maximaal 10 MB zijn (PDF).
                </p>
              </div>

              {/* Offertes */}
              <div className="rvo-layout-column rvo-layout-gap--xs">
                <Heading type="h2" noMargins>
                  Offertes
                </Heading>
                <LayoutFlow gap="sm">
                  <p className="rvo-paragraph rvo-paragraph--no-spacing">
                    Upload de offerte(s) van uw installateur voor de plaatsing van de bijenkasten.
                  </p>

                  {offertes.length > 0 && (
                    <LayoutFlow gap="md">
                      {offertes.map((doc, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing">
                            <Link
                              href={URL_VOORBEELD_PDF}
                              target="_blank"
                              rel="noopener noreferrer"
                              iconPlacement="left"
                              icon="document-blanco"
                              noUnderline={true}
                            >
                              {doc.bestandsnaam}
                            </Link>
                          </p>
                          <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--xs">
                            <Button
                              kind="warning-subtle"
                              size="sm"
                              icon="verwijderen"
                              iconPlacement="left"
                              onClick={() => setDeleteTarget({ type: 'offerte', index })}
                            >
                              Verwijder bestand
                            </Button>
                          </div>
                        </div>
                      ))}
                    </LayoutFlow>
                  )}

                  {showOfferteForm ? (
                    <LayoutFlow gap="xs">
                      <FormField
                        id={`offerte-upload-${offertes.length}`}
                        label="Offerte uploaden"
                        helperText={
                          <List
                            type="unordered"
                            bulletType="disc"
                            items={[
                              'Het bestand is in PDF-formaat en maximaal 10 MB.',
                              'De offerte is opgesteld door een gecertificeerde installateur.',
                              'De offerte bevat een specificatie van de bijenkasten en de plaatsingskosten.',
                            ]}
                          />
                        }
                      >
                        <FormField.FileInput accept=".pdf" onChange={handleOfferteChange} />
                      </FormField>
                      {offertes.length > 0 && (
                        <Link
                          href="#"
                          color="donkerblauw"
                          iconPlacement="left"
                          icon="kruis"
                          noUnderline={true}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowOfferteForm(false);
                          }}
                        >
                          Annuleren
                        </Link>
                      )}
                    </LayoutFlow>
                  ) : (
                    <div>
                      <Button
                        kind="secondary"
                        size="md"
                        icon="plus"
                        iconPlacement="left"
                        onClick={() => setShowOfferteForm(true)}
                      >
                        Voeg nog een offerte toe
                      </Button>
                    </div>
                  )}
                </LayoutFlow>
              </div>

              <Hr />

              {/* Tekeningen */}
              <div className="rvo-layout-column rvo-layout-gap--xs">
                <Heading type="h2" noMargins>
                  Tekeningen
                </Heading>
                <LayoutFlow gap="sm">
                  <p className="rvo-paragraph rvo-paragraph--no-spacing">
                    Upload de tekeningen of plattegronden van de gebouwen waarop u bijenkasten wilt plaatsen.
                  </p>

                  {tekeningen.length > 0 && (
                    <LayoutFlow gap="md">
                      {tekeningen.map((doc, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing">
                            <Link
                              href={URL_VOORBEELD_PDF}
                              target="_blank"
                              rel="noopener noreferrer"
                              iconPlacement="left"
                              icon="document-blanco"
                              noUnderline={true}
                            >
                              {doc.bestandsnaam}
                            </Link>
                          </p>
                          <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--xs">
                            <Button
                              kind="warning-subtle"
                              size="sm"
                              icon="verwijderen"
                              iconPlacement="left"
                              onClick={() => setDeleteTarget({ type: 'tekening', index })}
                            >
                              Verwijder bestand
                            </Button>
                          </div>
                        </div>
                      ))}
                    </LayoutFlow>
                  )}

                  {showTekeningForm ? (
                    <LayoutFlow gap="xs">
                      <FormField
                        id={`tekening-upload-${tekeningen.length}`}
                        label="Tekening uploaden"
                        helperText={
                          <List
                            type="unordered"
                            bulletType="disc"
                            items={[
                              'Het bestand is in PDF-formaat en maximaal 10 MB.',
                              'De tekening toont een bovenaanzicht van het dak.',
                              'De locatie van de bijenkasten is duidelijk aangegeven.',
                            ]}
                          />
                        }
                      >
                        <FormField.FileInput accept=".pdf" onChange={handleTekeningChange} />
                      </FormField>
                      {tekeningen.length > 0 && (
                        <Link
                          href="#"
                          color="donkerblauw"
                          iconPlacement="left"
                          icon="kruis"
                          noUnderline={true}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowTekeningForm(false);
                          }}
                        >
                          Annuleren
                        </Link>
                      )}
                    </LayoutFlow>
                  ) : (
                    <div>
                      <Button
                        kind="secondary"
                        size="md"
                        icon="plus"
                        iconPlacement="left"
                        onClick={() => setShowTekeningForm(true)}
                      >
                        Voeg nog een tekening toe
                      </Button>
                    </div>
                  )}
                </LayoutFlow>
              </div>

              <ActionGroup>
                <Button
                  kind="primary"
                  size="md"
                  onClick={() => {
                    window.location.href = URL_CONTROLEREN;
                  }}
                >
                  Volgende stap
                </Button>
              </ActionGroup>
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

      {deleteTarget !== null && (
        <Dialog
          isOpen={true}
          onClose={() => setDeleteTarget(null)}
          actionGroup={
            <ActionGroup>
              <Button kind="warning" size="md" icon="verwijderen" iconPlacement="left" onClick={handleDeleteConfirm}>
                Bestand verwijderen
              </Button>
              <Button kind="secondary" size="md" onClick={() => setDeleteTarget(null)}>
                Bestand niet verwijderen
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Bestand verwijderen</Heading>
          <p className="rvo-paragraph">
            Weet u zeker dat u{' '}
            <strong>
              {deleteTarget.type === 'offerte'
                ? offertes[deleteTarget.index]?.bestandsnaam
                : tekeningen[deleteTarget.index]?.bestandsnaam}
            </strong>{' '}
            wilt verwijderen?
          </p>
        </Dialog>
      )}
    </body>
  );
};

export default Documenten;
