import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from '../../form-textinput/src/template';
import './index.scss';
import { Link } from '../../link/src/template';

interface KeywordSuggestion {
  value: string;
}

interface LinkSuggestion {
  title: string;
  href: string;
}

export interface AutocompleteProps {
  keywordSuggestions?: KeywordSuggestion[];
  linkSuggestions?: LinkSuggestion[];
  navigateOnSelect?: boolean;
  placeholder?: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'max';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectSuggestion?: (selected: string | LinkSuggestion) => void;
  renderKeywordItem?: (item: KeywordSuggestion, query: string) => React.ReactNode;
  renderLinkItem?: (item: LinkSuggestion, query: string) => React.ReactNode;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  keywordSuggestions = [],
  linkSuggestions = [],
  onSelectSuggestion,
  navigateOnSelect = true,
  value,
  defaultValue = '',
  size,
  onChange,
  renderKeywordItem,
  renderLinkItem,
  ...rest
}) => {
  const [filteredKeywords, setFilteredKeywords] = useState<KeywordSuggestion[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : inputValue;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filterSuggestions = (input: string) => {
    if (input.length < 3) {
      setFilteredKeywords([]);
      setFilteredLinks([]);
      return;
    }

    const kw = keywordSuggestions.filter((s) => s.value.toLowerCase().includes(input.toLowerCase())).slice(0, 5);

    const links = linkSuggestions.filter((s) => s.title.toLowerCase().includes(input.toLowerCase())).slice(0, 3);

    setFilteredKeywords(kw);
    setFilteredLinks(links);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) setInputValue(val);
    setShowSuggestions(true);
    filterSuggestions(val);
    onChange?.(e);
  };

  const handleKeywordClick = (value: string) => {
    if (!isControlled) setInputValue(value);
    setShowSuggestions(false);
    onSelectSuggestion?.(value);
  };

  const handleLinkClick = (item: LinkSuggestion) => {
    if (!isControlled) setInputValue(item.title);
    setShowSuggestions(false);
    onSelectSuggestion?.(item);
    if (navigateOnSelect) {
      window.location.href = item.href;
    }
  };

  const highlightMatch = (text: string, query: string) => {
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

  const renderSuggestionItem = (
    key: string,
    label: string,
    onClick: () => void,
    isLink = false,
    href?: string,
    customRenderer?: React.ReactNode,
  ) => (
    <li
      key={key}
      tabIndex={0}
      role="option"
      onMouseDown={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={clsx('rvo-autocomplete__item', isLink ? 'link' : 'keyword')}
    >
      {customRenderer ||
        (isLink ? (
          <Link noUnderline href={href!}>
            {highlightMatch(label, currentValue)}
          </Link>
        ) : (
          highlightMatch(label, currentValue)
        ))}
    </li>
  );

  const autocompleteSize = `rvo-autocomplete--${size}`;

  return (
    <div ref={wrapperRef}>
      <TextInput
        {...rest}
        value={currentValue}
        onChange={handleChange}
        className={clsx('rvo-autocomplete__textinput')}
        data-dropdown-open={
          showSuggestions && (filteredKeywords.length > 0 || filteredLinks.length > 0) ? 'true' : undefined
        }
        size={size}
      />

      {showSuggestions && (filteredKeywords.length > 0 || filteredLinks.length > 0) && (
        <div className={clsx(autocompleteSize, 'rvo-autocomplete__container')}>
          <ul className="rvo-autocomplete__suggestions">
            {filteredKeywords.length > 0 && <hr className="rvo-autocomplete__separator" />}
            {filteredKeywords.map((s) =>
              renderSuggestionItem(
                `kw-${s.value}`,
                s.value,
                () => handleKeywordClick(s.value),
                false,
                undefined,
                renderKeywordItem?.(s, currentValue),
              ),
            )}

            {filteredLinks.length > 0 && filteredKeywords.length > 0 && <hr className="rvo-autocomplete__separator" />}
            {filteredLinks.map((s) =>
              renderSuggestionItem(
                `link-${s.href}`,
                s.title,
                () => handleLinkClick(s),
                true,
                s.href,
                renderLinkItem?.(s, currentValue),
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
