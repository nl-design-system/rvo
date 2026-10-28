import '@nl-rvo/component-library-css/dist/components/footer.css';
import { Alert, Header, Heading, LayoutFlow, Link, MenuBar, MobileMenuBar } from '@nl-rvo/component-library-react';
import { useEffect, useState } from 'react';
import { getBijenkasten } from './bijenkastenStorage';
import { getOffertes, getTekeningen } from './documentenStorage';
import { getPanden } from './pandenStorage';
import { getProject } from './projectStorage';
import { useDemoControls } from './useDemoControls';

const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';
const URL_PANDEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-panden--default&viewMode=story';
const URL_BIJENKASTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-bijenkasten--default&viewMode=story';
const URL_DOCUMENTEN = 'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-documenten--default&viewMode=story';
const URL_CONTROLEREN =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-controleren-en-versturen--default&viewMode=story';

const getLastActiveUrl = (): string => {
  const project = getProject();
  if (!project) return URL_PROJECTGEGEVENS;
  if (getPanden().length === 0) return URL_PANDEN;
  if (getBijenkasten().length === 0) return URL_BIJENKASTEN;
  if (getOffertes().length === 0 || getTekeningen().length === 0) return URL_DOCUMENTEN;
  return URL_CONTROLEREN;
};

const VoordatUBegint = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);
  useDemoControls();

  const project = getProject();
  const hasExistingData = !!project || getPanden().length > 0 || getBijenkasten().length > 0;

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
              { label: 'Bijen op het dak subsidie (FSSBD)', link: '#', icon: 'home' },
              { label: 'Hulp & Contact', link: '#', icon: 'telefoon' },
              { label: 'English', link: '#', icon: 'wereldbol' },
              { label: 'Rosita van der Helm', link: '#', icon: 'user' },
            ]}
          />
        )}
      </div>

      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md rvo-padding-block-end--3xl rvo-padding-block-start--2xl">
        <LayoutFlow gap="xl">
          {hasExistingData && (
            <Alert kind="warning" padding="md">
              U heeft een nog niet verzonden formulier voor het aanvragen van de Bijen op het dak subsidie (FSSBD)
              openstaan.{' '}
              <a href={getLastActiveUrl()} className="rvo-link rvo-link--donkerblauw">
                Ga verder
              </a>
            </Alert>
          )}

          <LayoutFlow gap="xs">
            <Heading type="h1" noMargins={true}>
              Bijen op het dak subsidie (FSSBD)
            </Heading>
            <Heading type="h2" noMargins={true}>
              Voordat u begint met aanvragen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--zwart rvo-paragraph--lg rvo-text--bold">
              Een goede voorbereiding maakt uw aanvraag sneller en makkelijker. Zorg dat u alle benodigde informatie bij
              de hand heeft voordat u begint. Zo voorkomt u dat u de aanvraag tussentijds moet onderbreken.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h3" noMargins={true}>
              Op deze pagina
            </Heading>
            <LayoutFlow gap="2xs">
              <Link href="#controleer-uw-gegevens" icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Controleer uw gegevens
              </Link>
              <Link href="#voorbereidingen" icon="pijl-omlaag" showIcon="before" noUnderline={true}>
                Voorbereidingen
              </Link>
            </LayoutFlow>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h3" noMargins={true} id="controleer-uw-gegevens">
              Controleer uw gegevens
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Omdat u bent ingelogd, hebben wij de volgende gegevens al van u. Kloppen deze niet meer? Wijzig ze dan
              voordat u begint met aanvragen.
            </p>
            <dl className="rvo-data-list">
              <dt>Bedrijfsnaam</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>Powerbod B.V.</span>
                <Link href="#" showIcon="before" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
              <dt>Adres</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>Energieweg 42, 2909 LV Rotterdam</span>
                <Link href="#" showIcon="before" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
              <dt>KVK-nummer</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>63847291</span>
                <Link href="#" showIcon="before" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
              <dt>IBAN rekeningnummer</dt>
              <dd className="rvo-layout-column rvo-layout-gap--2xs">
                <span>NL91 ABNA 0417 1643 00</span>
                <Link href="#" showIcon="before" icon="bewerken" noUnderline={true}>
                  Wijzigen
                </Link>
              </dd>
            </dl>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h3" noMargins={true} id="voorbereidingen">
              Voorbereidingen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">Zet deze stappen voordat u start met de aanvraag:</p>
            <ol className="rvo-ol rvo-ol--no-margin rvo-ol--no-padding">
              <li>
                Controleer via de subsidiewijzer op de FSSBD-subsidiepagina{' '}
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-www-subsidiepagina--default&viewMode=story#krijgt-u-subsidie"
                  className="rvo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  of u in aanmerking komt
                </a>
                .
              </li>
              <li>
                Controleer of u{' '}
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-www-subsidiepagina--default&viewMode=story#voorwaarden"
                  className="rvo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aan alle voorwaarden voldoet
                </a>
                .
              </li>
              <li>
                Heeft u alle benodigde onderdelen bij de hand?{' '}
                <a
                  href="iframe.html?args=&id=pagina-s-voorbeelden-www-subsidiepagina--default&viewMode=story#uw-aanvraag-voorbereiden"
                  className="rvo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bekijk wat u nodig heeft
                </a>
                .
              </li>
              <li>Zorg dat u de offerte en tekeningen als PDF-bestand bij de hand heeft om te uploaden.</li>
            </ol>
          </LayoutFlow>

          <div className="rvo-action-group">
            <Link
              href="iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story"
              callToAction={true}
            >
              Start aanvraag
            </Link>
          </div>
        </LayoutFlow>
      </main>

      <footer className="rvo-footer">
        <div className="rvo-footer__container rvo-footer__container--md">
          <div className="rvo-footer__menu-container rvo-footer__menu-container--secondary">
            <a
              href="https://www.rvo.nl/onderwerpen/contact"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Contact
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/privacy"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Privacy
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/cookies"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Cookies en anti-spam
            </a>
            <a href="#" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Toegankelijkheid
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/proclaimer"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Proclaimer
            </a>
            <a
              href="https://www.rvo.nl/onderwerpen/kwetsbaarheid"
              className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal"
            >
              Kwetsbaarheid op website
            </a>
            <a href="#demo" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Demo
            </a>
            <a href="#reset" className="rvo-link rvo-link--wit rvo-link--no-underline rvo-link--normal">
              Reset
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default VoordatUBegint;
