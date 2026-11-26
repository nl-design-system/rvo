import './styles.scss';
import { hexToRgb } from '../helpers';
import { TokenBlock } from './TokenBlock';

type ColorDesignTokensProps = {
  tokens: any;
};

export const ColorDesignTokens = ({ tokens }: ColorDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        const rgbCode = hexToRgb(value);
        const colorExampleStyle = {
          backgroundColor: value,
          borderRadius: `${3 / 2}em`,
          flexShrink: 0,
          height: '3em',
          outline: `${attributes.item === 'wit' ? '1px solid black' : 'none'}`,
          width: '3em',
        };
        return (
          <TokenBlock
            key={name}
            title={attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
            path={path}
            visual={<div style={colorExampleStyle} />}
            rows={[
              { label: 'Hex', value },
              { label: 'RGB', value: `${rgbCode.r}-${rgbCode.g}-${rgbCode.b}` },
            ]}
          />
        );
      })}
    </div>
  );
};
