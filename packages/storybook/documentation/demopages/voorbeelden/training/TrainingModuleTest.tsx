import {
  Alert,
  Button,
  Footer,
  FormField,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
} from '@nl-rvo/component-library-react';
import { useState } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import TrainingNavigation from './TrainingNavigation';

type Answer = 'juist' | 'onjuist';

interface IQuestion {
  statement: string;
  correctAnswer: Answer;
  explanation: string;
}

const questions: IQuestion[] = [
  {
    statement: 'Het proces van gepaste zorgvuldigheid is een continu proces.',
    correctAnswer: 'juist',
    explanation:
      'Gepaste zorgvuldigheid is een continu proces waarbij je steeds de 6 stappen doorloopt voor de producten die je inkoopt.',
  },
  {
    statement: 'Gepaste zorgvuldigheid is alleen voor grotere bedrijven.',
    correctAnswer: 'onjuist',
    explanation:
      'Wetgeving zal ‘gepaste zorgvuldigheid’ verplicht maken voor de grootste bedrijven maar ook voor het MKB is het belangrijk. Grote bedrijven in de keten zullen namelijk meer vragen stellen aan MKB’ers die hen toeleveren. Daarnaast verwachten belanghebbenden (‘stakeholders’) steeds meer dat bedrijven duurzaamheidsrisico’s in hun keten kennen en aanpakken.',
  },
  {
    statement: 'Het is belangrijk om het beleid ook extern te delen.',
    correctAnswer: 'juist',
    explanation:
      'Het delen van het beleid extern zorgt voor transparantie en kan bijdragen aan het vertrouwen van belanghebbenden.',
  },
  {
    statement:
      'Als ik aan de slag ga met het proces van gepaste zorgvuldigheid moet ik al mijn ketens in beeld brengen.',
    correctAnswer: 'juist',
    explanation:
      "Het is belangrijk om een goed overzicht te hebben van alle ketens om risico's effectief te kunnen beheren.",
  },
  {
    statement: 'Als bedrijf heb je alleen verantwoordelijkheid voor de praktijken van je eigen bedrijf.',
    correctAnswer: 'onjuist',
    explanation: 'Als bedrijf heb je ook verantwoordelijkheid voor de praktijken in je toeleveringsketen.',
  },
];

const answerOptions: Answer[] = ['juist', 'onjuist'];

const TrainingModuleTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selection, setSelection] = useState<Answer | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showError, setShowError] = useState(false);
  const [score, setScore] = useState(0);

  const isFinished = currentQuestion >= questions.length;
  const question = questions[currentQuestion];
  const isChecked = isCorrect !== null;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleCheck = () => {
    if (!selection) {
      setShowError(true);
      return;
    }
    const answeredCorrectly = selection === question.correctAnswer;
    setIsCorrect(answeredCorrectly);
    if (answeredCorrectly) setScore((previous) => previous + 1);
  };

  const handleNext = () => {
    setCurrentQuestion((previous) => previous + 1);
    setSelection(null);
    setIsCorrect(null);
    setShowError(false);
  };

  return (
    <body className="rvo-theme">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { align: 'right', label: 'Mijn RVO', link: '#', icon: 'user' },
            { align: 'right', label: 'English', icon: 'wereldbol', link: '#' },
            { align: 'right', label: 'Zoeken', icon: 'zoek', link: '#' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="left"
          maxWidth="lg"
          horizontalRule={true}
        />
      </div>

      <main className="rvo-padding-block-end--3xl rvo-padding-block-start--2xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-margin-block-end--md rvo-max-width-layout rvo-max-width-layout--sm ">
          <ol className="rvo-breadcrumbs rvo-breadcrumbs--md">
            <li className="rvo-breadcrumbs-item">
              <a className="rvo-link rvo-link--no-underline" href="#">
                Home
              </a>
            </li>
            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <a
                className="rvo-link rvo-link--no-underline"
                href="iframe.html?args=&id=pagina-s-voorbeelden-training-training--default&viewMode=story"
              >
                IMVO Trainingmodules
              </a>
            </li>
            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <a
                className="rvo-link rvo-link--no-underline"
                href="iframe.html?args=&id=pagina-s-voorbeelden-training-training-module--default&viewMode=story"
              >
                Module 1
              </a>
            </li>
            <li className="rvo-breadcrumbs-item">
              <span
                className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                role="img"
                aria-label="Delta naar rechts"
              ></span>
              <span className="rvo-breadcrumb-current-page">Test je kennis</span>
            </li>
          </ol>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h1" noMargins={true}>
            Test je kennis
          </Heading>
          <p className="rvo-paragraph rvo-paragraph--lg">
            <em>
              Onderdeel <strong>5</strong> van module <strong>1</strong>
            </em>
          </p>
        </div>
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--md rvo-margin-block-start--xl">
          <img
            src="https://www.imvotraining.nl/imvo-duediligence/imvo/module_1_3/13464/iStock_694050758.1600_0_1.jpg"
            alt=""
            className="rvo-image rvo-image--radius-all rvo-image--radius-size-md"
          />
        </div>
        <div className="rvo-max-width-layout rvo-max-width-layout--sm rvo-margin-block-start--xl">
          {isFinished ? (
            <LayoutFlow gap="md">
              <Heading type="h2" noMargins>
                Resultaat
              </Heading>
              <p className="rvo-paragraph rvo-paragraph--lg rvo-paragraph--no-margins">
                Je hebt <strong>{score}</strong> van de <strong>{questions.length}</strong> vragen goed beantwoord.
              </p>
            </LayoutFlow>
          ) : (
            <LayoutFlow gap="md">
              <p className="rvo-paragraph rvo-paragraph--lg rvo-paragraph--no-margins">
                Vraag <strong>{currentQuestion + 1}</strong> van <strong>{questions.length}</strong>
              </p>
              <FormField
                id={`vraag-${currentQuestion + 1}`}
                label={question.statement}
                errorText={showError ? 'Kies juist of onjuist om verder te gaan.' : undefined}
                key={currentQuestion}
              >
                <FormField.RadioButtonGroup
                  name={`vraag-${currentQuestion + 1}`}
                  invalid={showError}
                  options={answerOptions.map((answer) => ({
                    id: `vraag-${currentQuestion + 1}-${answer}`,
                    label: answer === 'juist' ? 'Juist' : 'Onjuist',
                  }))}
                  onChange={(index) => {
                    setSelection(answerOptions[index] ?? null);
                    setShowError(false);
                  }}
                />
              </FormField>
              {isChecked && (
                <Alert
                  kind={isCorrect ? 'success' : 'error'}
                  heading={isCorrect ? 'Goed beantwoord' : 'Niet goed beantwoord'}
                >
                  De stelling is <strong>{question.correctAnswer}</strong>. {question.explanation}
                </Alert>
              )}
              <div>
                {isChecked ? (
                  <Button kind="primary" icon="pijl-naar-rechts" iconPlacement="right" onClick={handleNext}>
                    {isLastQuestion ? 'Bekijk resultaat' : 'Volgende vraag'}
                  </Button>
                ) : (
                  <Button kind="primary" onClick={handleCheck}>
                    Controleer antwoord
                  </Button>
                )}
              </div>
            </LayoutFlow>
          )}
        </div>
        <TrainingNavigation
          previous={{ label: 'IMVO voor verschillende functies in het bedrijf', href: '#' }}
          next={{ label: 'Module 2', href: '#' }}
        />
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default TrainingModuleTest;
