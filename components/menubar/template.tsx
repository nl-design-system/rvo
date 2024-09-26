/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { IconType } from '../icon/types';
import MaxWidthLayout from '../max-width-layout/template';
import './index.scss';
import MenuBarItem from '../menubar-item/template';
export interface IMenuBarItem {
  label: string;
  icon?: IconType;
  link: string | ((event: any) => void);
  align?: 'left' | 'right';
  active?: boolean;
  useDivider?: boolean;
}

export interface IMenuBarProps {
  size: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
  /** @uxpinignoreprop */
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement?: 'before' | 'after';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  type?: 'primary' | 'sub' | 'sub-grid';
  deltaForActiveItem?: boolean;
  /** @uxpinpropname MenuBar items */
  children?: ReactNode | undefined;
  horizontalRule?: boolean;
  linkColor?: 'donkerblauw' | 'hemelblauw' | 'logoblauw' | 'grijs-700' | 'zwart';
  useBackgroundColor?: boolean;
}

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  direction: {
    options: ['horizontal', 'vertical'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'sub', 'sub-grid'],
    control: { type: 'radio' },
  },
  deltaForActiveItem: {
    control: 'boolean',
  },
  horizontalRule: {
    control: 'boolean',
  },
  linkColor: {
    options: ['donkerblauw', 'hemelblauw', 'logoblauw', 'grijs-700', 'zwart'],
    control: { type: 'radio' },
  },
  useBackgroundColor: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const MenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  direction = defaultArgs.direction,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  maxWidth = defaultArgs.maxWidth,
  type = defaultArgs.type,
  deltaForActiveItem = defaultArgs.deltaForActiveItem,
  horizontalRule = defaultArgs.horizontalRule,
  linkColor = defaultArgs.linkColor,
  useBackgroundColor = defaultArgs.useBackgroundColor,
  children,
}: IMenuBarProps) => {
  let itemsMarkup = null;

  if (!children) {
    // Left items
    itemsMarkup = items
      .filter((item) => item.align !== 'right')
      .map((item, index) => (
        <MenuBarItem
          key={`${item.label}--${index}`}
          label={item.label}
          icon={item.icon}
          active={item.active}
          link={item.link}
          useIcons={useIcons}
          size={size}
          iconPlacement={iconPlacement}
          deltaForActiveItem={deltaForActiveItem}
          useDivider={item.useDivider}
          linkColor={linkColor}
        />
      ));

    // Right items
    itemsMarkup.push(
      items
        .filter((item) => item.align === 'right')
        .map((item, index) => {
          return (
            <MenuBarItem
              key={`${item.label}--${index}`}
              label={item.label}
              icon={item.icon}
              active={item.active}
              link={item.link}
              useIcons={useIcons}
              align={index === 0 ? 'right' : 'left'}
              size={size}
              iconPlacement={iconPlacement}
              deltaForActiveItem={deltaForActiveItem}
              useDivider={item.useDivider}
              linkColor={linkColor}
            />
          );
        }),
    );
  } else {
    let isAlignRightSet = false;
    itemsMarkup = React.Children.map(children, (child, index) => {
      // Only set align right prop for the first item that has align = right
      const isAlignRight = (child as any).props.align === 'right';
      if (isAlignRight && !isAlignRightSet) {
        isAlignRightSet = true;
        return <MenuBarItem key={index} {...(child as any).props} align="right" />;
      } else {
        return <MenuBarItem key={index} {...(child as any).props} align="left" />;
      }
    });
  }

  const navMarkup = (
    <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)}>
      <ul className={clsx('rvo-topnav__list', direction === 'vertical' && 'rvo-topnav__list--vertical')}>
        {itemsMarkup}
      </ul>
    </nav>
  );

  return (
    <div
      className={clsx(
        'rvo-topnav__background',
        useBackgroundColor && 'rvo-topnav__background--background-color',
        horizontalRule && 'rvo-topnav__background--horizontal-rule',
        type === 'sub' && 'rvo-topnav--sub',
        type === 'sub-grid' && ['rvo-topnav--sub', 'rvo-topnav--sub-grid'],
      )}
    >
      {direction === 'horizontal' && maxWidth !== 'none' ? (
        <MaxWidthLayout size={maxWidth}>{navMarkup}</MaxWidthLayout>
      ) : (
        navMarkup
      )}
    </div>
  );
};

export const MenuBarWithSubmenu: React.FC<{ primary: IMenuBarProps; sub: IMenuBarProps }> = ({ primary, sub }) => (
  <div>
    <MenuBar {...primary} />
    <MenuBar {...sub} />
  </div>
);

export default MenuBar;
