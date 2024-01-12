// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';

type SpaceDesignTokensProps = {
  tokens: any;
};

export const SpaceDesignTokens = ({ tokens }: SpaceDesignTokensProps) => {
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
                  height: value,
                  width: value,
                }}
              />
            </div>
            <div className="rvo-design-tokens__column">
              <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              <div>{value}</div>
            </div>
            <code>{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};
