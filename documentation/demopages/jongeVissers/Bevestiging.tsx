import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const Bevestiging = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar
        items={[
          { label: 'Home', icon: 'home', link: '#' },
          { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Controleer uw gegevens',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Correspondentie',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--correspondentie&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Datum verleningsverzoek',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--datum&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Bijlagen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Ondertekening',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--ondertekening&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Samenvatting',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--samenvatting',
                size: 'md',
                line: 'straight',
              },

              { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="xl">
              <div className="intro">
                <Heading type="h1" textContent="Bevestiging"></Heading>
                <p>
                  Wij hebben uw aanvraag verlenging Jonge Visser 2020 ontvangen op <strong>05-07-2022</strong>.<br />
                  Het zaaknummer dat wij hieraan hebben gegevens is <strong>192040000027</strong>. Gebruik dit nummer
                  als u met ons belt of digitale post wilt versturen.
                </p>
                <Heading type="h2" textContent="Uw gegevens"></Heading>
                <LayoutColumnRow size="md">
                  <dl className="rvo-data">
                    <dt>Naam</dt>
                    <dd>Albert Heijn B.V.</dd>
                    <dt>KVK Nummer</dt>
                    <dd>342346534634</dd>
                    <dt>Relatienummer</dt>
                    <dd>35012085</dd>
                  </dl>
                  <p>
                    U kunt deze ontvangstbevestiging inzien in Mijn dossier. U kunt het document dan ook afdrukken of
                    opslaan op uw computer.
                  </p>
                </LayoutColumnRow>
                <p>
                  Een PDF kunt u openen met{' '}
                  <Link
                    url="#"
                    content="Adobe Acrobat
                  Reader"
                  ></Link>
                  .
                </p>
                <p>
                  Heeft u nog vragen? Dan kunt u ons bellen op werkdagen tussen 8:30 en 17:00 uur op 088 042 42 42
                  (lokaal tarief)
                </p>
                <Link showIcon="before" url="#" content="Ontvangstbevestiging 192040000027" icon="downloaden"></Link>
              </div>
            </LayoutColumnRow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Bevestiging;
