import {
  Button,
  Fieldset,
  Header,
  Heading,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  FormField,
} from '@nl-rvo/component-library-react';
import '../../common/style.scss';

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
        iconPlacement="left"
        maxWidth="md"
      />
      <LayoutFlow gap="md">
        <div className="search-form">
          <Fieldset legend="">
            <div className="rvo-form-layout">
              <MaxWidthLayout size="sm">
                <div className="rvo-inline-form">
                  <FormField label="Zoekterm">
                    <FormField.Text />
                  </FormField>
                  <Button
                    kind="primary"
                    size="md"
                    label="Zoeken"
                    busy={false}
                    disabled={false}
                  ></Button>
                </div>
              </MaxWidthLayout>
            </div>
          </Fieldset>
        </div>
        <MaxWidthLayout size="sm">
          <main>
            <div className="rvo-content">
              <Heading type="h1">Search in Navigation</Heading>

              <p className="rvo-paragraph rvo-paragraph--md">
                This demopage demonstrates how a search element can be included in the navbar. As you can see this in
                included.
              </p>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default SearchInNav;
