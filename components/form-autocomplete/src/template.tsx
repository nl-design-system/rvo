import clsx from 'clsx';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { TextInput } from '../../form-textinput/src/template';
import { Link } from '../../link/src/template';
import './index.scss';

export type AutocompleteKeywordSuggestion = {
  value: string;
};

export type AutocompleteLinkSuggestion = {
  title: string;
  href: string;
};

export type AutocompleteLinkFilter = (
  links: AutocompleteLinkSuggestion[],
  userInput: string,
) => AutocompleteLinkSuggestion[];

export type AutocompleteKeywordFilter = (
  keywords: AutocompleteKeywordSuggestion[],
  userInput: string,
) => AutocompleteKeywordSuggestion[];

export interface IAutocompleteProps {
  defaultValue?: string;
  keywordSuggestions?: AutocompleteKeywordSuggestion[];
  linkSuggestions?: AutocompleteLinkSuggestion[];
  /** Optional provider that returns the filtered keyword suggestions (receives all items and input) */
  filterKeywords?: AutocompleteKeywordFilter;
  /** Optional provider that returns the filtered link suggestions (receives all items and input) */
  filterLinks?: AutocompleteLinkFilter;
  maxKeywordSuggestions?: number; // Maximum number of keyword suggestions
  maxLinkSuggestions?: number; // Maximum number of link suggestions
  minInputLength?: number; // Minimum input length for filtering
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectSuggestion?: (selected: string) => void;
  placeholder?: string;
  renderKeywordSuggestion?: (item: AutocompleteKeywordSuggestion, query: string) => React.ReactNode;
  renderLinkSuggestion?: (item: AutocompleteLinkSuggestion, query: string) => React.ReactNode;
  renderSuggestionsHeader?: () => React.ReactNode;
  renderLinksHeader?: () => React.ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  value?: string;
}

const FILTER_DEBOUNCE_MS = 150;

