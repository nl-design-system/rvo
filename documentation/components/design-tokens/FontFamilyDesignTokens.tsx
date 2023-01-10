import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';

type FontFamilyDesignTokensProps = {
  tokens: any;
};

const FontFamilyDesignTokens = ({ tokens }: FontFamilyDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ name, path, attributes, value }) => {
        let fontName = value.split(',')[0].replace(/"/g, '');
        const isFallback = attributes.item.indexOf('fallback') > -1;
        const cssVar = path2css(path);
        const fontNameTitleStyle = {
          fontSize: !isFallback ? designTokens.rvoFontSizeXl : designTokens.rvoFontSizeMd,
          fontFamily: cssVar,
          fontWeight: designTokens.rvoFontWeightNormal,
        };

        return (
          <div className="design-tokens__row" style={isFallback ? { marginTop: '-1em' } : {}} key={name}>
            <div className="design-tokens__column design-tokens__column--20">
              {isFallback && `Fallback: `}
              <div style={fontNameTitleStyle}>{fontName}</div>
            </div>
            <code className="design-tokens__column">{cssVar}</code>
          </div>
        );
      })}
    </div>
  );
};

export default FontFamilyDesignTokens;
