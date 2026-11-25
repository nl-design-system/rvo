/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { ActionGroup, Alert, Button, DataList, FormField, LayoutFlow, Link } from '@nl-rvo/component-library-react';
import { ReactElement, useState } from 'react';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';

interface IChoiceStep {
  id: string;
  question: string;
  helperText?: string;
  options: { label: string; value: string }[];
  /** Reason shown when this answer ends the decision tree negatively. */
  rejectedOn?: { value: string; reason: string };
}

const BESLISBOOM_STEPS: IChoiceStep[] = [
  {
    id: 'eigenaar',
    question: 'Bent u eigenaar van het gebouw, of heeft u toestemming van de eigenaar?',
    helperText: 'Bij een gebouw met een VvE heeft u toestemming van de VvE nodig.',
    options: [
      { label: 'Ja', value: 'ja' },
      { label: 'Nee', value: 'nee' },
    ],
    rejectedOn: {
      value: 'nee',
      reason: 'U mag het dak alleen gebruiken voor een bijenkast als u eigenaar bent of toestemming heeft.',
    },
  },
  {
    id: 'organisatie',
    question: 'Is uw organisatie ingeschreven bij de Kamer van Koophandel?',
    options: [
      { label: 'Ja', value: 'ja' },
      { label: 'Nee', value: 'nee' },
    ],
    rejectedOn: {
      value: 'nee',
      reason: 'Alleen organisaties met een KVK-nummer kunnen deze subsidie aanvragen.',
    },
  },
  {
    id: 'locatie',
    question: 'Komt de bijenkast op een dak in Nederland?',
    options: [
      { label: 'Ja', value: 'ja' },
      { label: 'Nee', value: 'nee' },
    ],
    rejectedOn: {
      value: 'nee',
      reason: 'De bijenkast moet op een dak in Nederland staan.',
    },
  },
  {
    id: 'plan',
    question: 'Heeft u een plan voor de aanleg en het onderhoud van de bijenkast?',
    options: [
      { label: 'Ja', value: 'ja' },
      { label: 'Nee, nog niet', value: 'nee' },
    ],
    rejectedOn: {
      value: 'nee',
      reason: 'U heeft een plan nodig voor de aanleg en het onderhoud van de bijenkast.',
    },
  },
];

interface IChoiceFieldProps {
  step: IChoiceStep;
  value: string | undefined;
  error: boolean;
  onChange: (value: string) => void;
}

const ChoiceField = ({ step, value, error, onChange }: IChoiceFieldProps): ReactElement => (
  <FormField
    id={step.id}
    label={step.question}
    labelSize="md"
    helperText={step.helperText}
    errorText={error ? 'Kies een antwoord om door te gaan.' : undefined}
  >
    <FormField.RadioButtonGroup
      name={step.id}
      invalid={error}
      currentSelection={value === undefined ? null : step.options.findIndex((option) => option.value === value)}
      onChange={(index: number) => onChange(step.options[index].value)}
      options={step.options.map((option) => ({ id: `${step.id}-${option.value}`, label: option.label }))}
    />
  </FormField>
);

export const Beslisboom = (): ReactElement => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // A question is visible as long as all previous questions were answered positively.
  const rejectedIndex = BESLISBOOM_STEPS.findIndex((step) => step.rejectedOn?.value === answers[step.id]);
  const visibleCount =
    rejectedIndex >= 0
      ? rejectedIndex + 1
      : BESLISBOOM_STEPS.findIndex((step) => !answers[step.id]) >= 0
        ? BESLISBOOM_STEPS.findIndex((step) => !answers[step.id]) + 1
        : BESLISBOOM_STEPS.length;
  const rejected = rejectedIndex >= 0 ? BESLISBOOM_STEPS[rejectedIndex].rejectedOn : undefined;
  const accepted = rejectedIndex < 0 && BESLISBOOM_STEPS.every((step) => answers[step.id]);

  return (
    <LayoutFlow gap="lg">
      {BESLISBOOM_STEPS.slice(0, visibleCount).map((step) => (
        <ChoiceField
          key={step.id}
          step={step}
          value={answers[step.id]}
          error={false}
          onChange={(value) => setAnswers({ ...answers, [step.id]: value })}
        />
      ))}
      <div role="status">
        {rejected && (
          <Alert kind="warning" padding="md" heading="Helaas, u kunt op dit moment geen subsidie aanvragen">
            {rejected.reason}
          </Alert>
        )}
        {accepted && (
          <LayoutFlow gap="md">
            <Alert kind="success" padding="md" heading="U kunt subsidie aanvragen">
              Op basis van uw antwoorden komt u in aanmerking voor de FSSBD-subsidie.
            </Alert>
            <ActionGroup>
              <Link callToAction={true} href={URL_VOORBEREIDING}>
                Direct aanvragen
              </Link>
            </ActionGroup>
          </LayoutFlow>
        )}
      </div>
    </LayoutFlow>
  );
};

