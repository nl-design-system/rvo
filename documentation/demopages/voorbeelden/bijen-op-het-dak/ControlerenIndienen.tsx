import {
  ActionGroup,
  Alert,
  Button,
  DataList,
  DataListItem,
  Footer,
  Grid,
  Header,
  Heading,
  LayoutFlow,
  Link,
  List,
  MaxWidthLayout,
  MenuBar,
  MobileMenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { useEffect, useRef, useState } from 'react';
import { getBijenkasten, saveEditBijenkastIndex } from './bijenkastenStorage';
import { getOffertes, getTekeningen } from './documentenStorage';
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
const URL_PAND_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-toevoegen--default&viewMode=story';
const URL_BIJENKAST_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-toevoegen--default&viewMode=story';
const URL_BIJENKAST_WIJZIGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-wijzigen--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';
const URL_BEVESTIGING = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bevestiging--default&viewMode=story';

const formatFileSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace('.', ',')} MB`;
  return `${Math.round(bytes / 1024)} kB`;
};

const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split('-');
  return `${d}-${m}-${y}`;
};

interface SubmitError {
  label: string;
  href: string;
  action?: () => void;
}

const bijenkastTitle = (aantalKasten: string, typeBijenkast: string) =>
  `${aantalKasten} ${Number(aantalKasten) === 1 ? typeBijenkast : typeBijenkast.replace(/kast$/, 'kasten')}`;

const ControlerenIndienen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const [showErrors, setShowErrors] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const project = getProject();
  const panden = getPanden();
  const bijenkasten = getBijenkasten();
  const offertes = getOffertes();
  const tekeningen = getTekeningen();

  const orphanedEntries = bijenkasten
    .map((b, index) => ({ bijenkast: b, index }))
    .filter(({ bijenkast }) => bijenkast.pandIndex === -1);

  const submitErrors: SubmitError[] = [
    ...(!project ? [{ label: 'Vul de projectgegevens in', href: URL_PROJECTGEGEVENS }] : []),
    ...(panden.length === 0 ? [{ label: 'Voeg een gebouw toe', href: URL_PAND_TOEVOEGEN }] : []),
    ...(bijenkasten.length === 0
      ? [{ label: 'Voeg een bijenkast toe', href: URL_BIJENKAST_TOEVOEGEN }]
      : orphanedEntries.map(({ bijenkast, index }) => ({
          label: `Koppel "${bijenkastTitle(bijenkast.aantalKasten, bijenkast.typeBijenkast)}" aan een gebouw`,
          href: URL_BIJENKAST_WIJZIGEN,
          action: () => saveEditBijenkastIndex(index),
        }))),
    ...(offertes.length === 0 ? [{ label: 'Voeg een offerte toe', href: URL_DOCUMENTEN }] : []),
    ...(tekeningen.length === 0 ? [{ label: 'Voeg een tekening toe', href: URL_DOCUMENTEN }] : []),
  ];

  const handleVersturen = () => {
    if (submitErrors.length > 0) {
      setShowErrors(true);
      setTimeout(() => errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      return;
    }
    window.location.href = URL_BEVESTIGING;
  };

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
            <ProgressTracker steps={progressSteps} />
          </aside>

          <main>
            <LayoutFlow gap="xl">
              <div>
                <Link href={URL_DOCUMENTEN} showIcon="before" icon="terug" noUnderline={true}>
                  Terug
                </Link>
                <Heading type="h1">Controleren en versturen</Heading>
                <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                  Controleer uw gegevens voordat u de aanvraag indient. Kloppen de gegevens niet? Pas ze dan aan via de
                  knoppen hieronder.
                </p>
              </div>

              {showErrors && submitErrors.length > 0 && (
                <div ref={errorSummaryRef} tabIndex={-1}>
                  <Alert kind="error" padding="md">
                    <strong>
                      De aanvraag is niet compleet. Vul de ontbrekende gegevens in om de aanvraag te versturen.
                    </strong>
                    <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
                      {submitErrors.map((err, i) => (
                        <li key={i}>
                          <a
                            href={err.href}
                            className="rvo-link rvo-link--donkerblauw"
                            onClick={(e) => {
                              if (err.action) {
                                e.preventDefault();
                                err.action();
                                window.location.href = err.href;
                              }
                            }}
                          >
                            {err.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Alert>
                </div>
              )}

              <LayoutFlow gap="lg">
                <div>
                  <Heading type="h2">Projectgegevens</Heading>
                  {project ? (
                    <DataList>
                      <DataListItem label="Projectnaam" value={project.naam} />
                      <DataListItem label="Omschrijving" value={project.omschrijving} />
                      <DataListItem label="Beoogde startdatum" value={formatDate(project.startdatum)} />
                    </DataList>
                  ) : (
                    <Alert kind="warning" padding="md">
                      Geen projectgegevens opgegeven.
                    </Alert>
                  )}
                  <div className="rvo-margin-block-start--md">
                    <Link href={URL_PROJECTGEGEVENS} showIcon="before" icon="bewerken" noUnderline={true}>
                      Projectgegevens wijzigen
                    </Link>
                  </div>
                </div>

                <hr className="rvo-hr" />

                <div>
                  <Heading type="h2">Gebouwen</Heading>
                  {panden.length > 0 ? (
                    <LayoutFlow gap="md">
                      {panden.map((pand, index) => (
                        <div key={index}>
                          <Heading type="h3">
                            {pand.straatnaam} {pand.huisnummer}, {pand.postcode} {pand.plaatsnaam}
                          </Heading>
                          <DataList>
                            <DataListItem label="Daktype" value={pand.daktype} />
                            <DataListItem label="Dakoppervlak" value={`${pand.dakoppervlak} m²`} />
                            <DataListItem label="Bereikbaar" value={pand.bereikbaar} />
                          </DataList>
                        </div>
                      ))}
                    </LayoutFlow>
                  ) : (
                    <Alert kind="warning" padding="md">
                      Er zijn nog geen gebouwen toegevoegd.
                    </Alert>
                  )}
                  <div className="rvo-margin-block-start--md">
                    {panden.length > 0 ? (
                      <Link href={URL_PANDEN} showIcon="before" icon="bewerken" noUnderline={true}>
                        Gebouwen wijzigen
                      </Link>
                    ) : (
                      <Link href={URL_PAND_TOEVOEGEN} showIcon="before" icon="plus" noUnderline={true}>
                        Gebouw toevoegen
                      </Link>
                    )}
                  </div>
                </div>

                <hr className="rvo-hr" />

                <div>
                  <Heading type="h2">Bijenkasten</Heading>
                  {bijenkasten.length > 0 ? (
                    <LayoutFlow gap="md">
                      {bijenkasten.map((bijenkast, index) => (
                        <div key={index}>
                          <Heading type="h3">
                            {bijenkast.aantalKasten}{' '}
                            {Number(bijenkast.aantalKasten) === 1
                              ? bijenkast.typeBijenkast
                              : bijenkast.typeBijenkast.replace(/kast$/, 'kasten')}
                          </Heading>
                          <DataList>
                            <DataListItem label="Gebouw" value={bijenkast.pandLabel} />
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
                    <Alert kind="warning" padding="md">
                      Er zijn nog geen bijenkasten toegevoegd.
                    </Alert>
                  )}
                  <div className="rvo-margin-block-start--md">
                    {bijenkasten.length > 0 ? (
                      <Link href={URL_BIJENKASTEN} showIcon="before" icon="bewerken" noUnderline={true}>
                        Bijenkasten wijzigen
                      </Link>
                    ) : (
                      <Link href={URL_BIJENKAST_TOEVOEGEN} showIcon="before" icon="plus" noUnderline={true}>
                        Bijenkast toevoegen
                      </Link>
                    )}
                  </div>
                </div>

                <hr className="rvo-hr" />

                <div>
                  <Heading type="h2">Documenten</Heading>
                  <LayoutFlow gap="md">
                    <div>
                      <Heading type="h3">Offertes</Heading>
                      {offertes.length > 0 ? (
                        <List
                          type="unordered"
                          noMargin={true}
                          items={offertes.map((doc) => `${doc.bestandsnaam} (${formatFileSize(doc.grootte)})`)}
                        />
                      ) : (
                        <Alert kind="warning" padding="md">
                          Er zijn nog geen offertes geüpload.
                        </Alert>
                      )}
                    </div>
                    <div>
                      <Heading type="h3">Tekeningen</Heading>
                      {tekeningen.length > 0 ? (
                        <List
                          type="unordered"
                          noMargin={true}
                          items={tekeningen.map((doc) => `${doc.bestandsnaam} (${formatFileSize(doc.grootte)})`)}
                        />
                      ) : (
                        <Alert kind="warning" padding="md">
                          Er zijn nog geen tekeningen geüpload.
                        </Alert>
                      )}
                    </div>
                  </LayoutFlow>
                  <div className="rvo-margin-block-start--md">
                    <Link href={URL_DOCUMENTEN} showIcon="before" icon="bewerken" noUnderline={true}>
                      Documenten wijzigen
                    </Link>
                  </div>
                </div>
              </LayoutFlow>

              <ActionGroup>
                <Button kind="primary" size="md" onClick={handleVersturen}>
                  Aanvraag versturen
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
