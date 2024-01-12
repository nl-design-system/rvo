/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Heading } from '../heading/template';
import { Link } from '../link/template';
import parseContentMarkup from '../utils/parseContentMarkup';
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
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
}

export const argTypes = {
  columns: {
    type: {
      name: 'array',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
};

export const Footer: React.FC<IFooterProps> = ({
  columns = defaultArgs.columns,
  maxWidth = defaultArgs.maxWidth,
}: IFooterProps) => {
  return (
    <div className="rvo-footer-bg">
      <UtrechtPageFooter
        className={clsx(
          'rvo-footer',
          maxWidth === 'sm' && 'rvo-footer--sm',
          maxWidth === 'md' && 'rvo-footer--md',
          maxWidth === 'lg' && 'rvo-footer--lg',
        )}
      >
        {columns.map((column, columnIndex) => (
          <div key={`column.label${columnIndex}`} className="rvo-footer-column">
            {column.label?.length && (
              <Heading type="h3" textContent={parseContentMarkup(column.label)} className="rvo-footer-menu-title" />
            )}
            <ul key={columnIndex} className="rvo-footer-menu">
              {column.items.map((item, itemIndex) => {
                let itemMarkup;
                if (item.link?.length) {
                  itemMarkup = (
                    <Link
                      content={item.content}
                      href={item.link}
                      showIcon="before"
                      icon="delta-naar-rechts"
                      iconSize="sm"
                      iconColor="wit"
                      noUnderline={true}
                    />
                  );
                } else {
                  itemMarkup = parseContentMarkup(item.content);
                }

                return (
                  <li key={itemIndex} className="rvo-footer-menu-item">
                    {itemMarkup}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </UtrechtPageFooter>
    </div>
  );
};

export default Footer;
