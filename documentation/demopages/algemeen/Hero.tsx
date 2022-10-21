import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const Hero = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar items={defaultMenuBarItems} size="lg" useIcons={true} iconPlacement="before" menuMaxWidth="lg" />
      <div className="rvo-hero rvo-hero--man-met-laptop">
        <div className="rvo-hero-bg-img-container">
          <img src="images/hero/hero-bg--man-met-laptop.webp" className="rvo-hero-bg-img" />
        </div>
        <MaxWidthLayout size="lg">
          <div className="rvo-hero-content">
            <div className="rvo-hero-text">
              <Heading type="h1" textContent="Hero title" />
              <p className="rvo-hero-description">
                An additional paragraph that gives an introduction what this page is about in easy to understand
                language.
              </p>
            </div>
            <div className="rvo-hero-img-container">
              <img src="images/hero/man-met-laptop.webp" className="rvo-hero-img" />
            </div>
          </div>
        </MaxWidthLayout>
      </div>
      <MaxWidthLayout size="md">
        <main></main>
      </MaxWidthLayout>
    </div>
  );
};

export default Hero;
