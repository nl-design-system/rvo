import { Button } from '@nl-rvo/components/button/css/template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';

const SearchInNav = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar
        items={[
          { label: 'Home', icon: 'home', link: '#' },
          { label: 'Mijn aanvragen', icon: 'publicatie', link: '#' },
          { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
          { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />
      <LayoutColumnRow size="md">
        <div className="search-form">
          <Fieldset legend="">
            <div className="rvo-form-layout">
              <MaxWidthLayout size="sm">
                <div className="rvo-inline-form">
                  <TextInputField label="Zoekterm"></TextInputField>
                  <Button
                    kind="primary"
                    size="md"
                    label="Zoeken"
                    active={false}
                    busy={false}
                    focus={false}
                    focusVisible={false}
                    disabled={false}
                    hover={false}
                    showIcon="no"
                  ></Button>
                </div>
              </MaxWidthLayout>
            </div>
          </Fieldset>
        </div>
        <MaxWidthLayout size="sm">
          <main>
            <div className="rvo-content">
              <h1 className="utrecht-heading-1">Search in Navigation</h1>

              <p className="rvo-paragraph rvo-paragraph--md">
                This demopage demonstrates how a search element can be included in the navbar. As you can see this in
                included.
              </p>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default SearchInNav;
