import { FileInputField } from '@nl-rvo/components/form-field/css/fileinput-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { defaultSteps, ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import 'normalize.css';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker steps={defaultSteps} />
          <div className="rvo-form">
            <div className="intro">
              <Link content="Terug" url="#" showIcon="before" icon="terug" />
              <Heading type="h1" textContent="Heading" />
            </div>
            <form>
              <Fieldset legend="Keyboard inputs">
                <TextInputField labelText="Text" />
                <TextInputField
                  labelText="Text with helper text"
                  helperText="This is a helper text which can be used for instructions."
                />
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
                <FileInputField labelText="File" />
              </Fieldset>

              <Fieldset legend="Options">
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="fieldId">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text">Helper text</div>
                  </label>
                  <div className="rvo-custom-radio-button__group rvo-custom-radio-button__group--vertical">
                    <label className="rvo-custom-radio-button__label" htmlFor="optionA">
                      <input id="optionA" name="group" type="radio" className="utrecht-custom-radio-button" />
                      Option A
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionB">
                      <input id="optionB" name="group" type="radio" className="utrecht-custom-radio-button" />
                      Option B
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionC">
                      <input id="optionC" name="group" type="radio" className="utrecht-custom-radio-button" />
                      Option C
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionD">
                      <input id="optionD" name="group" type="radio" className="utrecht-custom-radio-button" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="fieldId">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text rvo-form-field__helper-text--error">
                      <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md"></div>
                      This is an error
                    </div>
                  </label>
                  <div className="rvo-custom-radio-button__group rvo-custom-radio-button__group--vertical rvo-custom-radio-button__group--error">
                    <label className="rvo-custom-radio-button__label" htmlFor="optionA-error">
                      <input
                        id="optionA-error"
                        name="group-error"
                        type="radio"
                        className="utrecht-custom-radio-button"
                      />
                      Option A
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionB-error">
                      <input
                        id="optionB-error"
                        name="group-error"
                        type="radio"
                        className="utrecht-custom-radio-button"
                      />
                      Option B
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionC-error">
                      <input
                        id="optionC-error"
                        name="group-error"
                        type="radio"
                        className="utrecht-custom-radio-button"
                      />
                      Option C
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionD-error">
                      <input
                        id="optionD-error"
                        name="group-error"
                        type="radio"
                        className="utrecht-custom-radio-button"
                      />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="rb-hor">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text">Helper text</div>
                  </label>
                  <div className="rvo-custom-radio-button__group rvo-custom-radio-button__group--horizontal">
                    <label className="rvo-custom-radio-button__label" htmlFor="optionA-hor">
                      <input id="optionA-hor" name="group-hor" type="radio" className="utrecht-custom-radio-button" />
                      Option A
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionB-hor">
                      <input id="optionB-hor" name="group-hor" type="radio" className="utrecht-custom-radio-button" />
                      Option B
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionC-hor">
                      <input id="optionC-hor" name="group-hor" type="radio" className="utrecht-custom-radio-button" />
                      Option C
                    </label>
                    <label className="rvo-custom-radio-button__label" htmlFor="optionD-hor">
                      <input id="optionD-hor" name="group-hor" type="radio" className="utrecht-custom-radio-button" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="checkboxes">
                    <span className="rvo-form-field__label-text">Field label</span>
                  </label>
                  <div className="rvo-checkbox__group rvo-checkbox__group--vertical">
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionA-cb">
                      <input id="optionA-cb" name="checkboxes" className="rvo-checkbox__input" type="checkbox" />
                      Option A
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionB-cb">
                      <input id="optionB-cb" name="checkboxes" className="rvo-checkbox__input" type="checkbox" />
                      Option B
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionC-cb">
                      <input id="optionC-cb" name="checkboxes" className="rvo-checkbox__input" type="checkbox" />
                      Option C
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionD-cb">
                      <input id="optionD-cb" name="checkboxes" className="rvo-checkbox__input" type="checkbox" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="checkboxes-warning">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text rvo-form-field__helper-text--warning">
                      <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--md"></div>
                      This is a warning
                    </div>
                  </label>
                  <div className="rvo-checkbox__group rvo-checkbox__group--vertical">
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionA-cbw">
                      <input id="optionA-cbw" name="cb-war" className="rvo-checkbox__input" type="checkbox" />
                      Option A
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionB-cbw">
                      <input id="optionB-cbw" name="cb-war" className="rvo-checkbox__input" type="checkbox" />
                      Option B
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionC-cbw">
                      <input id="optionC-cbw" name="cb-war" className="rvo-checkbox__input" type="checkbox" />
                      Option C
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionD-cbw">
                      <input id="optionD-cbw" name="cb-war" className="rvo-checkbox__input" type="checkbox" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="checkboxes-error">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text rvo-form-field__helper-text--error">
                      <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md"></div>
                      This is an error
                    </div>
                  </label>
                  <div className="rvo-checkbox__group rvo-checkbox__group--vertical rvo-custom-radio-button__group--error">
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionA-cbe">
                      <input id="optionA-cbe" name="cb-err" className="rvo-checkbox__input" type="checkbox" />
                      Option A
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionB-cbe">
                      <input id="optionB-cbe" name="cb-err" className="rvo-checkbox__input" type="checkbox" />
                      Option B
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionC-cbe">
                      <input id="optionC-cbe" name="cb-err" className="rvo-checkbox__input" type="checkbox" />
                      Option C
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionD-cbe">
                      <input id="optionD-cbe" name="cb-err" className="rvo-checkbox__input" type="checkbox" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="checkboxes-hor">
                    <span className="rvo-form-field__label-text">Field label</span>
                    <div className="rvo-form-field__helper-text">Checkboxes displayed on the same row</div>
                  </label>
                  <div className="rvo-checkbox__group rvo-checkbox__group--horizontal">
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionA-cbhor">
                      <input id="optionA-cbhor" name="cb-hor" className="rvo-checkbox__input" type="checkbox" />
                      Option A
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionB-cbhor">
                      <input id="optionB-cbhor" name="cb-hor" className="rvo-checkbox__input" type="checkbox" />
                      Option B
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionC-cbhor">
                      <input id="optionC-cbhor" name="cb-hor" className="rvo-checkbox__input" type="checkbox" />
                      Option C
                    </label>
                    <label className="rvo-checkbox rvo-checkbox--not-checked" htmlFor="optionD-cbhor">
                      <input id="optionD-cbhor" name="cb-hor" className="rvo-checkbox__input" type="checkbox" />
                      Option D
                    </label>
                  </div>
                </div>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="select">
                    <span className="rvo-form-field__label-text">Select</span>
                  </label>
                  <div className="rvo-select-wrapper">
                    <select id="field" className="utrecht-select utrecht-select--html-select">
                      <option value="1">Option #1</option>
                      <option selected value="2">
                        Option #2
                      </option>
                      <option value="3">Option #3</option>
                    </select>
                  </div>
                </div>
              </Fieldset>
              <fieldset className="utrecht-form-fieldset">
                <legend className="utrecht-form-fieldset__legend">Text input alert states</legend>
                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="warning">
                    <span className="rvo-form-field__label-text">Warning</span>
                    <div className="rvo-form-field__helper-text rvo-form-field__helper-text--warning">
                      <div className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--md"></div>
                      This is a warning
                    </div>
                  </label>
                  <input id="field" className="utrecht-textbox utrecht-textbox--html-input" value=""></input>
                </div>

                <div className="rvo-form-field">
                  <label className="rvo-form-field__label" htmlFor="error">
                    <span className="rvo-form-field__label-text">Error</span>
                    <div className="rvo-form-field__helper-text rvo-form-field__helper-text--error">
                      <div className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md"></div>
                      This is an error
                    </div>
                  </label>
                  <input
                    id="error"
                    className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--invalid"
                    aria-invalid="true"
                    value=""
                  ></input>
                </div>
              </fieldset>
              <div className="rvo-button-group">
                <button className="utrecht-button utrecht-button--secondary-action rvo-button--md">
                  Secondary action
                </button>
                <button className="utrecht-button utrecht-button--primary-action rvo-button--md">Primary action</button>
              </div>
            </form>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Formulier;
