import { ButtonGroup, CheckboxField, Fieldset, Heading, Icon, SelectField } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../../common/style.scss';

const Profiel = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--profiel">
        <div className="rvo-app-container rvo-app-container--profiel">
          <div className="rvo-app-content">
            <Heading type="h1">Profiel</Heading>
            <p>Vul je profiel in om maatregelen te krijgen die voor jou van toepassing kunnen zijn.</p>{' '}
            <Fieldset legend="">
              <SelectField
                label="Waar zit je onderneming?"
                options={[
                  { value: '1', label: 'Noordelijk kleigebied' },
                  { value: '2', label: 'Noordelijk weidegebied - veen' },
                  { value: '3', label: 'Noordelijk weidegebied - zand' },
                  { value: '4', label: 'Veenkoloniën' },
                  { value: '5', label: 'Oostelijk veehouderijgebied' },
                  { value: '6', label: 'Centraal veehouderijgebied' },
                  { value: '7', label: 'IJsselmeerpolders' },
                  { value: '8', label: 'Westelijk Holland' },
                  { value: '9', label: 'Waterland en Droogmakerijen' },
                  { value: '10', label: 'Hollands Utrechts weidegebied' },
                  { value: '11', label: 'Zuidwestelijk akkerbouwgebied' },
                  { value: '12', label: 'Zuidwest-Brabant' },
                  { value: '13', label: 'Rivierengebied' },
                  { value: '14', label: 'Zuidelijk veehouderijgebied' },
                  { value: '15', label: 'Zuid-Limburg' },
                ]}
              ></SelectField>
              <SelectField
                label="Soort onderneming"
                options={[
                  { value: '1', label: 'Akkerbouwbedrijf' },
                  { value: '2', label: 'Melkveehouderij' },
                  { value: '3', label: 'Fruitteler' },
                  { value: '4', label: 'Intensieve veeteelt' },
                  { value: '5', label: 'Gemengd' },
                ]}
              ></SelectField>
            </Fieldset>
            <div className="rvo-short-inputs">
              <label className="utrecht-form-label">Grondgebruik</label>
              <details className="rvo-short-inputs-details">
                <summary>
                  <Icon icon="delta-naar-rechts" size="sm"></Icon>Grasland
                </summary>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha blijvend grasland</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha tijdelijk grasland</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha grasland totaal</label>
                </div>
              </details>
              <details className="rvo-short-inputs-details">
                <summary>
                  <Icon icon="delta-naar-rechts" size="sm"></Icon>Bouwland
                </summary>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha klei</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha zand</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha loss</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha veen</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha bouwland totaal</label>
                </div>
              </details>
              <details className="rvo-short-inputs-details">
                <summary>
                  <Icon icon="delta-naar-rechts" size="sm"></Icon>Overig land
                </summary>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha heg, haag, struweel</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha overige houtige elementen</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha sloten en poelen</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha braak</label>
                </div>
                <div className="rvo-short-input">
                  <input
                    pattern="[0-9]*"
                    type="text"
                    className="utrecht-textbox utrecht-textbox--html-input"
                    inputMode="numeric"
                  ></input>
                  <label>ha overig land totaal</label>
                </div>
              </details>
            </div>
            <div className="rvo-short-inputs">
              <label className="utrecht-form-label">Dieren</label>

              <div className="rvo-short-input">
                <input
                  pattern="[0-9]*"
                  type="text"
                  className="utrecht-textbox utrecht-textbox--html-input"
                  inputMode="numeric"
                ></input>
                <label># melkvee</label>
              </div>
              <div className="rvo-short-input">
                <input
                  pattern="[0-9]*"
                  type="text"
                  className="utrecht-textbox utrecht-textbox--html-input"
                  inputMode="numeric"
                ></input>
                <label># varkens</label>
              </div>
              <div className="rvo-short-input">
                <input
                  pattern="[0-9]*"
                  type="text"
                  className="utrecht-textbox utrecht-textbox--html-input"
                  inputMode="numeric"
                ></input>
                <label># vleesvee</label>
              </div>
              <div className="rvo-short-input">
                <input
                  pattern="[0-9]*"
                  type="text"
                  className="utrecht-textbox utrecht-textbox--html-input"
                  inputMode="numeric"
                ></input>
                <label># jongvee</label>
              </div>
              <div className="rvo-short-input">
                <input
                  pattern="[0-9]*"
                  type="text"
                  className="utrecht-textbox utrecht-textbox--html-input"
                  inputMode="numeric"
                ></input>
                <label># overige graasdieren</label>
              </div>
            </div>
            <div className="rvo-short-inputs">
              <CheckboxField
                label="Overige gegevens"
                invalid={false}
                options={[
                  { id: 'optionA-cb', label: 'Vroeg oogsten' },
                  { id: 'optionB-cb', label: 'Inproductieve stukken land' },
                  { id: 'optionC-cb', label: 'Drogere grond' },
                ]}
              ></CheckboxField>
            </div>
            <ButtonGroup>
              <a
                onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")}
                className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
              ></a>
              <a
                onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")}
                className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >
                Opslaan
              </a>
            </ButtonGroup>
            <ul className="rvo-app-menu">
              <li className="rvo-app-menu-item">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Zoeken")} className="rvo-app-menu-item-link">
                  <Icon icon="zoek" color="hemelblauw" size="2xl" />
                  Zoeken
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Bewaard")} className="rvo-app-menu-item-link">
                  <Icon icon="favoriet" color="hemelblauw" size="2xl" />
                  Bewaard
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")} className="rvo-app-menu-item-link">
                  <Icon icon="plus" color="hemelblauw" size="2xl" />
                  Suggesties
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a
                  onClick={linkTo("Demo pagina's/de Regelmaat/Profiel")}
                  className="rvo-app-menu-item-link rvo-app-menu-item-link--active"
                >
                  <Icon icon="user" color="wit" size="2xl" />
                  Profiel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiel;
