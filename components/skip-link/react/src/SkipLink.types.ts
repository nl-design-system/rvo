import { HTMLAttributes } from 'react';

export interface ISkipLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  textContent: string;
  anchorLink: string;
}
