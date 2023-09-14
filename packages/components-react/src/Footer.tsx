/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
// import { MaxWidthLayout } from '../../max-width-layout/template';

export interface IFooterItem {
  content: string;
  link?: string;
}

export interface IFooterColumn {
  label?: string;
  items: IFooterItem[];
}

export interface IFooterProps {
  columns: IFooterColumn[];
}

export const Footer = ({ children }: PropsWithChildren<IFooterProps>) => {
  return (
    <PageFooter className="rvo-footer">
      {/*<MaxWidthLayout size="lg">*/}
      {children}
      {/*</MaxWidthLayout>*/}
    </PageFooter>
  );
};
