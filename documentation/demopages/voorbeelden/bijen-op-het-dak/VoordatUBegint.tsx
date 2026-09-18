import { Footer, Header, Heading, LayoutFlow, Link, MenuBar, MobileMenuBar } from '@nl-rvo/component-library-react';
import { useEffect, useState } from 'react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const VoordatUBegint = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1020);

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
            maxWidth="lg"
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

      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md rvo-padding-block-end--3xl rvo-padding-block-start--2xl">
        <LayoutFlow gap="xl">
          <LayoutFlow gap="xs">
            <Heading type="h1" noMargins={true}>
              Voordat u begint met aanvragen
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--zwart rvo-paragraph--lg rvo-text--bold">
              Een goede voorbereiding maakt uw aanvraag sneller en makkelijker. Zorg dat u alle benodigde informatie bij
              de hand heeft voordat u begint. Zo voorkomt u dat u de aanvraag tussentijds moet onderbreken.
            </p>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h2" noMargins={true}>
              Controleer uw gegevens
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              Omdat u bent ingelogd, hebben wij de volgende gegevens al van u. Kloppen deze niet meer? Wijzig ze dan
              voordat u begint met aanvragen.
            </p>
            <dl className="rvo-data-list">
              <dt>Bedrijfsnaam</dt>
              <dd className="rvo-layout-row rvo-layout--wrap rvo-layout-justify-content-space-between rvo-layout-gap--xs">
                <span>Powerbod B.V.</span>
                <a href="#" className="rvo-link">
                  Wijzigen
                </a>
              </dd>
              <dt>Adres</dt>
              <dd className="rvo-layout-row rvo-layout--wrap rvo-layout-justify-content-space-between rvo-layout-gap--xs">
                <span>Energieweg 42, 2909 LV Rotterdam</span>
                <a href="#" className="rvo-link">
                  Wijzigen
                </a>
              </dd>
              <dt>KVK-nummer</dt>
              <dd className="rvo-layout-row rvo-layout--wrap rvo-layout-justify-content-space-between rvo-layout-gap--xs">
                <span>63847291</span>
                <a href="#" className="rvo-link">
                  Wijzigen
                </a>
              </dd>
              <dt>IBAN rekeningnummer</dt>
              <dd className="rvo-layout-row rvo-layout--wrap rvo-layout-justify-content-space-between rvo-layout-gap--xs">
                <span>NL91 ABNA 0417 1643 00</span>
                <a href="#" className="rvo-link">
                  Wijzigen
                </a>
              </dd>
            </dl>
          </LayoutFlow>

          <LayoutFlow gap="sm">
            <Heading type="h2" noMargins={true}>
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
            <Link callToAction={true}>Start aanvraag</Link>
          </div>
        </LayoutFlow>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default VoordatUBegint;
