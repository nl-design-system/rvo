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
  content,
  showIcon = false,
  icon,
  active,
  showHover,
  focus,
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
  if (showIcon === 'before') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'after') {
    iconClassName += ' rvo-link__icon--after';
  }

  const iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
  const ToggleElement = link ? 'a' : 'div';

  return (
    <ToggleElement
      onClick={handleToggleClick}
      {...(link ? { href: link } : {})}
      target={linkTarget}
      className={clsx('rvo-toggle', 'rvo-toggle--default', className, showIcon !== 'no' && ['rvo-toggle--with-icon'], {
        'rvo-toggle--active': isActive,
        'rvo-toggle--show-hover': showHover,
        'rvo-toggle--focus': focus,
        'rvo-toggle--hover': link,
      })}
      {...rootElementProps}
    >
      {showIcon === 'before' && iconMarkup}
      {parseContentMarkup(children || content)}
      {showIcon === 'after' && iconMarkup}
    </ToggleElement>
  );
};

export default Toggle;
