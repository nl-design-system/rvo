import { path2css } from '../helpers';

type FontWeightDesignTokensProps = {
  tokens: any;
};

const FontWeightDesignTokens = ({ tokens }: FontWeightDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ name, path, value }) => {
        return (
          <div className="design-tokens__row" key={name}>
            <div className="design-tokens__column" style={{ fontWeight: path2css(path) }}>
              {value}
            </div>
            <code>{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default FontWeightDesignTokens;
