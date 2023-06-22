import { ButtonGroup, CheckboxField, Fieldset, Heading, Icon, SelectField } from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import '../common/style.scss';

const Zoeken = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--profiel">
        <div className="rvo-app-container rvo-app-container--profiel">
          <div className="rvo-app-content">
            <Heading type="h1">Zoeken</Heading>
            <p>Vul je profiel in om maatregelen te krijgen die voor jou van toepassing kunnen zijn.</p>{' '}
            <Fieldset legend="">
              <CheckboxField
                label="Ik ben op zoek naar maatregelen"
                invalid={false}
                options={[
                  { id: 'optionA-cb', label: 'die eenvoudig te realiseren zijn' },
                  { id: 'optionB-cb', label: 'die financieel interessant zijn' },
                  { id: 'optionC-cb', label: 'die duurzaam zijn' },
                ]}
              ></CheckboxField>
              <SelectField
                label="Duurzaam op het gebied van"
                options={[
                  { value: '1', label: 'Klimaat' },
                  { value: '2', label: 'Bodem en lucht' },
                  { value: '3', label: 'Water' },
                  { value: '4', label: 'Landschap' },
                  { value: '5', label: 'Biodiversiteit' },
                  { value: '6', label: 'Op alle gebieden' },
                ]}
              ></SelectField>
            </Fieldset>
            <ButtonGroup>
              <a
                onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")}
                className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
              ></a>
              <a
                onClick={linkTo("Demo pagina's/de Regelmaat/Maatregelen")}
                className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >
                Zoeken
              </a>
            </ButtonGroup>
            <ul className="rvo-app-menu">
              <li className="rvo-app-menu-item">
                <a
                  onClick={linkTo("Demo pagina's/de Regelmaat/Zoeken")}
                  className="rvo-app-menu-item-link rvo-app-menu-item-link--active"
                >
                  <Icon icon="zoek" color="wit" size="2xl" />
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
                <a onClick={linkTo("Demo pagina's/de Regelmaat/Profiel")} className="rvo-app-menu-item-link ">
                  <Icon icon="user" color="hemelblauw" size="2xl" />
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

export default Zoeken;
