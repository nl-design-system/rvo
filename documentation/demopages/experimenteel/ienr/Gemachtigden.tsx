import { Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Gemachtigden = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      {/* <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
            icon: 'home',
          },
          {
            label: 'Mijn dossier',
            link: '#',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MobileMenuBar> */}
      <MenuBar
        items={[
          {
            label: 'I&R Dieren',
            link: '#',
          },
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
            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="lintblauw"
              horizontalRule={false}
              items={[
                {
                  label: 'Mijn I&R',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Mijn gegevens',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Meldingen',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-import--default&viewMode=story',
                  icon: 'envelop',
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                {
                  label: 'Bekijken',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-i-r-stallijst--default&viewMode=story',
                  icon: 'oog',
                },
                { label: 'Machtigen', link: '#', icon: 'refund' },
                { label: 'Overzichten', link: '#', icon: 'opsomming' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Mijn I&R
              </Heading>
              <div>
                <div className="rvo-margin-block-end--md gemachtigden-cards-only">
                  <div
                    role="group"
                    aria-labelledby="field-label"
                    className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                  >
                    <div className="rvo-form-field__label">
                      <label className="rvo-label rvo-label--has-after-field" id="field-label" htmlFor="field">
                        Sorteer gemachtigden op:
                      </label>
                    </div>
                    <div className="rvo-select-wrapper">
                      <select
                        id="field"
                        className="utrecht-select utrecht-select--html-select"
                        aria-describedby="helperTextId"
                      >
                        <option value="ubn-asc">UBN (oplopend)</option>
                        <option value="ubn-desc">UBN (aflopend)</option>
                        <option value="naam-asc">Naam (A-Z)</option>
                        <option value="naam-desc">Naam (Z-A)</option>
                        <option value="adres-asc">Adres (A-Z)</option>
                        <option value="adres-desc">Adres (Z-A)</option>
                        <option value="postcode-asc">Postcode (oplopend)</option>
                        <option value="postcode-desc">Postcode (aflopend)</option>
                        <option value="woonplaats-asc">Woonplaats (A-Z)</option>
                        <option value="woonplaats-desc">Woonplaats (Z-A)</option>
                        <option value="typebedrijf-asc">Type bedrijf (A-Z)</option>
                        <option value="typebedrijf-desc">Type bedrijf (Z-A)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gemachtigden-cards-view" style={{ display: 'block' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">18923456</span>
                        <br />
                        De Groene Weide B.V. (Dierhouder)
                        <br />
                        Weilandseweg 45, 8441 PA Heerenveen
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">19234567</span>
                        <br />
                        Boerderij van den Berg (Dierhouder)
                        <br />
                        Boerderijlaan 12, 5928 RD Venlo
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">17845923</span>
                        <br />
                        Zorgvlei Veehouderij (Dierhouder)
                        <br />
                        Landweg 78, 2411 BA Bodegraven
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">16567890</span>
                        <br />
                        Het Groene Erfgoed (Dierhouder)
                        <br />
                        Molenstraat 33, 9801 PB Appingedam
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">19745632</span>
                        <br />
                        Fruitbedrijf Altena (Dierhouder)
                        <br />
                        Boomgaardlaan 56, 3431 HS Nieuwegein
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>

                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">18234567</span>
                        <br />
                        Bloementeelt De Leijden (Dierhouder)
                        <br />
                        Floralaan 89, 2651 GD Monster
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">15678901</span>
                        <br />
                        Kassencomplex De Aalsmeerse (Dierhouder)
                        <br />
                        Kwekerslaan 21, 1431 JV Aalsmeer
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">19012345</span>
                        <br />
                        Melkveehouderij Heusden (Dierhouder)
                        <br />
                        Weideveld 67, 5256 AA Heusden
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>

                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">17234567</span>
                        <br />
                        Pluimveehouderij Noordzee (Dierhouder)
                        <br />
                        Zeestraat 44, 1783 AJ Den Helder
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>

                    <div className="rvo-card rvo-card--outline rvo-card--padding--sm">
                      <div className="rvo-card__content">
                        <span className="rvo-text--bold">18901234</span>
                        <br />
                        Varkensbedrijf Oost-Flevoland (Dierhouder)
                        <br />
                        Polderlaan 99, 8216 NN Lelystad
                        <br />
                        <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline ">
                          Kies UBN
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                            role="img"
                            aria-label="Delta naar rechts"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gemachtigden-table-view" style={{ display: 'none' }}>
                <div className="rvo-table--responsive">
                  <table className="rvo-table">
                    <thead className="rvo-table-head">
                      <tr className="rvo-table-row">
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                          <button className="rvo-table-header__sortable-container" type="button" data-index="0">
                            UBN
                            <svg
                              width="33"
                              height="38"
                              viewBox="0 0 33 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                                  <rect
                                    width="32"
                                    height="38"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 32.41 38)"
                                  ></rect>
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
                            Naam
                            <svg
                              width="39"
                              height="48"
                              viewBox="0 0 39 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                          <button className="rvo-table-header__sortable-container" type="button" data-index="2">
                            Adres
                            <svg
                              width="33"
                              height="38"
                              viewBox="0 0 33 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                                  <rect
                                    width="32"
                                    height="38"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 32.41 38)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                          <button className="rvo-table-header__sortable-container" type="button" data-index="3">
                            Postcode
                            <svg
                              width="33"
                              height="38"
                              viewBox="0 0 33 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                                  <rect
                                    width="32"
                                    height="38"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 32.41 38)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                          <button className="rvo-table-header__sortable-container" type="button" data-index="4">
                            Woonplaats
                            <svg
                              width="33"
                              height="38"
                              viewBox="0 0 33 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                                  <rect
                                    width="32"
                                    height="38"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 32.41 38)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--sortable" aria-sort="descending">
                          <button className="rvo-table-header__sortable-container" type="button" data-index="5">
                            Type bedrijf
                            <svg
                              width="33"
                              height="38"
                              viewBox="0 0 33 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rvo--table-header__sorting-icon"
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
                                  <rect
                                    width="32"
                                    height="38"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 32.41 38)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </th>
                        <th scope="col" className="rvo-table-header" aria-sort="none">
                          <span></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rvo-table-body">
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">18923456</td>
                        <td className="rvo-table-cell">De Groene Weide B.V.</td>
                        <td className="rvo-table-cell">Weilandseweg 45</td>
                        <td className="rvo-table-cell">8441 PA</td>
                        <td className="rvo-table-cell">Heerenveen</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">19234567</td>
                        <td className="rvo-table-cell">Boerderij van den Berg</td>
                        <td className="rvo-table-cell">Boerderijlaan 12</td>
                        <td className="rvo-table-cell">5928 RD</td>
                        <td className="rvo-table-cell">Venlo</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">17845923</td>
                        <td className="rvo-table-cell">Zorgvlei Veehouderij</td>
                        <td className="rvo-table-cell">Landweg 78</td>
                        <td className="rvo-table-cell">2411 BA</td>
                        <td className="rvo-table-cell">Bodegraven</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">16567890</td>
                        <td className="rvo-table-cell">Het Groene Erfgoed</td>
                        <td className="rvo-table-cell">Molenstraat 33</td>
                        <td className="rvo-table-cell">9801 PB</td>
                        <td className="rvo-table-cell">Appingedam</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">19745632</td>
                        <td className="rvo-table-cell">Fruitbedrijf Altena</td>
                        <td className="rvo-table-cell">Boomgaardlaan 56</td>
                        <td className="rvo-table-cell">3431 HS</td>
                        <td className="rvo-table-cell">Nieuwegein</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">18234567</td>
                        <td className="rvo-table-cell">Bloementeelt De Leijden</td>
                        <td className="rvo-table-cell">Floralaan 89</td>
                        <td className="rvo-table-cell">2651 GD</td>
                        <td className="rvo-table-cell">Monster</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">15678901</td>
                        <td className="rvo-table-cell">Kassencomplex De Aalsmeerse</td>
                        <td className="rvo-table-cell">Kwekerslaan 21</td>
                        <td className="rvo-table-cell">1431 JV</td>
                        <td className="rvo-table-cell">Aalsmeer</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">19012345</td>
                        <td className="rvo-table-cell">Melkveehouderij Heusden</td>
                        <td className="rvo-table-cell">Weideveld 67</td>
                        <td className="rvo-table-cell">5256 AA</td>
                        <td className="rvo-table-cell">Heusden</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">17234567</td>
                        <td className="rvo-table-cell">Pluimveehouderij Noordzee</td>
                        <td className="rvo-table-cell">Zeestraat 44</td>
                        <td className="rvo-table-cell">1783 AJ</td>
                        <td className="rvo-table-cell">Den Helder</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                      <tr className="rvo-table-row">
                        <td className="rvo-table-cell">18901234</td>
                        <td className="rvo-table-cell">Varkensbedrijf Oost-Flevoland</td>
                        <td className="rvo-table-cell">Polderlaan 99</td>
                        <td className="rvo-table-cell">8216 NN</td>
                        <td className="rvo-table-cell">Lelystad</td>
                        <td className="rvo-table-cell">Dierhouder</td>
                        <td className="rvo-table-cell">
                          <a href="#" className="rvo-link rvo-link--with-icon rvo-link--no-underline">
                            Kies UBN
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--after"
                              role="img"
                              aria-label="Delta naar rechts"
                            ></span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </LayoutFlow>
          </div>
        </div>
      </main>
      <style>{`
        .gemachtigden-cards-view {
          display: block !important;
        }
        .gemachtigden-table-view {
          display: none !important;
        }
        .gemachtigden-cards-only {
          display: block !important;
        }
        @media (min-width: 1280px) {
          .gemachtigden-cards-view {
            display: none !important;
          }
          .gemachtigden-table-view {
            display: block !important;
          }
          .gemachtigden-cards-only {
            display: none !important;
          }
        }
      `}</style>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Gemachtigden;
