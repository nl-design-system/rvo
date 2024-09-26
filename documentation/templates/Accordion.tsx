import { Header, Heading, LayoutFlow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import { defaultMenuBarItems } from '../demopages/common/defaultMenuBarItems';
import '../common/style.scss';

const Accordion = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <div className="rvo-header-content">
        <Header />
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="sm" />
        <MaxWidthLayout size="sm">
          <main className="rvo-main">
            <LayoutFlow size="sm">
              <Heading type="h1" textContent="Telefonisch contact" />

              <p>
                Heeft u vragen? Neem gerust telefonisch contact met ons op. U bereikt ons op werkdagen van 08:30 tot
                17:00 uur. Tussen 8:30 en 12:00 uur en tussen 14:00 en 17:00 uur zijn de wachttijden het kortst.
              </p>

              <Heading type="h2" textContent="Keuzemenu's"></Heading>

              <LayoutFlow size="xl">
                <div className="rvo-accordion rvo-accordion--colored rvo-accordion--border-indicator">
                  <details className="rvo-accordion__item">
                    <summary className="rvo-accordion__item-summary">
                      <h3 className="rvo-link">
                        <span className="rvo-accordion__item-title">
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                          Keuzemenu 088 042 42 42
                        </span>
                      </h3>
                      <span className="rvo-accordion-teaser">Voor bedrijven, instellingen en overheden</span>
                    </summary>
                    <div className="rvo-accordion__content">
                      <p>
                        Belt u namens een bedrijf, instelling of overheidsorganisatie? Via het keuzemenu krijgt u de
                        juiste medewerker aan de lijn om u verder te helpen.
                      </p>

                      <Heading type="h4" textContent="For English, press 8"></Heading>
                      <br />

                      <Heading
                        type="h4"
                        textContent="Keuze 0: voor BGT-check, sancties Rusland, de simulatietool van het nieuwe
                      GLB en de SVV"
                      ></Heading>
                      <p>
                        0 - 1: vragen over BGT check
                        <br />
                        0 - 2: vragen over sancties Rusland <br />0 - 3: vragen over de simulatietool ECO-regeling
                        nieuwe Gemeenschappelijk Landbouwbeleid (GLB) <br />0 - 4: vragen over de Subsidie Saneren van
                        Vissersvaartuigen (SVV)
                      </p>
                      <Heading
                        type="h4"
                        textContent="Keuze 1: dieren, spuitlicenties, landbouw, natuur en
                      visserij"
                      ></Heading>
                      <p>
                        1 - 1: openbaarmaking van fosfaatrechten, vervoer en uitrijden van mest, productierechten,
                        gebruiksnormen en andere mestregelingen <br />
                        1 - 2: dierregistratie, dierenwelzijn en andere dierregelingen
                        <br />
                        1 - 2 - 1: handel in bedreigde planten en diersoorten (CITES)
                        <br />
                        1 - 2 - 2: dierregistratie, dierenwelzijn en andere dierregelingen <br />
                        1 - 3: spuitlicenties, betalingsrechten, GLB en grondregistratie <br />1 - 4: alle andere
                        onderwerpen voor landbouw, natuur en visserij Keuze
                      </p>
                    </div>
                  </details>
                  <details className="rvo-accordion__item rvo-login-option login-option--digid">
                    <summary className="rvo-accordion__item-summary">
                      <h3 className="rvo-link">
                        <span className="rvo-accordion__item-title">
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                          Keuzemenu 088 042 47 47
                        </span>
                      </h3>
                      <span className="rvo-accordion-teaser">Voor particulieren, woningeigenaren</span>
                    </summary>
                    <div className="rvo-accordion__content">
                      <p>
                        Bent u particulier? Via het keuzemenu krijgt u de juiste medewerker aan de telefoon om u verder
                        te helpen.
                      </p>

                      <Heading
                        type="h4"
                        textContent="Keuze 1: subsidies en andere regelgeving op het gebied van duurzaamheid, energie, of wonen"
                      ></Heading>
                      <p>
                        1 - 1: Energielabel voor woningeigenaren <br />1 - 2: ISDE, Isolatie, Warmtepompen, Zonneboilers
                        en aansluiting op warmtenet <br />1 - 3: elektrisch Rijden <br />1 - 4: SVOH
                      </p>
                    </div>
                  </details>
                  <details className="rvo-accordion__item rvo-login-option login-option--digid">
                    <summary className="rvo-accordion__item-summary">
                      <h3 className="rvo-link">
                        <span className="rvo-accordion__item-title">
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                          Keuzemenu 088 042 25 00
                        </span>
                      </h3>
                      <span className="rvo-accordion-teaser">COVID-19</span>
                    </summary>
                    <div className="rvo-accordion__content">
                      <p>
                        Belt u over de TVL of een andere COVID-19-regeling? Via het keuzemenu krijgt u de juiste
                        medewerker aan de telefoon om u verder te helpen.
                      </p>

                      <Heading type="h4" textContent="Keuze 1: Tegemoetkoming Vaste Lasten (TVL)"></Heading>
                      <br />
                      <Heading type="h4" textContent="Keuze 2: Subsidieregeling Evenementen (ATE)"></Heading>
                      <br />
                      <Heading type="h4" textContent="Keuze 3: Ongedekte Vaste Kosten (OVK)"></Heading>
                      <br />
                      <Heading
                        type="h4"
                        textContent="Keuze 4: Tijdelijke Subsidieregeling Vuurwerkverbod COVID-19 (TSVC-19)"
                      ></Heading>
                    </div>
                  </details>
                  <details className="rvo-accordion__item rvo-login-option login-option--digid">
                    <summary className="rvo-accordion__item-summary">
                      <h3 className="rvo-link">
                        <span className="rvo-accordion__item-title">
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                          <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                          Keuzemenu 088 042 4070
                        </span>
                      </h3>
                      <span className="rvo-accordion-teaser">Waterschade (WTS)</span>
                    </summary>
                    <div className="rvo-accordion__content">
                      <p>
                        Belt u over de WTS? Via het keuzemenu krijgt u de juiste medewerker aan de telefoon om u verder
                        te helpen.
                      </p>

                      <Heading
                        type="h4"
                        textContent="Keuze 1: WTS juli 2021 en tegemoetkoming omzetschade Limburg en Noord-Brabant"
                      ></Heading>
                      <br />
                      <Heading
                        type="h4"
                        textContent="Keuze 2: Tegemoetkoming teeltplanschade Uiterwaarden juli 2021"
                      ></Heading>
                    </div>
                  </details>
                </div>
                <Heading type="h2" textContent="Met u meekijken"></Heading>
              </LayoutFlow>
              <p>
                Met u meekijken Als het nodig is, kan onze medewerker met u meekijken op uw scherm. Dit gaat in overleg
                met u. Wij zien alleen het scherm dat u ook ziet. Wij nemen niet uw computer over.
              </p>
            </LayoutFlow>
          </main>
        </MaxWidthLayout>
      </div>
    </div>
  );
};

export default Accordion;
