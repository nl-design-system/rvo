import { item2title } from '../helpers';
import { TokenBlock } from './TokenBlock';

type FontSizeDesignTokensProps = {
  tokens: any;
};

const FontSizeDesignTokens = ({ tokens }: FontSizeDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <TokenBlock
            key={name}
            title={item2title(attributes.item)}
            path={path}
            visual={<span style={{ fontSize: value, lineHeight: '1em' }}>Rijksdienst voor Ondernemend Nederland</span>}
            visualPosition="below"
            rows={[{ label: 'Waarde', value: `${16 * parseFloat(value)}px / ${value}` }]}
          />
        );
      })}
    </div>
  );
};

export default FontSizeDesignTokens;
