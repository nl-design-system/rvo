import {
  Alert,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  MenuBar,
} from '@nl-rvo/components';
import '../common/filter.scss';

const Filter = () => {
  return (
    <body className="rvo-theme rvo-filter-body">
      <Header link="#" />
      <LayoutColumnRow size="xl">
        <LayoutColumnRow size="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '#',
              },
              {
                label: 'Programmes',

                link: '#',
              },
              {
                active: true,
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
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading noMargins={true}>Projects</Heading>
            <LayoutColumnRow size="xl">
              <div className="rvo-content">
                <p className="rvo-text rvo-text--no-margins">
                  Data reported to the IATI registry since January 2015. Find open data on development aid projects
                  executed by the{' '}
                  <a href="https://english.rvo.nl" className="rvo-link">
                    Netherlands Enterprise Agency (RVO)
                  </a>{' '}
                  and funded by the Netherlands Ministry of Foreign Affairs e.a. Watch this video to discover how the
                  International Aid Transparency Initiative (IATI) helps make information about development and
                  humanitarian spending easier to access, use and understand.
                </p>
                <Alert kind="warning">
                  <strong>Disclaimer</strong>
                  <br />
                  This site is launched in February 2020 and is being updated constantly. The data is under constant
                  scrutiny and is by no means legally binding. The IATI datasets are updated daily. Questions about the
                  data and the projects?{' '}
                  <a href="mailto:iati@rvo.nl" className="rvo-link rvo-link--donkerblauw">
                    iati@rvo.nl
                  </a>
                </Alert>
              </div>
            </LayoutColumnRow>
          </main>
          <div className="rvo-filter-wrapper rvo-max-width-layout rvo-max-width-layout--md">
            <LayoutColumnRow row={true}>
              <div className="rvo-filter">
                <form className="rvo-form">
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
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
                    </Fieldset>
                    <Fieldset legend="">
                      <details open className="rvo-collapsible-filter">
                        <summary className="rvo-collapsible-filter-label">Filter countries</summary>
                        <span>Frequently used filters options</span>
                        <CheckboxField
                          label="Countries"
                          invalid={false}
                          options={[
                            { id: 'Poland', label: 'Poland' },
                            { id: 'Peru', label: 'Peru' },
                            { id: 'Netherlands', label: 'Netherlands' },
                            { id: 'Angola', label: 'Angola' },
                            { id: 'Qatar', label: 'Qatar' },
                          ]}
                        ></CheckboxField>
                        <details className="rvo-collapsible-filter">
                          {' '}
                          <summary className="rvo-collapsible-filter-label">
                            <Icon icon="plus"></Icon>
                            All filter options alphabetically
                          </summary>
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
                        </details>
                      </details>
                    </Fieldset>
                  </LayoutColumnRow>
                </form>
              </div>
              <div className="rvo-results">
                <LayoutColumnRow>
                  <div className="rvo-results-count">
                    <strong>4817</strong> projects found
                  </div>{' '}
                  {/* <div className="rvo-results-active-filters">Active filters</div> */}
                  <LayoutColumnRow row={true} size="sm">
                    <span className="rvo-results-active-filters">Active filters</span>
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
                  </LayoutColumnRow>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
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
                          <span>Project number: </span>
                          <strong>NL-KVK-27378529-MAT17CD01</strong>
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
                          <span>Project number: </span>
                          <strong>NL-KVK-27378529-MAT17CD01</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                </LayoutColumnRow>
              </div>
            </LayoutColumnRow>
          </div>
        </LayoutColumnRow>
        <Footer
          columns={[
            {
              label: 'RVO',
              items: [
                { content: 'Over ons', link: '#' },
                { content: 'Contact', link: '#' },
                { content: 'Pers', link: '#' },
                { content: 'Zaken regelen bij RVO', link: '#' },
              ],
            },
            {
              label: 'Over deze site',
              items: [
                { content: 'Privacy', link: '#' },
                { content: 'Cookies en anti-spam', link: '#' },
                { content: 'Toegankelijkheid', link: '#' },
                { content: 'Proclaimer', link: '#' },
              ],
            },
            {
              label: 'Snel naar',
              items: [
                { content: 'Onderwerpen A t/m Z', link: '#' },
                { content: 'Klantenpanel', link: '#' },
                { content: 'Documenten en publicaties', link: '#' },
                { content: 'Overheidspublicaties en auteursrecht', link: '#' },
              ],
            },
            {
              label: 'Blijf op de hoogte',
              items: [
                { content: 'Social media', link: '#' },
                { content: 'RSS', link: '#' },
                { content: 'Gratis nieuwsbrief', link: '#' },
              ],
            },
          ]}
        />
      </LayoutColumnRow>
    </body>
  );
};

export default Filter;
