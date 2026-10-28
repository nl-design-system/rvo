import {
  ActionGroup,
  Alert,
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
  RadioButtonField,
  SelectField,
  TextInputField,
} from '@nl-rvo/component-library-react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { FormLeaveDialog } from './FormLeaveDialog';
import { ResponsiveProgressTracker } from './ResponsiveProgressTracker';
import { clearEditBijenkastIndex, getBijenkasten, getEditBijenkastIndex, updateBijenkast } from './bijenkastenStorage';
import { getPanden } from './pandenStorage';
import { getProject } from './projectStorage';
import { useDemoControls } from './useDemoControls';
import { useFormLeaveGuard } from './useFormLeaveGuard';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_BIJENKAST_WIJZIGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkast-wijzigen--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

interface FieldError {
  before: string;
  linkLabel: string;
  after: string;
  fieldText: string;
  anchor: string;
}

const BijenkastWijzigen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();
  const { showLeaveDialog, leaveTarget, dismissLeaveDialog } = useFormLeaveGuard(URL_VOORBEREIDING);

  const editIndex = getEditBijenkastIndex();
  const existing = editIndex !== null ? getBijenkasten()[editIndex] : null;

  const panden = getPanden();
  const pandOptions = [
    { value: '', label: 'Selecteer een gebouw' },
    ...panden.map((pand, index) => ({
      value: String(index),
      label: `${pand.straatnaam} ${pand.huisnummer}, ${pand.plaatsnaam}`,
    })),
  ];

  const [pandIndex, setPandIndex] = useState(existing ? String(existing.pandIndex) : '');
  const [aantalKasten, setAantalKasten] = useState(existing?.aantalKasten ?? '');
  const [typeBijenkast, setTypeBijenkast] = useState(existing?.typeBijenkast ?? '');
  const [errors, setErrors] = useState<Record<string, FieldError>>({});

  const errorSummaryRef = useRef<HTMLDivElement>(null);

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
      label: 'Gebouwen',
      link: URL_PANDEN,
      size: 'md' as const,
      line: 'straight' as const,
    },
    {
      state: 'doing' as const,
      label: 'Bijenkasten',
      link: URL_BIJENKASTEN,
      size: 'md' as const,
      line: 'substep-start' as const,
    },
    {
      state: 'doing' as const,
      label: 'Bijenkast wijzigen',
      link: URL_BIJENKAST_WIJZIGEN,
      size: 'sm' as const,
      line: 'substep-end' as const,
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

    if (!pandIndex) {
      newErrors.pand = {
        before: 'Het veld ',
        linkLabel: 'Gebouw',
        after: ' is niet ingevuld, maar wel verplicht. Maak een keuze.',
        fieldText: 'Het veld Gebouw is niet ingevuld, maar wel verplicht. Maak een keuze.',
        anchor: 'gebouw-label',
      };
    }

    if (!aantalKasten.trim()) {
      newErrors.aantalKasten = {
        before: 'Het veld ',
        linkLabel: 'Aantal bijenkasten',
        after: ' is niet ingevuld, maar wel verplicht. Vul het aantal bijenkasten in.',
        fieldText: 'Het veld Aantal bijenkasten is niet ingevuld, maar wel verplicht. Vul het aantal bijenkasten in.',
        anchor: 'aantalKasten-label',
      };
    } else if (isNaN(Number(aantalKasten)) || Number(aantalKasten) < 1) {
      newErrors.aantalKasten = {
        before: 'Vul een geldig ',
        linkLabel: 'aantal bijenkasten',
        after: ' in (minimaal 1).',
        fieldText: 'Vul een geldig aantal bijenkasten in (minimaal 1).',
        anchor: 'aantalKasten-label',
      };
    }

    if (!typeBijenkast) {
      newErrors.typeBijenkast = {
        before: 'Het veld ',
        linkLabel: 'Type bijenkast',
        after: ' is niet ingevuld, maar wel verplicht. Maak een keuze.',
        fieldText: 'Het veld Type bijenkast is niet ingevuld, maar wel verplicht. Maak een keuze.',
        anchor: 'typeBijenkast-label',
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
    if (editIndex !== null) {
      const selectedPand = panden[Number(pandIndex)];
      updateBijenkast(editIndex, {
        pandIndex: Number(pandIndex),
        pandLabel: `${selectedPand.straatnaam} ${selectedPand.huisnummer}, ${selectedPand.plaatsnaam}`,
        aantalKasten,
        typeBijenkast,
      });
      clearEditBijenkastIndex();
    }
    window.location.href = URL_BIJENKASTEN;
  };

  const hasErrors = Object.keys(errors).length > 0;

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
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div>
                  <Link href={URL_BIJENKASTEN} showIcon="before" icon="terug" noUnderline={true}>
                    Terug
                  </Link>
                  <Heading type="h1">Bijenkast wijzigen</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Pas de gegevens aan van de bijenkast.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <LayoutFlow>
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

                    <Fieldset legend="Bijenkastgegevens">
                      <SelectField
                        id="pand"
                        label="Gebouw"
                        helperText="Selecteer het gebouw waarop u deze bijenkast wilt plaatsen."
                        value={pandIndex}
                        onChange={(e) => setPandIndex((e.target as HTMLSelectElement).value)}
                        invalid={!!errors.pand}
                        errorText={errors.pand?.fieldText}
                        warningText={panden.length === 0 ? 'Er zijn nog geen gebouwen toegevoegd.' : undefined}
                        options={pandOptions}
                        disabled={panden.length === 0}
                      />
                      <TextInputField
                        id="aantalKasten"
                        label="Aantal bijenkasten"
                        size="xs"
                        value={aantalKasten}
                        onChange={(e) => setAantalKasten(e.target.value)}
                        invalid={!!errors.aantalKasten}
                        errorText={errors.aantalKasten?.fieldText}
                      />
                      <div
                        className="rvo-margin-block-end--xl"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setTypeBijenkast(
                            e.target.id === 'langstroth'
                              ? 'Langstroth kast'
                              : e.target.id === 'warre'
                                ? 'Warré kast'
                                : 'Top-bar kast',
                          )
                        }
                      >
                        <RadioButtonField
                          fieldId="typeBijenkast"
                          name="typeBijenkast"
                          label="Type bijenkast"
                          invalid={!!errors.typeBijenkast}
                          errorText={errors.typeBijenkast?.fieldText}
                          options={[
                            {
                              id: 'langstroth',
                              label: 'Langstroth kast',
                              checked: typeBijenkast === 'Langstroth kast',
                            },
                            { id: 'warre', label: 'Warré kast', checked: typeBijenkast === 'Warré kast' },
                            { id: 'topbar', label: 'Top-bar kast', checked: typeBijenkast === 'Top-bar kast' },
                          ]}
                        />
                      </div>
                    </Fieldset>

                    <ActionGroup>
                      <Button kind="primary" size="md" type="submit">
                        Bijenkast opslaan
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
      <FormLeaveDialog isOpen={showLeaveDialog} backUrl={leaveTarget} onClose={dismissLeaveDialog} />
    </body>
  );
};

export default BijenkastWijzigen;
