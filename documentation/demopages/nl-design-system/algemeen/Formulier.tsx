import { CheckboxField } from '@nl-rvo/components/form-field-checkbox/css/template';
import { FileInputField } from '@nl-rvo/components/form-field-fileinput/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field-radio-button/css/template';
import { SelectField } from '@nl-rvo/components/form-field-select/css/template';
import { TextInputField } from '@nl-rvo/components/form-field-textinput/css/template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { defaultSteps } from '@nl-rvo/components/progress-tracker/css/defaultArgs';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';
import { Button, ButtonGroup, Heading1, Link } from '@utrecht/component-library-react';

const Formulier = () => {
  return (
    <div className="rvo-nl-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MaxWidthLayout size="md">
          <main>
            <LayoutColumnRow size="2xl" row={true} alignToTop={true}>
              <ProgressTracker steps={defaultSteps} />
              <div className="rvo-form">
                <LayoutColumnRow size="sm">
                  <div className="intro">
                    <Link href="#">
                      <Icon icon="terug" color="hemelblauw" size="md" classNames={['rvo-link__icon--before']} />
                      Terug
                    </Link>
                    <Heading1>Heading</Heading1>
                  </div>
                  <form className="rvo-layout-spacer rvo-layout-spacer--2xl">
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
                    </Fieldset>
                    <ButtonGroup>
                      <Button className={'utrecht-button--primary-action'}>
                        Primary action
                        <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md"></span>
                      </Button>
                      <Button className={'utrecht-button--secondary-action'}>Secondary action</Button>
                    </ButtonGroup>
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
