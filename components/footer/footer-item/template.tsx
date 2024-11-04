/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { ILinkProps, Link } from '../../link/template';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IFooterItemProps {
  /** @uxpinpropname Item content */
  children?: ReactNode;
  link?: string;
  onClick?: ILinkProps['onClick'];
}

export const FooterItem: React.FC<IFooterItemProps> = ({
  link = defaultArgs.link,
  children,
  onClick,
}: IFooterItemProps) => {
  let itemMarkup = parseContentMarkup(children);
  if (link?.length) {
    itemMarkup = (
      <Link
        href={link}
        showIcon="before"
        icon="delta-naar-rechts"
        iconSize="sm"
        iconColor="wit"
        noUnderline={true}
        onClick={onClick}
      >
        {itemMarkup}
      </Link>
    );
  }

  return <li className="rvo-footer-menu-item">{itemMarkup}</li>;
};

export default FooterItem;
