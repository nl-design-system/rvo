import styled from '@emotion/styled/macro';
import React from 'react';
import { ColorExample } from './ColorExample';
import { hexToRgb, path2css } from './helpers';

type ColorDesignTokensProps = {
  tokens: any;
};

export const ColorDesignTokens = ({ tokens }: ColorDesignTokensProps) => {
  return (
    <div>
      {tokens.map(({ path, attributes, value, name }) => {
        const rgbCode = hexToRgb(value);
        return (
          <TokenContainer key={name}>
            <ColorExample color={value} size={3} round={true}></ColorExample>
            <TokenInfo>
              <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              <div>{value}</div>
              <div>{`RGB ${rgbCode.r}-${rgbCode.g}-${rgbCode.b}`}</div>
            </TokenInfo>
            <code>{path2css(path)}</code>
          </TokenContainer>
        );
      })}
    </div>
  );
};

// Styled components
const TokenContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3em;
  margin-bottom: 1em;
`;

const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;
