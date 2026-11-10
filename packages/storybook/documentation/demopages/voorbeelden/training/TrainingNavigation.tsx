import { Link } from '@nl-rvo/component-library-react';

interface ITrainingNavigationLink {
  label: string;
  href: string;
}

interface ITrainingNavigationProps {
  previous?: ITrainingNavigationLink;
  next?: ITrainingNavigationLink;
}

const TrainingNavigation = ({ previous, next }: ITrainingNavigationProps) => (
  <nav
    aria-label="Navigatie tussen onderdelen"
    className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm"
  >
    <div className="rvo-action-group">
      {previous && (
        <Link callToAction={true} outline={true} href={previous.href} icon="terug" iconPlacement="left">
          Vorige: {previous.label}
        </Link>
      )}
      {next && (
        <Link callToAction={true} href={next.href} icon="pijl-naar-rechts" iconPlacement="right">
          Volgende: {next.label}
        </Link>
      )}
    </div>
  </nav>
);

export default TrainingNavigation;
