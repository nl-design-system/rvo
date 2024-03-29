import { path2css } from '../helpers';

type FontSizeDesignTokensProps = {
  tokens: any;
};

const FontSizeDesignTokens = ({ tokens }: FontSizeDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <div className="rvo-design-tokens__row" style={{ marginBlockEnd: 'var(--rvo-space-md)' }} key={name}>
            <div className="rvo-design-tokens__column rvo-design-tokens__column--15">
              <strong>{attributes.item}</strong>
              {`${16 * parseFloat(value)}px / ${value}`}
            </div>
            <div
              className="rvo-design-tokens__column rvo-design-tokens__column--50"
              style={{ fontSize: value, lineHeight: '1em' }}
            >
              Rijksdienst voor Ondernemend Nederland
            </div>
            <code className="rvo-design-tokens__column rvo-design-tokens__column--flex">{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};

export default FontSizeDesignTokens;
