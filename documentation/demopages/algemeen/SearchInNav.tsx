import { Button } from '@nl-rvo/components/button/css/template';
import { TextInputField } from '@nl-rvo/components/form-field-textinput/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';
import { Fieldset, FormField } from '@utrecht/component-library-react';
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
          <div className="rvo-form-layout">
            <MaxWidthLayout size="sm">
              <div className="rvo-inline-form">
                <Fieldset className={'utrecht-form-fieldset--grid'}>
                  <FormField className="utrecht-form-field--xl">
                    <TextInputField label="Zoekterm"></TextInputField>
                  </FormField>
                  <FormField className="utrecht-form-field--sm">
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
                  </FormField>
                </Fieldset>
              </div>
            </MaxWidthLayout>
          </div>
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
