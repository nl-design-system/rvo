import { Button, Fieldset, Header, LayoutFlow, MaxWidthLayout, MenuBar, TextInputField } from '@nl-rvo/components';
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
      <LayoutFlow size="md">
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
      </LayoutFlow>
    </div>
  );
};

export default SearchInNav;
