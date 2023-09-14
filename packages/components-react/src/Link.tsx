/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Link as UtrechtLink } from '@utrecht/component-library-react';
import type { LinkProps as UtrechtLinkProps } from '@utrecht/component-library-react/dist/Link';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Icon } from './index';

export interface ILinkProps extends UtrechtLinkProps {
  showIcon?: string;
  icon?: string;
  iconSize?: string;
  iconColor?: string;
  noUnderline?: boolean;
}

export const Link = forwardRef(
  (
    {
      children,
      showIcon,
      icon,
      iconSize,
      iconColor,
      noUnderline = false,
      className,
      ...restProps
    }: PropsWithChildren<ILinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const iconMarkup = icon ? (
      <Icon
        icon={icon}
        size={iconSize}
        color={iconColor}
        className={clsx({
          'rvo-link__icon--before': showIcon === 'before',
          'rvo-link__icon--after': showIcon === 'after',
        })}
      />
    ) : null;

    return (
      <UtrechtLink
        ref={ref}
        className={clsx(
          'rvo-link',
          className,
          {
            'rvo-link--focus': focus,
          },
          showIcon !== 'no' && ['rvo-layout-row', 'rvo-layout-gap--sm'],
          noUnderline && 'rvo-link--no-underline',
        )}
        {...restProps}
      >
        {showIcon === 'before' && iconMarkup}
        {children}
        {showIcon === 'after' && iconMarkup}
      </UtrechtLink>
    );
  },
);

Link.displayName = 'Link';
