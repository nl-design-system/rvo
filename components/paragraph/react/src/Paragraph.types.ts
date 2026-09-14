export interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: 'lintblauw' | 'wit' | 'zwart' | 'grijs-500' | 'grijs-900';
  size?: 'sm' | 'md' | 'lg';
  noSpacing?: boolean;
}
