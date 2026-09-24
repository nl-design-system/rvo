import {
  ActionGroup,
  Alert,
  Button,
  DateInputField,
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
  ProgressTracker,
  TextareaField,
  TextInputField,
} from '@nl-rvo/component-library-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { getPanden } from './pandenStorage';
import { saveProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';

interface FieldError {
  before: string;
  linkLabel: string;
  after: string;
  fieldText: string;
  anchor: string;
}

const Projectgegevens = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [naam, setNaam] = useState('');
  const [omschrijving, setOmschrijving] = useState('');
  const [startdatum, setStartdatum] = useState('');
  const [errors, setErrors] = useState<Record<string, FieldError>>({});

  const errorSummaryRef = useRef<HTMLDivElement>(null);

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
      state: 'doing' as const,
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

    if (!omschrijving.trim()) {
      newErrors.omschrijving = {
        before: 'Het veld ',
        linkLabel: 'Projectomschrijving',
        after: ' is niet ingevuld, maar wel verplicht. Vul een omschrijving in.',
        fieldText: 'Het veld Projectomschrijving is niet ingevuld, maar wel verplicht. Vul een omschrijving in.',
        anchor: 'omschrijving-label',
      };
    }

    if (!startdatum.trim()) {
      newErrors.startdatum = {
        before: 'Het veld ',
        linkLabel: 'Beoogde startdatum',
        after: ' is niet ingevuld, maar wel verplicht. Vul een datum in (dd-mm-jjjj).',
        fieldText: 'Het veld Beoogde startdatum is niet ingevuld, maar wel verplicht. Vul een datum in (dd-mm-jjjj).',
        anchor: 'startdatum-label',
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
    saveProject({ naam, omschrijving, startdatum });
    window.location.href = URL_PANDEN;
  };

  const hasErrors = Object.keys(errors).length > 0;

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
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div>
                  <Link href={URL_VOORBEREIDING} showIcon="before" icon="terug" noUnderline={true}>
                    Terug
                  </Link>
                  <Heading type="h1">Projectgegevens</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Vul de gegevens in over uw bijenproject.
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

                    <Fieldset legend="Projectgegevens">
                      <TextInputField
                        id="naam"
                        label="Projectnaam"
                        value={naam}
                        onChange={(e) => setNaam(e.target.value)}
                        invalid={!!errors.naam}
                        errorText={errors.naam?.fieldText}
                      />
                      <TextareaField
                        id="omschrijving"
                        label="Projectomschrijving"
                        helperText="Beschrijf kort het doel en de aanpak van uw bijenproject."
                        value={omschrijving}
                        onChange={(e) => setOmschrijving(e.target.value)}
                        invalid={!!errors.omschrijving}
                        errorText={errors.omschrijving?.fieldText}
                      />
                      <DateInputField
                        id="startdatum"
                        label="Beoogde startdatum"
                        helperText="De datum waarop u verwacht te beginnen met plaatsen van de bijenkasten."
                        size="sm"
                        value={startdatum}
                        onChange={(e) => setStartdatum(e.target.value)}
                        invalid={!!errors.startdatum}
                        errorText={errors.startdatum?.fieldText}
                      />
                    </Fieldset>

                    <ActionGroup>
                      <Button kind="primary" size="md" type="submit">
                        Volgende stap
                      </Button>
                      <Button kind="secondary" size="md">
                        Opslaan en later verdergaan
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
    </body>
  );
};

export default Projectgegevens;
