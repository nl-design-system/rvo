import {
  Accordion,
  ActionGroup,
  Button,
  FormField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';
import '../../common/focus.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const Focus = () => {
  return (
    <div className="rvo-demo-page rvo-focus-demopage">
      <Header link="#" />
      <LayoutFlow gap="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="left"
        />
        <LayoutFlow gap="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading type="h1">Focus indicator demo page</Heading>
            <p className="rvo-text rvo-text--no-margins">
              Deze pagina laat alle focus indicators zien van de verschillende componenten. Er is gekozen voor
              focus:visible omdat dit voldoende ondersteund wordt door grote browsers.
            </p>
            <Accordion>
              <Accordion.Item title="Mag ik voor deze regeling subsidies stapelen/combineren?">
                Per 21 april 2021 kunt u als woningeigenaar ISDE combineren met gemeentelijke of provinciale subsidies
                om bijvoorbeeld uw woning aan te sluiten op een warmtenet. Dit is terug te vinden in de publicatie in de
                Staatscourant. Het is niet mogelijk om meer dan een keer subsidie te ontvangen vanuit de Rijksoverheid
                voor dezelfde maatregel.
              </Accordion.Item>
              <Accordion.Item title="Wat is een bestaande thermische schil?">
                De bestaande thermische schil is de isolerende laag aan de buitenzijde van de woning. Wanden, daken,
                beglazing en deuren, en vloeren grenzend aan de buitenlucht of grond zijn geïsoleerd om kou te weren en
                warmte binnen te houden. De thermische schil is de jas van de woning.
              </Accordion.Item>
              <Accordion.Item title="Wanneer krijg ik bericht over mijn subsidie?">Zo snel mogelijk.</Accordion.Item>
            </Accordion>
            <p>
              Dit is een voorbeeld van een{' '}
              <a href="#" className="rvo-link">
                dit is een voorbeeld van een link
              </a>
              .
            </p>
            <div className="rvo-form">
              <LayoutFlow gap="sm">
                <div className="rvo-form-intro">
                  <Link href="#" iconPlacement="left" icon="terug">
                    Terug
                  </Link>
                  <Heading type="h1">Heading</Heading>
                </div>
                <form className="rvo-layout-spacer rvo-layout-spacer--2xl">
                  <Fieldset legend="Keyboard inputs">
                    <FormField label="Text">
                      <FormField.Text />
                    </FormField>
                    <FormField
                      label="Text with helper text"
                      helperText="This is a helper text which can be used for instructions."
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField label="Text">
                      <FormField.Text />
                    </FormField>
                    <FormField label="Text with an error" errorText="This is an error">
                      <FormField.Text invalid={true} />
                    </FormField>
                    <FormField label="Text with a warning" warningText="This is a warning">
                      <FormField.Text />
                    </FormField>
                    <FormField
                      label="Text with expandable helper text"
                      helperText="This is a helper text which can be used for instructions."
                      expandableHelperText={{ title: 'Expandable helper text', children: '' }}
                    >
                      <FormField.Text />
                    </FormField>
                    <FormField label="Text disabled">
                      <FormField.Text disabled={true} />
                    </FormField>
                    <FormField label="Text disabled with value">
                      <FormField.Text disabled={true} value="Value" />
                    </FormField>
                    <FormField label="Number">
                      <FormField.Text validation="none" />
                    </FormField>
                    <FormField label="Textare">
                      <FormField.TextArea />
                    </FormField>
                  </Fieldset>

                  <Fieldset legend="Options">
                    <FormField label="Radio buttons" helperText="This is an helper text">
                      <FormField.RadioButtonGroup
                        name="radio-buttons"
                        options={[
                          { id: 'optionA', label: 'Option A' },
                          { id: 'optionB', label: 'Option B' },
                          { id: 'optionC', label: 'Option C' },
                          { id: 'optionD', label: 'Option D' },
                        ]}
                      />
                    </FormField>
                    <FormField label="Radio buttons invalid" errorText="This is an error">
                      <FormField.RadioButtonGroup
                        name="radio-buttons"
                        invalid={true}
                        options={[
                          { id: 'optionA-error', label: 'Option A' },
                          { id: 'optionB-error', label: 'Option B' },
                          { id: 'optionC-error', label: 'Option C' },
                          { id: 'optionD-error', label: 'Option D' },
                        ]}
                      />
                    </FormField>
                    <FormField label="Radio buttons warning" warningText="This is a warning">
                      <FormField.RadioButtonGroup
                        name="radio-buttons-warning"
                        options={[
                          { id: 'optionA-warning', label: 'Option A' },
                          { id: 'optionB-warning', label: 'Option B' },
                          { id: 'optionC-warning', label: 'Option C' },
                          { id: 'optionD-warning', label: 'Option D' },
                        ]}
                      />
                    </FormField>

                    <FormField label="Checkboxes" helperText="This is an helper text">
                      <FormField.CheckboxGroup
                        invalid={false}
                        options={[
                          { id: 'optionA-cb', label: 'Option A' },
                          { id: 'optionB-cb', label: 'Option B' },
                          { id: 'optionC-cb', label: 'Option C' },
                          { id: 'optionD-cb', label: 'Option D' },
                        ]}
                      />
                    </FormField>

                    <FormField label="Checkboxes with Error" errorText="This is an error">
                      <FormField.CheckboxGroup
                        invalid={true}
                        options={[
                          { id: 'optionA-cb-error', label: 'Option A' },
                          { id: 'optionB-cb-error', label: 'Option B' },
                          { id: 'optionC-cb-error', label: 'Option C' },
                          { id: 'optionD-cb-error', label: 'Option D' },
                        ]}
                      />
                    </FormField>

                    <FormField label="Checkboxes with Warning" warningText="This is a warning">
                      <FormField.CheckboxGroup
                        invalid={false}
                        options={[
                          { id: 'optionA-cb-warning', label: 'Option A' },
                          { id: 'optionB-cb-warning', label: 'Option B' },
                          { id: 'optionC-cb-warning', label: 'Option C' },
                          { id: 'optionD-cb-warning', label: 'Option D' },
                        ]}
                      />
                    </FormField>

                    <FormField label="Select">
                      <FormField.Select
                        options={[
                          { value: '1', label: 'Option #1' },
                          { value: '2', label: 'Option #2' },
                          { value: '3', label: 'Option #3' },
                        ]}
                      />
                    </FormField>
                  </Fieldset>

                  <Fieldset legend="Other">
                    <FormField label="File">
                      <FormField.FileInput />
                    </FormField>
                    <div className="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                      <div className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs">
                        <label htmlFor="fieldId" className="utrecht-form-label rvo-form-field__label-text">
                          Date
                        </label>
                      </div>
                      <input
                        type="date"
                        id="field"
                        placeholder=""
                        className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                        value=""
                      />
                    </div>
                    <div className="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                      <div className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs">
                        <label htmlFor="fieldId" className="utrecht-form-label rvo-form-field__label-text">
                          Time
                        </label>
                      </div>
                      <input
                        type="time"
                        id="field"
                        placeholder=""
                        className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                        value=""
                      />
                    </div>
                  </Fieldset>

                  <ActionGroup>
                    <Button kind="primary" size="md" busy={false} disabled={false}>
                      Primary action
                    </Button>
                    <Button kind="secondary" size="md" busy={false} disabled={false}>
                      Secondary action
                    </Button>
                  </ActionGroup>
                </form>
              </LayoutFlow>
            </div>
          </main>

          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default Focus;
