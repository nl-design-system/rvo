import styled from '@emotion/styled/macro';
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import React from 'react';

type ComponentNameProps = {
  children: React.ReactNode;
  className?: string;
};

export const ComponentName = ({ children, className }: ComponentNameProps) => {
  return <StyledH1 className={className}>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  width: 100%;
  margin-top: 0;
  margin-bottom: ${designTokens.rvoSpaceSm};
  font-family: ${designTokens.rvoFontSansSerifFontFamily};
  font-size: ${designTokens.rvoFontSizeXl};
  line-height: 48px;
  font-weight: ${designTokens.rvoFontWeightBold};
  text-align: left;
  display: grid;
  padding-top: ${designTokens.rvoSpaceLg};
  padding-bottom: ${designTokens.rvoSpaceLg};
  padding-left: ${designTokens.rvoSpaceMd};
  padding-right: ${designTokens.rvoSpaceMd};
`;
