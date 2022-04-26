import styled from '@emotion/styled/macro';
import React from 'react';
import { hexToRgb, path2css } from './helpers';

type ColorDesignTokensProps = {
  tokens: any;
};

export const ColorDesignTokens = ({ tokens }: ColorDesignTokensProps) => {
  return (
    <Container>
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
    </Container>
  );
};

// Styled components
const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const TokenContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
`;

const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const ColorExample = styled.div(
  {
    outline: '1px solid silver',
    display: 'inline-block',
  },
  ({ color, round, size = 2 }: { color: string; round?: boolean; size?: number }) => ({
    backgroundColor: color,
    height: `${size}em`,
    width: `${size}em`,
    borderRadius: round ? `${size / 2}em` : 0,
  }),
);
