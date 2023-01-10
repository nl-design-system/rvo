import { path2css } from '../helpers';

type LineHeightDesignTokensProps = {
  tokens: any;
};

const LineHeightDesignTokens = ({ tokens }: LineHeightDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ name, path, value }) => {
        return (
          <div className="design-tokens__row" key={name}>
            <div className="design-tokens__column" style={{ lineHeight: path2css(path) }}>
              {value}
              <br />
              Voor ondernemende Nederlanders die werken aan een duurzame en economisch sterke samenleving.
              <br />
              Wij helpen u graag vooruit.
            </div>
            <code className="design-tokens__column design-tokens__column--30">{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default LineHeightDesignTokens;
