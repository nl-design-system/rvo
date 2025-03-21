import {
  Button,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  // MobileMenuBar,
  Tabs,
  TextInputField,
} from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/src/index.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Profiel = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      {/* <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        submenuItems={[]}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
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

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--md">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="zwart"
              horizontalRule={false}
              items={[
                {
                  label: 'Overzicht',
                  link: 'iframe.html?args=&id=pagina-s-voorbeelden-cmor-overzicht--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Aanvragen',
                  link: '#',
                  icon: 'map',
                },

                {
                  label: 'Mijn documenten',
                  link: '#',
                  icon: 'publicatie',
                },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel ', link: '#', icon: 'user', active: true },
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
                Profiel
              </Heading>
              <Tabs
                tabs={[
                  { label: 'Profiel', href: '#' },
                  { label: 'Betaalgegevens', href: '#' },
                ]}
                activeTab={0}
              />
              <Heading type="h2" noMargins={true}>
                Zakelijk Profiel
              </Heading>
              <Heading type="h3" noMargins={true}>
                Zakelijke gegevens
              </Heading>
              <p className="rvo-text--no-margins">
                De onderstaande gegevens komen uit het Handelsregister van KVK en kunt u niet wijzigen bij RVO. Uw
                relatienummer (BRS) wordt door RVO verstrekt. Wilt u KVK-gegevens wijzigen? Neem dan contact op met de{' '}
                <a className="rvo-link rvo-link--with-icon" href="#">
                  Kamer van Koophandel
                  <span
                    className="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"
                    role="img"
                    aria-label="Externe link"
                  ></span>
                </a>
                .
              </p>
              <dl className="rvo-data-list">
                <dt>Handelsnaam</dt>
                <dd>Jansen B.V.</dd>
                <dt>KVK-nummer</dt>
                <dd>27378529</dd>
                <dt>Relatienummer (BRS)</dt>
                <dd>203465993</dd>
                <dt>Adres</dt>
                <dd>
                  Duinzandweg 2<br /> 2391 CN Onderveen
                  <br /> Nederland
                </dd>
              </dl>
              <Fieldset legend="Contactgegevens">
                <p className="rvo-margin-block-start--3xs rvo-margin-block-end--xl">
                  Via deze gegevens nemen wij contact met u op. Wijzigingen die u hier uitvoert, worden niet automatisch
                  doorgevoerd in uw lopende zaken. Wijzig uw gegevens daarom ook handmatig in uw aanvraag en/of
                  registratie.
                </p>
                <TextInputField label="E-mailadres" />
                <Heading type="h4">Telefoonnummer (inclusief landcode)</Heading>
                <LayoutFlow row={true} alignItems="start">
                  <div
                    role="group"
                    aria-labelledby="fieldId-label"
                    className="utrecht-form-field utrecht-form-field--text rvo-form-field rvo-margin-block-end--3xs"
                  >
                    <div className="rvo-form-field__label">
                      <label className="rvo-label" id="fieldId-label">
                        Landcode
                      </label>
                    </div>
                    <div className="rvo-select-wrapper">
                      <select
                        id="field"
                        className="utrecht-select utrecht-select--html-select "
                        aria-describedby="helperTextId"
                      >
                        <option>+31</option>
                      </select>
                    </div>
                  </div>

                  <TextInputField label="Telefoonnummer" />
                </LayoutFlow>
                <div className="rvo-spacer--postadres rvo-margin-block-start--xl">
                  <Heading type="h4" noMargins={true}>
                    Postadres
                  </Heading>
                  <p className="rvo-margin-block-start--3xs rvo-margin-block-end--xl">
                    Op welk adres wilt u post ontvangen?
                  </p>
                </div>

                <div
                  role="group"
                  aria-labelledby="fieldId-label"
                  className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                >
                  <div className="rvo-form-field__label">
                    <label className="rvo-label" id="fieldId-label">
                      Land
                    </label>
                  </div>
                  <div className="rvo-select-wrapper">
                    <select
                      id="field"
                      className="utrecht-select utrecht-select--html-select "
                      aria-describedby="helperTextId"
                    >
                      <option>Nederland</option>
                    </select>
                  </div>
                </div>
                <TextInputField label="Straatnaam" />
                <LayoutFlow row={true} alignItems="start">
                  <TextInputField label="Huisnummer" size="sm" />
                  <TextInputField label="Toevoeging (niet verplicht)" size="xs" />
                </LayoutFlow>
                <TextInputField label="Postcode" size="sm" />
                <TextInputField label="Woonplaats" size="lg" />
                <LayoutFlow row={true}>
                  <Button kind="primary">Wijzigingen opslaan</Button>
                  <Button kind="warning-subtle" size="sm">
                    Annuleren
                  </Button>
                </LayoutFlow>
              </Fieldset>
              <LayoutFlow>
                <Heading type="h3" noMargins={true}>
                  Direct regelen
                </Heading>
                <LayoutFlow row={true} wrap={true}>
                  <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                    Profiel verwijderen
                  </Link>
                  <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                    Overlijden accounteigenaar doorgeven
                  </Link>
                  <Link icon="pijl-naar-rechts" showIcon="before" noUnderline={true}>
                    Snelkoppeling
                  </Link>
                </LayoutFlow>
              </LayoutFlow>
            </LayoutFlow>
          </div>
        </div>
      </main>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </body>
  );
};

export default Profiel;
