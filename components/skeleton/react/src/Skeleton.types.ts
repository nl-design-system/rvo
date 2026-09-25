export interface ISkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'circular';
  animation?: 'shimmer' | 'pulse';
  color?:
    | 'hemelblauw'
    | 'lichtblauw'
    | 'donkerblauw'
    | 'grijs-100'
    | 'grijs-200'
    | 'grijs-300'
    | 'grijs-400'
    | 'grijs-500'
    | 'grijs-600';
  /** De duur van de animatie in `"2s"``"800ms"` */
  duration?: string;
  width?: string;
  height?: string;
}
