import { path2css } from '../helpers';

type FontSizeDesignTokensProps = {
  tokens: any;
};

const FontSizeDesignTokens = ({ tokens }: FontSizeDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <div className="design-tokens__row" key={name}>
            <div className="design-tokens__column design-tokens__column--20">
              <strong>{attributes.item}</strong>
              <br />
              {`${16 * parseFloat(value)}px / ${value}`}
            </div>
            <div
              className="design-tokens__column design-tokens__column--50"
              style={{ fontSize: value, lineHeight: '1em' }}
            >
              Rijksdienst voor Ondernemend Nederland
            </div>
            <code className="design-tokens__column design-tokens__column--flex">{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default FontSizeDesignTokens;
