import {
  Button,
  ButtonGroup,
  CheckboxField,
  Fieldset,
  FileInputField,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  Link,
  MenuBar,
  RadioButtonField,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import { defaultFooterItems } from '../common/defaultFooterItems';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <LayoutColumnRow size="xl">
        <MenuBar
          items={[
            {
              label: 'Naam app/website',
              link: '#',
              active: true,
            },
            {
              label: 'Menu item',
              link: '#',
            },
            {
              label: 'Menu item met icoon',
              icon: 'user',
              link: '#',
            },
            {
              align: 'right',
              label: 'Menu item rechts',
              link: '#',
            },
          ]}
          size="md"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
        />
        <LayoutColumnRow size="3xl">
          <LayoutColumnRow size="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
              <div className="rvo-form">
                <LayoutColumnRow size="sm">
                  <div>
                    <Link content="Terug" href="#" showIcon="before" icon="terug" noUnderline={true} />
                    <Heading type="h1">Formulier template</Heading>
                    <p className="rvo-text--lg">
                      <span className="rvo-text--bold">Voorbeeld van een paragraaf met grote tekst</span>. Deze
                      paragraaf kan gebruikt worden als introductie voor het formulier. Door wie moet het formulier
                      ingevuld worden en waar moet de klant rekening mee houden.
                    </p>
                  </div>
                  <form>
                    <LayoutColumnRow>
                      <div>
                        <Fieldset legend="Keyboard inputs">
                          <TextInputField label="Text" />
                          <TextInputField
                            label="Text with helper text"
                            helperText="This is a helper text which can be used for instructions."
                          />
                          <TextInputField label="Text" />
                          <TextInputField label="Text with an error" errorText="This is an error" invalid={true} />
                          <TextInputField label="Text with a warning" warningText="This is a warning" />
                          <TextInputField
                            label="Text with expandable helper text"
                            helperText="This is a helper text which can be used for instructions."
                            expandableHelperText={true}
                            expandableHelperTextTitle="Expandable helper text"
                          />
                          <TextInputField label="Text disabled" disabled={true} />
                          <TextInputField label="Text disabled with value" disabled={true} value="Value" />
                          <TextInputField label="Number" validation="number" />
                          <TextInputField label="Textarea" inputType="textarea" />
                        </Fieldset>

                        <Fieldset legend="Options">
                          <RadioButtonField
                            name="radio-buttons"
                            label="Radio buttons"
                            helperText="This is an helper text"
                            options={[
                              { id: 'optionA', label: 'Option A' },
                              { id: 'optionB', label: 'Option B' },
                              { id: 'optionC', label: 'Option C' },
                              { id: 'optionD', label: 'Option D' },
                            ]}
                          ></RadioButtonField>
                          <RadioButtonField
                            name="radio-buttons-error"
                            label="Radio buttons invalid"
                            errorText="This is an error"
                            invalid={true}
                            options={[
                              { id: 'optionA-error', label: 'Option A' },
                              { id: 'optionB-error', label: 'Option B' },
                              { id: 'optionC-error', label: 'Option C' },
                              { id: 'optionD-error', label: 'Option D' },
                            ]}
                          ></RadioButtonField>

                          <RadioButtonField
                            name="radio-buttons-warning"
                            label="Radio buttons with warning"
                            warningText="This is a warning"
                            options={[
                              { id: 'optionA-warning', label: 'Option A' },
                              { id: 'optionB-warning', label: 'Option B' },
                              { id: 'optionC-warning', label: 'Option C' },
                              { id: 'optionD-warning', label: 'Option D' },
                            ]}
                          ></RadioButtonField>

                          <CheckboxField
                            helperText="This is an helper text"
                            label="Checkboxes"
                            invalid={false}
                            options={[
                              { id: 'optionA-cb', label: 'Option A' },
                              { id: 'optionB-cb', label: 'Option B' },
                              { id: 'optionC-cb', label: 'Option C' },
                              { id: 'optionD-cb', label: 'Option D' },
                            ]}
                          ></CheckboxField>

                          <CheckboxField
                            errorText="This is an error"
                            label="Checkboxes with error"
                            invalid={true}
                            options={[
                              { id: 'optionA-cb-error', label: 'Option A' },
                              { id: 'optionB-cb-error', label: 'Option B' },
                              { id: 'optionC-cb-error', label: 'Option C' },
                              { id: 'optionD-cb-error', label: 'Option D' },
                            ]}
                          ></CheckboxField>

                          <CheckboxField
                            warningText="This is a warning"
                            label="Checkboxes with a warning"
                            invalid={false}
                            options={[
                              { id: 'optionA-cb-warning', label: 'Option A' },
                              { id: 'optionB-cb-warning', label: 'Option B' },
                              { id: 'optionC-cb-warning', label: 'Option C' },
                              { id: 'optionD-cb-warning', label: 'Option D' },
                            ]}
                          ></CheckboxField>

                          <SelectField
                            label="Select"
                            options={[
                              { value: '1', label: 'Option #1' },
                              { value: '2', label: 'Option #2' },
                              { value: '3', label: 'Option #3' },
                            ]}
                          ></SelectField>
                        </Fieldset>

                        <Fieldset legend="Other">
                          <FileInputField label="File" />
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
                      </div>
                      <ButtonGroup>
                        <Button
                          kind="primary"
                          size="md"
                          active={false}
                          busy={false}
                          focus={false}
                          focusVisible={false}
                          disabled={false}
                          hover={false}
                          showIcon="no"
                        >
                          Primary action
                        </Button>
                        <Button
                          kind="secondary"
                          size="md"
                          active={false}
                          busy={false}
                          focus={false}
                          focusVisible={false}
                          disabled={false}
                          hover={false}
                          showIcon="no"
                        >
                          Secondary action
                        </Button>
                      </ButtonGroup>
                    </LayoutColumnRow>
                  </form>
                </LayoutColumnRow>
              </div>
            </main>
          </LayoutColumnRow>

          <Footer columns={defaultFooterItems} />
        </LayoutColumnRow>
      </LayoutColumnRow>
    </div>
  );
};

export default Formulier;
