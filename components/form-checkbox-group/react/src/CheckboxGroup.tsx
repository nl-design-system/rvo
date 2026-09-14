/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Checkbox } from '@nl-rvo/react-form-checkbox';
import '@nl-rvo/css-form-checkbox-group';
import { ICheckboxGroupProps } from './CheckboxGroup.types';

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  invalid,
  options,
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