export const Autocomplete: React.FC<IAutocompleteProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  defaultValue = '',
  filterKeywords = defaultKeywordFilter,
  filterLinks = defaultLinkFilter,
  keywordSuggestions = [],
  linkSuggestions = [],
  maxKeywordSuggestions = 5,
  maxLinkSuggestions = 3,
  minInputLength = 3,
  onChange,
  onSelectSuggestion,
  renderKeywordSuggestion: customRenderKeywordSuggestions,
  renderLinkSuggestion: customRenderLinkSuggestions,
  renderSuggestionsHeader,
  renderLinksHeader,
  size,
  value,
  ...rootElementProps
}) => {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  // ref to store debounce timer for filterSuggestions
  const filterTimeoutRef = useRef<number | null>(null);

  // wrapper for the entire autocomplete component
  const wrapperRef = useRef<HTMLDivElement>(null);

  // stabilize consumer-provided filter functions so inline functions don't bust memo
  const filterKeywordsRef = useRef(filterKeywords);
  const filterLinksRef = useRef(filterLinks);

  useEffect(() => {
    filterKeywordsRef.current = filterKeywords;
  }, [filterKeywords]);

  useEffect(() => {
    filterLinksRef.current = filterLinks;
  }, [filterLinks]);

  const baseId = useId();

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : inputValue;

  useEffect(() => {
    if (isControlled) {
      setInputValue(value ?? '');
    }
  }, [value, isControlled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterSuggestions = (input: string) => {
    if (input.length < minInputLength) {
      setShowSuggestions(false);
      setHighlightedIndex(-1);

      return;
    }

    setShowSuggestions(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) setInputValue(newValue);

    // debounce the call to filterSuggestions to avoid rapid toggling while typing
    if (filterTimeoutRef.current) {
      window.clearTimeout(filterTimeoutRef.current);
    }
    filterTimeoutRef.current = window.setTimeout(() => {
      filterSuggestions(newValue);
      filterTimeoutRef.current = null;
    }, FILTER_DEBOUNCE_MS);

    onChange?.(e);
  };

  // clear debounce timer on unmount
  useEffect(() => {
    return () => {
      if (filterTimeoutRef.current) {
        window.clearTimeout(filterTimeoutRef.current);
        filterTimeoutRef.current = null;
      }
    };
  }, []);

  const handleKeywordClick = (selectedKeyword: string) => {
    if (!isControlled) setInputValue(selectedKeyword);

    setShowSuggestions(false);
    setHighlightedIndex(-1);

    onSelectSuggestion?.(selectedKeyword);
  };

  // renders autocomplete highlighted text
  const highlightMatch = (text: string, query: string) => {
    if (!query) return <span>{text}</span>;

    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return <span>{text}</span>;

    return (
      <>
        <span>{text.slice(0, index)}</span>
        <span>{text.slice(index, index + query.length)}</span>
        <span className="rvo-autocomplete__highlight">{text.slice(index + query.length)}</span>
      </>
    );
  };

  const handleLinkClick = () => {
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  // render functions now accept absolute index
  const renderAutocompleteLink = (link: AutocompleteLinkSuggestion, index: number) => {
    const isActive = index === highlightedIndex;

    return (
      <li
        aria-selected={isActive || undefined}
        className={clsx('rvo-autocomplete__item', 'link', { 'rvo-autocomplete__item--active': isActive })}
        id={getOptionId(index)}
        key={`link-${link.href}`}
        tabIndex={-1}
        role={'listitem'}
        onMouseDown={(e) => {
          // we only care about primary button (left-click without modifier)
          if (e.button !== 0 || e.ctrlKey) return;

          e.stopPropagation();
        }}
      >
        {customRenderLinkSuggestions?.(link, currentValue) || (
          <Link
            noUnderline
            href={link.href}
            title={link.title}
            onClick={(e: React.MouseEvent) => {
              // ignore non-left clicks / ctrl+click if needed here too
              if ((e as any).button !== 0 || (e as any).ctrlKey) return;

              handleLinkClick();
            }}
          >
            {link.title}
          </Link>
        )}
      </li>
    );
  };

  const renderAutocompleteKeyword = (suggestion: AutocompleteKeywordSuggestion, index: number) => {
    const isActive = index === highlightedIndex;

    return (
      <li
        aria-selected={isActive || undefined}
        className={clsx('rvo-autocomplete__item', 'keyword', { 'rvo-autocomplete__item--active': isActive })}
        key={`keyword-${suggestion.value}`}
        id={getOptionId(index)}
        tabIndex={0}
        role={'listitem'}
        onMouseDown={(e) => {
          if (e.button !== 0 || e.ctrlKey) return;

          handleKeywordClick(suggestion.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleKeywordClick(suggestion.value);
          }
        }}
      >
        {customRenderKeywordSuggestions?.(suggestion, currentValue) || highlightMatch(suggestion.value, currentValue)}
      </li>
    );
  };

  const { mergedOptions } = useMemo(() => {
    // call the latest filter functions from refs (they are not included in deps
    // to avoid invalidating the memo on every render when consumers pass inline functions)
    const keywordsRaw = filterKeywordsRef.current
      ? filterKeywordsRef.current(keywordSuggestions, currentValue)
      : keywordSuggestions;
    const linksRaw = filterLinksRef.current ? filterLinksRef.current(linkSuggestions, currentValue) : linkSuggestions;

    // apply max limits
    const keywords = keywordsRaw.slice(0, maxKeywordSuggestions);
    const links = linksRaw.slice(0, maxLinkSuggestions);

    const options = [
      ...keywords.map((keyword) => ({ type: 'keyword' as const, data: keyword })),
      ...links.map((link) => ({ type: 'link' as const, data: link })),
    ];

    return { mergedOptions: options };
  }, [currentValue, keywordSuggestions, linkSuggestions, maxKeywordSuggestions, maxLinkSuggestions]);

  const hasItemsToRender = mergedOptions.length > 0;

  // when suggestions become visible, initialize highlightedIndex to first item (if any)
  useEffect(() => {
    if (showSuggestions && hasItemsToRender) {
      setHighlightedIndex((prev) => (prev >= 0 && prev < mergedOptions.length ? prev : 0));
    } else {
      setHighlightedIndex(-1);
    }
  }, [showSuggestions, mergedOptions.length]);

  // total count helper
  const totalItems = mergedOptions.length;

  // compute id for a given option index
  const getOptionId = (index: number) => `rvo-autocomplete-${baseId}-option-${index}`;

  // keyboard handling on the input for roving active descendant
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || totalItems === 0) return;

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev < totalItems - 1 ? prev + 1 : 0;
          return next;
        });
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : totalItems - 1;
          return next;
        });
        break;
      }
      case 'Home': {
        e.preventDefault();
        setHighlightedIndex(0);
        break;
      }
      case 'End': {
        e.preventDefault();
        setHighlightedIndex(totalItems - 1);
        break;
      }
      case 'Enter': {
        e.preventDefault();
        if (highlightedIndex < 0 || highlightedIndex >= totalItems) return;

        const option = mergedOptions[highlightedIndex];
        if (option.type === 'keyword') {
          const keyword = option.data;
          handleKeywordClick(keyword.value);
        } else {
          const link = option.data;
          const el = document.getElementById(getOptionId(highlightedIndex));
          const anchor = el?.querySelector('a') as HTMLAnchorElement | null;
          if (anchor) {
            anchor.click();
            handleLinkClick();
          } else if (link?.href) {
            window.location.href = link.href;
            handleLinkClick();
          }
        }
        break;
      }
      case 'Escape': {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
        break;
      }
      default:
        break;
    }
  };

  // determine first indexes for section headers
  const firstKeywordIndex = mergedOptions.findIndex((o) => o.type === 'keyword');
  const firstLinkIndex = mergedOptions.findIndex((o) => o.type === 'link');

  return (
    <div
      ref={wrapperRef}
      className={clsx(`rvo-autocomplete--${size}`, 'rvo-autocomplete__container', className)}
      {...rootElementProps}
    >
      <TextInput
        {...rootElementProps}
        aria-controls="rvo-autocomplete-listbox"
        aria-expanded={showSuggestions && hasItemsToRender}
        autoComplete="off"
        aria-activedescendant={highlightedIndex >= 0 ? getOptionId(highlightedIndex) : undefined}
        className={clsx('rvo-autocomplete__textinput', className)}
        data-dropdown-open={showSuggestions && hasItemsToRender ? 'true' : undefined}
        onChange={handleChange}
        onKeyDown={handleInputKeyDown}
        value={currentValue}
        role="combobox"
      />

      {showSuggestions && hasItemsToRender && (
        <ul id="rvo-autocomplete-listbox" className="rvo-autocomplete__suggestions" role="list">
          {mergedOptions.map((option, i) => {
            const next = mergedOptions[i + 1];

            return (
              <React.Fragment key={`option-${i}`}>
                {i === firstKeywordIndex && renderSuggestionsHeader && (
                  <li
                    role="presentation"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="rvo-autocomplete__section-header"
                    key={`header-keywords`}
                  >
                    {renderSuggestionsHeader()}
                  </li>
                )}

                {i === firstLinkIndex && renderLinksHeader && (
                  <li
                    role="presentation"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="rvo-autocomplete__section-header"
                    key={`header-links`}
                  >
                    {renderLinksHeader()}
                  </li>
                )}

                {option.type === 'keyword'
                  ? renderAutocompleteKeyword(option.data as AutocompleteKeywordSuggestion, i)
                  : renderAutocompleteLink(option.data as AutocompleteLinkSuggestion, i)}

                {next && option.type === 'keyword' && next.type === 'link' && (
                  <li role="presentation" aria-hidden="true" tabIndex={-1} className="rvo-autocomplete__separator" />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

// default link filter function - can be overwritten by consumer via props
const defaultLinkFilter: AutocompleteLinkFilter = (links, input) =>
  links.filter((link) => link.title.toLowerCase().includes(input.toLowerCase()));

// default keyword filter function - can be overwritten by consumer via props
const defaultKeywordFilter: AutocompleteKeywordFilter = (keywords, input) =>
  keywords.filter((keyword) => keyword.value.toLowerCase().includes(input.toLowerCase()));
