import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Table = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-layout--md">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  Menu item
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Menu item with icon
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md">
                  Last menu item
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--md rvo-menu-link--toggle">
                  <span className="rvo-icon rvo-icon--md rvo-icon--before rvo-icon--wit rvo-icon--menu"></span>Menu
                  toggle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <div className="rvo-content">
          <h1 className="utrecht-heading-1">Table</h1>
          <table className="rvo-table">
            <caption className="rvo-caption">Table description.</caption>
            <thead className="rvo-table-head">
              <tr className="rvo-table-row">
                <th scope="col" className="rvo-table-header">
                  Title
                </th>
                <th scope="col" className="rvo-table-header">
                  Text
                </th>
                <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                  Price ($)
                </th>
              </tr>
            </thead>
            <tbody className="rvo-table-body">
              <tr className="rvo-table-row">
                <td className="rvo-table-cell">Title value</td>
                <td className="rvo-table-cell">Text value</td>
                <td className="rvo-table-cell rvo-table-cell--numeric">57</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Table;
