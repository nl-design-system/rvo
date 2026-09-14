export interface ISkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Alternatieve weergave van het component */
  variant?: 'circular';
  /** De gewenste animatie */
  animation?: 'shimmer' | 'pulse';
  /** De kleur van het component */
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
  /** De breedte van het component `"100px"` `"50%"` **/
  width?: string;
  /** De hoogte van het component `"100px"` `"50%"` **/
  height?: string;
}
