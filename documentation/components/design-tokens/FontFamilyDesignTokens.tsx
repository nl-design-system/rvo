// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';
import './styles.scss';

type FontFamilyDesignTokensProps = {
  tokens: any;
};

const FontFamilyDesignTokens = ({ tokens }: FontFamilyDesignTokensProps) => {
  return (
    <div className="rvo-design-tokens__container" style={{ marginBlockEnd: 'var(--rvo-space-3xl)' }}>
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
          <div className="rvo-design-tokens__row" style={isFallback ? { marginBlockEnd: '1em' } : {}} key={name}>
            <div className="rvo-design-tokens__column rvo-design-tokens__column--30">
              {isFallback && `Fallback: `}
              <div style={fontNameTitleStyle}>{fontName}</div>
            </div>
            <code className="rvo-design-tokens__column">{cssVar}</code>
          </div>
        );
      })}
    </div>
  );
};

export default FontFamilyDesignTokens;
