import styled from '@emotion/styled/macro';
// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from './helpers';

type SizeDesignTokensProps = {
  tokens: any;
};

export const SizeDesignTokens = ({ tokens }: SizeDesignTokensProps) => {
  return (
    <Container>
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <TokenContainer key={name}>
            <SizeExampleContainer>
              <SizeExample size={value}></SizeExample>
            </SizeExampleContainer>
            <TokenInfo>
              <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              <div>{value}</div>
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
  align-items: flex-start;
  gap: 2em;
  margin-bottom: 1em;
`;

const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const SizeExampleContainer = styled.div`
  width: 20%;
  max-width: 200px;
`;

const SizeExample = styled.div(
  {
    display: 'inline-block',
  },
  ({ size = designTokens.rvoSpaceMd }: { size?: string }) => ({
    backgroundColor: designTokens.rvoColorHemelblauwTint1,
    height: `${size}`,
    width: `${size}`,
  }),
);
