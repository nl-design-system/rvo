// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { item2title } from '../helpers';
import { TokenBlock } from './TokenBlock';

type SizeDesignTokensProps = {
  tokens: any;
};

export const SizeDesignTokens = ({ tokens }: SizeDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <TokenBlock
            key={name}
            headingLevel="h2"
            title={item2title(attributes.item)}
            path={path}
            visual={
              <div
                style={{
                  backgroundColor: designTokens.rvoColorHemelblauw300,
                  flexShrink: 0,
                  height: value,
                  width: value,
                }}
              />
            }
            rows={[{ label: 'Waarde', value }]}
          />
        );
      })}
    </div>
  );
};
