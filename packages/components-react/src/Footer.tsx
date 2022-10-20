/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
// import { MaxWidthLayout } from '../../max-width-layout/css/template';

interface IFooterItem {
  content: string;
  link?: string;
}

interface IFooterColumn {
  label?: string;
  items: IFooterItem[];
}

interface IFooterProps {
  columns: IFooterColumn[];
}

export const Footer: React.FC<PropsWithChildren<IFooterProps>> = ({ children }) => {
  return (
    <PageFooter className="rvo-footer">
      {/*<MaxWidthLayout size="lg">*/}
      {children}
      {/*</MaxWidthLayout>*/}
    </PageFooter>
  );
};
