import { Button } from '@nl-rvo/components/button/css/template';
import { CheckboxField } from '@nl-rvo/components/form-field/css/checkbox-field.template';
import { FileInputField } from '@nl-rvo/components/form-field/css/fileinput-field.template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { SelectField } from '@nl-rvo/components/form-field/css/select-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultSteps, ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { Heading1, Link } from '@utrecht/component-library-react';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';

const Formulier = () => {
  return (
    <div className="rvo-nl-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" menuMaxWidth="md" />
        <MaxWidthLayout size="md">
          <main>
            <LayoutColumnRow size="2xl" row={true}>
              <ProgressTracker steps={defaultSteps} />
              <div className="rvo-form">
                <LayoutColumnRow size="sm">
                  <div className="intro">
                    <Link href="#" className="utrecht-link--icon-left">
                      <span className="rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before" />
                      Terug
                    </Link>
                    <Heading1>Heading</Heading1>
                  </div>
                  <form className="rvo-layout-spacer rvo-layout-spacer--2xl">
                    <Fieldset legend="Keyboard inputs">
                      <TextInputField labelText="Text" />
                      <TextInputField
                        labelText="Text with helper text"
                        helperText="This is a helper text which can be used for instructions."
                      />
                      <TextInputField labelText="Text" />
                      <TextInputField labelText="Text with an error" errorText="This is an error" invalid={true} />
                      <TextInputField labelText="Text with a warning" warningText="This is a warning" />
                      <TextInputField
                        labelText="Text with expandable helper text"
                        helperText="This is a helper text which can be used for instructions."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Expandable helper text"
                      />
                      <TextInputField labelText="Text disabled" disabled={true} />
                      <TextInputField labelText="Text disabled with value" disabled={true} value="Value" />
                      <TextInputField labelText="Number" valueType="number" />
                      <TextInputField labelText="Textarea" inputType="textarea" />
                    </Fieldset>

                    <Fieldset legend="Options">
                      <RadioButtonField
                        name="radio-buttons"
                        labelText="Radio buttons"
                        helperText="This is an helper text"
                        options={[
                          { id: 'optionA', labelText: 'Option A' },
                          { id: 'optionB', labelText: 'Option B' },
                          { id: 'optionC', labelText: 'Option C' },
                          { id: 'optionD', labelText: 'Option D' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="radio-buttons-error"
                        labelText="Radio buttons invalid"
                        errorText="This is an error"
                        invalid={true}
                        options={[
                          { id: 'optionA-error', labelText: 'Option A' },
                          { id: 'optionB-error', labelText: 'Option B' },
                          { id: 'optionC-error', labelText: 'Option C' },
                          { id: 'optionD-error', labelText: 'Option D' },
                        ]}
                      ></RadioButtonField>

                      <RadioButtonField
                        name="radio-buttons-warning"
                        labelText="Radio buttons with warning"
                        warningText="This is a warning"
                        options={[
                          { id: 'optionA-warning', labelText: 'Option A' },
                          { id: 'optionB-warning', labelText: 'Option B' },
                          { id: 'optionC-warning', labelText: 'Option C' },
                          { id: 'optionD-warning', labelText: 'Option D' },
                        ]}
                      ></RadioButtonField>

                      <CheckboxField
                        helperText="This is an helper text"
                        labelText="Checkboxes"
                        invalid={false}
                        options={[
                          { id: 'optionA-cb', labelText: 'Option A' },
                          { id: 'optionB-cb', labelText: 'Option B' },
                          { id: 'optionC-cb', labelText: 'Option C' },
                          { id: 'optionD-cb', labelText: 'Option D' },
                        ]}
                      ></CheckboxField>

                      <CheckboxField
                        errorText="This is an error"
                        labelText="Checkboxes with error"
                        invalid={true}
                        options={[
                          { id: 'optionA-cb-error', labelText: 'Option A' },
                          { id: 'optionB-cb-error', labelText: 'Option B' },
                          { id: 'optionC-cb-error', labelText: 'Option C' },
                          { id: 'optionD-cb-error', labelText: 'Option D' },
                        ]}
                      ></CheckboxField>

                      <CheckboxField
                        warningText="This is a warning"
                        labelText="Checkboxes with a warning"
                        invalid={false}
                        options={[
                          { id: 'optionA-cb-warning', labelText: 'Option A' },
                          { id: 'optionB-cb-warning', labelText: 'Option B' },
                          { id: 'optionC-cb-warning', labelText: 'Option C' },
                          { id: 'optionD-cb-warning', labelText: 'Option D' },
                        ]}
                      ></CheckboxField>

                      <SelectField
                        labelText="Select"
                        options={[
                          { value: '1', label: 'Option #1' },
                          { value: '2', label: 'Option #2' },
                          { value: '3', label: 'Option #3' },
                        ]}
                      ></SelectField>
                    </Fieldset>

                    <Fieldset legend="Other">
                      <FileInputField labelText="File" />
                    </Fieldset>

                    <div className="rvo-button-group">
                      <Button
                        kind="secondary"
                        size="md"
                        textContent="Secondary action"
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
                      <Button
                        kind="primary"
                        size="md"
                        textContent="Primary action"
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
                    </div>
                  </form>
                </LayoutColumnRow>
              </div>
            </LayoutColumnRow>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Formulier;
