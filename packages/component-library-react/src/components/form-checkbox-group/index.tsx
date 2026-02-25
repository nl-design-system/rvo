/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Checkbox, ICheckboxProps } from '../form-checkbox';
import '@nl-rvo/css-form-checkbox-group/dist/index.css';

export interface ICheckboxGroupProps {
  invalid?: boolean;
  /** @uxpinignoreprop */
  options?: ICheckboxProps[];
  onChange?: (currentGroupSelection: string[]) => void;
  /**
   * @uxpinbind onChange 0
   */
  currentSelection?: string[];
  /** @uxpinpropname Checkboxes */
  children?: ReactNode | undefined;
}

export const argTypes = {
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const CheckboxGroup: React.FC<ICheckboxGroupProps & HTMLAttributes<HTMLDivElement>> = ({
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  onChange,
  children,
  ...rootElementProps
}: ICheckboxGroupProps) => {
  const handleUpdateGroup = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!options) {
      onChange?.([]);
    }

    const { id, checked } = event.target;

    const selectedOptions = options!
      .filter((option) => (option.id === id ? checked : option.checked))
      .map((option) => option.id)
      .filter((id): id is string => typeof id === 'string');

    if (selectedOptions) {
      onChange?.(selectedOptions);
    }
  };

  return (
    <div className={clsx('rvo-checkbox__group', invalid && 'rvo-radio-button__group--error')} {...rootElementProps}>
      {(children &&
        React.Children.map(children, (child, index) => (
          <Checkbox
            key={index}
            id={(child as any).props.id}
            label={(child as any).props.label}
            checked={(child as any).props.checked}
            onUpdateGroup={handleUpdateGroup}
          />
        ))) ||
        options?.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={option.checked}
            onUpdateGroup={handleUpdateGroup}
          />
        ))}
    </div>
  );
};

export default CheckboxGroup;
