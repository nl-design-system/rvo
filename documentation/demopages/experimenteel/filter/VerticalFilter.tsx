import {
  Button,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  PageNumberNavigation,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../common/filter.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const VerticalFilter = () => {
  return (
    <body className="rvo-theme rvo-filter-body">
      <Header link="#" />
      <LayoutFlow gap="xl">
        <LayoutFlow gap="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '/iframe.html?id=demo-pagina-s-projects-rvo-nl-home--default&viewMode=story',
              },
              {
                label: 'Programmes',

                link: '#',
              },
              {
                label: 'Projects',
                link: '#',
              },
              {
                align: 'right',
                icon: 'zoek',
                label: 'Search',
                link: '#',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />

          <div className="rvo-filter-wrapper rvo-max-width-layout rvo-max-width-layout--md">
            <LayoutFlow row={true}>
              <div className="rvo-filter">
                <Fieldset legend="">
                  <details open className="rvo-collapsible-filter">
                    <summary className="rvo-collapsible-filter-label rvo-collapsible-filter-header">
                      <Heading type="h3" noMargins>
                        Filter projects
                      </Heading>
                    </summary>

                    <form className="rvo-form">
                      <LayoutFlow gap="xl">
                        <TextInputField label="Search projects" value="study"></TextInputField>

                        <LayoutFlow row={true} gap="sm" alignItems="start">
                          <SelectField
                            label="From (year)"
                            options={[
                              {
                                value: '1998',
                                label: '1998',
                              },
                              {
                                value: '1999',
                                label: '1999',
                              },
                              {
                                value: '2000',
                                label: '2000',
                              },
                              {
                                value: '2001',
                                label: '2001',
                              },
                              {
                                value: '2002',
                                label: '2002',
                              },
                              {
                                value: '2003',
                                label: '2003',
                              },
                            ]}
                          ></SelectField>
                          <SelectField
                            label="Till (year)"
                            options={[
                              {
                                value: '1998',
                                label: '1998',
                              },
                              {
                                value: '1999',
                                label: '1999',
                              },
                              {
                                value: '2000',
                                label: '2000',
                              },
                              {
                                value: '2001',
                                label: '2001',
                              },
                              {
                                value: '2002',
                                label: '2002',
                              },
                              {
                                value: '2003',
                                label: '2003',
                              },
                            ]}
                          ></SelectField>
                          <Button />
                        </LayoutFlow>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">Filter status</summary>

                          <CheckboxField
                            label="Status"
                            invalid={false}
                            options={[
                              { id: 'Cancelled', label: 'Cancelled' },
                              { id: 'Closed', label: 'Closed' },
                              { id: 'Finalised', label: 'Finalised' },
                              { id: 'Implementation', label: 'Implementation' },
                              { id: 'Pipeline/identification', label: 'Pipeline/identification' },
                            ]}
                          ></CheckboxField>
                        </details>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">Filter countries</summary>
                          <TextInputField label="Search countries"></TextInputField>
                          <div className="rvo-collapsible-filter--scroll">
                            <CheckboxField
                              label="Countries"
                              invalid={false}
                              options={[
                                { id: 'Afghanistan', label: 'Afghanistan' },
                                { id: 'Albania', label: 'Albania' },
                                { id: 'Algeria', label: 'Algeria' },
                                { id: 'Andorra', label: 'Andorra' },
                                { id: 'Angola', label: 'Angola' },
                                { id: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
                                { id: 'Argentina', label: 'Argentina' },
                                { id: 'Armenia', label: 'Armenia' },
                                { id: 'Australia', label: 'Australia' },
                                { id: 'Austria', label: 'Austria' },
                                { id: 'Azerbaijan', label: 'Azerbaijan' },
                                { id: 'Bahamas', label: 'Bahamas' },
                                { id: 'Bahrain', label: 'Bahrain' },
                                { id: 'Bangladesh', label: 'Bangladesh' },
                                { id: 'Barbados', label: 'Barbados' },
                                { id: 'Belarus', label: 'Belarus' },
                                { id: 'Belgium', label: 'Belgium' },
                                { id: 'Belize', label: 'Belize' },
                                { id: 'Benin', label: 'Benin' },
                                { id: 'Bhutan', label: 'Bhutan' },
                                { id: 'Bolivia', label: 'Bolivia' },
                                { id: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
                                { id: 'Botswana', label: 'Botswana' },
                                { id: 'Brazil', label: 'Brazil' },
                                { id: 'Brunei', label: 'Brunei' },
                                { id: 'Bulgaria', label: 'Bulgaria' },
                                { id: 'Burkina Faso', label: 'Burkina Faso' },
                                { id: 'Burundi', label: 'Burundi' },
                                { id: 'Cabo Verde', label: 'Cabo Verde' },
                                { id: 'Cambodia', label: 'Cambodia' },
                                { id: 'Cameroon', label: 'Cameroon' },
                                { id: 'Canada', label: 'Canada' },
                                { id: 'Central African Republic', label: 'Central African Republic' },
                                { id: 'Chad', label: 'Chad' },
                                { id: 'Chile', label: 'Chile' },
                                { id: 'China', label: 'China' },
                                { id: 'Colombia', label: 'Colombia' },
                                { id: 'Comoros', label: 'Comoros' },
                                { id: 'Congo', label: 'Congo' },
                                { id: 'Costa Rica', label: 'Costa Rica' },
                                { id: 'Croatia', label: 'Croatia' },
                                { id: 'Cuba', label: 'Cuba' },
                                { id: 'Cyprus', label: 'Cyprus' },
                                { id: 'Czech Republic', label: 'Czech Republic' },
                                { id: 'Denmark', label: 'Denmark' },
                                { id: 'Djibouti', label: 'Djibouti' },
                                { id: 'Dominica', label: 'Dominica' },
                                { id: 'Dominican Republic', label: 'Dominican Republic' },
                                { id: 'East Timor', label: 'East Timor' },
                                { id: 'Ecuador', label: 'Ecuador' },
                                { id: 'Egypt', label: 'Egypt' },
                                { id: 'El Salvador', label: 'El Salvador' },
                                { id: 'Equatorial Guinea', label: 'Equatorial Guinea' },
                                { id: 'Eritrea', label: 'Eritrea' },
                                { id: 'Estonia', label: 'Estonia' },
                                { id: 'Eswatini', label: 'Eswatini' },
                                { id: 'Ethiopia', label: 'Ethiopia' },
                                { id: 'Fiji', label: 'Fiji' },
                                { id: 'Finland', label: 'Finland' },
                                { id: 'France', label: 'France' },
                                { id: 'Gabon', label: 'Gabon' },
                                { id: 'Gambia', label: 'Gambia' },
                                { id: 'Georgia', label: 'Georgia' },
                                { id: 'Germany', label: 'Germany' },
                                { id: 'Ghana', label: 'Ghana' },
                                { id: 'Greece', label: 'Greece' },
                                { id: 'Grenada', label: 'Grenada' },
                                { id: 'Guatemala', label: 'Guatemala' },
                                { id: 'Guinea', label: 'Guinea' },
                                { id: 'Guinea-Bissau', label: 'Guinea-Bissau' },
                                { id: 'Guyana', label: 'Guyana' },
                                { id: 'Haiti', label: 'Haiti' },
                                { id: 'Honduras', label: 'Honduras' },
                                { id: 'Hungary', label: 'Hungary' },
                                { id: 'Iceland', label: 'Iceland' },
                                { id: 'India', label: 'India' },
                                { id: 'Indonesia', label: 'Indonesia' },
                                { id: 'Iran', label: 'Iran' },
                                { id: 'Iraq', label: 'Iraq' },
                                { id: 'Ireland', label: 'Ireland' },
                                { id: 'Israel', label: 'Israel' },
                                { id: 'Italy', label: 'Italy' },
                                { id: 'Jamaica', label: 'Jamaica' },
                                { id: 'Japan', label: 'Japan' },
                                { id: 'Jordan', label: 'Jordan' },
                                { id: 'Kazakhstan', label: 'Kazakhstan' },
                                { id: 'Kenya', label: 'Kenya' },
                                { id: 'Kiribati', label: 'Kiribati' },
                                { id: 'Korea, North', label: 'Korea, North' },
                                { id: 'Korea, South', label: 'Korea, South' },
                                { id: 'Kosovo', label: 'Kosovo' },
                                { id: 'Kuwait', label: 'Kuwait' },
                                { id: 'Kyrgyzstan', label: 'Kyrgyzstan' },
                                { id: 'Laos', label: 'Laos' },
                                { id: 'Latvia', label: 'Latvia' },
                                { id: 'Lebanon', label: 'Lebanon' },
                                { id: 'Lesotho', label: 'Lesotho' },
                                { id: 'Liberia', label: 'Liberia' },
                                { id: 'Libya', label: 'Libya' },
                                { id: 'Liechtenstein', label: 'Liechtenstein' },
                                { id: 'Lithuania', label: 'Lithuania' },
                                { id: 'Luxembourg', label: 'Luxembourg' },
                                { id: 'Madagascar', label: 'Madagascar' },
                                { id: 'Malawi', label: 'Malawi' },
                                { id: 'Malaysia', label: 'Malaysia' },
                                { id: 'Maldives', label: 'Maldives' },
                                { id: 'Mali', label: 'Mali' },
                                { id: 'Malta', label: 'Malta' },
                                { id: 'Marshall Islands', label: 'Marshall Islands' },
                                { id: 'Mauritania', label: 'Mauritania' },
                                { id: 'Mauritius', label: 'Mauritius' },
                                { id: 'Mexico', label: 'Mexico' },
                                { id: 'Micronesia', label: 'Micronesia' },
                                { id: 'Moldova', label: 'Moldova' },
                                { id: 'Monaco', label: 'Monaco' },
                                { id: 'Mongolia', label: 'Mongolia' },
                                { id: 'Montenegro', label: 'Montenegro' },
                                { id: 'Morocco', label: 'Morocco' },
                                { id: 'Mozambique', label: 'Mozambique' },
                                { id: 'Myanmar', label: 'Myanmar' },
                                { id: 'Namibia', label: 'Namibia' },
                                { id: 'Nauru', label: 'Nauru' },
                                { id: 'Nepal', label: 'Nepal' },
                                { id: 'Netherlands', label: 'Netherlands' },
                                { id: 'New Zealand', label: 'New Zealand' },
                                { id: 'Nicaragua', label: 'Nicaragua' },
                                { id: 'Niger', label: 'Niger' },
                                { id: 'Nigeria', label: 'Nigeria' },
                                { id: 'North Macedonia', label: 'North Macedonia' },
                                { id: 'Norway', label: 'Norway' },
                                { id: 'Oman', label: 'Oman' },
                                { id: 'Pakistan', label: 'Pakistan' },
                                { id: 'Palau', label: 'Palau' },
                                { id: 'Panama', label: 'Panama' },
                                { id: 'Papua New Guinea', label: 'Papua New Guinea' },
                                { id: 'Paraguay', label: 'Paraguay' },
                                { id: 'Peru', label: 'Peru' },
                                { id: 'Philippines', label: 'Philippines' },
                                { id: 'Poland', label: 'Poland' },
                                { id: 'Portugal', label: 'Portugal' },
                                { id: 'Qatar', label: 'Qatar' },
                                { id: 'Romania', label: 'Romania' },
                                { id: 'Russia', label: 'Russia' },
                                { id: 'Rwanda', label: 'Rwanda' },
                                { id: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
                                { id: 'Saint Lucia', label: 'Saint Lucia' },
                                { id: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
                                { id: 'Samoa', label: 'Samoa' },
                                { id: 'San Marino', label: 'San Marino' },
                                { id: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
                                { id: 'Saudi Arabia', label: 'Saudi Arabia' },
                                { id: 'Senegal', label: 'Senegal' },
                                { id: 'Serbia', label: 'Serbia' },
                                { id: 'Seychelles', label: 'Seychelles' },
                                { id: 'Sierra Leone', label: 'Sierra Leone' },
                                { id: 'Singapore', label: 'Singapore' },
                                { id: 'Slovakia', label: 'Slovakia' },
                                { id: 'Slovenia', label: 'Slovenia' },
                                { id: 'Solomon Islands', label: 'Solomon Islands' },
                                { id: 'Somalia', label: 'Somalia' },
                                { id: 'South Africa', label: 'South Africa' },
                                { id: 'South Sudan', label: 'South Sudan' },
                                { id: 'Spain', label: 'Spain' },
                                { id: 'Sri Lanka', label: 'Sri Lanka' },
                                { id: 'Sudan', label: 'Sudan' },
                                { id: 'Suriname', label: 'Suriname' },
                                { id: 'Sweden', label: 'Sweden' },
                                { id: 'Switzerland', label: 'Switzerland' },
                                { id: 'Syria', label: 'Syria' },
                                { id: 'Taiwan', label: 'Taiwan' },
                                { id: 'Tajikistan', label: 'Tajikistan' },
                                { id: 'Tanzania', label: 'Tanzania' },
                                { id: 'Thailand', label: 'Thailand' },
                                { id: 'Togo', label: 'Togo' },
                                { id: 'Tonga', label: 'Tonga' },
                                { id: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
                                { id: 'Tunisia', label: 'Tunisia' },
                                { id: 'Turkey', label: 'Turkey' },
                                { id: 'Turkmenistan', label: 'Turkmenistan' },
                                { id: 'Tuvalu', label: 'Tuvalu' },
                                { id: 'Uganda', label: 'Uganda' },
                                { id: 'Ukraine', label: 'Ukraine' },
                                { id: 'United Arab Emirates', label: 'United Arab Emirates' },
                                { id: 'United Kingdom', label: 'United Kingdom' },
                                { id: 'United States', label: 'United States' },
                                { id: 'Uruguay', label: 'Uruguay' },
                                { id: 'Uzbekistan', label: 'Uzbekistan' },
                                { id: 'Vanuatu', label: 'Vanuatu' },
                                { id: 'Vatican City', label: 'Vatican City' },
                                { id: 'Venezuela', label: 'Venezuela' },
                                { id: 'Vietnam', label: 'Vietnam' },
                                { id: 'Yemen', label: 'Yemen' },
                                { id: 'Zambia', label: 'Zambia' },
                                { id: 'Zimbabwe', label: 'Zimbabwe' },
                              ]}
                            ></CheckboxField>
                          </div>
                        </details>
                      </LayoutFlow>
                    </form>
                  </details>
                </Fieldset>
              </div>
              <div className="rvo-results">
                <Heading type="h1" fontWeightNormal={true} noMargins={true}>
                  <strong>Projects</strong> <span className="rvo-text rvo-text--subtle rvo-text--md">1487 results</span>
                </Heading>
                <LayoutFlow>
                  <LayoutFlow gap="2xs">
                    <LayoutFlow row={true} gap="sm" wrap={true}>
                      <strong className="rvo-results-active-filters">Active filters</strong>
                      <Button kind="warning-subtle" size="xs" icon="foutmelding" showIcon="before">
                        Reset all filters
                      </Button>
                    </LayoutFlow>
                    <LayoutFlow row={true} gap="sm" wrap={true}>
                      <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                        <span>
                          Search <strong> study</strong>
                        </span>
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                          role="img"
                          aria-label="Kruis"
                        ></span>
                      </div>
                      <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                        <span>
                          Country<strong> Congo</strong>
                        </span>
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                          role="img"
                          aria-label="Kruis"
                        ></span>
                      </div>

                      <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                        <span>
                          Status<strong> Finalised</strong>
                        </span>
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                          role="img"
                          aria-label="Kruis"
                        ></span>
                      </div>
                    </LayoutFlow>
                  </LayoutFlow>
                  <div className="rvo-inline-sort">
                    <SelectField
                      label="Sort projects on"
                      options={[
                        {
                          value: 'startdate-closest-now',
                          label: 'Startdate closest to now',
                        },
                        {
                          value: 'startdate-furthest-now',
                          label: 'Startdate furthest from now',
                        },
                        {
                          value: 'lowest-budget-first',
                          label: 'Lowest budget first',
                        },
                        {
                          value: 'biggest-budget-first',
                          label: 'Biggest budget first',
                        },
                      ]}
                    ></SelectField>
                  </div>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a
                          className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                          href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                        >
                          Sector Study Poultry Democratic Republic of the Congo (DR Congo)
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 1</strong>
                          <br />
                          <span>Country: </span>
                          <strong>Congo (the Democratic Republic of the)</strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€36,300</strong>
                          <br />
                          <span>Status: </span>
                          <strong>Finalized</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
                          Orange Corners Strategy Days
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 2</strong>
                          <br />
                          <span>Country: </span>
                          <strong>
                            Angola, Congo (the Democratic Republic of the), Côte d'Ivoire, Algeria, Egypt, Ghana, Iraq,
                            Morocco, Mozambique, Nigeria, Sudan (the), Senegal, South Africa
                          </strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€0</strong>
                          <br />
                          <span>Status: </span>
                          <strong>Cancelled</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
                          Pilot Access to Finance – Digitalisation Guarantee Fund
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 2</strong>
                          <br />
                          <span>Country: </span>
                          <strong>Congo (the Democratic Republic of the)</strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€24,990</strong>
                          <br />
                          <span>Status: </span>
                          <strong>Implementation</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
                          K2K Entrepreneurship curriculum DR Congo
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 2</strong>
                          <br />
                          <span>Country: </span>
                          <strong>Congo (the Democratic Republic of the)</strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€107,500</strong>
                          <br />
                          <span>Status: </span>
                          <strong>Finalized</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                  <PageNumberNavigation numberOfPages={30} activePage={1} />
                </LayoutFlow>
              </div>
            </LayoutFlow>
          </div>
        </LayoutFlow>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
};

export default VerticalFilter;
