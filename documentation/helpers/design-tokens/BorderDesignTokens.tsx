// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';

type BorderDesignTokensProps = {
  tokens: any;
};

export const BorderDesignTokens = ({ tokens }: BorderDesignTokensProps) => {
  const renderBordertext = (borderName: string) => {
    switch (borderName) {
      case 'sm':
        return 'Small';
      case 'md':
        return 'Medium';
      case 'xl':
        return 'Extra large';
      default:
        return 'not found';
    }
  };

  return (
    <div className="rvo-design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <div className="rvo-design-tokens__row" key={name}>
            <div className="rvo-design-tokens__column rvo-design-tokens__column--20" style={{ maxWidth: '200px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: designTokens.rvoColorHemelblauw300,
                  height: '64px',
                  width: '64px',
                  borderEndEndRadius: value,
                }}
              />
            </div>
            <div className="rvo-design-tokens__column">
              <strong>{renderBordertext(attributes.item)}</strong>
              <div>{value}</div>
            </div>
            <code>{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};
