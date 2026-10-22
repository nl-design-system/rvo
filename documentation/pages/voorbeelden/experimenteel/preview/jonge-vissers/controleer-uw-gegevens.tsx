import {
  ActionGroup,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../../../../demopages/common/style.scss';

const ControleerGegevens = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow gap="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'doing',
                  label: 'Controleer uw gegevens',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Correspondentie',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Datum verleningsverzoek',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  size: 'md',
                  line: 'straight',
                },
                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutFlow gap="xl">
                <div className="rvo-form-intro">
                  <LayoutFlow gap="md">
                    <Heading type="h1">Controleer uw gegevens</Heading>
                    <LayoutFlow gap="sm">
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
                      <Link showIcon="before" href="#" icon="bewerken">
                        Wijzig deze gegevens
                      </Link>
                    </LayoutFlow>
                  </LayoutFlow>
                </div>
                <form>
                  <LayoutFlow gap="md">
                    <ActionGroup>
                      <a className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline">
                        Opslaan en sluiten
                      </a>
                      <a className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline">
                        Opslaan en verder
                      </a>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default ControleerGegevens;
