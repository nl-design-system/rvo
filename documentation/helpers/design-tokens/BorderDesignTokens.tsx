// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { item2title } from '../helpers';
import { TokenBlock } from './TokenBlock';

type BorderDesignTokensProps = {
  tokens: any;
};

export const BorderDesignTokens = ({ tokens }: BorderDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <TokenBlock
            key={name}
            title={item2title(attributes.item)}
            path={path}
            headingLevel="h2"
            visual={
              <div
                style={{
                  backgroundColor: designTokens.rvoColorHemelblauw300,
                  borderEndEndRadius: value,
                  flexShrink: 0,
                  height: '64px',
                  width: '64px',
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
