/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { PropsWithChildren, useCallback, useRef } from 'react';
import { defaultArgs } from './defaultArgs';
import { Checkbox, ICheckboxProps } from '../form-checkbox/template';
import './index.scss';

export interface ICheckboxGroupProps {
  invalid?: boolean;
  /** @uxpinignoreprop */
  options?: ICheckboxProps[];
  onChange?: (event) => void;
  /**
   * @uxpinbind onChange 0
   */
  currentSelection?: number[];
}

export const argTypes = {
  invalid: { control: 'boolean' },
  options: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const CheckboxGroup: React.FC<PropsWithChildren<ICheckboxGroupProps>> = ({
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  onChange,
  children,
}: PropsWithChildren<ICheckboxGroupProps>) => {
  const checkboxGroupRef = useRef<HTMLDivElement>(null);
  const onUpdateGroup = useCallback(() => {
    if (checkboxGroupRef.current) {
      const allCheckboxElements = Array.from(checkboxGroupRef.current.getElementsByTagName('input'));
      const currentGroupSelection = allCheckboxElements.reduce((currentGroupSelection, checkbox, currentIndex) => {
        if ((checkbox as any).checked) {
          (currentGroupSelection as number[]).push(currentIndex);
        }
        return currentGroupSelection;
      }, []);
      onChange?.(currentGroupSelection);
    }
  }, [checkboxGroupRef]);

  return (
    <div className={clsx('rvo-checkbox__group', invalid && 'rvo-radio-button__group--error')} ref={checkboxGroupRef}>
      {(children &&
        React.Children.map(children, (child, index) => (
          <Checkbox
            key={index}
            id={(child as any).props.id}
            label={(child as any).props.label}
            checked={(child as any).props.checked}
            onUpdateGroup={onUpdateGroup}
          />
        ))) ||
        options?.map((option) => (
          <Checkbox key={option.id} id={option.id} label={option.label} checked={option.checked} />
        ))}
    </div>
  );
};

export default CheckboxGroup;
