import {
  Button,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  TabItem,
  Tabs,
  FormField
} from '@nl-rvo/component-library-react';
import '@nl-rvo/utility-text-types/src/index.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const Profiel = () => {
  return (
    <body className="rvo-theme rvo-responsive">
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

            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="left"
        maxWidth="lg"
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--md">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            {/* <MenuBar
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
                { label: 'Profiel ', link: '#', icon: 'user' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="left"
              maxWidth="md"
            /> */}
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutFlow gap="xl">
              <Heading type="h1" noMargins={true}>
                Profiel
              </Heading>
              <Tabs ariaLabel="Profiel tabs" defaultActiveTab={0}>
                <TabItem label="Profiel">
                  <LayoutFlow>
                    <Heading type="h2" noMargins={true}>
                      Zakelijk Profiel
                    </Heading>
                    <Heading type="h3" noMargins={true}>
                      Zakelijke gegevens
                    </Heading>
                    <p className="rvo-text--no-margins">
                      De onderstaande gegevens komen uit het Handelsregister van KVK en kunt u niet wijzigen bij RVO. Uw
                      relatienummer (BRS) wordt door RVO verstrekt. Wilt u KVK-gegevens wijzigen? Neem dan contact op
                      met de{' '}
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
                        Via deze gegevens nemen wij contact met u op. Wijzigingen die u hier uitvoert, worden niet
                        automatisch doorgevoerd in uw lopende zaken. Wijzig uw gegevens daarom ook handmatig in uw
                        aanvraag en/of registratie.
                      </p>
                      <FormField label="E-mailadres">
                        <FormField.Text />
                      </FormField>
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
                        <FormField label="Telefoonnummer">
                          <FormField.Text />
                        </FormField>
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
                      <FormField label="Straatnaam" >
                        <FormField.Text />
                      </FormField>
                      <LayoutFlow row={true} alignItems="start">
                        <FormField label="Huisnummer">
                          <FormField.Text />
                        </FormField>
                        <FormField label="Toevoeging (niet verplicht)">
                          <FormField.Text size='xs' />
                        </FormField>
                      </LayoutFlow>
                      <FormField label="Postcode">
                        <FormField.Text size="sm"  />
                      </FormField>
                      <FormField label="Woonplaats">
                        <FormField.Text size="lg"  />
                      </FormField>
                      <LayoutFlow row={true}>
                        <Button kind="primary">Wijzigingen opslaan</Button>
                        <Button kind="warning-subtle" size="sm">
                          Annuleren
                        </Button>
                      </LayoutFlow>
                    </Fieldset>
                  </LayoutFlow>
                </TabItem>
                <TabItem label="Betaalgegevens">
                  <p className="rvo-text--no-margins">Betaalgegevens.</p>
                </TabItem>
              </Tabs>
              <LayoutFlow>
                <Heading type="h3" noMargins={true}>
                  Direct regelen
                </Heading>
                <LayoutFlow row={true} wrap={true}>
                  <Link icon="pijl-naar-rechts" iconPlacement="left" noUnderline={true}>
                    Profiel verwijderen
                  </Link>
                  <Link icon="pijl-naar-rechts" iconPlacement="left" noUnderline={true}>
                    Overlijden accounteigenaar doorgeven
                  </Link>
                  <Link icon="pijl-naar-rechts" iconPlacement="left" noUnderline={true}>
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
