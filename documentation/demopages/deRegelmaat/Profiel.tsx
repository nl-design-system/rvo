import { ButtonGroup, CheckboxField, Fieldset, Heading, Icon, SelectField } from '@nl-rvo/components';
import '../common/style.scss';

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
                label="Ik ben een"
                options={[
                  { value: '1', label: 'Melkveehouder' },
                  { value: '2', label: 'Akkerbouwer' },
                  { value: '3', label: 'Fruitteler' },
                ]}
              ></SelectField>
              <SelectField
                label="Mijn grondsoort"
                options={[
                  { value: '1', label: 'Veengrond' },
                  { value: '2', label: 'Grasland' },
                  { value: '3', label: 'Zandgrond' },
                ]}
              ></SelectField>

              <CheckboxField
                label="Ik ben op zoek naar maatregelen"
                invalid={false}
                options={[
                  { id: 'optionA-cb', label: 'die eenvoudig te realiseren zijn' },
                  { id: 'optionB-cb', label: 'die duurzaam zijn' },
                  { id: 'optionC-cb', label: 'die financieel interessant zijn' },
                ]}
              ></CheckboxField>
            </Fieldset>
            <ButtonGroup>
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >
                Opslaan
              </a>
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
              >
                Overslaan
              </a>
            </ButtonGroup>
            <ul className="rvo-app-menu">
              <li className="rvo-app-menu-item">
                <a href="#" className="rvo-app-menu-item-link">
                  <Icon icon="zoek" color="hemelblauw" size="2xl" />
                  Zoeken
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a href="#" className="rvo-app-menu-item-link">
                  <Icon icon="favoriet" color="hemelblauw" size="2xl" />
                  Bewaard
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a href="#" className="rvo-app-menu-item-link">
                  <Icon icon="plus" color="hemelblauw" size="2xl" />
                  Suggesties
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--profiel&viewMode=story"
                  className="rvo-app-menu-item-link"
                >
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

export default Profiel;
