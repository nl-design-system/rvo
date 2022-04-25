import styled from '@emotion/styled/macro';
import React from 'react';
import { path2css } from './helpers';

type FontSizeDesignTokensProps = {
  tokens: any;
};

const FontSizeDesignTokens = ({ tokens }: FontSizeDesignTokensProps) => {
  return (
    <div>
      {tokens.map(({ name, path, attributes, value }) => {
        return (
          <FontSizeContainer key={name}>
            <FontSizeDescription>
              <strong>{attributes.item}</strong>
              <br />
              {`${16 * parseFloat(value)}px / ${value}`}
            </FontSizeDescription>
            <FontSizeExample fontSize={value}>Rijksdienst voor Ondernemend Nederland</FontSizeExample>
            <div>
              <code>{path2css(path)}</code>
            </div>
          </FontSizeContainer>
        );
      })}
    </div>
  );
};

export default FontSizeDesignTokens;

const FontSizeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3em;
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
