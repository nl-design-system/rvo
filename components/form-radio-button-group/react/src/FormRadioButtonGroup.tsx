/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useCallback, useRef } from 'react';
import { RadioButton } from '@nl-rvo/react-form-radio-button';
import '@nl-rvo/css-form-radio-button-group';
import { IRadioButtonGroupProps } from './FormRadioButtonGroup.types';

export const RadioButtonGroup: React.FC<IRadioButtonGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
  name,
  invalid,
  options,
  onChange,
  children,
  ...rootElementProps
}) => {
  const radioGroupRef = useRef<HTMLDivElement>(null);
  const onUpdateGroup = useCallback(() => {
    if (radioGroupRef.current) {
      const allRadioElements = Array.from(radioGroupRef.current.getElementsByTagName('input'));
      const currentGroupSelection = allRadioElements.findIndex((radioElement) => radioElement.checked === true);
      onChange?.(currentGroupSelection);
    }
  }, [radioGroupRef]);

  return (
    <div
      className={clsx('rvo-radio-button__group', invalid && 'rvo-radio-button__group--error')}
      ref={radioGroupRef}
      {...rootElementProps}
    >
      {(children &&
        React.Children.map(children, (child, index) => (
          <RadioButton
            key={index}
            id={(child as any).props.id}
            label={(child as any).props.label}
            checked={(child as any).props.checked}
            onUpdateGroup={onUpdateGroup}
          />
        ))) ||
        (options &&
          options.map((option) => (
            <RadioButton key={option.id} id={option.id} name={name} label={option.label} checked={option.checked} />
          )))}
    </div>
  );
};

export default RadioButtonGroup;
