import { Header } from '@nl-rvo/components/header/css/template';
import '../common/style.scss';

const Table = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <nav className="rvo-topnav rvo-topnav--md">
        <ul className="utrecht-topnav__list">
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--home rvo-icon--md rvo-icon--wit"></div> Home
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--publicatie rvo-icon--md rvo-icon--wit"></div> Mijn aanvragen
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              <div className="rvo-icon rvo-icon--plus rvo-icon--md rvo-icon--wit"></div> Nieuwe aanvraag
            </a>
          </li>
          <div className="rvo-topnav__spacer"></div>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="#">
              Uitloggen
            </a>
          </li>
        </ul>
      </nav>

      <main className="rvo-max-width-layout rvo-max-width-layout--md">
        <div className="rvo-content">
          <h1 className="utrecht-heading-1">Table</h1>
          <div className="rvo-table--responsive">
            <table className="rvo-table">
              <caption className="rvo-caption">Table description.</caption>
              <thead className="rvo-table-head">
                <tr className="rvo-table-row">
                  <th scope="col" className="rvo-table-header">
                    Title
                  </th>
                  <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                    Text <div className="rvo-icon rvo-icon--delta-omlaag rvo-icon--sm rvo-icon--hemelblauw"></div>
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
    </div>
  );
};

export default Table;
