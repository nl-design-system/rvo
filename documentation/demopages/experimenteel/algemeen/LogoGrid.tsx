import '../../common/style.scss';

const LogoGrid = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--logo-grid">
      <div className="rvo-logo-grid">
        <div className="rvo-logo-grid__title">In opdracht van</div>
        <div className="rvo-logo-grid__items">
          <div className="rvo-logo-grid__item">
            <img src="images/logo-grid/enjoy-signature-bottom-en.svg" className="rvo-logo-grid__logo" />
          </div>
          <div className="rvo-logo-grid__item">
            <img src="images/logo-grid/flag-of-europe.svg" className="rvo-logo-grid__logo" />
          </div>
          <div className="rvo-logo-grid__item">Ministerie van Economische Zaken en Klimaat</div>
        </div>
        <div className="rvo-logo-grid__title">In samenwerking met</div>
        <div className="rvo-logo-grid__items">
          <div className="rvo-logo-grid__item">
            <img src="images/logo-grid/nl-branding.svg" className="rvo-logo-grid__logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
