import React, { HTMLAttributes, useEffect, useState } from 'react';
import { ICheckboxProps } from '../../form-checkbox/src/template';
import CheckboxField from '../../form-field-checkbox/src/template';
import TextInputField from '../../form-field-textinput/src/template';
import Icon from '../../icon/src/template';
import Link from '../../link/src/template';
import './index.scss';

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
  noFiltersText?: string;
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
    noFiltersText = 'Geen filters beschikbaar',
    ...rest
  } = props;
  const [visibleItems, setVisibleItems] = useState([]);
  const [toggleShow, setToggleShow] = useState(false);

  useEffect(() => {
    const clonedOptions = [...options];
    setVisibleItems(
      options?.length > limit && !toggleShow ? (clonedOptions.splice(0, limit) as []) : (clonedOptions as []),
    );
  }, [options]);

  const toggleShowClick = (e: any) => {
    e.preventDefault();

    const tempArray = [...options];

    if (toggleShow === false) {
      setToggleShow(true);
      setVisibleItems(tempArray as []);
    } else {
      setToggleShow(false);
      setVisibleItems(tempArray.splice(0, limit) as []);
    }
  };

  return (
    <details open className="rvo-checkbox-filter" {...rest}>
      <summary className="rvo-checkbox-filter__label">
        {label} <Icon className="rvo-checkbox-filter__icon" icon="delta-omhoog" color="logoblauw" />
      </summary>
      {showInputField && (
        <TextInputField placeholder={inputFieldPlaceholder} onChange={inputFieldOnChange} label=" " size="max" />
      )}
      <div className="rvo-checkbox-filter__checkbox-container">
        {visibleItems.length > 0 && (
          <CheckboxField label=" " invalid={false} options={visibleItems} onChange={optionsOnChange} />
        )}
        {visibleItems.length === 0 && <p className="rvo-checkbox-filter__no-filter-text">{noFiltersText}</p>}
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
