import styled from '@emotion/styled/macro';
import React from 'react';
import { path2css } from './helpers';

type FontWeightDesignTokensProps = {
  tokens: any;
};

const FontWeightDesignTokens = ({ tokens }: FontWeightDesignTokensProps) => {
  return (
    <div>
      {tokens.map(({ name, path, value }) => {
        return (
          <FontWeightContainer key={name}>
            <FontWeightTitle fontWeight={path2css(path)}>{value}</FontWeightTitle>
            <div>
              <code>{path2css(path)}</code>
            </div>
          </FontWeightContainer>
        );
      })}
    </div>
  );
};

export default FontWeightDesignTokens;

const FontWeightContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3em;
  margin-bottom: 1em;
`;

const FontWeightTitle = styled.span<{ fontWeight: string }>`
  font-weight: ${({ fontWeight }) => fontWeight};
  width: 30%;
`;
