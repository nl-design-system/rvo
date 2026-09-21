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
