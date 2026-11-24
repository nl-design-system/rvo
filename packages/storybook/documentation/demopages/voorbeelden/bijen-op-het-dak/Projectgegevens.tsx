import {
  ActionGroup,
  Alert,
  Button,
  Dialog,
  Feedback,
  Fieldset,
  Footer,
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
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { getPanden } from './pandenStorage';
import { getProject, saveProject } from './projectStorage';
import { useDemoControls } from './useDemoControls';
import { useFormLeaveGuard } from './useFormLeaveGuard';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

const isValidDate = (dag: string, maand: string, jaar: string): boolean => {
  if (!/^\d{1,2}$/.test(dag.trim()) || !/^\d{1,2}$/.test(maand.trim()) || !/^\d{4}$/.test(jaar.trim())) return false;
  const d = Number(dag);
  const m = Number(maand);
  const y = Number(jaar);
  const date = new Date(y, m - 1, d);
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
};

// Keeps digits only and ignores input above the maximum, so a day cannot exceed 31 and a month cannot exceed 12.
const limitNumber = (value: string, previous: string, max: number): string => {
  const digits = value.replace(/\D/g, '');
  return digits !== '' && Number(digits) > max ? previous : digits;
};

interface FieldError {
  before: string;
  linkLabel: string;
  after: string;
  fieldText: string;
  anchor: string;
}

const Projectgegevens = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const { showLeaveDialog, leaveTarget, dismissLeaveDialog } = useFormLeaveGuard(URL_VOORBEREIDING);
  const stored = getProject();
  const [naam, setNaam] = useState(stored?.naam ?? '');
  const [omschrijving, setOmschrijving] = useState(stored?.omschrijving ?? '');
  const [storedJaar, storedMaand, storedDag] = (stored?.startdatum ?? '').split('-');
  const [dag, setDag] = useState(storedDag ? String(Number(storedDag)) : '');
  const [maand, setMaand] = useState(storedMaand ? String(Number(storedMaand)) : '');
  const [jaar, setJaar] = useState(storedJaar ?? '');
  const [errors, setErrors] = useState<Record<string, FieldError>>({});

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const pandenCompleted = getPanden().length > 0 && getBijenkasten().length > 0;
  const progressSteps = [
    {
      state: 'doing' as const,
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

  const validate = (): Record<string, FieldError> => {
    const newErrors: Record<string, FieldError> = {};

    if (!naam.trim()) {
      newErrors.naam = {
        before: 'Het veld ',
        linkLabel: 'Projectnaam',
        after: ' is niet ingevuld, maar wel verplicht. Vul uw projectnaam in.',
        fieldText: 'Het veld Projectnaam is niet ingevuld, maar wel verplicht. Vul uw projectnaam in.',
        anchor: 'naam-label',
      };
    }

    if (!dag.trim() && !maand.trim() && !jaar.trim()) {
      newErrors.startdatum = {
        before: 'Het veld ',
        linkLabel: 'Startdatum',
        after: ' is niet ingevuld, maar wel verplicht. Vul een dag, maand en jaar in.',
        fieldText: 'Het veld Startdatum is niet ingevuld, maar wel verplicht. Vul een dag, maand en jaar in.',
        anchor: 'startdatum-dag-label',
      };
    } else if (!isValidDate(dag, maand, jaar)) {
      newErrors.startdatum = {
        before: '',
        linkLabel: 'Startdatum',
        after: ' is geen geldige datum. Vul een bestaande dag, maand en jaar in, bijvoorbeeld 1 3 2026.',
        fieldText: 'Startdatum is geen geldige datum. Vul een bestaande dag, maand en jaar in, bijvoorbeeld 1 3 2026.',
        anchor: 'startdatum-dag-label',
      };
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      return;
    }
    const startdatum = `${jaar.trim()}-${maand.trim().padStart(2, '0')}-${dag.trim().padStart(2, '0')}`;
    saveProject({ naam, omschrijving, startdatum });
    window.location.href = URL_PANDEN;
  };

  const hasErrors = Object.keys(errors).length > 0;

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
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div>
                  <Link href={URL_VOORBEREIDING} iconPlacement="left" icon="terug" noUnderline={true}>
                    Vorige stap
                  </Link>
                  <Heading type="h1">Projectgegevens</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Vul de gegevens in over uw bijenproject.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <LayoutFlow gap="xl">
                    {hasErrors && (
                      <div ref={errorSummaryRef} tabIndex={-1}>
                        <Alert kind="error" padding="md">
                          <strong>Er zijn velden niet of onjuist ingevuld. Herstel dit om door te gaan.</strong>
                          <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
                            {Object.entries(errors).map(([key, err]) => (
                              <li key={key}>
                                {err.before}
                                <a href={`#${err.anchor}`} className="rvo-link rvo-link--donkerblauw">
                                  {err.linkLabel}
                                </a>
                                {err.after}
                              </li>
                            ))}
                          </ul>
                        </Alert>
                      </div>
                    )}

                    <div className="rvo-layout-column rvo-layout-gap--xl">
                      <FormField id="naam" label="Projectnaam" errorText={errors.naam?.fieldText}>
                        <FormField.Text
                          value={naam}
                          onChange={(e) => setNaam(e.target.value)}
                          invalid={!!errors.naam}
                        />
                      </FormField>
                      <FormField
                        id="omschrijving"
                        label="Projectomschrijving (niet verplicht)"
                        helperText="Beschrijf kort het doel en de aanpak van uw bijenproject."
                      >
                        <FormField.TextArea value={omschrijving} onChange={(e) => setOmschrijving(e.target.value)} />
                      </FormField>
                      <Fieldset legend="Startdatum">
                        <div className="rvo-layout-column rvo-layout-gap--xs">
                          <div className="utrecht-form-field-description">
                            De datum waarop u verwacht te beginnen met plaatsen van de bijenkasten.
                          </div>
                          {errors.startdatum && <Feedback type="foutmelding">{errors.startdatum.fieldText}</Feedback>}
                          <div className="rvo-layout-row rvo-layout-gap--xs rvo-layout--wrap rvo-layout-align-items-start">
                            <FormField id="startdatum-dag" label="Dag">
                              <FormField.Text
                                type="text"
                                inputMode="numeric"
                                autoComplete="off"
                                sizeInput="xs"
                                size={2}
                                maxLength={2}
                                value={dag}
                                onChange={(e) => setDag((prev) => limitNumber(e.target.value, prev, 31))}
                                invalid={!!errors.startdatum}
                              />
                            </FormField>
                            <FormField id="startdatum-maand" label="Maand">
                              <FormField.Text
                                type="text"
                                inputMode="numeric"
                                autoComplete="off"
                                sizeInput="xs"
                                size={2}
                                maxLength={2}
                                value={maand}
                                onChange={(e) => setMaand((prev) => limitNumber(e.target.value, prev, 12))}
                                invalid={!!errors.startdatum}
                              />
                            </FormField>
                            <FormField id="startdatum-jaar" label="Jaar">
                              <FormField.Text
                                type="text"
                                inputMode="numeric"
                                autoComplete="off"
                                sizeInput="sm"
                                size={4}
                                maxLength={4}
                                value={jaar}
                                onChange={(e) => setJaar(e.target.value.replace(/\D/g, ''))}
                                invalid={!!errors.startdatum}
                              />
                            </FormField>
                          </div>
                        </div>
                      </Fieldset>
                    </div>

                    <ActionGroup>
                      <Button kind="primary" size="md" type="submit">
                        Volgende stap
                      </Button>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
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

export default Projectgegevens;
