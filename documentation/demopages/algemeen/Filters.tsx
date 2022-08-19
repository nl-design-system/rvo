import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';

const Filters = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" menuMaxWidth="md" useIcons={true} iconPlacement="before" />
        <main>
          <div className="rvo-filter">
            <MaxWidthLayout size="sm">
              <Heading type="h1" textContent="Filters"></Heading>
              <p className="rvo-paragraph rvo-paragraph--lg">
                <strong>Paragraph large.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
                ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
                voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
                <Link content="Dit is een link. " url="#"></Link>&nbsp;Tussen bedrijven, kennis- en financiële
                instellingen, ambassades en lokale overheden.
              </p>
            </MaxWidthLayout>
            <div className="rvo-tmp-filters">
              <Fieldset legend="">
                <MaxWidthLayout size="lg">
                  <LayoutColumnRow size="xl" row={true}>
                    <TextInputField labelText="Zoek op trefwoord of code"></TextInputField>
                    <details className="rvo-tmp-filter">
                      <summary>
                        <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            htmlFor="fieldId"
                          >
                            <span className="rvo-form-field__label-text">Ik wil duurzaam investeren in</span>
                          </label>
                          <div className="rvo-select-wrapper">
                            <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                              Maak een keuze
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionA"
                        >
                          <input type="checkbox" id="optionA" name="group" className="rvo-checkbox__input" value="" />
                          Agro en visserij
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionB"
                        >
                          <input type="checkbox" id="optionB" name="group" className="rvo-checkbox__input" value="" />
                          Bouw en infrastructuur
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionC"
                        >
                          <input type="checkbox" id="optionC" name="group" className="rvo-checkbox__input" value="" />
                          Groot- en detailhandel
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionD"
                        >
                          <input type="checkbox" id="optionD" name="group" className="rvo-checkbox__input" value="" />
                          Milieusector
                        </label>
                      </div>
                    </details>
                    <details className="rvo-tmp-filter">
                      <summary>
                        <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            htmlFor="fieldId"
                          >
                            <span className="rvo-form-field__label-text">Mijn milieudoel is</span>
                          </label>
                          <div className="rvo-select-wrapper">
                            <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                              Maak een keuze
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionA1"
                        >
                          <input type="checkbox" id="optionA1" name="group" className="rvo-checkbox__input" value="" />
                          Afval(water) verwerken
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionB1"
                        >
                          <input type="checkbox" id="optionB1" name="group" className="rvo-checkbox__input" value="" />
                          Bodem beschermen
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionC1"
                        >
                          <input type="checkbox" id="optionC1" name="group" className="rvo-checkbox__input" value="" />
                          Broeikasgassen reduceren
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionD1"
                        >
                          <input type="checkbox" id="optionD1" name="group" className="rvo-checkbox__input" value="" />
                          Circular ondernemen
                        </label>
                      </div>
                    </details>
                    <details className="rvo-tmp-filter">
                      <summary>
                        <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            htmlFor="fieldId"
                          >
                            <span className="rvo-form-field__label-text">Jaar</span>
                          </label>
                          <div className="rvo-select-wrapper">
                            <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                              Maak een keuze
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionA2"
                        >
                          <input type="checkbox" id="optionA2" name="group" className="rvo-checkbox__input" value="" />
                          2022
                        </label>
                      </div>
                    </details>
                    <details className="rvo-tmp-filter">
                      <summary>
                        <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            htmlFor="fieldId"
                          >
                            <span className="rvo-form-field__label-text">Regeling</span>
                          </label>
                          <div className="rvo-select-wrapper">
                            <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                              Maak een keuze
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                        <label
                          className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionA3"
                        >
                          <input type="checkbox" id="optionA3" name="group" className="rvo-checkbox__input" value="" />
                          MIA\Vamil
                        </label>
                        <label
                          className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          htmlFor="optionB3"
                        >
                          <input type="checkbox" id="optionB3" name="group" className="rvo-checkbox__input" value="" />
                          EIA
                        </label>
                      </div>
                    </details>
                  </LayoutColumnRow>
                </MaxWidthLayout>
              </Fieldset>
            </div>
          </div>
        </main>
      </LayoutColumnRow>
    </div>
  );
};

export default Filters;
