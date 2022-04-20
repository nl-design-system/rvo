import styled from '@emotion/styled/macro';

type ColorExampleProps = {
  color: string;
  round?: boolean;
  size?: number;
};

export const ColorExample = styled.div(
  {
    outline: '1px solid silver',
    display: 'inline-block',
  },
  ({ color, round, size = 2 }: ColorExampleProps) => ({
    backgroundColor: color,
    height: `${size}em`,
    width: `${size}em`,
    borderRadius: round ? `${size / 2}em` : 0,
  }),
);
