import { ExpandableContent, Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '@nl-rvo/components/helpers-text/src/index.scss';
import '../../common/style.scss';

const ExpendableRows = () => {
  return (
    <body className="rvo-theme rvo-responsive rvo-demo-page-expandable-tr">
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
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
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
                  label: 'Mijn dossier',
                  link: '#',
                  icon: 'map',
                },
                {
                  label: 'Mijn documenten',
                  link: '#',
                  icon: 'publicatie',
                  active: true,
                },
                { label: 'Mijn berichten', link: '#', icon: 'mail' },
                { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
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
                Clickable table rows test
              </Heading>
              <div>
                <div className="rvo-table--responsive">
                  <table className="rvo-table">
                    <caption className="rvo-caption">Table description.</caption>
                    <thead className="rvo-table-head">
                      <tr className="rvo-table-row">
                        <th scope="col" className="rvo-table-header">
                          Title
                        </th>
                        <th
                          scope="col"
                          className="rvo-table-header rvo-table-header--sortable rvo-layout-row rvo-layout-gap--sm"
                        >
                          Text
                          <button
                            className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
                            type="button"
                          >
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--sm rvo-icon--hemelblauw"
                              role="img"
                              aria-label="Delta omhoog"
                            ></span>
                          </button>
                        </th>
                        <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                          Price ($)
                        </th>
                        <th scope="col" className="rvo-table-header">
                          Link
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
                      <tr className="rvo-table-row rvo-table-row--expandable">
                        <td colSpan={4} className="rvo-table-cell">
                          <ExpandableContent
                            title="Meer informatie"
                            content="Hier meer informatie over de bovenstaande tabel rij"
                          />
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
            </LayoutFlow>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default ExpendableRows;
