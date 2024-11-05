import './styles.scss';
import { hexToRgb, path2css } from '../helpers';

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
          height: '3em',
          width: '3em',
          outline: `${attributes.item === 'wit' ? '1px solid black' : 'none'}`,
        };
        return (
          <div className="rvo-design-tokens__row" key={name}>
            <div className="rvo-design-tokens__column rvo-design-tokens__column--20" style={colorExampleStyle} />
            <div className="rvo-design-tokens__column">
              <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              <div>{value}</div>
              <div>{`RGB ${rgbCode.r}-${rgbCode.g}-${rgbCode.b}`}</div>
            </div>
            <code>{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};
