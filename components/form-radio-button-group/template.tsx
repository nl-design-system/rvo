/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode, useCallback, useRef } from 'react';
import { defaultArgs } from './defaultArgs';
import { IRadioButtonProps, RadioButton } from '../form-radio-button/template';
import './index.scss';

export interface IRadioButtonGroupProps {
  name?: string;
  invalid?: boolean;
  /** @uxpinignoreprop */
  options?: IRadioButtonProps[];
  onChange?: (event) => void;
  /**
   * @uxpinbind onChange 0
   */
  currentSelection?: number | null;
  /** @uxpinpropname Options */
  children?: ReactNode | undefined;
}

export const argTypes = {
  name: { control: 'text' },
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
  currentSelection: {
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

export const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
  name = defaultArgs.name,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  onChange,
  children,
}: IRadioButtonGroupProps) => {
  const radioGroupRef = useRef<HTMLDivElement>(null);
  const onUpdateGroup = useCallback(() => {
    if (radioGroupRef.current) {
      const allRadioElements = Array.from(radioGroupRef.current.getElementsByTagName('input'));
      const currentGroupSelection = allRadioElements.findIndex((radioElement) => radioElement.checked === true);
      onChange(currentGroupSelection);
    }
  }, [radioGroupRef]);

  return (
    <div className={clsx('rvo-radio-button__group', invalid && 'rvo-radio-button__group--error')} ref={radioGroupRef}>
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
        options.map((option) => (
          <RadioButton key={option.id} id={option.id} name={name} label={option.label} checked={option.checked} />
        ))}
    </div>
  );
};

export default RadioButtonGroup;
