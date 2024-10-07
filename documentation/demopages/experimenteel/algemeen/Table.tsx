import { Header, Heading, Icon, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../../common/style.scss';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';

const Table = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
      <MaxWidthLayout size="md">
        <main>
          <div>
            <Heading type="h1" textContent="Table" />
            <div className="rvo-table--responsive">
              <table className="rvo-table">
                <caption className="rvo-caption">Table description.</caption>
                <thead className="rvo-table-head">
                  <tr className="rvo-table-row">
                    <th scope="col" className="rvo-table-header">
                      Title
                    </th>
                    <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                      Text <Icon icon="delta-omlaag" size="sm" color="hemelblauw" />
                    </th>
                    <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                      Price ($)
                    </th>
                    <th scope="col" className="rvo-table-header rvo-table-header--empty-title"></th>
                  </tr>
                </thead>
                <tbody className="rvo-table-body">
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value</td>
                    <td className="rvo-table-cell">Text value</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell rvo-table-cell--link">
                      <a href="#" className="rvo-link">
                        Link
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value</td>
                    <td className="rvo-table-cell">Text value</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell rvo-table-cell--link">
                      <a href="#" className="rvo-link">
                        Link
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value</td>
                    <td className="rvo-table-cell">Text value</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell rvo-table-cell--link">
                      <a href="#" className="rvo-link">
                        Link
                      </a>
                    </td>
                  </tr>
                  <tr className="rvo-table-row">
                    <td className="rvo-table-cell">Title value</td>
                    <td className="rvo-table-cell">Text value</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
                    <td className="rvo-table-cell rvo-table-cell--link">
                      <a href="#" className="rvo-link">
                        Link
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Table;
