import {
  Field,
  Fieldset,
  Header,
  Heading,
  Label,
  LayoutColumnRow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Datum = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  link: "story:Demo pagina's/Jonge Vissers/Controleer uw gegevens",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  link: "story:Demo pagina's/Jonge Vissers/Correspondentie",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Datum verleningsverzoek',
                  link: "story:Demo pagina's/Jonge Vissers/Datum",
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  link: "story:Demo pagina's/Jonge Vissers/Project",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: "story:Demo pagina's/Jonge Vissers/Kosten",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: "story:Demo pagina's/Jonge Vissers/Bijlagen",
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  link: "story:Demo pagina's/Jonge Vissers/Samenvatting",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: "story:Demo pagina's/Jonge Vissers/Ondertekening",
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <Heading type="h1" textContent="Datum verleningsverzoek"></Heading>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <Field className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                        <Label htmlFor={'verlengingsdatum'}>
                          Wat is de datum op de poststempel van het verleningsverzoek?
                        </Label>
                        <input type="date" id={'verlengingsdatum'} className="rvo-date"></input>
                      </Field>
                    </Fieldset>

                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Jonge Vissers/Project")}
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

export default Datum;
