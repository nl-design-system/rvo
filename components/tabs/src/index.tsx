/**
 * @license CC0-1.0
 * Copyright (c) 2026
 */
import './index.scss';
import clsx from 'clsx';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { handleTabsKeyDown, TabActivationMode } from './keyboard';

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
  /**
   * Preferred API (current).
   */
  items?: TabsItem[];

  /**
   * Legacy API (deprecated). Kept for backwards compatibility.
   * Do not document this in Storybook.
   */
  tabs?: LegacyTabItem[];

  /**
   * Controlled active index.
   */
  activeTab?: number;

  /**
   * Uncontrolled initial active index.
   */
  defaultActiveTab?: number;

  /**
   * Fired when the active tab changes.
   */
  onChange?: (index: number) => void;

  /**
   * Accessible name for the tablist.
   */
  ariaLabel?: string;

  /**
   * Keyboard activation behavior.
   */
  activationMode?: TabActivationMode;

  /**
   * Visual size modifier.
   */
  size?: TabsSize;
}

const clamp = (value: number, max: number): number => Math.max(0, Math.min(value, max - 1));

export const Tabs = ({
  items,
  tabs,
  activeTab,
  defaultActiveTab = 0,
  onChange,
  ariaLabel = 'Tabs',
  activationMode = 'auto',
  size = 'md',
  className,
  ...rest
}: TabsProps) => {
  const reactId = useId();
  const isControlled = typeof activeTab === 'number';

  const normalizedItems = useMemo<TabsItem[]>(() => {
    if (items && items.length > 0) return items;

    if (tabs && tabs.length > 0) {
      return tabs.map((t, index) => ({
        label: t.label,
        before: t.before,
        after: t.after,
        panel: t.panel ?? t.content ?? null,
        disabled: t.disabled,
        id: t.id ?? `${reactId}-${index}`,
      }));
    }
    return [];
  }, [items, tabs, reactId]);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (tabs && !items) {
        console.warn('[Tabs] The `tabs` prop is deprecated. Use `items` instead.');
      }
      if (!items && !tabs) {
        console.warn('[Tabs] Missing `items` prop. Provide `items` (preferred) or legacy `tabs`.');
      }
    }
  }, [tabs, items]);

  const [internalIndex, setInternalIndex] = useState<number>(clamp(defaultActiveTab, normalizedItems.length));

  useEffect(() => {
    if (!isControlled) {
      setInternalIndex((i) => clamp(i, normalizedItems.length));
    }
  }, [normalizedItems.length, isControlled]);

  const selectedIndex = clamp(isControlled ? (activeTab as number) : internalIndex, normalizedItems.length);

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!isControlled) {
      setInternalIndex((i) => clamp(i, normalizedItems.length));
    }
  }, [normalizedItems.length, isControlled]);

  const selectTab = (index: number) => {
    if (!normalizedItems[index] || normalizedItems[index]?.disabled) return;

    if (!isControlled) {
      setInternalIndex(index);
    }
    onChange?.(index);
  };

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  return (
    <div className={clsx('rvo-tabs', `rvo-tabs--${size}`, className)} {...rest}>
      <div
        className="rvo-tabs__tablist"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={(event) =>
          handleTabsKeyDown<TabsItem>({
            event,
            items: normalizedItems,
            selectedIndex,
            activationMode,
            focusTab,
            selectTab,
            tabRefs,
          })
        }
      >
        {normalizedItems.map((item, index) => {
          const selected = index === selectedIndex;

          return (
            <button
              key={item.id}
              ref={(el) => (tabRefs.current[index] = el)}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              className={clsx(
                'rvo-tabs__tab',
                selected && 'rvo-tabs__tab--active',
                item.disabled && 'rvo-tabs__tab--disabled',
              )}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => selectTab(index)}
            >
              {item.before}
              <span className="rvo-tabs__label">{item.label}</span>
              {item.after}
            </button>
          );
        })}
      </div>

      {normalizedItems.map((item, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            className="rvo-tabs__panel"
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            hidden={!selected}
            tabIndex={selected ? 0 : -1}
          >
            {item.panel}
          </div>
        );
      })}
    </div>
  );
};
