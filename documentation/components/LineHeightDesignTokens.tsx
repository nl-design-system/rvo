import styled from '@emotion/styled/macro';
import React from 'react';
import { path2css } from './helpers';

type LineHeightDesignTokensProps = {
  tokens: any;
};

const LineHeightDesignTokens = ({ tokens }: LineHeightDesignTokensProps) => {
  return (
    <Container>
      {tokens.map(({ name, path, value }) => {
        return (
          <FontWeightContainer key={name}>
            <FontWeightTitle lineHeight={path2css(path)}>
              {value}
              <br />
              Voor ondernemende Nederlanders die werken aan een duurzame en economisch sterke samenleving.
              <br />
              Wij helpen u graag vooruit.
            </FontWeightTitle>
            <code>{path2css(path)}</code>
          </FontWeightContainer>
        );
      })}
    </Container>
  );
};

export default LineHeightDesignTokens;

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const FontWeightContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
`;

const FontWeightTitle = styled.span<{ lineHeight: string }>`
  width: 30%;
  flex-shrink: 0;
  line-height: ${({ lineHeight }) => lineHeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
