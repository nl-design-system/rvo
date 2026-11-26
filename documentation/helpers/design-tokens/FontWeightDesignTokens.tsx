import { item2title, path2css } from '../helpers';
import { TokenBlock } from './TokenBlock';

type FontWeightDesignTokensProps = {
  tokens: any;
};

const FontWeightDesignTokens = ({ tokens }: FontWeightDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <TokenBlock
            key={name}
            title={item2title(attributes.item)}
            path={path}
            visual={<span style={{ fontWeight: path2css(path) }}>Rijksdienst voor Ondernemend Nederland</span>}
            visualPosition="below"
            rows={[{ label: 'Waarde', value }]}
          />
        );
      })}
    </div>
  );
};

export default FontWeightDesignTokens;
