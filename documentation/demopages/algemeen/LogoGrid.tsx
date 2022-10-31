import '../common/style.scss';

const LogoGrid = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--logo-grid">
      <div className="rvo-logo-grid">
        <div className="rvo-logo-grid__title">In opdracht van</div>
        <div className="rvo-logo-grid__items">
          <div className="rvo-logo-grid__item">
            <img src="images/logo-grid/enjoy-signature-bottom_en.svg" className="rvo-logo-grid__logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
