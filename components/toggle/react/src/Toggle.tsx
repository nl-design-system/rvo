/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { Icon } from '@nl-rvo/react-icon';
import '@nl-rvo/css-toggle';
import { IToggleProps } from './Toggle.types';

export const Toggle: React.FC<IToggleProps & React.HTMLAttributes<HTMLElement>> = ({
  showIcon,
  icon,
  active,
  showHover,
  className,
  link,
  linkTarget = '_self',
  onToggle,
  children,
  ...rootElementProps
}) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleToggleClick = () => {
    setIsActive((prevActive) => !prevActive);
    if (onToggle) {
      onToggle(!isActive);
    }
  };

  // Parse icon markup
  let iconClassName = '';
  if (showIcon === 'left') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'right') {
    iconClassName += ' rvo-link__icon--after';
  }

  const iconMarkup = showIcon && icon && Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
  const ToggleElement = link ? 'a' : 'div';

  return (
    <ToggleElement
      onClick={handleToggleClick}
      {...(link ? { href: link } : {})}
      target={linkTarget}
      className={clsx(
        'rvo-toggle',
        active && ['rvo-toggle--active'],
        className,
        showIcon && icon && ['rvo-toggle--with-icon'],
      )}
      {...rootElementProps}
    >
      {showIcon === 'left' && iconMarkup}
      {parseContentMarkup(children)}
      {showIcon === 'right' && iconMarkup}
    </ToggleElement>
  );
};

export default Toggle;
