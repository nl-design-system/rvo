import { Footer, Header, MenuBar } from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/src/index.scss';
import '../../common/style.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const ExpendableRows = () => {
  return (
    <body className="rvo-theme rvo-responsive rvo-demo-page-autocomplete rvo-demo-page">
      <Header />

      <MenuBar
        items={[
          {
            align: 'right',
            label: 'Hulp & Contact',
            link: '#',
          },
          {
            align: 'right',
            label: 'English',
            icon: 'wereldbol',
            link: '#',
          },
          {
            align: 'right',
            label: 'Boer Overveen B.V',
            link: '#',
            active: true,
            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
      />

      <main className="rvo-padding-block-start--2xl rvo-padding-block-end--2xl rvo-max-width-layout rvo-max-width-layout--sm">
        <input
          id="field"
          placeholder=""
          type="text"
          className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--lg utrecht-textbox--focus utrecht-textbox--focus-visible"
          dir="auto"
          value="isde"
        />
        <div className="rvo-autocomplete-focus-border">
          <div className="rvo-autocomplete-dropdown">
            <hr className="rvo-hr" />
            <ul className="rvo-autocomplete-dropdown-suggestions">
              <li className="rvo-autocomplete-dropdown-suggestion">
                <span className="rvo-autocomplete-dropdown-suggestion__text">isde</span>
              </li>
              <li className="rvo-autocomplete-dropdown-suggestion">
                <span className="rvo-autocomplete-dropdown-suggestion__text">
                  isde <strong>2021</strong>
                </span>
              </li>
              <li className="rvo-autocomplete-dropdown-suggestion">
                <span className="rvo-autocomplete-dropdown-suggestion__text">
                  isde <strong>2022</strong>
                </span>
              </li>
            </ul>
            <hr className="rvo-hr" />
            <h3 className="utrecht-heading-1 rvo-padding-block-end--2xs">Direct naar</h3>
            <ul className="rvo-autocomplete-dropdown-links">
              <li className="rvo-autocomplete-dropdown-link">
                <a className="rvo-autocomplete-dropdown-link__text rvo-link rvo-link--no-underline" href="#">
                  ISDE: voor monumenteigenaren
                </a>
              </li>
              <li className="rvo-autocomplete-dropdown-link">
                <a className="rvo-autocomplete-dropdown-link__text rvo-link rvo-link--no-underline" href="#">
                  ISDE: Subsidie voor verduurzaming van uw woning
                </a>
              </li>
              <li className="rvo-autocomplete-dropdown-link">
                <a className="rvo-autocomplete-dropdown-link__text rvo-link rvo-link--no-underline" href="#">
                  ISDE: Aansluiting op een warmtenet woningeigenaren
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default ExpendableRows;
