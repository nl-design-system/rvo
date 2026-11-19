interface ITrainingNavigationLink {
  label: string;
  href: string;
}

interface ITrainingNavigationProps {
  previous?: ITrainingNavigationLink;
  next?: ITrainingNavigationLink;
}

// Uses the HTML/CSS link instead of the React Link component, because the React component does not add
// rvo-link__icon to its icon yet, which keeps the call-to-action icons blue instead of the text color.
const TrainingNavigation = ({ previous, next }: ITrainingNavigationProps) => (
  <nav
    aria-label="Navigatie tussen onderdelen"
    className="rvo-margin-block-start--2xl rvo-margin-block-end--xl rvo-max-width-layout rvo-max-width-layout--sm"
  >
    <div className="rvo-action-group">
      {previous && (
        <a
          href={previous.href}
          className="rvo-link rvo-link--with-icon rvo-link--call-to-action rvo-link--call-to-action-outline"
        >
          <span className="utrecht-icon rvo-icon rvo-icon--md rvo-icon-terug rvo-link__icon" aria-hidden={true}></span>
          <span className="rvo-link__text">Vorige: {previous.label}</span>
        </a>
      )}
      {next && (
        <a href={next.href} className="rvo-link rvo-link--with-icon rvo-link--call-to-action">
          <span className="rvo-link__text">Volgende: {next.label}</span>
          <span
            className="utrecht-icon rvo-icon rvo-icon--md rvo-icon-pijl-naar-rechts rvo-link__icon"
            aria-hidden={true}
          ></span>
        </a>
      )}
    </div>
  </nav>
);

export default TrainingNavigation;
