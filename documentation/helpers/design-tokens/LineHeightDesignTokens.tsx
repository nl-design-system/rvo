import { item2title, path2css } from '../helpers';
import { TokenBlock } from './TokenBlock';

type LineHeightDesignTokensProps = {
  tokens: any;
};

const LineHeightDesignTokens = ({ tokens }: LineHeightDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <TokenBlock
            key={name}
            title={item2title(attributes.item)}
            path={path}
            visual={
              <span style={{ lineHeight: path2css(path) }}>
                Voor ondernemende Nederlanders.
                <br />
                Wij helpen u graag vooruit.
              </span>
            }
            visualPosition="below"
            rows={[{ label: 'Waarde', value }]}
          />
        );
      })}
    </div>
  );
};

export default LineHeightDesignTokens;
