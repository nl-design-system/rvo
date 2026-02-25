import React, { HTMLAttributes, useEffect, useState } from 'react';
import { ICheckboxProps } from '../form-checkbox';
import CheckboxField from '../form-field-checkbox';
import TextInputField from '../form-field-textinput';
import Icon from '../icon';
import Link from '../link';
import '@nl-rvo/css-checkbox-filter/dist/index.css';

export interface ICheckboxFilter {
  label: string;
  options: ICheckboxProps[];
  optionsOnChange: (currentGroupSelection: string[]) => void;
  limit?: number;
  showInputField?: boolean;
  inputFieldLabel?: string;
  inputFieldOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showMoreText?: string;
  showLessText?: string;
  noFiltersText?: string;
  initialCollapseState?: 'expanded' | 'collapsed';
}

export const CheckBoxFilter: React.FC<ICheckboxFilter & HTMLAttributes<HTMLDetailsElement>> = (
  props: ICheckboxFilter,
) => {
  const {
    label,
    options,
    limit = 5,
    showInputField,
    inputFieldLabel = 'Zoek in lijst',
    inputFieldOnChange,
    optionsOnChange,
    showMoreText = 'Toon meer',
    showLessText = 'Toon minder',
    noFiltersText = 'Geen filters beschikbaar',
    initialCollapseState = 'expanded',
    ...rootElementProps
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
    <details open={initialCollapseState === 'expanded'} className="rvo-checkbox-filter" {...rootElementProps}>
      <summary className="rvo-checkbox-filter__label">
        {label} <Icon className="rvo-checkbox-filter__icon" icon="delta-omhoog" color="lintblauw" />
      </summary>
      {showInputField && <TextInputField onChange={inputFieldOnChange} label={inputFieldLabel} size="max" />}
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
          color="lintblauw"
          iconColor="lintblauw"
          onClick={(e) => toggleShowClick(e)}
        >
          {!toggleShow ? showMoreText : showLessText}
        </Link>
      )}
    </details>
  );
};

export default CheckBoxFilter;
