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
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/component-library-react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { addPand } from './pandenStorage';
import { getProject } from './projectStorage';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_PAND_TOEVOEGEN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-pand-toevoegen--default&viewMode=story';

const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';

interface FieldError {
  before: string;
  linkLabel: string;
  after: string;
  fieldText: string;
  anchor: string;
}

const PandToevoegen = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  const [straatnaam, setStraatnaam] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [postcode, setPostcode] = useState('');
  const [plaatsnaam, setPlaatsnaam] = useState('');
  const [daktype, setDaktype] = useState('');
  const [dakoppervlak, setDakoppervlak] = useState('');
  const [bereikbaar, setBereikbaar] = useState('');
  const [errors, setErrors] = useState<Record<string, FieldError>>({});

  const errorSummaryRef = useRef<HTMLDivElement>(null);

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
    { state: 'doing' as const, label: 'Panden', link: URL_PANDEN, size: 'md' as const, line: 'substep-start' as const },
    {
      state: 'doing' as const,
      label: 'Pand toevoegen',
      link: URL_PAND_TOEVOEGEN,
      size: 'sm' as const,
      line: 'substep-end' as const,
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

    if (!straatnaam.trim()) {
      newErrors.straatnaam = {
        before: 'Het veld ',
        linkLabel: 'Straatnaam',
        after: ' is niet ingevuld, maar wel verplicht. Vul uw straatnaam in.',
        fieldText: 'Het veld Straatnaam is niet ingevuld, maar wel verplicht. Vul uw straatnaam in.',
        anchor: 'straatnaam-label',
      };
    }

    if (!huisnummer.trim()) {
      newErrors.huisnummer = {
        before: 'Het veld ',
        linkLabel: 'Huisnummer',
        after: ' is niet ingevuld, maar wel verplicht. Vul uw huisnummer in.',
        fieldText: 'Het veld Huisnummer is niet ingevuld, maar wel verplicht. Vul uw huisnummer in.',
        anchor: 'huisnummer-label',
      };
    }

    if (!postcode.trim()) {
      newErrors.postcode = {
        before: 'Vul een geldige ',
        linkLabel: 'postcode',
        after: ' in (bijvoorbeeld: 1234 AB).',
        fieldText: 'Vul een geldige postcode in (bijvoorbeeld: 1234 AB).',
        anchor: 'postcode-label',
      };
    } else if (!/^\d{4}\s?[A-Za-z]{2}$/.test(postcode.trim())) {
      newErrors.postcode = {
        before: 'Vul een geldige ',
        linkLabel: 'postcode',
        after: ' in (bijvoorbeeld: 1234 AB).',
        fieldText: 'Vul een geldige postcode in (bijvoorbeeld: 1234 AB).',
        anchor: 'postcode-label',
      };
    }

    if (!plaatsnaam.trim()) {
      newErrors.plaatsnaam = {
        before: 'Het veld ',
        linkLabel: 'Plaatsnaam',
        after: ' is niet ingevuld, maar wel verplicht. Vul uw plaatsnaam in.',
        fieldText: 'Het veld Plaatsnaam is niet ingevuld, maar wel verplicht. Vul uw plaatsnaam in.',
        anchor: 'plaatsnaam-label',
      };
    }

    if (!daktype) {
      newErrors.daktype = {
        before: 'Het veld ',
        linkLabel: 'Type dak',
        after: ' is niet ingevuld, maar wel verplicht. Maak een keuze.',
        fieldText: 'Het veld Type dak is niet ingevuld, maar wel verplicht. Maak een keuze.',
        anchor: 'daktype-label',
      };
    }

    if (!dakoppervlak.trim()) {
      newErrors.dakoppervlak = {
        before: 'Het veld ',
        linkLabel: 'Dakoppervlak',
        after: ' is niet ingevuld, maar wel verplicht. Vul het dakoppervlak in.',
        fieldText: 'Het veld Dakoppervlak is niet ingevuld, maar wel verplicht. Vul het dakoppervlak in.',
        anchor: 'dakoppervlak-label',
      };
    }

    if (!bereikbaar) {
      newErrors.bereikbaar = {
        before: 'Het veld ',
        linkLabel: 'Bereikbaar voor onderhoud',
        after: ' is niet ingevuld, maar wel verplicht. Maak een keuze.',
        fieldText: 'Het veld Bereikbaar voor onderhoud is niet ingevuld, maar wel verplicht. Maak een keuze.',
        anchor: 'bereikbaar-label',
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
    addPand({ straatnaam, huisnummer, postcode, plaatsnaam, daktype, dakoppervlak, bereikbaar });
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
                  <Link href={URL_PANDEN} showIcon="before" icon="terug" noUnderline={true}>
                    Terug
                  </Link>
                  <Heading type="h1">Pand toevoegen</Heading>
                  <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
                    Voer de gegevens in van het pand waarop u bijenkasten wilt plaatsen.
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

                    <Fieldset legend="Locatie van het pand">
                      <TextInputField
                        label="Land"
                        disabled={true}
                        value="Nederland"
                        warningText="Alleen panden in Nederland komen in aanmerking."
                      />
                      <TextInputField
                        id="straatnaam"
                        label="Straatnaam"
                        value={straatnaam}
                        onChange={(e) => setStraatnaam(e.target.value)}
                        invalid={!!errors.straatnaam}
                        errorText={errors.straatnaam?.fieldText}
                      />
                      <TextInputField
                        id="huisnummer"
                        label="Huisnummer"
                        size="xs"
                        value={huisnummer}
                        onChange={(e) => setHuisnummer(e.target.value)}
                        invalid={!!errors.huisnummer}
                        errorText={errors.huisnummer?.fieldText}
                      />
                      <TextInputField
                        id="postcode"
                        label="Postcode"
                        size="sm"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        invalid={!!errors.postcode}
                        errorText={errors.postcode?.fieldText}
                      />
                      <TextInputField
                        id="plaatsnaam"
                        label="Plaatsnaam"
                        value={plaatsnaam}
                        onChange={(e) => setPlaatsnaam(e.target.value)}
                        invalid={!!errors.plaatsnaam}
                        errorText={errors.plaatsnaam?.fieldText}
                      />
                    </Fieldset>

                    <Fieldset legend="Informatie over het dak">
                      <div
                        className="rvo-margin-block-end--xl"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setDaktype(e.target.id === 'plat-dak' ? 'Plat dak' : 'Schuin dak')
                        }
                      >
                        <RadioButtonField
                          fieldId="daktype"
                          name="daktype"
                          label="Type dak"
                          invalid={!!errors.daktype}
                          errorText={errors.daktype?.fieldText}
                          options={[
                            { id: 'plat-dak', label: 'Plat dak' },
                            { id: 'schuin-dak', label: 'Schuin dak' },
                          ]}
                        />
                      </div>
                      <TextInputField
                        id="dakoppervlak"
                        label="Dakoppervlak (m²)"
                        helperText="Het beschikbare dakoppervlak waarop de bijenkasten worden geplaatst."
                        size="sm"
                        value={dakoppervlak}
                        onChange={(e) => setDakoppervlak(e.target.value)}
                        invalid={!!errors.dakoppervlak}
                        errorText={errors.dakoppervlak?.fieldText}
                      />
                      <div
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setBereikbaar(e.target.id === 'bereikbaar-ja' ? 'Ja' : 'Nee')
                        }
                      >
                        <RadioButtonField
                          fieldId="bereikbaar"
                          name="dak-bereikbaar"
                          label="Is het dak bereikbaar voor onderhoud?"
                          helperText="Het dak moet minimaal 2 keer per jaar bereikbaar zijn voor de imker."
                          invalid={!!errors.bereikbaar}
                          errorText={errors.bereikbaar?.fieldText}
                          options={[
                            { id: 'bereikbaar-ja', label: 'Ja' },
                            { id: 'bereikbaar-nee', label: 'Nee' },
                          ]}
                        />
                      </div>
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

export default PandToevoegen;
