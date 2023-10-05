import { Heading, Logo } from '@nl-rvo/components';
import '../common/rhs-update.scss';

const LogoUpdate = () => {
  return (
    <div className="rvo-rhs-update">
      <main className="rvo-max-width-layout rvo-max-width-layout--sm">
        <Heading type="h1" textContent="Logo"></Heading>
        <p>Deze demopagina laat zien hoe het logo aangepast moeten worden volgens de aangepaste Rijkshuisstijl.</p>
        <p>
          <strong>Huidig logo</strong>
        </p>
        <Logo></Logo>
        <p>
          <strong>Aangepaste buttons</strong>
        </p>
        <div className="rvo-rhs-update-component"></div>
        <p>
          <strong>Opmerkingen</strong>
        </p>
        <ul>
          <li>De hoeken worden afgerond met 3 pixels.</li>
          <li>De Tertiary en warning subtle buttons worden niet aangepast dus zijn niet opgenomen in dit voorbeeld.</li>
          <li>
            Er komt één disabled button voor alle kinds die gebruik maakt van de nieuwe grijstinten. Grijstint-7 voor de
            tekst en grijstint-3 als achtergrondkleur.
          </li>
        </ul>
      </main>
    </div>
  );
};

export default LogoUpdate;
