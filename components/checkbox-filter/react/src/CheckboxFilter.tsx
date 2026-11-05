import React, { useEffect, useState } from 'react';
import { FormField } from '@nl-rvo/react-form-field';
import { Icon } from '@nl-rvo/react-icon';
import { Link } from '@nl-rvo/react-link';
import '@nl-rvo/css-checkbox-filter/checkbox-filter.css';
import { ICheckboxFilter } from './CheckboxFilter.types';

export const CheckBoxFilter: React.FC<ICheckboxFilter> = (props: ICheckboxFilter) => {
  const {
    label,
    options,
    optionsOnChange,
    limit = 5,
    showInputField,
    inputFieldLabel = 'Zoek in lijst',
    inputFieldOnChange,
    showMoreText = 'Toon meer',
    showLessText = 'Toon minder',
    noFiltersText = 'Geen filters beschikbaar',
    initialCollapseState = 'expanded',
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

  const withPrefix = (id: string): string => `checkbox-filter-${label}-${id}`;

  const groupLabelId = withPrefix('label');
  const checkboxGroupId = withPrefix('checkbox-group');

  return (
    <details open={initialCollapseState === 'expanded'} className="rvo-checkbox-filter" {...rest}>
      <summary className="rvo-checkbox-filter__label">
        <span id={groupLabelId}>{label}</span>
        <Icon className="rvo-checkbox-filter__icon" icon="delta-omhoog" color="lintblauw" />
      </summary>
      {showInputField && (
        <FormField id={withPrefix('input')} label={inputFieldLabel}>
          <FormField.Text type="text" onChange={inputFieldOnChange} sizeInput="max" aria-controls={checkboxGroupId} />
        </FormField>
      )}

      <div className="rvo-checkbox-filter__checkbox-container">
        {visibleItems.length > 0 && (
          <FormField.CheckboxGroup
            id={checkboxGroupId}
            options={visibleItems}
            onChange={optionsOnChange}
            role="group"
            aria-labelledby={groupLabelId}
            aria-live="polite"
          />
        )}
        {visibleItems.length === 0 && <p className="rvo-checkbox-filter__no-filter-text">{noFiltersText}</p>}
      </div>
      {options?.length > limit && (
        <Link
          icon="plus"
          iconSize="md"
          iconPlacement="left"
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
