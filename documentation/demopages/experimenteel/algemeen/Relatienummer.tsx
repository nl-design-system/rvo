import { Footer, Header, Heading, LayoutColumnRow } from '@nl-rvo/components';
import '../../common/relatienummer.scss';

const Relatienummer = () => {
  return (
    <div className="rvo-demo-page rvo-demopage-relatienummer">
      <Header link="#" />
      <LayoutColumnRow size="lg">
        <div className="rvo-topnav__background rvo-topnav__background--horizontal-rule">
          <div className="rvo-max-width-layout rvo-max-width-layout--md">
            <nav className="rvo-topnav rvo-topnav--md">
              <ul className="rvo-topnav__list">
                <li className="rvo-topnav__item">
                  <a className="rvo-link rvo-topnav__link rvo-link--logoblauw" href="#">
                    Home
                  </a>
                </li>
                <li className="rvo-topnav__item">
                  <a className="rvo-link rvo-topnav__link rvo-link--logoblauw" href="#">
                    Mijn aanvragen
                  </a>
                </li>
                <li className="rvo-topnav__item">
                  <a className="rvo-link rvo-topnav__link rvo-link--logoblauw" href="#">
                    Nieuwe aanvraag
                  </a>
                </li>

                <li className="rvo-topnav__item rvo-topnav__item--align-right">
                  <a
                    className="rvo-link rvo-topnav__link rvo-link--logoblauw rvo-link--rn"
                    href="#"
                    title="Relatienummer: 43459823"
                  >
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--wit"
                      role="img"
                      aria-label="Versleutelen"
                    ></span>
                    F.J van Heuve...
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <LayoutColumnRow size="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading textContent="Relatienummer demopagina"></Heading>
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
        </LayoutColumnRow>
      </LayoutColumnRow>
    </div>
  );
};

export default Relatienummer;
