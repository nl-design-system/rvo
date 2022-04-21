import styled from '@emotion/styled/macro';
import React from 'react';
import { ColorExample } from './ColorExample';

type ColorDesignTokensProps = {
  tokens: any;
  onClick?: () => void;
};

export const ColorDesignTokens = ({ tokens }: ColorDesignTokensProps) => {
  return (
    <div>
      {tokens.map((token) => {
        if (token.attributes.type === 'color') {
          return <ColorToken key={token.name} token={token} />;
        }

        const { name, path, attributes, value } = token;
        return (
          <TokenContainer key={name}>
            <TokenInfo>
              <div>
                <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              </div>
              <div>{value}</div>
            </TokenInfo>
            <div>
              <code>{path2css(path)}</code>
            </div>
          </TokenContainer>
        );
      })}
    </div>
  );
};

type ColorTokenProps = {
  token: any;
};

const ColorToken = ({ token }: ColorTokenProps) => {
  const { path, attributes, value } = token;
  const rgbCode = hexToRgb(value);
  return (
    <TokenContainer>
      <ColorExample color={token.value} size={3} round={true}></ColorExample>
      <TokenInfo>
        <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
        <div>{value}</div>
        <div>{`RGB ${rgbCode.r}-${rgbCode.g}-${rgbCode.b}`}</div>
      </TokenInfo>
      <code>{path2css(path)}</code>
    </TokenContainer>
  );
};

// Helper functions
const path2css = (path: string[]) => `var(--${path.join('-')})`;

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
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
