import { HTMLAttributes } from 'react';

type QuoteUser = {
  name: string;
  role: string;
  image?: Pick<HTMLImageElement, 'src' | 'alt'> | React.JSX.Element;
};

export interface IQuoteProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  user: QuoteUser;
}
