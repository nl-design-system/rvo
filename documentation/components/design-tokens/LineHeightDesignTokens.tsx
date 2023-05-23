import { path2css } from '../helpers';
import './styles.scss';

type LineHeightDesignTokensProps = {
  tokens: any;
};

const LineHeightDesignTokens = ({ tokens }: LineHeightDesignTokensProps) => {
  return (
    <div className="design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, value }) => {
        return (
          <div className="design-tokens__row" key={name} style={{ marginBlockStart: 'var(--rvo-space-md)' }}>
            <div className="design-tokens__column design-tokens__column--30" style={{ lineHeight: path2css(path) }}>
              {value}
              <br />
              Voor ondernemende Nederlanders.
              <br />
              Wij helpen u graag vooruit.
            </div>
            <code className="design-tokens__column">{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default LineHeightDesignTokens;
