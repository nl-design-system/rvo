/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button as UtrechtButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Icon, iconNames as iconOptions } from '../../icon/css/template';
import './index.scss';

export enum ButtonKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Quaternary = 'quaternary',
  Subtle = 'subtle',
  WarningSubtle = 'warning-subtle',
  Warning = 'warning',
}

export enum ButtonSize {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
}

export enum ShowIconType {
  No = 'no',
  Before = 'before',
  After = 'after',
}

export interface IButtonProps extends React.DOMAttributes<any> {
  kind?: ButtonKind;
  size?: ButtonSize;
  textContent?: string;
  active?: boolean;
  busy?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  disabled?: boolean;
  showIcon?: ShowIconType;
  icon?: string;
  classNames?: string[];
}

export const argTypes = {
  kind: {
    options: ['primary', 'secondary', 'tertiary', 'quaternary', 'subtle', 'warning-subtle', 'warning'],
    control: { type: 'radio' },
  },
  size: {
    options: ['xs', 'sm', 'md'],
    control: { type: 'radio' },
  },
  textContent: {
    control: 'text',
  },
  busy: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  focusVisible: {
    control: 'boolean',
  },
  hover: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: 'select',
    options: iconOptions,
  },
};

export const defaultArgs: IButtonProps = {
  kind: ButtonKind.Primary,
  size: ButtonSize.Md,
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: '',
  showIcon: ShowIconType.No,
  icon: iconOptions[0],
};

export const exampleArgs = {
  ...defaultArgs,
  textContent: 'Button',
};

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  kind = defaultArgs.kind,
  size = defaultArgs.size,
  active = defaultArgs.active,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  textContent = defaultArgs.textContent,
  children,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  classNames = [],
  ...otherProps
}: PropsWithChildren<IButtonProps>) => {
  const iconMarkup = <Icon icon={icon} size="md" />;

  let appearance: string = null;
  switch (kind) {
    case 'primary':
    case 'warning':
      appearance = 'primary-action-button';
      break;
    case 'secondary':
      appearance = 'secondary-action-button';
      break;
    case 'subtle':
    case 'warning-subtle':
      appearance = 'subtle-button';
      break;
  }

  return (
    <UtrechtButton
      className={clsx(
        classNames,
        kind === 'tertiary' && 'utrecht-button--rvo-tertiary-action',
        kind === 'quaternary' && 'utrecht-button--rvo-quaternary-action',
        active && 'utrecht-button--active',
        busy && 'utrecht-button--busy',
        hover && 'utrecht-button--hover',
        focus && 'utrecht-button--focus',
        focusVisible && 'utrecht-button--focus-visible',
        'rvo-layout-row',
        size === 'xs' && 'rvo-layout-gap--xs',
        size === 'sm' && 'rvo-layout-gap--sm',
        size === 'md' && 'rvo-layout-gap--md',
        size === 'xs' && 'utrecht-button--rvo-xs',
        size === 'sm' && 'utrecht-button--rvo-sm',
        size === 'md' && 'utrecht-button--rvo-md',
      )}
      disabled={disabled || null}
      appearance={appearance}
      hint={kind === 'warning' || kind === 'warning-subtle' ? 'warning' : null}
      {...otherProps}
    >
      {showIcon === 'before' && iconMarkup}
      {textContent}
      {children}
      {showIcon === 'after' && iconMarkup}
    </UtrechtButton>
  );
};

export const AllButtonKinds: React.FC<IButtonProps> = (buttonArgs) => (
  <div>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.Primary} />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.Secondary} />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.Tertiary} />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.Quaternary} />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.WarningSubtle} />
    </p>
    <p>
      <Button textContent="Button" {...buttonArgs} kind={ButtonKind.Warning} />
    </p>
  </div>
);

export default Button;
