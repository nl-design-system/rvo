import { ButtonGroup, Fieldset, Heading, SelectField } from '@nl-rvo/components';
import '../common/style.scss';

const Profiel = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--regelmaat">
      <div className="rvo-app rvo-app--profiel">
        <div className="rvo-app-content">
          <Heading type="h1">Profiel</Heading>
          <p>Vul je profiel in om maatregelen te krijgen die voor jou van toepassing kunnen zijn.</p>{' '}
          <Fieldset legend="">
            <SelectField
              label="Ik ben een"
              options={[
                { value: '1', label: 'Melkveehouder' },
                { value: '2', label: 'Option #2' },
                { value: '3', label: 'Option #3' },
              ]}
            ></SelectField>
            <SelectField
              label="Mijn grondsoort"
              options={[
                { value: '1', label: 'Veengrond' },
                { value: '2', label: 'Option #2' },
                { value: '3', label: 'Option #3' },
              ]}
            ></SelectField>
          </Fieldset>
          <ButtonGroup>
            <a href="#" className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md">
              Opslaan
            </a>
            <a href="#" className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm">
              Overslaan
            </a>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Profiel;
