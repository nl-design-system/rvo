import {
  Button,
  Fieldset,
  Header,
  Heading,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  TextInputField,
} from '@nl-rvo/components';
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
        iconPlacement="before"
        maxWidth="md"
      />
      <LayoutFlow gap="md">
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
