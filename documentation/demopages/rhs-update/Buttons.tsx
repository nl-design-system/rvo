import { Button, Heading, LayoutColumnRow } from '@nl-rvo/components';
import '../common/rhs-update.scss';

const Buttons = () => {
  return (
    <div className="rvo-rhs-update">
      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-rhs-update-content">
        <Heading type="h1" textContent="Buttons"></Heading>
        <p>Deze demopagina laat zien hoe de buttons aangepast moeten worden volgens de aangepaste Rijkshuisstijl.</p>
        <p>
          <strong>Huidige buttons</strong>
        </p>
        <LayoutColumnRow row={true} size="md">
          <Button></Button>
          <Button kind="secondary"></Button>
          <Button kind="quaternary"></Button>
          <Button kind="warning"></Button>
          <Button disabled={true}></Button>
        </LayoutColumnRow>
        <p>
          <strong>Aangepaste buttons</strong>
        </p>
        <div className="rvo-rhs-update-component">
          <LayoutColumnRow row={true} size="md">
            <Button></Button>
            <Button kind="secondary"></Button>
            <Button kind="quaternary"></Button>
            <Button kind="warning"></Button>
            <Button disabled={true}></Button>
          </LayoutColumnRow>
        </div>
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

export default Buttons;
