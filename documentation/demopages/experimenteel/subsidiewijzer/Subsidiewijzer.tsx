import {
  Button,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  MenuBar,
  Pagination,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../common/filter.scss';

const Subsidiewijzer = () => {
  return (
    <body className="rvo-theme rvo-filter-body">
      <Header link="#" />
      <LayoutFlow size="xl">
        <LayoutFlow size="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '/iframe.html?id=demo-pagina-s-projects-rvo-nl-home--default&viewMode=story',
              },
              {
                label: 'Onderwerpen',
                link: '#',
              },
              {
                active: true,
                label: 'Subsidies en financiering',
                link: '#',
              },
              {
                label: 'Over ons',
                link: '#',
              },
              {
                label: 'Contact',
                link: '#',
              },
              {
                align: 'right',
                label: 'Mijn RVO',
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
                      <h3 className="utrecht-heading-3 rvo-heading--no-margins">Filters</h3>
                    </summary>

                    <form className="rvo-form">
                      <LayoutFlow size="xl">
                        <TextInputField label="Zoek subsidies en financiering" value="wbso"></TextInputField>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">Ik ben/werk bij</summary>
                          <div className="rvo-collapsible-filter--scroll">
                            <CheckboxField
                              label=" "
                              invalid={false}
                              options={[
                                { id: 'Financier', label: 'Financier' },
                                { id: 'Grootbedrijf', label: 'Grootbedrijf' },
                                {
                                  id: 'Land- en tuinbouw / Natuur / Visserij',
                                  label: 'Land- en tuinbouw / Natuur / Visserij',
                                },
                                { id: 'MKB (ook zzp)', label: 'MKB (ook zzp)' },
                                { id: 'Non-profit / NGO', label: 'Non-profit / NGO' },
                                { id: 'Overheid', label: 'Overheid' },
                                {
                                  id: 'Particulier / Vereniging / (Ver)huurder',
                                  label: 'Particulier / Vereniging / (Ver)huurder',
                                },
                                { id: 'Producentenorganisatie', label: 'Producentenorganisatie' },
                                { id: 'School / Kennisinstelling', label: 'School / Kennisinstelling' },
                              ]}
                            ></CheckboxField>
                          </div>
                        </details>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">Ik zoek geld voor</summary>
                          <div className="rvo-collapsible-filter--scroll">
                            <CheckboxField
                              label=" "
                              invalid={false}
                              options={[
                                {
                                  id: 'Compensatie zoals energiekosten en TVL',
                                  label: 'Compensatie zoals energiekosten en TVL',
                                },
                                { id: 'Duurzaam en circulair ondernemen', label: 'Duurzaam en circulair ondernemen' },
                                { id: 'Energie besparen', label: 'Energie besparen' },
                                { id: 'Energie produceren', label: 'Energie produceren' },
                                { id: 'Gebouwen renoveren en bouwen', label: 'Gebouwen renoveren en bouwen' },
                                { id: 'Groeien met mijn bedrijf', label: 'Groeien met mijn bedrijf' },
                                { id: 'Infrastructuur verbeteren', label: 'Infrastructuur verbeteren' },
                                { id: 'Investeren', label: 'Investeren' },
                                {
                                  id: 'Maatschappelijke vraagstukken oplossen',
                                  label: 'Maatschappelijke vraagstukken oplossen',
                                },
                                {
                                  id: 'Milieu en natuur beschermen of beheren',
                                  label: 'Milieu en natuur beschermen of beheren',
                                },
                                { id: 'Onderzoeken en ontwikkelen (R&D)', label: 'Onderzoeken en ontwikkelen (R&D)' },
                                { id: 'Overnemen van een bedrijf', label: 'Overnemen van een bedrijf' },
                                { id: 'Vervoer verduurzamen', label: 'Vervoer verduurzamen' },
                                { id: 'Zakendoen in het buitenland', label: 'Zakendoen in het buitenland' },
                              ]}
                            ></CheckboxField>
                          </div>
                        </details>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">In de sector</summary>
                          <div className="rvo-collapsible-filter--scroll">
                            <CheckboxField
                              label=" "
                              invalid={false}
                              options={[
                                { id: 'Agro en visserij', label: 'Agro en visserij' },
                                { id: 'Biotechnologie', label: 'Biotechnologie' },
                                {
                                  id: 'Bosbouw en hout(bewerkings)industrie',
                                  label: 'Bosbouw en hout(bewerkings)industrie',
                                },
                                { id: 'Bouw en infrastructuur', label: 'Bouw en infrastructuur' },
                                { id: 'Chemie en kunststoffen', label: 'Chemie en kunststoffen' },
                                { id: 'Chemische industrie', label: 'Chemische industrie' },
                                {
                                  id: 'Consumentengoederen en detailhandel',
                                  label: 'Consumentengoederen en detailhandel',
                                },
                                { id: 'Creatieve industrie', label: 'Creatieve industrie' },
                                { id: 'Dienstensector', label: 'Dienstensector' },
                                { id: 'Elektronica-industrie', label: 'Elektronica-industrie' },
                                { id: 'Energiesector', label: 'Energiesector' },
                                { id: 'Grafische en papierindustrie', label: 'Grafische en papierindustrie' },
                                { id: 'ICT', label: 'ICT' },
                                { id: 'Kleding en textiel', label: 'Kleding en textiel' },
                                { id: 'Machine-industrie', label: 'Machine-industrie' },
                                { id: 'Medische sector', label: 'Medische sector' },
                                { id: 'Metaal(bewerkings)industrie', label: 'Metaal(bewerkings)industrie' },
                                { id: 'Mijnbouw en petrochemie', label: 'Mijnbouw en petrochemie' },
                                { id: 'Milieusector', label: 'Milieusector' },
                                { id: 'Onderwijs en opvang', label: 'Onderwijs en opvang' },
                                { id: 'Overheid', label: 'Overheid' },
                                { id: 'Toerisme recreatie en horeca', label: 'Toerisme recreatie en horeca' },
                                { id: 'Transportmiddelenindustrie', label: 'Transportmiddelenindustrie' },
                                { id: 'Verpakkingsindustrie', label: 'Verpakkingsindustrie' },
                                { id: 'Vervoer en logistiek', label: 'Vervoer en logistiek' },
                                { id: 'Voedings- en genotmiddelen', label: 'Voedings- en genotmiddelen' },
                                { id: 'Watersector', label: 'Watersector' },
                                { id: 'Waterstofsector', label: 'Waterstofsector' },
                                { id: 'Woning- en projectinrichting', label: 'Woning- en projectinrichting' },
                              ]}
                            ></CheckboxField>
                          </div>
                        </details>

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">In het land</summary>
                          <TextInputField label="Zoek land"></TextInputField>
                          <div className="rvo-collapsible-filter--scroll">
                            <CheckboxField
                              label=" "
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

                        <details open className="rvo-collapsible-filter">
                          <summary className="rvo-collapsible-filter-label">Filter op status</summary>

                          <CheckboxField
                            label=" "
                            invalid={false}
                            options={[
                              { id: 'Bijna open voor aanvragen', label: 'Bijna open voor aanvragen' },
                              { id: 'Gesloten voor aanvragen', label: 'Gesloten voor aanvragen' },
                              { id: 'Open voor aanvragen', label: 'Open voor aanvragen' },
                              { id: 'Tijdelijk gesloten voor aanvragen', label: 'Tijdelijk gesloten voor aanvragen' },
                            ]}
                          ></CheckboxField>
                        </details>
                      </LayoutFlow>
                    </form>
                  </details>
                </Fieldset>
              </div>
              <div className="rvo-results">
                <Heading type="h1" mixedBoldAndNormal={true} noMargins={true}>
                  <strong>Subsidie- en financieringswijzer</strong>{' '}
                  <span className="rvo-text rvo-text--subtle rvo-text--md">166 resultaten</span>
                </Heading>
                <LayoutFlow>
                  <p className="rvo-text--no-margins">
                    Onze Subsidie- en financieringswijzer helpt u financiële ondersteuning voor uw plannen te vinden.
                    Geef aan wie u bent en wat u zoekt, en u krijgt een overzicht met regelingen op maat.
                    <br />
                    <a className="rvo-link" href="#">
                      Lees meer over onze Subsidie- en financieringswijzer
                    </a>
                  </p>
                  <LayoutFlow>
                    <LayoutFlow size="2xs">
                      <LayoutFlow row={true} size="sm" wrap={true}>
                        <strong className="rvo-results-active-filters">Actieve filters</strong>
                        <Button kind="warning-subtle" size="xs" icon="foutmelding" showIcon="before">
                          Reset filters
                        </Button>
                      </LayoutFlow>
                      <LayoutFlow row={true} size="sm" wrap={true}>
                        <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                          <span>
                            Zoekterm <strong> wbso</strong>
                          </span>
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                            role="img"
                            aria-label="Kruis"
                          ></span>
                        </div>
                        <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                          <span>
                            Sector<strong> Biotechnologie</strong>
                          </span>
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                            role="img"
                            aria-label="Kruis"
                          ></span>
                        </div>

                        <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                          <span>
                            Status<strong> Open voor aanvragen</strong>
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
                        label="Sorteer resultaten op"
                        options={[
                          {
                            value: 'Meest relevant',
                            label: 'Meest relevant',
                          },
                          {
                            value: 'Meest recente openingsdatum',
                            label: 'Meest recente openingsdatum',
                          },
                          {
                            value: 'Van A tot Z',
                            label: 'Van A tot Z',
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
                            Partners for International Business (PIB)
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Programma waarmee Nederlandse bedrijven in een publiek-private samenwerking hun
                              internationale ambities kunnen realiseren.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen vanaf 2 januari 2024 tot en met 27 september 2024.
                            </em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Borgstelling MKB-kredieten (BMKB)
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Borgstelling voor mkb inclusief starters, om een lening te verkrijgen voor investeringen.
                              Ook voor investeerders die het mkb willen ondersteunen.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen tot 1 juli 2027. Bedrijven vragen niet zelf aan. Dit gaat via financiers.
                            </em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Eurostars: subsidie internationale marktgerichte R&D
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Subsidie voor mkb-ondernemers die samen met Europese partners marktgerichte, nieuwe
                              technologieën ontwikkelen.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen voor call 7: internationale aanvraag: 12 juli 2024 tot en met 12 september 2024.
                            </em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Eureka: programma internationale marktgerichte R&D
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Financiering voor bedrijven en organisaties die met marktgerichte R&D bijdragen aan
                              economische groei en aan strategische en maatschappelijke oplossingen.
                            </span>
                            <br />
                            <em className="rvo-text--italized">Periode van indienen verschilt per call.</em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Groeifaciliteit
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Garantstelling voor financiers om risicodragende financieringen te verstrekken aan
                              ondernemers.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen vanaf 1 januari 2020 tot en met 31 december 2024.
                            </em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Garantie Ondernemingsfinanciering (GO)
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Garantstelling voor (middel)grote ondernemingen die krediet nodig hebben. De GO geeft
                              banken een 50% staatsgarantie op middelgrote en grote leningen.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen vanaf 1 januari 2022 tot en met 13 juni 2025.
                            </em>
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
                          <a
                            className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link"
                            href="iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-project--default&viewMode=story"
                          >
                            Subsidieregeling praktijkleren
                          </a>
                          <div className="rvo-project-details">
                            <LayoutFlow size="sm" row={true}>
                              <div className="rvo-status-indicator rvo-status-indicator--groen"></div>
                              <strong>Open voor aanvragen</strong>
                            </LayoutFlow>
                            <span>
                              Subsidie voor ondernemers die een praktijk- of werkleerplaats aanbieden. De subsidie is
                              een tegemoetkoming in de kosten die een werkgever maakt voor de begeleiding van een
                              leerling of student. Hierdoor krijgen ondernemers beter opgeleid personeel en zijn
                              studenten beter voorbereid op de arbeidsmarkt.
                            </span>
                            <br />
                            <em className="rvo-text--italized">
                              Aanvragen vanaf 3 juni 2024 tot en met 17 september 2024.
                            </em>
                          </div>
                        </div>
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                      </div>
                    </div>
                    <Pagination numberOfPages={30} activePage={1} />
                  </LayoutFlow>
                </LayoutFlow>
              </div>
            </LayoutFlow>
          </div>
        </LayoutFlow>
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
      </LayoutFlow>
    </body>
  );
};

export default Subsidiewijzer;
