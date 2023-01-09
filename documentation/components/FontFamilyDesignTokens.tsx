import styled from '@emotion/styled';
// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from './helpers';

type FontFamilyDesignTokensProps = {
  tokens: any;
};

const FontFamilyDesignTokens = ({ tokens }: FontFamilyDesignTokensProps) => {
  return (
    <Container>
      {tokens.map(({ name, path, attributes, value }) => {
        let fontName = value.split(',')[0].replace(/"/g, '');
        const isFallback = attributes.item.indexOf('fallback') > -1;
        const cssVar = path2css(path);

        return (
          <FontFamilyContainer key={name} isFallback={isFallback}>
            <FontNameTitleContainer>
              {isFallback && `Fallback: `}
              <FontNameTitle fontFamily={cssVar} fontWeight={designTokens.rvoFontWeightNormal} isFallback={isFallback}>
                {fontName}
              </FontNameTitle>
            </FontNameTitleContainer>
            <code>{cssVar}</code>
          </FontFamilyContainer>
        );
      })}
    </Container>
  );
};

export default FontFamilyDesignTokens;

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const FontFamilyContainer = styled.div<{ isFallback: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2em;
  margin-bottom: 2em;
  ${({ isFallback }) => isFallback && `margin-top: -1em;`}
`;

const FontNameTitleContainer = styled.div`
  width: 30%;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FontNameTitle = styled.span<{ fontFamily: string; fontWeight: string; isFallback: boolean }>`
  font-size: ${({ isFallback }) => (!isFallback ? designTokens.rvoFontSizeXl : designTokens.rvoFontSizeMd)};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
