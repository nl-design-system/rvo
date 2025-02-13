import CheckboxField from '@nl-rvo/components/form-field-checkbox/src/template';
import './index.scss';
import TextInputField from '@nl-rvo/components/form-field-textinput/src/template';
import Link from '@nl-rvo/components/link/src/template';
import React, { HTMLAttributes, useState } from 'react';
// eslint-disable-next-line import/order
import { ICheckboxProps } from '@nl-rvo/components/form-checkbox/src/template';

export interface ICheckboxFilter extends HTMLAttributes<HTMLDetailsElement> {
  label: string;
  options: ICheckboxProps[];
  optionsOnChange: (currentGroupSelection: ICheckboxProps[]) => void;
  limit?: number;
  showInputField?: boolean;
  inputFieldPlaceholder?: string;
  inputFieldOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showMoreText?: string;
  showLessText?: string;
}

export const CheckBoxFilter: React.FC<ICheckboxFilter> = (props: ICheckboxFilter) => {
  const {
    label,
    options,
    limit = 5,
    showInputField,
    inputFieldPlaceholder,
    inputFieldOnChange,
    optionsOnChange,
    showMoreText = 'Toon meer',
    showLessText = 'Toon minder',
    ...rest
  } = props;
  const clonedOptions = [...options];

  const [visibleItems, setVisibleItems] = useState(
    options?.length > limit ? clonedOptions.splice(0, limit) : clonedOptions,
  );
  const [toggleShow, setToggleShow] = useState(false);

  const toggleShowClick = (e) => {
    e.preventDefault();

    const tempArray = [...options];

    if (toggleShow === false) {
      setToggleShow(true);
      setVisibleItems(tempArray);
    } else {
      setToggleShow(false);
      setVisibleItems(tempArray.splice(0, limit));
    }
  };

  return (
    <details open className="rvo-checkbox-filter" {...rest}>
      <summary className="rvo-checkbox-filter__label">{label}</summary>
      {showInputField && <TextInputField placeholder={inputFieldPlaceholder} onChange={inputFieldOnChange} label=" " />}
      <div className="rvo-checkbox-filter__checkbox-container">
        <CheckboxField label=" " invalid={false} options={visibleItems} onChange={optionsOnChange} />
      </div>
      {options?.length > limit && (
        <Link
          icon="plus"
          iconSize="md"
          showIcon="before"
          noUnderline
          color="logoblauw"
          iconColor="logoblauw"
          onClick={(e) => toggleShowClick(e)}
        >
          {!toggleShow ? showMoreText : showLessText}
        </Link>
      )}
    </details>
  );
};

export default CheckBoxFilter;
