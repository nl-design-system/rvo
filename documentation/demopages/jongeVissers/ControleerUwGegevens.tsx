import { Header, Heading, LayoutColumnRow, Link, MaxWidthLayout, MenuBar, ProgressTracker } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';
import '../common/style.scss';

const ControleerGegevens = () => {
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
                  state: 'doing',
                  label: 'Controleer uw gegevens',
                  link: linkTo("Demo pagina's/Jonge Vissers/Controleer uw gegevens"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Correspondentie',
                  link: linkTo("Demo pagina's/Jonge Vissers/Correspondentie"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Datum verleningsverzoek',
                  link: linkTo("Demo pagina's/Jonge Vissers/Datum"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  link: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: linkTo("Demo pagina's/Jonge Vissers/Kosten"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: linkTo("Demo pagina's/Jonge Vissers/Bijlagen"),
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  link: linkTo("Demo pagina's/Jonge Vissers/Samenvatting"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: linkTo("Demo pagina's/Jonge Vissers/Ondertekening"),
                  size: 'md',
                  line: 'straight',
                },
                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <LayoutColumnRow size="md">
                    <Heading type="h1" textContent="Controleer uw gegevens"></Heading>
                    <LayoutColumnRow size="sm">
                      <dl className="rvo-data">
                        <dt>BSN</dt>
                        <dd>35012085</dd>
                        <dt>Naam</dt>
                        <dd>Albert Heijn B.V.</dd>
                        <dt>Rekeningnummer</dt>
                        <dd>NLSNBD093845843</dd>
                        <dt>Adres</dt>
                        <dd>Haarsteeweg 25, 4560 KL, Zutphen</dd>
                        <dt>E-mailadres</dt>
                        <dd>albert@heijn.nl</dd>
                      </dl>
                      <Link showIcon="before" href="#" icon="bewerken" content="Wijzig deze gegevens"></Link>
                    </LayoutColumnRow>
                  </LayoutColumnRow>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Jonge Vissers/Correspondentie")}
                      >
                        Opslaan en verder
                      </a>
                    </div>
                  </LayoutColumnRow>
                </form>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default ControleerGegevens;
