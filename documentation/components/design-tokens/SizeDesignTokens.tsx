import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';

type SizeDesignTokensProps = {
  tokens: any;
};

export const SizeDesignTokens = ({ tokens }: SizeDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <div className="design-tokens__row" key={name}>
            <div className="design-tokens__column design-tokens__column--20" style={{ maxWidth: '200px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: designTokens.rvoColorHemelblauwTint1,
                  height: value,
                  width: value,
                }}
              />
            </div>
            <div className="design-tokens__column">
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
