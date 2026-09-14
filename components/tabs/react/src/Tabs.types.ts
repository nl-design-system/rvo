import { TabActivationMode } from './keyboard';

export type TabsSize = 'sm' | 'md' | 'lg';

export interface TabsItem {
  label: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  panel: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

/**
 * Legacy fallback type for the old `tabs` prop.
 * Supports `content` (common legacy naming) and `panel`.
 */
export interface LegacyTabItem {
  label: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  content?: React.ReactNode;
  panel?: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items?: TabsItem[];
  tabs?: LegacyTabItem[];
  activeTab?: number;
  defaultActiveTab?: number;
  onChange?: (index: number) => void;
  ariaLabel?: string;
  activationMode?: TabActivationMode;
  size?: TabsSize;
  panelPadding?: boolean;
  panelBorder?: boolean;
  children?: React.ReactNode;
}

export interface TabItemProps {
  label: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  children: React.ReactNode;
}
