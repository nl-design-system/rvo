import styled from '@emotion/styled/macro';
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import React from 'react';
import { path2css } from './helpers';

type FontFamilyDesignTokensProps = {
  tokens: any;
};

const FontFamilyDesignTokens = ({ tokens }: FontFamilyDesignTokensProps) => {
  return (
    <div>
      {tokens.map(({ name, path, attributes, value }) => {
        let fontName = value.split(',')[0].replace(/"/g, '');
        const isFallback = attributes.item.indexOf('fallback') > -1;
        const cssVar = path2css(path);

        return (
          <FontFamilyContainer key={name} isFallback={isFallback}>
            <FontNameTitleContainer>
              {isFallback && `Fallback: `}
              <FontNameTitle
                fontFamily={cssVar}
                fontWeight={designTokens.nlRvoFontWeightNormal}
                isFallback={isFallback}
              >
                {fontName}
              </FontNameTitle>
            </FontNameTitleContainer>
            <div>
              <code>{cssVar}</code>
            </div>
          </FontFamilyContainer>
        );
      })}
    </div>
  );
};

export default FontFamilyDesignTokens;

const FontFamilyContainer = styled.div<{ isFallback: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3em;
  margin-bottom: 2em;
  ${({ isFallback }) => isFallback && `margin-top: -1em;`}
`;

const FontNameTitleContainer = styled.div`
  width: 30%;
`;

const FontNameTitle = styled.span<{ fontFamily: string; fontWeight: string; isFallback: boolean }>`
  font-size: ${({ isFallback }) => (!isFallback ? designTokens.nlRvoFontSizeXl : designTokens.nlRvoFontSizeMd)};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
