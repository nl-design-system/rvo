import React, { HTMLAttributes, useEffect, useState } from 'react';
import { FormField } from '@nl-rvo/react-form-field';
import { Icon } from '@nl-rvo/react-icon';
import { Link } from '@nl-rvo/react-link';
import '@nl-rvo/css-checkbox-filter';
import { ICheckboxFilter } from './CheckboxFilter.types';

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
      {showInputField && (
        <FormField id="checkbox-filter-search" label={inputFieldLabel}>
          <FormField.Text type="text" onChange={inputFieldOnChange} size="max" />
        </FormField>
      )}

      <div className="rvo-checkbox-filter__checkbox-container">
        {/* {visibleItems.length > 0 && (
          <FormField><FormField.Checkbox invalid={false} options={visibleItems} onChange={optionsOnChange} /></FormField>
        )} */}
        {visibleItems.length === 0 && <p className="rvo-checkbox-filter__no-filter-text">{noFiltersText}</p>}
      </div>
      {options?.length > limit && (
        <Link
          icon="plus"
          iconSize="md"
          iconPlacement="right"
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
