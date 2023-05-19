import { ButtonGroup, Fieldset, Heading, Icon, SelectField } from '@nl-rvo/components';
import '../common/style.scss';

const ProfielIntro = () => {
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
            <ButtonGroup>
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
              >
                Overslaan
              </a>
              <a
                href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >
                Opslaan
              </a>
            </ButtonGroup>
            <ul className="rvo-app-menu">
              <li className="rvo-app-menu-item">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--zoeken&viewMode=story"
                  className="rvo-app-menu-item-link"
                >
                  <Icon icon="zoek" color="hemelblauw" size="2xl" />
                  Zoeken
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--bewaard&viewMode=story"
                  className="rvo-app-menu-item-link"
                >
                  <Icon icon="favoriet" color="hemelblauw" size="2xl" />
                  Bewaard
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--maatregelen&viewMode=story"
                  className="rvo-app-menu-item-link"
                >
                  <Icon icon="plus" color="hemelblauw" size="2xl" />
                  Suggesties
                </a>
              </li>
              <li className="rvo-app-menu-item">
                <a
                  href="iframe.html?args=&id=demo-pagina-s-de-regelmaat--profiel&viewMode=story"
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

export default ProfielIntro;
