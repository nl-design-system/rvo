import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <nav className="rvo-topnav rvo-topnav--md">
        <ul className="utrecht-topnav__list">
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Menu item
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--home rvo-icon--md rvo-icon--wit"></div>Menu item w/icon before
            </a>
          </li>
          <div className="rvo-topnav__spacer"></div>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Last menu item
            </a>
          </li>
        </ul>
      </nav>
      <main className="rvo-progress-tracker-active rvo-max-width-layout--md">
        <div className="rvo-progress-tracker">
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-progress-tracker__step--straight">
            Progress Tracker
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-progress-tracker__step--straight">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Step completed
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-progress-tracker__step--straight">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Step doing
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-progress-tracker__step--substep-start">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Step incomplete
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-progress-tracker__step--straight">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              First sub-step
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--doing rvo-progress-tracker__step--straight">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Sub-step doing
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--completed rvo-progress-tracker__step--straight">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Sub-step completed
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--disabled rvo-progress-tracker__step--straight">
            Sub-step disabled
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-progress-tracker__step--substep-end">
            <a href="#" className="rvo-link rvo-progress-tracker__step-link">
              Last sub-step
            </a>
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-progress-tracker__step--straight">
            Step disabled
          </div>
          <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end">
            Process completed
          </div>
        </div>
        <div className="rvo-form">
          <a href="#" className="rvo-link">
            <div className="rvo-link__icon rvo-link__icon--before rvo-icon rvo-icon--sm rvo-icon--hemelblauw rvo-icon--terug"></div>
            Terug
          </a>
          <div className="intro">
            <h1 className="utrecht-heading-1">Heading</h1>
          </div>
          <form className="rvo-layout-spacer rvo-layout-spacer--lg">
            <fieldset className="utrecht-form-fieldset rvo-layout-spacer rvo-layout-spacer--md">
              <legend className="utrecht-form-fieldset__legend">Keyboard inputs</legend>
              <div className="rvo-layout-spacer rvo-layout-spacer--lg">
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="text">
                    <span className="rvo-form-field__label-text">Text</span>
                  </label>
                  <input type="text" id="text" className="utrecht-textbox utrecht-textbox--html-input"></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="text-w-helper-text">
                    <span className="rvo-form-field__label-text">Text with helper text</span>
                    <div className="rvo-form-field__helper-text">
                      This is a helper text which can be used for instructions.
                    </div>
                  </label>
                  <input
                    type="text"
                    id="text-w-helper-text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                  ></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="text-w-expandable-helper-text">
                    <span className="rvo-form-field__label-text">Text with expandable helper text</span>
                    <div className="rvo-form-field__helper-text">
                      <details className="rvo-expandable-text">
                        <summary className="rvo-expandable-text__summary">Expandable helper text</summary>
                        <span className="rvo-expandable-text__details">
                          When instructions run over multiple lines an expandable helper text can be used.
                        </span>
                      </details>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="text-w-expandable-helper-text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                  ></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="text-disabled">
                    <span className="rvo-form-field__label-text">Text disabled</span>
                  </label>
                  <input
                    type="text"
                    id="text-disabled"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    disabled
                  ></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="text-disabled-w-value">
                    <span className="rvo-form-field__label-text">Text disabled with value</span>
                  </label>
                  <input
                    type="text"
                    id="text-disabled-w-value"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    value="Value"
                    disabled
                  ></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="number">
                    <span className="rvo-form-field__label-text">Number</span>
                  </label>
                  <input
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  ></input>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="textarea">
                    <span className="rvo-form-field__label-text">Textarea</span>
                  </label>
                  <textarea id="textarea" className="utrecht-textbox utrecht-textbox--html-input"></textarea>
                </div>
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
                  <label className="rvo-form-field__label" htmlFor="file">
                    <span className="rvo-form-field__label-text">File</span>
                  </label>
                  <input type="file" className="rvo-file" multiple></input>
                </div>
              </div>
            </fieldset>
            <fieldset className="utrecht-form-fieldset rvo-layout-spacer--md">
              <legend className="utrecht-form-fieldset__legend">Options</legend>
              <div className="rvo-layout-spacer rvo-layout-spacer--lg">
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--sm">
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
                <div className="rvo-form-field rvo-layout-spacer rvo-layout-spacer--xs">
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
              </div>
            </fieldset>
            <fieldset className="utrecht-form-fieldset rvo-layout-spacer rvo-layout-spacer--md">
              <legend className="utrecht-form-fieldset__legend">Text input alert states</legend>
              <div className="rvo-layout-spacer rvo-layout-spacer--lg">
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
    </div>
  );
};

export default Formulier;
