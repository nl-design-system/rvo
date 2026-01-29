import { Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/tabs.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Tabs = () => {
  return (
    <div className="rvo-demo-page rvo-tabs-demopage">
      <Header link="#" />
      <LayoutFlow gap="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="before"
        />
        <LayoutFlow gap="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
            <Heading type="h1">Tabs demo page</Heading>
            {/* <div className="rvo-tabs">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 1
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-2"
                    className="rvo-link rvo-tabs__item-link rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 2
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-1">
                <Heading type="h2">Tab 1</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-1b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 1
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 2
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-2b">
                <Heading type="h2">Tab 2</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>*/}

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 1
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-2"
                    className="rvo-link rvo-tabs__item-link rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 2
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-1">
                <Heading type="h2">Tab 1</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-1b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 1
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 2
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-2b">
                <Heading type="h2">Tab 2</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>
          </main>
          <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--md">
            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 1
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-2"
                    className="rvo-link rvo-tabs__item-link rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 2
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="rvo-table--responsive">
              <table className="rvo-table">
                <thead className="rvo-table-head">
                  <tr className="rvo-table-row">
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--md"
                      aria-sort="descending"
                    >
                      <button className="rvo-table-header__sortable-container" type="button" data-index="0">
                        Title
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--active-sort"
                      aria-sort="ascending"
                    >
                      <button className="rvo-table-header__sortable-container" type="button" data-index="1">
                        Text
                        <svg
                          width="39"
                          height="48"
                          viewBox="0 0 39 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <path
                            d="M12.7728 0.837455C12.4072 0.325207 11.8411 0.0171769 11.2348 0.000703278C10.6287 -0.0158624 10.0484 0.260969 9.65853 0.752418L0.879879 11.8005C0.252827 12.5881 0.253521 13.7403 0.881355 14.5279C1.50901 15.313 2.57945 15.5091 3.41717 14.984L7.90141 12.1819L7.92233 45.8789C7.92233 47.6365 9.26541 48 10.9231 48C12.5809 48 13.924 47.6365 13.924 45.8789L13.9173 12.3081L18.316 15.3901C19.1286 15.9587 20.2057 15.8213 20.8707 15.0728C21.5357 14.3205 21.5922 13.1701 21.0042 12.3492L12.7728 0.837455Z"
                            fill="var(--rvo-color-hemelblauw)"
                          ></path>
                          <path
                            d="M29.5795 47.3719C29.8406 47.7561 30.245 47.9871 30.6781 47.9995C31.111 48.0119 31.5255 47.8043 31.804 47.4357L38.0744 39.1496C38.5223 38.5589 38.5218 37.6948 38.0734 37.1041C37.625 36.5152 36.8605 36.3682 36.2621 36.762L33.0591 38.8636L33.0441 13.5908C33.0441 12.2726 32.0848 12 30.9007 12C29.7166 12 28.7572 12.2726 28.7572 13.5908L28.762 38.7689L25.6201 36.4574C25.0397 36.031 24.2703 36.134 23.7953 36.6954C23.3203 37.2597 23.2799 38.1224 23.6999 38.7381L29.5795 47.3719Z"
                            fill="var(--rvo-color-grijs-800)"
                          ></path>
                        </svg>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--numeric"
                      aria-sort="descending"
                    >
                      <button
                        className="rvo-table-header__sortable-container rvo-table-header__sortable-container--numeric"
                        type="button"
                        data-index="2"
                      >
                        Price ($)
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                    <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                      <button className="rvo-table-header__sortable-container" type="button" data-index="3">
                        Link
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="rvo-table-body">
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 1</td>
                    <td className="rvo-table-cell">Text value 1</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 1
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 2</td>
                    <td className="rvo-table-cell">Text value 2</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">12.50</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 2
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 3</td>
                    <td className="rvo-table-cell">Text value 3</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">90</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 3
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 4</td>
                    <td className="rvo-table-cell">Text value 4</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">1.50</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 4
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-1"
                    className="rvo-link rvo-tabs__item-link rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 1
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 2
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="rvo-table--responsive">
              <table className="rvo-table">
                <thead className="rvo-table-head">
                  <tr className="rvo-table-row">
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--md"
                      aria-sort="descending"
                    >
                      <button className="rvo-table-header__sortable-container" type="button" data-index="0">
                        Title
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--active-sort"
                      aria-sort="ascending"
                    >
                      <button className="rvo-table-header__sortable-container" type="button" data-index="1">
                        Text
                        <svg
                          width="39"
                          height="48"
                          viewBox="0 0 39 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <path
                            d="M12.7728 0.837455C12.4072 0.325207 11.8411 0.0171769 11.2348 0.000703278C10.6287 -0.0158624 10.0484 0.260969 9.65853 0.752418L0.879879 11.8005C0.252827 12.5881 0.253521 13.7403 0.881355 14.5279C1.50901 15.313 2.57945 15.5091 3.41717 14.984L7.90141 12.1819L7.92233 45.8789C7.92233 47.6365 9.26541 48 10.9231 48C12.5809 48 13.924 47.6365 13.924 45.8789L13.9173 12.3081L18.316 15.3901C19.1286 15.9587 20.2057 15.8213 20.8707 15.0728C21.5357 14.3205 21.5922 13.1701 21.0042 12.3492L12.7728 0.837455Z"
                            fill="var(--rvo-color-hemelblauw)"
                          ></path>
                          <path
                            d="M29.5795 47.3719C29.8406 47.7561 30.245 47.9871 30.6781 47.9995C31.111 48.0119 31.5255 47.8043 31.804 47.4357L38.0744 39.1496C38.5223 38.5589 38.5218 37.6948 38.0734 37.1041C37.625 36.5152 36.8605 36.3682 36.2621 36.762L33.0591 38.8636L33.0441 13.5908C33.0441 12.2726 32.0848 12 30.9007 12C29.7166 12 28.7572 12.2726 28.7572 13.5908L28.762 38.7689L25.6201 36.4574C25.0397 36.031 24.2703 36.134 23.7953 36.6954C23.3203 37.2597 23.2799 38.1224 23.6999 38.7381L29.5795 47.3719Z"
                            fill="var(--rvo-color-grijs-800)"
                          ></path>
                        </svg>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="rvo-table-header rvo-table-header--sortable rvo-table-header--numeric"
                      aria-sort="descending"
                    >
                      <button
                        className="rvo-table-header__sortable-container rvo-table-header__sortable-container--numeric"
                        type="button"
                        data-index="2"
                      >
                        Price ($)
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                    <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                      <button className="rvo-table-header__sortable-container" type="button" data-index="3">
                        Link
                        <svg
                          width="33"
                          height="38"
                          viewBox="0 0 33 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rvo-table-header__sorting-icon"
                        >
                          <g clip-path="url(#clip0_5888_77)">
                            <path
                              d="M23.5795 36.3719C23.8406 36.7561 24.245 36.9871 24.6781 36.9995C25.111 37.0119 25.5255 36.8043 25.804 36.4357L32.0744 28.1496C32.5223 27.5589 32.5218 26.6948 32.0734 26.1041C31.625 25.5152 30.8605 25.3682 30.2621 25.762L27.0591 27.8636L27.0441 2.59079C27.0441 1.27264 26.0848 1 24.9007 1C23.7166 1 22.7572 1.27264 22.7572 2.59079L22.762 27.7689L19.6201 25.4574C19.0397 25.031 18.2703 25.134 17.7953 25.6954C17.3203 26.2597 17.2799 27.1224 17.6999 27.7381L23.5795 36.3719Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                            <path
                              d="M9.24057 1.62809C8.97942 1.24391 8.57505 1.01288 8.14198 1.00053C7.70909 0.988103 7.29461 1.19573 7.0161 1.56431L0.745638 9.85041C0.297743 10.4411 0.298239 11.3052 0.746692 11.8959C1.19502 12.4848 1.95962 12.6318 2.55799 12.238L5.76102 10.1364L5.77596 35.4092C5.77596 36.7274 6.7353 37 7.91939 37C9.10349 37 10.0629 36.7274 10.0629 35.4092L10.0581 10.2311L13.2 12.5426C13.7804 12.969 14.5498 12.866 15.0248 12.3046C15.4998 11.7403 15.5402 10.8776 15.1201 10.2619L9.24057 1.62809Z"
                              fill="var(--rvo-color-grijs-800)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_5888_77">
                              <rect width="32" height="38" fill="white" transform="matrix(-1 0 0 -1 32.41 38)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="rvo-table-body">
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 1</td>
                    <td className="rvo-table-cell">Text value 1</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 1
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 2</td>
                    <td className="rvo-table-cell">Text value 2</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">12.50</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 2
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 3</td>
                    <td className="rvo-table-cell">Text value 3</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">90</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 3
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value 4</td>
                    <td className="rvo-table-cell">Text value 4</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">1.50</td>
                    <td className="rvo-table-cell">
                      <a href="#" className="rvo-link">
                        Link 4
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
            <div>
              <div className="rvo-card rvo-card--outline rvo-card--padding--md">
                <div className="rvo-card__content">
                  <div className="rvo-tabs rvo-tabs--subtle">
                    <ul
                      className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                      role="tablist"
                      aria-label="Tabs"
                    >
                      <li role="presentation" className="rvo-tabs__item">
                        <a
                          href="#tab-1"
                          className="rvo-link rvo-tabs__item-link rvo-link--normal"
                          role="tab"
                          aria-selected="false"
                        >
                          Verzonden documenten
                        </a>
                      </li>
                      <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                        Ontvangen documenten
                      </li>
                    </ul>
                  </div>
                  <div className="rvo-table--responsive">
                    <table className="rvo-table">
                      <tbody className="rvo-table-body">
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <strong>Aanvraagformulier</strong>
                          </td>
                          <td className="rvo-table-cell">15 dec 2025</td>
                          <td className="rvo-table-cell" style={{ textAlign: 'right' }}>
                            <a href="#" className="rvo-link">
                              Openen
                            </a>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <strong>Subsidieregeling</strong>
                          </td>
                          <td className="rvo-table-cell">8 nov 2025</td>
                          <td className="rvo-table-cell" style={{ textAlign: 'right' }}>
                            <a href="#" className="rvo-link">
                              Openen
                            </a>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <strong>Financieringswijzer</strong>
                          </td>
                          <td className="rvo-table-cell">3 okt 2025</td>
                          <td className="rvo-table-cell" style={{ textAlign: 'right' }}>
                            <a href="#" className="rvo-link">
                              Openen
                            </a>
                          </td>
                        </tr>
                        <tr className="rvo-table-row">
                          <td className="rvo-table-cell">
                            <strong>Beleidsimplementatie</strong>
                          </td>
                          <td className="rvo-table-cell">22 sep 2025</td>
                          <td className="rvo-table-cell" style={{ textAlign: 'right' }}>
                            <a href="#" className="rvo-link">
                              Openen
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default Tabs;
