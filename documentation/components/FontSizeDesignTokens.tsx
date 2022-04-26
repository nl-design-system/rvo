import styled from '@emotion/styled/macro';
import React from 'react';
import { path2css } from './helpers';

type FontSizeDesignTokensProps = {
  tokens: any;
};

const FontSizeDesignTokens = ({ tokens }: FontSizeDesignTokensProps) => {
  return (
    <Container>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <FontSizeContainer key={name}>
            <FontSizeDescription>
              <strong>{attributes.item}</strong>
              <br />
              {`${16 * parseFloat(value)}px / ${value}`}
            </FontSizeDescription>
            <FontSizeExample fontSize={value}>Rijksdienst voor Ondernemend Nederland</FontSizeExample>
            <code>{path2css(path)}</code>
          </FontSizeContainer>
        );
      })}
    </Container>
  );
};

export default FontSizeDesignTokens;

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const FontSizeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
`;

const FontSizeExample = styled.span<{ fontSize: string }>`
  width: 50%;
  font-size: ${({ fontSize }) => fontSize};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FontSizeDescription = styled.div`
  width: 150px;
`;
