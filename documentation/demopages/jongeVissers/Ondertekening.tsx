import {
  Fieldset,
  Header,
  Heading,
  LayoutColumnRow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../common/style.scss';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';

const Ondertekening = () => {
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
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  link: "story:Demo pagina's/Jonge Vissers/Datum",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Project vragen',
                  link: "story:Demo pagina's/Jonge Vissers/Project",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Kosten',
                  link: "story:Demo pagina's/Jonge Vissers/Kosten",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Bijlagen',
                  link: "story:Demo pagina's/Jonge Vissers/Bijlagen",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Samenvatting',
                  link: "story:Demo pagina's/Jonge Vissers/Samenvatting",
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
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
                  <Heading type="h1" textContent="Ondertekening"></Heading>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="Overtreding en fraude">
                      <RadioButtonField
                        name="radio-buttons"
                        helperText="Uitgebreide informatie over overtredingen."
                        label="Zijn er één of meerdere overtredingen bij u vastgesteld?"
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer informatie"
                        options={[
                          { id: 'overa', label: 'Ja' },
                          { id: 'overb', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="radio-buttons"
                        helperText="Uitgebreide informatie over fraude."
                        label="Is er fraude bij u vastgesteld?"
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer informatie"
                        options={[
                          { id: 'fraua', label: 'Ja' },
                          { id: 'fraub', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Heading type="h2" textContent="Verklaring"></Heading>
                    <p>
                      Ik verklaar dat ik voldoe aan de voorwaarden en dat dit formulier en de bijlagen naar waarheid
                      zijn ingevuld.
                    </p>
                    <Heading type="h2" textContent="Ondertekening"></Heading>
                    <p>Ondertekening m.b.v. TAN is alleen noodzakelijker voor klanten.</p>
                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Jonge Vissers/Bevestiging")}
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

export default Ondertekening;
