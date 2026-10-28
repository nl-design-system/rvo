import {
  ActionGroup,
  Alert,
  Button,
  Card,
  DataList,
  DataListItem,
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
import { getOffertes, getTekeningen } from './documentenStorage';
import { getPanden } from './pandenStorage';
import { getProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-indienen--default&viewMode=story';
const URL_BEVESTIGING = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bevestiging--default&viewMode=story';

const formatFileSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace('.', ',')} MB`;
  return `${Math.round(bytes / 1024)} kB`;
};

const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split('-');
  return `${d}-${m}-${y}`;
};

const ControlerenIndienen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  const project = getProject();
  const panden = getPanden();
  const bijenkasten = getBijenkasten();
  const offertes = getOffertes();
  const tekeningen = getTekeningen();

  const orphanedBijenkasten = bijenkasten.filter((b) => b.pandIndex === -1);
  const canSubmit = orphanedBijenkasten.length === 0;

  const progressSteps = [
    {
      state: 'completed' as const,
      label: 'Voorbereiding',
      link: URL_VOORBEREIDING,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (project ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Projectgegevens',
      link: URL_PROJECTGEGEVENS,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (panden.length > 0 ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Gebouwen',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (bijenkasten.length > 0 ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Bijenkasten',
      link: URL_BIJENKASTEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: (offertes.length > 0 && tekeningen.length > 0 ? 'completed' : 'incomplete') as 'completed' | 'incomplete',
      label: 'Documenten',
      link: URL_DOCUMENTEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: 'doing' as const,
      label: 'Controleren & indienen',
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
                <Link href={URL_DOCUMENTEN} showIcon="before" icon="terug" noUnderline={true}>
                  Terug
                </Link>
                <Heading type="h1">Controleren & indienen</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Controleer uw gegevens voordat u de aanvraag indient. Kloppen de gegevens niet? Pas ze dan aan via de
                  knoppen hieronder.
                </p>
              </div>

              {!canSubmit && (
                <Alert kind="error" padding="md">
                  <strong>
                    {orphanedBijenkasten.length === 1
                      ? 'Er is 1 bijenkast niet gekoppeld aan een gebouw.'
                      : `Er zijn ${orphanedBijenkasten.length} bijenkasten niet gekoppeld aan een gebouw.`}
                  </strong>{' '}
                  Ga naar{' '}
                  <a href={URL_BIJENKASTEN} className="rvo-link rvo-link--donkerblauw">
                    Bijenkasten
                  </a>{' '}
                  en verwijder of herstel de betreffende bijenkasten om de aanvraag in te kunnen dienen.
                </Alert>
              )}

              <LayoutFlow gap="md">
                <Card outline={true} padding="md">
                  <div className="rvo-layout-row rvo-layout-space-between rvo-layout-align-items--center rvo-margin-block-end--md">
                    <Heading type="h2" noMargins={true}>
                      Projectgegevens
                    </Heading>
                    <Link href={URL_PROJECTGEGEVENS} showIcon="before" icon="bewerken" noUnderline={true}>
                      Wijzigen
                    </Link>
                  </div>
                  {project ? (
                    <DataList>
                      <DataListItem label="Projectnaam" value={project.naam} />
                      <DataListItem label="Omschrijving" value={project.omschrijving} />
                      <DataListItem label="Beoogde startdatum" value={formatDate(project.startdatum)} />
                    </DataList>
                  ) : (
                    <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                      Geen projectgegevens opgegeven.
                    </p>
                  )}
                </Card>

                <Card outline={true} padding="md">
                  <div className="rvo-layout-row rvo-layout-space-between rvo-layout-align-items--center rvo-margin-block-end--md">
                    <Heading type="h2" noMargins={true}>
                      Panden
                    </Heading>
                    <Link href={URL_PANDEN} showIcon="before" icon="bewerken" noUnderline={true}>
                      Wijzigen
                    </Link>
                  </div>
                  {panden.length > 0 ? (
                    <LayoutFlow gap="md">
                      {panden.map((pand, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-margin-block-end--xs">
                            {pand.straatnaam} {pand.huisnummer}, {pand.postcode} {pand.plaatsnaam}
                          </p>
                          <DataList>
                            <DataListItem label="Daktype" value={pand.daktype} />
                            <DataListItem label="Dakoppervlak" value={`${pand.dakoppervlak} m²`} />
                            <DataListItem label="Bereikbaar" value={pand.bereikbaar} />
                          </DataList>
                        </div>
                      ))}
                    </LayoutFlow>
                  ) : (
                    <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                      Geen gebouwen opgegeven.
                    </p>
                  )}
                </Card>

                <Card outline={true} padding="md">
                  <div className="rvo-layout-row rvo-layout-space-between rvo-layout-align-items--center rvo-margin-block-end--md">
                    <Heading type="h2" noMargins={true}>
                      Bijenkasten
                    </Heading>
                    <Link href={URL_BIJENKASTEN} showIcon="before" icon="bewerken" noUnderline={true}>
                      Wijzigen
                    </Link>
                  </div>
                  {bijenkasten.length > 0 ? (
                    <LayoutFlow gap="md">
                      {bijenkasten.map((bijenkast, index) => (
                        <div key={index}>
                          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-margin-block-end--xs">
                            Bijenkast {index + 1}
                          </p>
                          <DataList>
                            <DataListItem label="Pand" value={bijenkast.pandLabel} />
                            <DataListItem label="Type" value={bijenkast.typeBijenkast} />
                            <DataListItem
                              label="Aantal"
                              value={`${bijenkast.aantalKasten} ${Number(bijenkast.aantalKasten) === 1 ? 'kast' : 'kasten'}`}
                            />
                          </DataList>
                        </div>
                      ))}
                    </LayoutFlow>
                  ) : (
                    <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                      Geen bijenkasten opgegeven.
                    </p>
                  )}
                </Card>

                <Card outline={true} padding="md">
                  <div className="rvo-layout-row rvo-layout-space-between rvo-layout-align-items--center rvo-margin-block-end--md">
                    <Heading type="h2" noMargins={true}>
                      Documenten
                    </Heading>
                    <Link href={URL_DOCUMENTEN} showIcon="before" icon="bewerken" noUnderline={true}>
                      Wijzigen
                    </Link>
                  </div>
                  <LayoutFlow gap="md">
                    <div>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-margin-block-end--xs">
                        Offertes
                      </p>
                      {offertes.length > 0 ? (
                        <DataList>
                          {offertes.map((doc, index) => (
                            <DataListItem
                              key={index}
                              label={`Offerte ${index + 1}`}
                              value={`${doc.bestandsnaam} (${formatFileSize(doc.grootte)})`}
                            />
                          ))}
                        </DataList>
                      ) : (
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                          Geen offertes geüpload.
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--bold rvo-margin-block-end--xs">
                        Tekeningen
                      </p>
                      {tekeningen.length > 0 ? (
                        <DataList>
                          {tekeningen.map((doc, index) => (
                            <DataListItem
                              key={index}
                              label={`Tekening ${index + 1}`}
                              value={`${doc.bestandsnaam} (${formatFileSize(doc.grootte)})`}
                            />
                          ))}
                        </DataList>
                      ) : (
                        <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-text--grijs-600">
                          Geen tekeningen geüpload.
                        </p>
                      )}
                    </div>
                  </LayoutFlow>
                </Card>
              </LayoutFlow>

              <ActionGroup>
                <Button
                  kind="primary"
                  size="md"
                  onClick={() => {
                    window.location.href = URL_BEVESTIGING;
                  }}
                >
                  Aanvraag indienen
                </Button>
              </ActionGroup>
            </LayoutFlow>
          </main>
        </Grid>
      </MaxWidthLayout>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="md" />
    </body>
  );
};

export default ControlerenIndienen;
