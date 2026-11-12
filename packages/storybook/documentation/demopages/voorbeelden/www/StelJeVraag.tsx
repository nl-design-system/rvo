import {
  ActionGroup,
  Button,
  Card,
  Dialog,
  Footer,
  FormField,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

type Sender = 'gebruiker' | 'assistent';

interface IAnswerLink {
  label: string;
  href: string;
}

interface IAnswer {
  text: string;
  links?: IAnswerLink[];
}

interface IMessage extends IAnswer {
  id: number;
  sender: Sender;
  feedback?: 'nuttig' | 'niet-nuttig';
}

const greeting = 'Hallo, ik ben de digitale assistent van RVO. Waarmee kan ik u helpen?';

const topicAnswers: ({ keywords: string[] } & IAnswer)[] = [
  {
    keywords: ['verduurza', 'duurzaam', 'energie', 'subsidie'],
    text: 'Er zijn verschillende regelingen om uw bedrijf te verduurzamen. Denk aan de Energie-investeringsaftrek (EIA) voor energiebesparende investeringen, de Milieu-investeringsaftrek (MIA) en de Willekeurige afschrijving milieu-investeringen (Vamil) voor milieuvriendelijke investeringen, en de ISDE voor bijvoorbeeld warmtepompen en zonneboilers.\n\nMet de Subsidie- en financieringswijzer vindt u welke regeling bij uw situatie past.',
    links: [
      { label: 'Subsidie- en financieringswijzer', href: '#' },
      { label: 'Energie-investeringsaftrek (EIA)', href: '#' },
      { label: 'MIA en Vamil', href: '#' },
      { label: 'Investeringssubsidie duurzame energie en energiebesparing (ISDE)', href: '#' },
    ],
  },
  {
    keywords: ['eherkenning', 'inloggen'],
    text: 'Voor de meeste diensten van RVO logt u in met eHerkenning. U vraagt eHerkenning aan bij een erkende leverancier. Let op het betrouwbaarheidsniveau: voor veel RVO-diensten heeft u minimaal niveau eH3 nodig.\n\nHet aanvragen duurt meestal een paar werkdagen, dus regel het op tijd.',
    links: [
      { label: 'Inloggen bij RVO met eHerkenning', href: '#' },
      { label: 'Welk betrouwbaarheidsniveau heeft u nodig?', href: '#' },
    ],
  },
  {
    keywords: ['gecombineerde opgave', 'percelen', 'gewassen'],
    text: 'U kunt de Gecombineerde opgave elk jaar indienen van 1 februari tot en met 15 mei. Daarin geeft u onder andere uw percelen, gewassen en dieren door. Na 15 mei kunt u nog tot en met 31 mei indienen, maar dan krijgt u een korting op uw betalingen.',
    links: [
      { label: 'Gecombineerde opgave', href: '#' },
      { label: 'Percelen registreren', href: '#' },
      { label: 'Belangrijke data voor landbouwers', href: '#' },
    ],
  },
  {
    keywords: ['wbso', 'innovatie', 'speur- en ontwikkeling'],
    text: 'Met de WBSO krijgt u een tegemoetkoming in de loonkosten en andere kosten voor research en development (speur- en ontwikkelingswerk). U vraagt WBSO aan via Mijn RVO, vóór de periode waarin u het werk uitvoert. U kunt maximaal 4 keer per jaar een aanvraag doen, voor een periode van 3 tot 12 maanden.',
    links: [
      { label: 'WBSO aanvragen', href: '#' },
      { label: 'Voorwaarden WBSO', href: '#' },
      { label: 'Mijn RVO', href: '#' },
    ],
  },
  {
    keywords: ['export', 'buitenland', 'buiten de eu'],
    text: 'Bij export buiten de EU heeft u vaak te maken met douaneformaliteiten en soms met certificaten, bijvoorbeeld voor landbouwproducten of dual-use goederen. RVO helpt met informatie over landen en markten, en met financiering en verzekeringen voor internationaal ondernemen. Wilt u weten welke landen en producten het gaat om? Dan kan ik u verder op weg helpen.',
    links: [
      { label: 'Internationaal ondernemen', href: '#' },
      { label: 'Landenoverzicht', href: '#' },
      { label: 'Financiering voor export', href: '#' },
    ],
  },
];

const followUpAnswers: IAnswer[] = [
  {
    text: 'Goede vraag. Op rvo.nl vindt u per onderwerp de voorwaarden, termijnen en hoe u aanvraagt. Kunt u iets meer vertellen over uw situatie, bijvoorbeeld in welke sector u werkt? Dan kan ik u gerichter helpen.',
    links: [
      { label: 'Onderwerpen op rvo.nl', href: '#' },
      { label: 'Subsidie- en financieringswijzer', href: '#' },
    ],
  },
  {
    text: 'Daar kan ik u mee helpen. Of u in aanmerking komt, hangt meestal af van de grootte van uw bedrijf en het soort project. Wilt u weten welke regelingen daarbij passen?',
    links: [{ label: 'Subsidie- en financieringswijzer', href: '#' }],
  },
  {
    text: 'Dank u voor uw vraag. Veel aanvragen doet u via Mijn RVO, waar u inlogt met eHerkenning of DigiD. Heeft u nog een andere vraag, of wilt u dat ik dit verder uitleg?',
    links: [
      { label: 'Mijn RVO', href: '#' },
      { label: 'Inloggen bij RVO', href: '#' },
    ],
  },
  {
    text: 'Ik begrijp uw vraag. Komt u er niet uit? Dan kunt u ook contact opnemen met RVO via telefoon of het contactformulier. Waar kan ik u verder nog mee helpen?',
    links: [{ label: 'Contact met RVO', href: '#' }],
  },
];

const emptyQuestionAnswer = 'Ik heb geen vraag ontvangen. Waarmee kan ik u helpen?';

// Splits a message on blank lines; only paragraphs followed by another paragraph get a bottom margin
const MessageText = ({ text }: { text: string }) => {
  const paragraphs = text.split('\n\n');
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`rvo-paragraph rvo-paragraph--lg rvo-margin-block-start--none ${
            index < paragraphs.length - 1 ? 'rvo-margin-block-end--md' : 'rvo-margin-block-end--none'
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const StelJeVraag = () => {
  const [messages, setMessages] = useState<IMessage[]>([{ id: 0, sender: 'assistent', text: greeting }]);
  const [question, setQuestion] = useState('');
  const [inputKey, setInputKey] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const nextId = useRef(1);
  const followUpIndex = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isTyping]);

  const addMessage = (sender: Sender, answer: IAnswer) => {
    setMessages((previous) => [...previous, { id: nextId.current++, sender, ...answer }]);
  };

  const getAnswer = (text: string): IAnswer => {
    const lowerCaseText = text.toLowerCase();
    const topic = topicAnswers.find((item) => item.keywords.some((keyword) => lowerCaseText.includes(keyword)));
    if (topic) return topic;
    const answer = followUpAnswers[followUpIndex.current % followUpAnswers.length];
    followUpIndex.current++;
    return answer;
  };

  const ask = (text: string) => {
    const trimmed = text.trim();
    if (trimmed) addMessage('gebruiker', { text: trimmed });
    setQuestion('');
    // The Textarea component does not support a controlled value, so it is remounted to clear it
    setInputKey((previous) => previous + 1);
    setIsTyping(true);
    window.setTimeout(() => {
      setIsTyping(false);
      addMessage('assistent', trimmed ? getAnswer(trimmed) : { text: emptyQuestionAnswer });
    }, 800);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(question);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      ask(question);
    }
  };

  const handleFeedback = (id: number, feedback: IMessage['feedback']) => {
    setMessages((previous) => previous.map((message) => (message.id === id ? { ...message, feedback } : message)));
  };

  const handleNewConversation = () => {
    setIsDialogOpen(false);
    setMessages([{ id: nextId.current++, sender: 'assistent', text: greeting }]);
    setQuestion('');
    setInputKey((previous) => previous + 1);
    setIsTyping(false);
    followUpIndex.current = 0;
  };

  const hasConversation = messages.some((message) => message.sender === 'gebruiker');

  return (
    <body className="rvo-theme">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidies en financiering', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { align: 'right', label: 'Stel uw vraag', icon: 'ster', link: '#' },
            { align: 'right', label: 'Mijn RVO', link: '#', icon: 'user' },
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
        <div className="rvo-max-width-layout rvo-max-width-layout--sm">
          <LayoutFlow gap="xl">
            <div>
              <Heading type="h1" noMargins={true}>
                Stel uw vraag
              </Heading>
              <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg">
                Heeft u een vraag over subsidies, regelingen of ondernemen? Onze digitale assistent helpt u op weg. De
                antwoorden worden gemaakt met AI en kunnen fouten bevatten. Deel geen persoonsgegevens.
              </p>
            </div>

            <LayoutFlow gap="md">
              <section aria-label="Gesprek met de digitale assistent">
                <div aria-live="polite">
                  <LayoutFlow gap="md">
                    {messages.map((message) =>
                      message.sender === 'assistent' ? (
                        <Card key={message.id} background="color" backgroundColor="grijs-100" padding="md">
                          <LayoutFlow gap="sm">
                            <span className="rvo-text--bold">
                              <Icon icon="ster" size="sm" color="hemelblauw" /> Digitale assistent
                            </span>
                            <MessageText text={message.text} />
                            {message.links && (
                              <LayoutFlow gap="2xs">
                                <span className="rvo-text--bold">Meer informatie</span>
                                {message.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    color="donkerblauw"
                                    icon="pijl-naar-rechts"
                                    iconPlacement="left"
                                    iconColor="donkerblauw"
                                    iconSize="sm"
                                    noUnderline={true}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </LayoutFlow>
                            )}
                            {message.id !== 0 && message.text !== greeting && (
                              <LayoutFlow gap="xs">
                                {message.feedback ? (
                                  <span className="rvo-text--grijs-600">Bedankt voor uw feedback.</span>
                                ) : (
                                  <>
                                    <span className="rvo-text--grijs-600">Was dit antwoord nuttig?</span>
                                    <LayoutFlow row={true} wrap={true} gap="sm">
                                      <Button
                                        kind="subtle"
                                        size="sm"
                                        icon="duim-omhoog"
                                        iconPlacement="left"
                                        onClick={() => handleFeedback(message.id, 'nuttig')}
                                      >
                                        Ja
                                      </Button>
                                      <Button
                                        kind="subtle"
                                        size="sm"
                                        icon="duim-omlaag"
                                        iconPlacement="left"
                                        onClick={() => handleFeedback(message.id, 'niet-nuttig')}
                                      >
                                        Nee
                                      </Button>
                                    </LayoutFlow>
                                  </>
                                )}
                              </LayoutFlow>
                            )}
                          </LayoutFlow>
                        </Card>
                      ) : (
                        <Card key={message.id} background="color" backgroundColor="lichtblauw-150" padding="md">
                          <LayoutFlow gap="sm">
                            <span className="rvo-text--bold">U</span>
                            <MessageText text={message.text} />
                          </LayoutFlow>
                        </Card>
                      ),
                    )}
                    {isTyping && <p className="rvo-paragraph rvo-text--subtle rvo-text--italic">De assistent typt…</p>}
                  </LayoutFlow>
                  <div ref={messagesEndRef} />
                </div>
              </section>

              <form onSubmit={handleSubmit}>
                <LayoutFlow gap="md">
                  <FormField id="vraag" label="Uw vraag">
                    <FormField.TextArea
                      key={inputKey}
                      rows={3}
                      maxLengthIndicator={false}
                      onChange={(event) => setQuestion(event.currentTarget.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </FormField>
                  <div className="rvo-action-group">
                    <Button kind="primary" type="submit">
                      Verstuur
                    </Button>
                    {hasConversation && (
                      <Button kind="warning-subtle" type="button" onClick={() => setIsDialogOpen(true)}>
                        Nieuw gesprek
                      </Button>
                    )}
                  </div>
                </LayoutFlow>
              </form>
            </LayoutFlow>
          </LayoutFlow>
        </div>
        <Dialog
          isOpen={isDialogOpen}
          isModal={true}
          type="centered-dialog"
          centeredDialogSize="md"
          backgroundColor="wit"
          ariaLabel="Nieuw gesprek starten?"
          onClose={() => setIsDialogOpen(false)}
          actionGroup={
            <ActionGroup>
              <Button kind="primary" onClick={handleNewConversation}>
                Nieuw gesprek starten
              </Button>
              <Button kind="warning-subtle" onClick={() => setIsDialogOpen(false)}>
                Terug naar gesprek
              </Button>
            </ActionGroup>
          }
        >
          <Heading type="h2">Nieuw gesprek starten?</Heading>
          <p>
            Als u een nieuw gesprek start, wordt het huidige gesprek gewist. U kunt de vragen en antwoorden daarna niet
            meer terugzien.
          </p>
        </Dialog>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default StelJeVraag;
