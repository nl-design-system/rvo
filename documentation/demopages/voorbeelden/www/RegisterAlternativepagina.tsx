import { Footer, Header, Heading, LayoutFlow, Link, MenuBar, MobileMenuBar } from '@nl-rvo/components';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const RegisterAlternativepagina = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1020);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <body className="rvo-theme">
      <Header />
      <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        {isDesktop ? (
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
            iconPlacement="before"
            maxWidth="lg"
          />
        ) : (
          <MobileMenuBar />
        )}
      </div>

      <main className="rvo-padding-block-end--3xl rvo-padding-block-start--2xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-custom-intro rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h1">(Alpen)steenbok</Heading>

          <p>
            <em>De inhoud van deze pagina is gecontroleerd op 22 januari 2025</em>
          </p>
          <dl className="rvo-data-list">
            <dt>Orde</dt>
            <dd>Artiodactyla</dd>
            <dt>Familie</dt>
            <dd>Bovidae</dd>
            <dt>Risicoklasse</dt>
            <dd>F</dd>
            <dt>Gedomesticeerd</dt>
            <dd>Nee</dd>
          </dl>
          <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--lg">
            Dit dier staat niet op de huis- en hobbydierenlijst. Hieronder leest u de beoordeling over dit dier.
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm ">
          <Heading type="h2">Op deze pagina:</Heading>

          <div>
            <LayoutFlow gap="2xs">
              <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Algemene informatie
              </Link>
              <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Risicoklasse F
              </Link>
              <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Samenvatting beoordeling van de steenbok
              </Link>
              <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Beoordeling per risicofactor
              </Link>
              <Link icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Verwijzingen
              </Link>
            </LayoutFlow>

            <div></div>
          </div>
          <div className="rvo-margin-block-start--2xl">
            <Heading type="h2">Algemene informatie</Heading>
            <dl className="rvo-data-list">
              <dt>Familie</dt>
              <dd>Bovidae</dd>
              <dt>Subfamilie</dt>
              <dd>Antilopinae</dd>
              <dt>Genus</dt>
              <dd>Capra</dd>
              <dt>Soort</dt>
              <dd>Capra ibex</dd>
              <dt>Gedomesticeerd</dt>
              <dd>Nee</dd>
              <dt>Kruising</dt>
              <dd>Nee</dd>
              <dt>Volwassen grootte</dt>
              <dd>Kop-romp: 115-135 cm (m), 55-100 cm (v) Staart: 21-29 cm (m), 15-23 cm (v) Schofthoogte: 65-95 cm</dd>
              <dt>Gewicht</dt>
              <dd>70-120 kg (m), 40-50 kg (v)</dd>
              <dt>Dieet</dt>
              <dd>Herbivoor</dd>
              <dt>Natuurlijke leefomgeving</dt>
              <dd>
                Verspreiding: Zwitserland, Zuid-Duitsland, Liechtenstein, Oostenrijk, Noord-Italië en
                Zuidoost-Frankrijk. Geïntroduceerd in Slovenië en Bulgarije.
                <br />
                <br />
                Habitat: (Sub)alpine habitat met alpenweiden, open bossen, rotsachtig terrein en kliffen, op een hoogte
                van 1600-3200 m.
              </dd>
              <dt>Levensverwachting</dt>
              <dd>22 jaar (m), 19 jaar (v)</dd>
              <dt>IUCN-status</dt>
              <dd>Least Concern</dd>
              <dt>CITES</dt>
              <dd>Niet vermeld</dd>
            </dl>
          </div>
          <div className="rvo-margin-block-start--2xl">
            <Heading type="h3" noMargins={true}>
              Risicoklasse F
            </Heading>
            <p className="rvo-paragraph rvo-margin-block-start--2xs">
              Steenbokken zijn in staat ernstige letselschade te veroorzaken bij de mens. Daarnaast zijn in vier
              risicocategorieën voor "gezondheid en welzijn dier" één of meerdere risicofactor(en) vastgesteld. Om deze
              redenen valt de steenbok onder risicoklasse F.
            </p>
            <Heading type="h3" noMargins={true}>
              Samenvatting beoordeling van de steenbok
            </Heading>
            <p className="rvo-paragraph rvo-margin-block-start--2xs">
              Indien er sprake is van één of meerdere relevante ernstige zoönose(n) die slechts met gespecialiseerde
              maatregelen beheersbaar is/zijn wordt de risicofactor aangekruist (X). Indien er sprake is van een
              relevante ernstige zoönose die niet of nauwelijks beheersbaar is of er sprake is van risico op ernstige
              letselschade komt de diersoort direct onder risicoklasse F te vallen (XF). Indien de risicofactor van
              toepassing is, wordt deze aangekruist (X).
            </p>
          </div>
        </div>

        <div className="rvo-max-width-layout rvo-max-width-layout--sm rvo-margin-block-end--2xl">
          <Heading type="h2">Gezondheid mens</Heading>
          <Heading type="h3" noMargins={true}>
            Risicocategorie Zoönosen
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Bij de steenbok zijn de hoog-risico zoönotische pathogenen Brucella melitensis, Coxiella burnetii en
            Chlamydia abortus aangetoond.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
              <strong>Dit leidt tot een signalerende toepassing van deze risicofactor.</strong>
            </LayoutFlow>
            <strong></strong>
          </p>
          <Heading type="h3" noMargins={true}>
            Risicocategorie Letselschade
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Bij steenbokken is er gevaar op zeer ernstig letsel bij de mens.
            <LayoutFlow gap="xs" row={true} alignItems="start">
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Waardoor de steenbok direct onder risicoklasse F valt.</strong>
            </LayoutFlow>
            <strong></strong>
          </p>
        </div>

        <div className="rvo-max-width-layout rvo-max-width-layout--sm rvo-margin-block-end--2xl">
          <Heading type="h2">Gezondheid en welzijn dier</Heading>
          <Heading type="h3" noMargins={true}>
            Risicocategorie Voedselopname
          </Heading>

          <ul className="rvo-ul rvo-margin-block-start--2xs rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
            <li>De steenbok heeft hypsodonte gebitselementen.</li>
            <li>Steenbokken moeten dagelijks frequent foerageren.</li>
          </ul>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h3" noMargins={true}>
            Risicocategorie Ruimtegebruik/veiligheid
          </Heading>

          <ul className="rvo-ul rvo-margin-block-start--2xs rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
            <li>Steenbokken gebruiken een beschutte verstopplaats.</li>
            <li>Steenbokken gebruiken hoogte-elementen.</li>
          </ul>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h3" noMargins={true}>
            Risicocategorie Thermoregulatie
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De steenbok is aangepast aan een hooggebergteklimaat.
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
            <strong></strong>
          </p>
          <Heading type="h3" noMargins={true}>
            Risicocategorie Sociaal gedrag
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken hebben een despotische en lineaire dominantiehiërarchie.
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
            <strong></strong>
          </p>
        </div>

        <div className="rvo-margin-block-start--2xl rvo-max-width-layout rvo-max-width-layout--sm">
          <Heading type="h2">Beoordeling per risicofactor</Heading>

          <Heading type="h3" noMargins={true}>
            Risico's voor de mens
          </Heading>
          <Heading type="h4" noMargins={true}>
            Risicocategorie Zoönosen (LG1)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Bij de steenbok zijn de hoog-risico zoönotische pathogenen Brucella melitensis (Lambert et al., 2020),
            Coxiella burnetii (Baradel et al., 1988; Marreros et al., 2011) en Chlamydia abortus (Marreros et al., 2011)
            aangetoond.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--oranje"></div>
              <strong>Dit leidt tot een signalerende toepassing van deze risicofactor.</strong>
            </LayoutFlow>
          </p>
          <Heading type="h4" noMargins={true}>
            Risicocategorie Letselschade (LG2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De steenbok weegt 70-120 kg (m) of 40-50 kg (v) en beide geslachten beschikken over naar-achter-gekrulde
            hoorns van 75-102 cm (m) of c.35 cm (v). De hoorns van de mannetjes worden als wapens gebruikt bij
            onderlinge gevechten. Ze worden gebruikt om zware klappen mee uit te delen, waarbij middels het
            lichaamsgewicht de kracht achter de aanval wordt vergroot (Groves et al., 2011; Tettamanti & Viblanc, 2014).
            Steenbokken zijn wilde dieren en het hanteren van Steenbokken vereist ervaring en deskundigheid van de
            houder (Weber, 2015).
            <br />
            <LayoutFlow gap="xs" row={true} alignItems="start">
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>
                Gezien de grootte, morfologie en het gedrag van steenbokken, kunnen ze zeer ernstig letsel bij de mens
                veroorzaken, waardoor de steenbok direct onder risicoklasse F valt.
              </strong>
            </LayoutFlow>
          </p>

          <Heading type="h3" noMargins={true}>
            Risico's voor dierenwelzijn/diergezondheid
          </Heading>
          <Heading type="h4" noMargins={true}>
            Risicocategorie Voedselopname (V1)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De steenbok is een mixed-feeder, die zich voedt met grassen (60%), kruiden (38%) en browse materiaal (2%)
            (Groves et al., 2011; Mendoza & Palmqvist, 2007).
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>
          <Heading type="h4" noMargins={true}>
            Risicocategorie Letselschade (LG2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De steenbok weegt 70-120 kg (m) of 40-50 kg (v) en beide geslachten beschikken over naar-achter-gekrulde
            hoorns van 75-102 cm (m) of c.35 cm (v). De hoorns van de mannetjes worden als wapens gebruikt bij
            onderlinge gevechten. Ze worden gebruikt om zware klappen mee uit te delen, waarbij middels het
            lichaamsgewicht de kracht achter de aanval wordt vergroot (Groves et al., 2011; Tettamanti & Viblanc, 2014).
            Steenbokken zijn wilde dieren en het hanteren van Steenbokken vereist ervaring en deskundigheid van de
            houder (Weber, 2015).
            <br />
            <LayoutFlow gap="xs" row={true} alignItems="start">
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>
                Gezien de grootte, morfologie en het gedrag van steenbokken, kunnen ze zeer ernstig letsel bij de mens
                veroorzaken, waardoor de steenbok direct onder risicoklasse F valt.
              </strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Hypsodontie (V2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De steenbok heeft hypsodonte kiezen (Ackermans et al., 2018; Damuth & Janis, 2011; Kaiser et al., 2013).
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Foerageergedrag (V3)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken grazen voornamelijk in de ochtend en de avond. Steenbokken zijn herkauwende mixedfeeders met een
            hoge passeersnelheid in de pens, waardoor frequent foerageren noodzakelijk is (Hofmann, 1989; Zingg, 2009).
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Dieetsamenstelling (V4)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Het dieet van steenbokken bestaat uit verscheidene grassen, kruiden, naaldbomen, varens en mossen (Zingg,
            2009).
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Homerange (R1)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken hebben een homerange afhankelijk van het seizoen en het geslacht. Vrouwtjes hebben een homerange
            van 20 ha in de winter en 136 ha in de zomer, en mannetjes van 50-180 ha in de winter en 300-500 ha in de
            zomer. Steenbokken patrouilleren de homerange niet.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Beschutting jongen (R2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            De jongen van steenbokken gebruiken een beschutte verstopplaats.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Vluchtgedrag (R3)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken hebben een sterke vluchtreactie, maar vluchten als behendige klimmers doelgericht naar hoge
            plekken en beschutting.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Ondergrondgebruik (R4)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken gebruiken geen holen of kuilen.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Hoogte-elementen (R5)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken leven in een habitat met hoogte-elementen, die zij als toevluchtsoord bij tekenen van gevaar
            gebruiken en zijn morfologisch aangepast aan leven op ruig terrein.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Klimaatadaptatie (T1)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken leven in een hooggebergteklimaat. De gemiddelde minimumtemperatuur in de Alpen waar steenbokken
            voorkomen is 0 °C (met een uiterste minimumtemperatuur van -24 °C) en de gemiddelde maximumtemperatuur is 10
            °C (met een uiterste maximumtemperatuur van 20 °C). De steenbok is aangepast aan een hooggebergteklimaat.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Speciaal zoel-/koelgedrag (T2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Uit gedetailleerd gedragsonderzoek is niet gebleken dat steenbokken gebruik maken van een speciale zoel-,
            koel- of opwarmplaats.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Winterslaap/torpor (T3)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken zijn jaarrond actief.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Voortplanting (S1)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken hebben een polygame leefwijze.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Dominantiehiërarchie (S2)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Steenbokken leven buiten de bronsttijd solitair en vormen groepen in de bronsttijd. De dominante mannetjes
            (9-12 jaar oud) monopoliseren het dekkingsrecht. Mannetjes vormen groepen van dezelfde leeftijd en sociale
            status. Er is sprake van een lineaire dominantiehiërarchie binnen de mannelijke en vrouwelijke groepen.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--rood"></div>
              <strong>Deze risicofactor is daarom van toepassing.</strong>
            </LayoutFlow>
          </p>

          <Heading type="h4" noMargins={true}>
            Risicocategorie Voortplantingssnelheid (S3)
          </Heading>
          <p className="rvo-paragraph rvo-margin-block-start--2xs">
            Vrouwtjes zijn vanaf 1,5 jaar geslachtsrijp en kunnen per jaar één keer werpen. Vrouwtjes zijn 165-175 dagen
            drachtig en krijgen per worp één jong. Steenbokken hebben een paarseizoen in december-januari. Steenbokken
            hebben geen grote kans op overbevolking.
            <br />
            <LayoutFlow gap="xs" row={true}>
              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
              <strong>Deze risicofactor is daarom niet van toepassing.</strong>
            </LayoutFlow>
          </p>
        </div>
        <div className="rvo-max-width-layout rvo-max-width-layout--sm">
          <Heading type="h2">Verwijzingen</Heading>
          <p>
            <em>
              Ackermans, N. L., Clauss, M., Winkler, D. E., Schulz-Kornas, E., Kaiser, T. M., Müller, D. W., Kircher, P.
              R., Hummel, J. &amp; Hatt, J. (2018). Root growth compensates for molar wear in adult goats (Capra
              aegagrus hircus). Journal of Experimental Zoology. 331(2). 139-148.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Baradel, J. M., Barrat, J., Blancou, J., Boutin, J. M., Chastel, C., Dannacher, G., Delorme, D., Gerard,
              Y., Gourreau, J. M., Kihm, U., Larenaude, B., le Goff, C., Pastoret, P., Perreau, P., Schwers, A., Thiry,
              E., Trap, D., Uilenberg, G. &amp; Vannier, P. H. (1988). Results of a serological survey of wild mammals
              in France. Revue Scientifique et Technique (International Office of Epizootics). 7(4). 873-883.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Brivio, F., Grignolio, S., Sica, N., Cerise, S. &amp; Bassano, B. (2015). Assessing the impact of capture
              on wild animals: The case stady of chemical immobilisation on alpine ibex. PLoS ONE. 10(6). 1-18.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Damuth, J. &amp; Janis, C. M. (2011). On the relationship between hypsodonty and feeding ecology in
              ungulate mammals, and its utility in palaeoecology. Biological Reviews. 86. 733-758.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Groves, C. P., Leslie Jr., D. M., Huffman, B. A., Valdez, R., Habibi, K., Weinberg, P. J., Burton, J. A.,
              Jarman, P. J. &amp; Robichaud, W. G. (2011). Family Bovidae (Hollow-horned Ruminants). In D. E. Wilson
              &amp; R. A. Mittermeier, Handbook of the mammals of the world (pp. 444-779). Barcelona: Lynx
              Edicions.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Hofmann, R. R. (1989). Evolutionary steps of ecophysiological adaptation and diversification of ruminants:
              a comparative view of their digestive system. Oecologia. 78. 443-457.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Kaiser, T. M., Müller, D. W., Fortelius, M., Schulz, E., Codron, D. &amp; Clauss, M. (2013). Hypsodonty
              and tooth facet development in relation to diet and habitat in herbivorous ungulates: implications for
              understanding tooth wear. Mammal Review. 43(1). 34-46.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Lambert, S., Gilot-Fromont, E., Toïgo, C., Marchand, P., Petit, E., Garin-Bastuji, B., Gauthier, D.,
              Gaillard, J., Rossi, S. &amp; Thébault, A. (2020). An individual-based model to assess the spatial and
              individual heterogeneity of Brucella melitensis transmission in alpine ibex. Ecological Modelling. 425.
              1-14.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Marreros, N., Hüssy, D., Albini, S., Frey, C. F., Abril, C., Vogt, H., Holzwarth, N., Wirz-Dittus, S.,
              Friess, M., Engels, M., Borel, N., Willisch, C. S., Signer, C., Hoelzle, L. E. &amp; Ryser-Degiorgis, M.
              (2011). Epizootiologic investigations of selected abortive agents in free-ranging alpine ibex (Capra ibex
              ibex) in Switzerland. Journal of Wildlife Diseases. 47(3). 530-543.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Mendoza, M. &amp; Palmqvist, P. (2007). Hypsodonty in ungulates: an adaptation for grass consumption or
              for foraging in open habitat? Journal of Zoology. 274. 134-142.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Meteoblue. (2021). Aiguilles Rouges, France. Opgehaald van Meteoblue:{' '}
              <a href="#" className="rvo-link">
                https://www.meteoblue.com/en/weather/historyclimate/climatemodelled/aig…
              </a>
              ;
            </em>
          </p>
          <p>
            <em>
              Schultz, J. (2005). The ecozones of the world, the ecological divisions of the geosphere. Aachen, Germany:
              Springer.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Tettamanti, F. &amp; Viblanc, V. A. (2014). Influences of mating group composition on the behavioral
              timebudget of male and female alpine ibex (Capra ibex) during the rut. PLoS ONE. 9(1). 1-14.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Toïgo, C., Gaillard, J. &amp; Michallet, J. (1996). Adult survival pattern of the sexually dimorphic
              Alpine ibex (Capra ibex ibex). Can J Zool. 75. 75-79.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Weber, M. A. (2015). Chapter 64 - Sheep, Goats, and Goat-Like Animals. In E. Miller &amp; M. Fowler,
              Fowler's Zoo and Wild Animal Medicine, Volume 8 (pp. 645-649). Columbia en Davis: Saunders.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Willisch, C. S. &amp; Neuhaus, P. (2010). Social dominance and conflict reduction in rutting male Alpine
              ibex, Capra ibex. Behavioural Ecology. 21(2). 372-380.&nbsp;
            </em>
          </p>
          <p>
            <em>
              Zingg, A. (2009). Seasonal variability in the diet composition of alpine ibex (Capra ibex ibex L.) in the
              Swiss National Park. Switzerland: University of Zurich
            </em>
            .&nbsp;
          </p>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default RegisterAlternativepagina;
