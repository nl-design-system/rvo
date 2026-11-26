// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';
import { TokenBlock } from './TokenBlock';

type FontFamilyDesignTokensProps = {
  tokens: any;
};

const FontFamilyDesignTokens = ({ tokens }: FontFamilyDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
      {tokens.map(({ name, path, attributes, value }) => {
        const fontName = value.split(',')[0].replace(/["']/g, '');
        const isFallback = attributes.item.indexOf('fallback') > -1;
        const fontNameStyle = {
          fontFamily: path2css(path),
          fontSize: !isFallback ? designTokens.rvoFontSizeXl : designTokens.rvoFontSizeMd,
          fontWeight: designTokens.rvoFontWeightNormal,
        };

        return (
          <TokenBlock
            key={name}
            title={`${isFallback ? 'Fallback: ' : ''}${fontName}`}
            path={path}
            visual={<span style={fontNameStyle}>Rijksdienst voor Ondernemend Nederland</span>}
            visualPosition="below"
            rows={[{ label: 'Lettertype', value: fontName }]}
          />
        );
      })}
    </div>
  );
};

export default FontFamilyDesignTokens;
