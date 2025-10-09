import { Heading } from '@nl-rvo/components';
import '../../common/badge.scss';

const Badge = () => {
  return (
    <div className="rvo-demo-page rvo-badge-demopage">
      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
        <Heading type="h2">Badge demo page</Heading>
        <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--md ">
          Dit is een experimentele demopagina om het badge component te testen. Een badge heeft een getal die aangeeft
          hoeveel items er beschikbaar zijn. Bijvoorbeeld hoeveel nieuwe berichten er zijn of hoeveel filters er
          geselecteerd zijn.
        </p>
        <span className="rvo-span">
          Berichten <span className="rvo-badge">3</span>
        </span>
        <br /> <br />
        <span className="rvo-span">
          Aantal filters geselecteerd <span className="rvo-badge">39</span>
        </span>
        <br /> <br />
        <span className="rvo-span">
          <a href="#" className="rvo-link">
            Nieuwe aanvragen
          </a>{' '}
          <span className="rvo-badge">99+</span>
        </span>
      </main>
    </div>
  );
};

export default Badge;
