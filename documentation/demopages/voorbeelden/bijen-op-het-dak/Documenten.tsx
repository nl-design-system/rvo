import {
  ActionGroup,
  Button,
  Dialog,
  Fieldset,
  FileInputField,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  MobileMenuBar,
} from '@nl-rvo/component-library-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { ResponsiveProgressTracker } from './ResponsiveProgressTracker';
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
import { useDemoControls } from './useDemoControls';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

const formatFileSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace('.', ',')} MB`;
  return `${Math.round(bytes / 1024)} kB`;
};

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

  const projectCompleted = !!getProject();
  const pandenCompleted = getPanden().length > 0;
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
      state: (pandenCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Gebouwen',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (bijenkastenCompleted ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Bijenkasten',
      link: URL_BIJENKASTEN,
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
    addOfferte({ bestandsnaam: file.name, grootte: file.size });
    setOffertes(getOffertes());
    setShowOfferteForm(false);
  };

  const handleTekeningChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    addTekening({ bestandsnaam: file.name, grootte: file.size });
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
        {isDesktop ? (
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
          />
        ) : (
          <MobileMenuBar
            iconPlacement="before"
            useIcons={true}
            isOpen={false}
            size="md"
            items={[
              { label: 'Bijen op het dak subsidie (FSSBD)', link: URL_VOORBEREIDING, icon: 'home' },
              { label: 'Hulp & Contact', link: '#', icon: 'telefoon' },
              { label: 'English', link: '#', icon: 'wereldbol' },
              { label: 'Rosita van der Helm', link: '#', icon: 'user' },
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
            <ResponsiveProgressTracker steps={progressSteps} isDesktop={isDesktop} />
          </aside>

          <main>
            <LayoutFlow gap="xl">
              <div>
                <Link href={URL_BIJENKASTEN} showIcon="before" icon="terug" noUnderline={true}>
                  Terug
                </Link>
                <Heading type="h1">Documenten</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Upload de benodigde documenten voor uw aanvraag. Elk bestand mag maximaal 10 MB zijn (PDF).
                </p>
              </div>

              {/* Offertes */}
              <Fieldset legend="Offertes">
                <LayoutFlow gap="sm">
                  <p className="rvo-paragraph rvo-paragraph--no-spacing">
                    Upload de offerte(s) van uw installateur voor de plaatsing van de bijenkasten.
                  </p>

                  {offertes.length > 0 && (
                    <LayoutFlow gap="md">
                      {offertes.map((doc, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing">
                            <strong>{doc.bestandsnaam}</strong> ({formatFileSize(doc.grootte)})
                          </p>
                          <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--xs">
                            <Button
                              kind="warning"
                              size="sm"
                              icon="verwijderen"
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
                      <FileInputField
                        id={`offerte-upload-${offertes.length}`}
                        label="Offerte uploaden"
                        expandableHelperText={true}
                        expandableHelperTextTitle="Voorwaarden voor de offerte"
                        helperText={
                          <ul>
                            <li>Het bestand is in PDF-formaat en maximaal 10 MB.</li>
                            <li>De offerte is opgesteld door een gecertificeerde installateur.</li>
                            <li>De offerte bevat een specificatie van de bijenkasten en de plaatsingskosten.</li>
                          </ul>
                        }
                        accept=".pdf"
                        onChange={handleOfferteChange}
                      />
                      {offertes.length > 0 && (
                        <Link
                          href="#"
                          color="donkerblauw"
                          showIcon="before"
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
                    <Link
                      href="#"
                      color="donkerblauw"
                      showIcon="before"
                      icon="plus"
                      noUnderline={true}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowOfferteForm(true);
                      }}
                    >
                      Voeg nog een offerte toe
                    </Link>
                  )}
                </LayoutFlow>
              </Fieldset>

              {/* Tekeningen */}
              <Fieldset legend="Tekeningen">
                <LayoutFlow gap="sm">
                  <p className="rvo-paragraph rvo-paragraph--no-spacing">
                    Upload de tekeningen of plattegronden van de gebouwen waarop u bijenkasten wilt plaatsen.
                  </p>

                  {tekeningen.length > 0 && (
                    <LayoutFlow gap="md">
                      {tekeningen.map((doc, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing">
                            <strong>{doc.bestandsnaam}</strong> ({formatFileSize(doc.grootte)})
                          </p>
                          <div className="rvo-layout-row rvo-layout-gap--md rvo-margin-block-start--xs">
                            <Button
                              kind="warning"
                              size="sm"
                              icon="verwijderen"
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
                      <FileInputField
                        id={`tekening-upload-${tekeningen.length}`}
                        label="Tekening uploaden"
                        expandableHelperText={true}
                        expandableHelperTextTitle="Voorwaarden voor de tekening"
                        helperText={
                          <ul>
                            <li>Het bestand is in PDF-formaat en maximaal 10 MB.</li>
                            <li>De tekening toont een bovenaanzicht van het dak.</li>
                            <li>De locatie van de bijenkasten is duidelijk aangegeven.</li>
                          </ul>
                        }
                        accept=".pdf"
                        onChange={handleTekeningChange}
                      />
                      {tekeningen.length > 0 && (
                        <Link
                          href="#"
                          color="donkerblauw"
                          showIcon="before"
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
                    <Link
                      href="#"
                      color="donkerblauw"
                      showIcon="before"
                      icon="plus"
                      noUnderline={true}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowTekeningForm(true);
                      }}
                    >
                      Voeg nog een tekening toe
                    </Link>
                  )}
                </LayoutFlow>
              </Fieldset>

              <ActionGroup>
                <Button
                  kind="primary"
                  size="md"
                  onClick={() => {
                    window.location.href = URL_CONTROLEREN;
                  }}
                >
                  Documenten opslaan
                </Button>
              </ActionGroup>
            </LayoutFlow>
          </main>
        </Grid>
      </MaxWidthLayout>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />

      {deleteTarget !== null && (
        <Dialog
          isOpen={true}
          onClose={() => setDeleteTarget(null)}
          actionGroup={
            <ActionGroup>
              <Button kind="warning" size="md" onClick={handleDeleteConfirm}>
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
