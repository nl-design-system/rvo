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
          <strong>Aangepast Logo</strong>
        </p>
        <div className="rvo-rhs-update-component">
          <div className="rvo-logo">
            <div className="rvo-logo-lint">
              <img src="images/lint.svg"></img>
            </div>
            <div className="rvo-logo-text">
              Rijksdienst voor Ondernemend
              <br />
              Nederland
            </div>
          </div>
        </div>
        <p>
          <strong>Opmerkingen</strong>
        </p>
        <ul>
          <li>Het logo wordt een component met verschillende divs in plaats van een platte SVG afbeelding.</li>
          <li>De tekst wordt het RijksOverheidSansWebText font.</li>
          <li>De kleur van de tekst wordt logoblauw in plaats van zwart.</li>
          <li>In de logo tekst zit een br element om de tekst correct af te breken.</li>
        </ul>
      </main>
    </div>
  );
};

export default LogoUpdate;
