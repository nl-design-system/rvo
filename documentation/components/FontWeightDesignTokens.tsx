import styled from '@emotion/styled';
import { path2css } from './helpers';

type FontWeightDesignTokensProps = {
  tokens: any;
};

const FontWeightDesignTokens = ({ tokens }: FontWeightDesignTokensProps) => {
  return (
    <Container>
      {tokens.map(({ name, path, value }) => {
        return (
          <FontWeightContainer key={name}>
            <FontWeightTitle fontWeight={path2css(path)}>{value}</FontWeightTitle>
            <code>{path2css(path)}</code>
          </FontWeightContainer>
        );
      })}
    </Container>
  );
};

export default FontWeightDesignTokens;

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

const FontWeightTitle = styled.span<{ fontWeight: string }>`
  width: 30%;
  flex-shrink: 0;
  font-weight: ${({ fontWeight }) => fontWeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
