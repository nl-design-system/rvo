/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import FooterColumn from './footer-column/template';
import FooterItem from './footer-item/template';
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
  /** @uxpinignoreprop */
  columns: IFooterColumn[];
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  /** @uxpinpropname Footer columns */
  children?: ReactNode | undefined;
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
  children,
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
        {children ||
          columns.map((column, columnIndex) => (
            <FooterColumn key={columnIndex} label={parseContentMarkup(column.label) as string}>
              {column.items.map((item, itemIndex) => {
                return (
                  <FooterItem key={itemIndex} link={item.link}>
                    {item.content}
                  </FooterItem>
                );
              })}
            </FooterColumn>
          ))}
      </UtrechtPageFooter>
    </div>
  );
};

export default Footer;
