/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import React from 'react';
import { Heading } from '../../heading/css/template';
import { Link } from '../../link/css/template';
import { MaxWidthLayout } from '../../max-width-layout/css/template';
import validateHTML from '../../utils/validateHTML';
import { defaultArgs } from './defaultArgs';
import './index.scss';

interface IFooterItem {
  content: string;
  link?: string;
}

interface IFooterColumn {
  label?: string;
  items: IFooterItem[];
}

export interface IFooterProps {
  columns: IFooterColumn[];
}

export const argTypes = {
  columns: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const Footer: React.FC<IFooterProps> = ({ columns = defaultArgs.columns }: IFooterProps) => {
  return (
    <UtrechtPageFooter className="rvo-footer">
      <MaxWidthLayout size="lg">
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="rvo-footer-menu">
            {column.label?.length && (
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent={column.label}></Heading>
              </li>
            )}
            {column.items.map((item, itemIndex) => {
              let itemMarkup;

              if (item.link?.length) {
                itemMarkup = (
                  <Link
                    content={item.content}
                    url={item.link}
                    showIcon="before"
                    icon="delta-naar-rechts"
                    iconSize="sm"
                    iconColor="wit"
                    noUnderline={true}
                  />
                );
              } else if (typeof item.content === 'string' && item.content.length && validateHTML(item.content)) {
                itemMarkup = <div dangerouslySetInnerHTML={{ __html: item.content }}></div>;
              } else {
                itemMarkup = item.content;
              }

              return (
                <li key={itemIndex} className="rvo-footer-menu-item">
                  {itemMarkup}
                </li>
              );
            })}
          </ul>
        ))}
      </MaxWidthLayout>
    </UtrechtPageFooter>
  );
};

export default Footer;
