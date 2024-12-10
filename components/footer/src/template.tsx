/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import FooterColumn from './footer-column/template';
import FooterItem from './footer-item/template';
import HorizontalRule from '../../horizontal-rule/src/template';
import Link from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

interface IFooterItem {
  content: string;
  link?: string;
}

interface IFooterColumn {
  label?: string;
  items?: IFooterItem[];
}

export interface IFooterProps {
  /** @uxpinignoreprop */
  primaryMenu?: IFooterColumn[];
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  /** @uxpinpropname Footer columns */
  children?: ReactNode | undefined;
  payOff?: string;
  /** @uxpinpropname Secondary menu items */
  secondaryMenu?: IFooterItem[];
}

export const argTypes = {
  primaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  secondaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  payOff: {
    type: {
      name: 'string',
      required: false,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Footer: React.FC<IFooterProps> = ({
  primaryMenu = defaultArgs.primaryMenu,
  maxWidth = defaultArgs.maxWidth,
  payOff = defaultArgs.payOff,
  secondaryMenu = defaultArgs.secondaryMenu,
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
        <div className="rvo-footer__primary-menu-container">
          {children ||
            primaryMenu?.map((column, columnIndex) => (
              <FooterColumn key={columnIndex} label={parseContentMarkup(column.label) as string}>
                {column.items?.map((item, itemIndex) => {
                  return (
                    <FooterItem key={itemIndex} link={item.link}>
                      {item.content}
                    </FooterItem>
                  );
                })}
              </FooterColumn>
            ))}
        </div>
        {payOff && <div className="rvo-footer__payoff">{payOff}</div>}
        {secondaryMenu && (
          <>
            <HorizontalRule />
            <div className="rvo-footer__secondary-menu-container">
              {secondaryMenu.map((item, itemIndex) => {
                return (
                  <Link key={itemIndex} color="wit" href={item.link} noUnderline={true} weight="normal">
                    {item.content}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </UtrechtPageFooter>
    </div>
  );
};

export default Footer;
