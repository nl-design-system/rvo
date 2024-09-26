import { Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../common/footer.scss';

const FooterDP = () => {
  return (
    <div className="rvo-demo-page rvo-footer-demopage">
      <Header link="#" />
      <LayoutFlow size="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="before"
        />
        <LayoutFlow size="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading textContent="Footer demo page"></Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Eu nisl nunc mi ipsum faucibus. Tincidunt eget nullam non nisi est sit amet
              facilisis. Justo donec enim diam vulputate ut pharetra sit amet. Non pulvinar neque laoreet suspendisse
              interdum consectetur libero id faucibus. Sed vulputate odio ut enim blandit volutpat. Quam id leo in vitae
              turpis massa sed elementum tempus. Diam maecenas ultricies mi eget mauris pharetra et. At urna condimentum
              mattis pellentesque. Aliquam id diam maecenas ultricies. Diam phasellus vestibulum lorem sed risus. Ut
              ornare lectus sit amet est placerat in. Faucibus et molestie ac feugiat sed lectus. Aliquam sem fringilla
              ut morbi tincidunt augue. Amet massa vitae tortor condimentum lacinia quis. Nullam eget felis eget nunc
              lobortis. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Facilisis mauris sit amet
              massa vitae. Sed blandit libero volutpat sed cras ornare. Eu feugiat pretium nibh ipsum consequat nisl
              vel. In dictum non consectetur a erat.
            </p>
            <p>
              {' '}
              Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sem et tortor consequat
              id porta nibh venenatis cras. Velit ut tortor pretium viverra suspendisse potenti. Potenti nullam ac
              tortor vitae purus faucibus ornare suspendisse. Ultricies integer quis auctor elit sed vulputate mi. Morbi
              non arcu risus quis. Pellentesque habitant morbi tristique senectus et. Nunc sed id semper risus in
              hendrerit. Eu mi bibendum neque egestas congue quisque egestas. Eu non diam phasellus vestibulum lorem. Id
              diam vel quam elementum pulvinar etiam non quam. Pharetra pharetra massa massa ultricies mi quis hendrerit
              dolor. Duis tristique sollicitudin nibh sit amet commodo nulla. Viverra nibh cras pulvinar mattis. Ac
              feugiat sed lectus vestibulum. Sed faucibus turpis in eu mi bibendum neque. Gravida rutrum quisque non
              tellus. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Donec massa sapien faucibus et
              molestie. Enim ut sem viverra aliquet eget sit amet tellus cras. Ac turpis egestas maecenas pharetra
              convallis posuere morbi.
            </p>
            <p>
              Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed egestas egestas
              fringilla phasellus faucibus scelerisque eleifend. Purus in massa tempor nec feugiat nisl pretium fusce
              id. Cursus sit amet dictum sit amet justo donec. Sagittis nisl rhoncus mattis rhoncus urna neque viverra
              justo nec. Habitasse platea dictumst quisque sagittis purus sit amet. Et malesuada fames ac turpis egestas
              maecenas pharetra. Magna fringilla urna porttitor rhoncus. Elementum curabitur vitae nunc sed velit
              dignissim. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Dolor magna eget est lorem
              ipsum dolor sit amet consectetur. Suspendisse ultrices gravida dictum fusce ut placerat orci.
            </p>
          </main>

          <div className="rvo-footer-bg">
            <footer className="utrecht-page-footer rvo-footer rvo-footer--lg">
              <div className="rvo-footer-columns">
                <div className="rvo-footer-column">
                  <h3 className="utrecht-heading-3 rvo-footer-menu-title">Optionele extra lijst</h3>
                  <ul className="rvo-footer-menu">
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rvo-footer-column">
                  <h3 className="utrecht-heading-3 rvo-footer-menu-title">Optionele extra lijst</h3>
                  <ul className="rvo-footer-menu">
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rvo-footer-column">
                  <h3 className="utrecht-heading-3 rvo-footer-menu-title">Optionele extra lijst</h3>
                  <ul className="rvo-footer-menu">
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rvo-footer-column">
                  <h3 className="utrecht-heading-3 rvo-footer-menu-title">Optionele extra lijst</h3>
                  <ul className="rvo-footer-menu">
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                    <li className="rvo-footer-menu-item">
                      <a className="rvo-link rvo-link--with-icon rvo-link--no-underline" href="#">
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit rvo-link__icon--before"
                          role="img"
                          aria-label="Delta naar rechts"
                        ></span>
                        Optioneel extra menu item
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rvo-footer-payoff">Optionele RVO pay-off</div>
              <div className="rvo-footer-bottom">
                <ul className="rvo-footer-bottom-menu">
                  <li className="rvo-footer-menu-item">
                    <a
                      className="rvo-link rvo-link--no-underline"
                      href="https://www.rvo.nl/onderwerpen/contact"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="rvo-footer-menu-item">
                    <a
                      className="rvo-link rvo-link--no-underline"
                      href="https://www.rvo.nl/onderwerpen/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="rvo-footer-menu-item">
                    <a
                      className="rvo-link rvo-link--no-underline"
                      href="https://www.rvo.nl/onderwerpen/cookies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cookies en anti-spam
                    </a>
                  </li>
                  <li className="rvo-footer-menu-item">
                    <a className="rvo-link rvo-link--no-underline" href="#">
                      Toegankelijkheid
                    </a>
                  </li>
                  <li className="rvo-footer-menu-item">
                    <a
                      className="rvo-link rvo-link--no-underline"
                      href="https://www.rvo.nl/onderwerpen/proclaimer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Proclaimer
                    </a>
                  </li>
                  <li className="rvo-footer-menu-item">
                    <a
                      className="rvo-link rvo-link--no-underline"
                      href="https://www.rvo.nl/onderwerpen/kwetsbaarheid"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kwetsbaarheid melden
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default FooterDP;
