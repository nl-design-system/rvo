import { Header, Heading, LayoutFlow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import '../../common/paginationupdate.scss';

const PaginationUpdate = () => {
  return (
    <body className="rvo-pagination-update">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="md" />
      <MaxWidthLayout size="md">
        <main className="rvo-padding-block-start--md">
          <div>
            <Heading type="h1" textContent="Pagination Update" />
            <p>Een visuele update van het Pagination component</p>
            <LayoutFlow gap="xl">
              <nav className="rvo-pagination" aria-label="Paginanummer navigatie">
                <div className="rvo-pagination__prev">
                  <a className="rvo-link rvo-link--with-icon" href="#">
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-links rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"></span>
                    Vorige
                  </a>
                </div>
                <ul className="rvo-pagination__list">
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--ellipses">...</li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      9
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--active">
                    <span aria-current="page">10</span>
                  </li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      11
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--ellipses">...</li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      30
                    </a>
                  </li>
                </ul>
                <div className="rvo-pagination__next">
                  <a className="rvo-link rvo-link--with-icon" href="#">
                    Volgende
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"></span>
                  </a>
                </div>
              </nav>
              <nav className="rvo-pagination" aria-label="Paginanummer navigatie">
                <ul className="rvo-pagination__list">
                  <li className="rvo-pagination__item rvo-pagination__item--active">
                    <span aria-current="page">1</span>
                  </li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--ellipses">...</li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      30
                    </a>
                  </li>
                </ul>
                <div className="rvo-pagination__next">
                  <a className="rvo-link rvo-link--with-icon" href="#">
                    Volgende
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"></span>
                  </a>
                </div>
              </nav>
              <nav className="rvo-pagination" aria-label="Paginanummer navigatie">
                <div className="rvo-pagination__prev">
                  <a className="rvo-link rvo-link--with-icon" href="#">
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-naar-links rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"></span>
                    Vorige
                  </a>
                </div>
                <ul className="rvo-pagination__list">
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--ellipses">...</li>
                  <li className="rvo-pagination__item">
                    <a className="rvo-link" href="#">
                      29
                    </a>
                  </li>
                  <li className="rvo-pagination__item rvo-pagination__item--active">
                    <span aria-current="page">30</span>
                  </li>
                </ul>
              </nav>
            </LayoutFlow>
          </div>
        </main>
      </MaxWidthLayout>
    </body>
  );
};

export default PaginationUpdate;
