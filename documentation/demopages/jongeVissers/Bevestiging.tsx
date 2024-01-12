import { Header, Heading, LayoutColumnRow, Link, MaxWidthLayout, MenuBar, ProgressTracker } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';
import '../common/style.scss';

const Bevestiging = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Controleer uw gegevens"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Correspondentie"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Datum"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Project vragen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Kosten"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Bijlagen',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Bijlagen"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Samenvatting',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Samenvatting"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Ondertekening',
                  onClick: linkTo("Demo pagina's/Jonge Vissers/Ondertekening"),
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="rvo-form-intro">
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
                      href="#"
                      content="Adobe Acrobat
                  Reader"
                    ></Link>
                    .
                  </p>
                  <p>
                    Heeft u nog vragen? Dan kunt u ons bellen op werkdagen tussen 8:30 en 17:00 uur op 088 042 42 42
                    (lokaal tarief)
                  </p>
                  <Link showIcon="before" href="#" content="Ontvangstbevestiging 192040000027" icon="downloaden"></Link>
                </div>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Bevestiging;