const BEDRAG_PER_KAST = 400;
const MAX_KASTEN = 10;
const TOESLAG_PLAT_DAK = 250;
const TOESLAG_BEPLANTING = 150;

const formatEuro = (amount: number): string =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);

const DAK_STEP: IChoiceStep = {
  id: 'daktype',
  question: 'Welk type dak heeft het gebouw?',
  options: [
    { label: 'Plat dak', value: 'plat' },
    { label: 'Schuin dak', value: 'schuin' },
  ],
};

const BEPLANTING_STEP: IChoiceStep = {
  id: 'beplanting',
  question: 'Plaatst u ook bijenvriendelijke beplanting op het dak?',
  options: [
    { label: 'Ja', value: 'ja' },
    { label: 'Nee', value: 'nee' },
  ],
};

export const Rekentool = (): ReactElement => {
  const [aantal, setAantal] = useState('');
  const [dak, setDak] = useState<string | undefined>();
  const [beplanting, setBeplanting] = useState<string | undefined>();
  const [showError, setShowError] = useState(false);
  const [done, setDone] = useState(false);

  const aantalNumber = Number(aantal);
  const aantalError = !aantal.trim()
    ? 'Vul het aantal bijenkasten in.'
    : !Number.isInteger(aantalNumber) || aantalNumber < 1
      ? 'Vul een geheel getal van 1 of hoger in.'
      : undefined;

  const reset = (): void => {
    setAantal('');
    setDak(undefined);
    setBeplanting(undefined);
    setShowError(false);
    setDone(false);
  };

  const calculate = (): void => {
    if (aantalError || !dak || !beplanting) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setDone(true);
  };

  if (done) {
    const kasten = Math.min(aantalNumber, MAX_KASTEN);
    const kastenBedrag = kasten * BEDRAG_PER_KAST;
    const dakBedrag = dak === 'plat' ? TOESLAG_PLAT_DAK : 0;
    const beplantingBedrag = beplanting === 'ja' ? TOESLAG_BEPLANTING : 0;
    const total = kastenBedrag + dakBedrag + beplantingBedrag;

    return (
      <div role="status">
        <LayoutFlow gap="md">
          <Alert kind="success" padding="md" heading={`Uw voordeel is maximaal ${formatEuro(total)}`}>
            Dit is een indicatie. Het definitieve bedrag hoort bij uw aanvraag.
          </Alert>
          {aantalNumber > MAX_KASTEN && (
            <Alert kind="info" padding="md">
              U krijgt subsidie voor maximaal {MAX_KASTEN} bijenkasten.
            </Alert>
          )}
          <DataList>
            <DataList.Item
              label={`${kasten} ${kasten === 1 ? 'bijenkast' : 'bijenkasten'} van ${formatEuro(BEDRAG_PER_KAST)}`}
              value={formatEuro(kastenBedrag)}
            />
            <DataList.Item label="Toeslag plat dak" value={formatEuro(dakBedrag)} />
            <DataList.Item label="Toeslag bijenvriendelijke beplanting" value={formatEuro(beplantingBedrag)} />
            <DataList.Item label="Totaal" value={formatEuro(total)} />
          </DataList>
          <ActionGroup>
            <Link callToAction={true} href={URL_VOORBEREIDING}>
              Direct aanvragen
            </Link>
            <Button kind="secondary" size="md" onClick={reset}>
              Opnieuw berekenen
            </Button>
          </ActionGroup>
        </LayoutFlow>
      </div>
    );
  }

  return (
    <form
      noValidate={true}
      onSubmit={(event) => {
        event.preventDefault();
        calculate();
      }}
    >
      <LayoutFlow gap="lg">
        <FormField
          id="aantal-kasten"
          label="Hoeveel bijenkasten wilt u plaatsen?"
          labelSize="md"
          helperText={`U krijgt subsidie voor maximaal ${MAX_KASTEN} bijenkasten.`}
          errorText={showError ? aantalError : undefined}
        >
          <FormField.Text
            sizeInput="xs"
            inputMode="numeric"
            value={aantal}
            invalid={showError && !!aantalError}
            onChange={(event) => setAantal(event.target.value)}
          />
        </FormField>
        <ChoiceField step={DAK_STEP} value={dak} error={showError && !dak} onChange={setDak} />
        <ChoiceField
          step={BEPLANTING_STEP}
          value={beplanting}
          error={showError && !beplanting}
          onChange={setBeplanting}
        />
        <ActionGroup>
          <Button kind="primary" size="md" type="submit">
            Berekenen
          </Button>
        </ActionGroup>
      </LayoutFlow>
    </form>
  );
};
