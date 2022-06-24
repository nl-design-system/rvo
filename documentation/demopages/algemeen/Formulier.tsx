import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-layout--md">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  Menu item
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Menu item with icon
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  Last menu item
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium rvo-menu-link--toggle">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--menu"></span>Menu
                  toggle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="rvo-progress-tracker-active rvo-max-width-layout--md">
        <div className="rvo-progress-tracker rvo-progress-tracker--vertical">
          <div className="rvo-main-steps">
            <div className="rvo-process-step rvo-process-step--process-name">Progress tracker</div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--completed">
              <a href="#" className="rvo-process-step-link">
                Step completed
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--doing">
              <a href="#" className="rvo-process-step-link">
                Step doing
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                Step incomplete
              </a>
            </div>
          </div>
          <div className="rvo-sub-steps">
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--sm rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                First sub-step
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--sm rvo-process-step--doing">
              <a href="#" className="rvo-process-step-link">
                Sub-step doing
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--sm rvo-process-step--completed">
              <a href="#" className="rvo-process-step-link">
                Sub-step completed
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--sm rvo-process-step--incomplete">
              <span className="rvo-process-step-link rvo-process-step-link--disabled">Sub-step disabled</span>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--sm rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                Last sub-step
              </a>
            </div>
          </div>
          <div className="rvo-main-steps">
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--md rvo-process-step--incomplete">
              <span className="rvo-process-step-link rvo-process-step-link--disabled">Step disabled</span>
            </div>
            <div className="rvo-process-step rvo-process-step--process-completed">Process completed</div>
          </div>
          <button className="utrecht-button rvo-button--quaternary-action rvo-button--sm" type="button">
            <span className="rvo-button__icon--quaternary-action rvo-icon rvo-icon--downloaden rvo-icon--sm"></span>
            Opslaan
          </button>
        </div>
        <div className="rvo-form">
          <div className="intro">
            <a href="#" className="rvo-link">
              <span className="rvo-link__icon rvo-link__icon--before rvo-icon rvo-icon--md rvo-icon--hemelblauw rvo-icon--terug"></span>
              Terug
            </a>
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Heading</h1>
          </div>
          <form>
            <fieldset>
              <h2 className="utrecht-heading-2 utrecht-heading-2--distanced">Keyboard inputs</h2>
              <div className="rvo-form-field">
                <label htmlFor="text">Text</label>
                <input type="text" id="text"></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="text-w-helper-text">
                  Text with helper text
                  <div className="rvo-helper-text">This is a helper text which can be used for instructions.</div>
                </label>
                <input type="text" id="text-w-helper-text"></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="text-w-expandable-helper-text">
                  Text with expandable helper text
                  <details className="rvo-helper-text">
                    <summary>Expandable helper text</summary>
                    <span className="rvo-details-text">
                      When instructions run over multiple lines an expandable helper text can be used.
                    </span>
                  </details>
                </label>
                <input type="text" id="text-w-expandable-helper-text"></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="text-disabled">Text disabled</label>
                <input type="text" id="text-disabled" disabled></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="text-disabled-w-value">Text disabled with value</label>
                <input type="text" id="text-disabled-w-value" value="Value" disabled></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="number">Number</label>
                <input type="text" inputMode="numeric" pattern="[0-9]*" id="number"></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="textarea">Textarea</label>
                <textarea id="textarea"></textarea>
              </div>
            </fieldset>
            <fieldset>
              <h2 className="utrecht-heading-2 utrecht-heading-2--distanced">Options</h2>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>Legend</legend>
                <div className="rvo-options">
                  <label htmlFor="option-a" className="rvo-option">
                    <input type="radio" id="option-a" name="radio-options"></input>Option A
                  </label>
                  <label htmlFor="option-b" className="rvo-option">
                    <input type="radio" id="option-b" name="radio-options"></input>Option B
                  </label>
                  <label htmlFor="option-c" className="rvo-option">
                    <input type="radio" id="option-c" name="radio-options"></input>Option C
                  </label>
                </div>
              </div>
              <div className="rvo-form-field rvo-form-field--options rvo-form-field--options-error">
                <legend>
                  Legend
                  <span className="rvo-helper-text rvo-helper-text--error">
                    <span className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md" />
                    This is an error
                  </span>
                </legend>
                <div className="rvo-options">
                  <label htmlFor="option-error-a" className="rvo-option">
                    <input type="radio" id="option-error-a" name="radio-options-error"></input>Option A
                  </label>
                  <label htmlFor="option-error-b" className="rvo-option">
                    <input type="radio" id="option-error-b" name="radio-options-error"></input>Option B
                  </label>
                  <label htmlFor="option-error-c" className="rvo-option">
                    <input type="radio" id="option-error-c" name="radio-options-error"></input>Option C
                  </label>
                </div>
              </div>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>
                  Legend
                  <span className="rvo-helper-text">Radio buttons displayed on the same row.</span>
                </legend>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="option-row-a" className="rvo-option">
                    <input type="radio" id="option-row-a" name="radio-options-row"></input>Option A
                  </label>
                  <label htmlFor="option-row-b" className="rvo-option">
                    <input type="radio" id="option-row-b" name="radio-options-row"></input>Option B
                  </label>
                  <label htmlFor="option-row-c" className="rvo-option">
                    <input type="radio" id="option-row-c" name="radio-options-row"></input>Option C
                  </label>
                </div>
              </div>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>Legend</legend>
                <div className="rvo-options">
                  <label htmlFor="checkbox-option-a" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-a" name="checkboxes-options"></input>Option A
                  </label>
                  <label htmlFor="checkbox-option-b" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-b" name="checkboxes-options"></input>Option B
                  </label>
                  <label htmlFor="checkbox-option-c" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-c" name="checkboxes-options"></input>Option C
                  </label>
                </div>
              </div>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>
                  Legend
                  <span className="rvo-helper-text">Checkboxes displayed on the same row.</span>
                </legend>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="checkbox-option-row-a" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-row-a" name="checkboxes-options-row"></input>Option A
                  </label>
                  <label htmlFor="checkbox-option-row-b" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-row-b" name="checkboxes-options-row"></input>Option B
                  </label>
                  <label htmlFor="checkbox-option-row-c" className="rvo-option">
                    <input type="checkbox" id="checkbox-option-row-c" name="checkboxes-options-row"></input>Option C
                  </label>
                </div>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="Select">Select</label>
                <select id="select">
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </select>
              </div>
            </fieldset>
            <fieldset>
              <div className="rvo-form-field">
                <label htmlFor="warning-text">
                  Warning
                  <span className="rvo-helper-text rvo-helper-text--warning">
                    <span className="rvo-icon rvo-icon--waarschuwing rvo-status-icon--waarschuwing rvo-icon--md" />
                    This is a warning
                  </span>
                </label>
                <input type="text" id="warning-text"></input>
              </div>
              <div className="rvo-form-field">
                <label htmlFor="warning-error">
                  Error
                  <span className="rvo-helper-text rvo-helper-text--error">
                    <span className="rvo-icon rvo-icon--foutmelding rvo-status-icon--foutmelding rvo-icon--md" />
                    This is an error
                  </span>
                </label>
                <input type="text" id="error-text" className="rvo-input-error"></input>
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
