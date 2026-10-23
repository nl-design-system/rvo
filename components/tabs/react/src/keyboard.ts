/**
 * Keyboard handler for WAI-ARIA Tabs pattern.
 * Keep this file framework-agnostic-ish: it only needs refs + callbacks.
 */
import React from 'react';

export type TabActivationMode = 'auto' | 'manual';

export type TabsItemLike = {
  disabled?: boolean;
};

export type TabsKeyDownArgs<TItem extends TabsItemLike = TabsItemLike> = {
  event: React.KeyboardEvent;
  items: TItem[];
  selectedIndex: number;
  activationMode: TabActivationMode;

  focusTab: (index: number) => void;
  selectTab: (index: number) => void;

  tabRefs: React.MutableRefObject<Array<HTMLButtonElement | null>>;
};

const getNextEnabledIndex = <TItem extends TabsItemLike>(items: TItem[], start: number, dir: 1 | -1): number => {
  const total = items.length;
  if (total === 0) return 0;

  let i = start;

  for (let step = 0; step < total; step++) {
    i = (i + dir + total) % total;
    if (!items[i]?.disabled) return i;
  }

  return start;
};

const getFirstEnabledIndex = <TItem extends TabsItemLike>(items: TItem[]): number => {
  const idx = items.findIndex((it) => !it?.disabled);
  return idx >= 0 ? idx : 0;
};

const getLastEnabledIndex = <TItem extends TabsItemLike>(items: TItem[]): number => {
  for (let i = items.length - 1; i >= 0; i--) {
    if (!items[i]?.disabled) return i;
  }
  return Math.max(0, items.length - 1);
};

const getFocusedIndex = (tabRefs: React.MutableRefObject<Array<HTMLButtonElement | null>>): number => {
  const active = document.activeElement;
  return tabRefs.current.findIndex((el) => el === active);
};

export function handleTabsKeyDown<TItem extends TabsItemLike = TabsItemLike>({
  event,
  items,
  selectedIndex,
  activationMode,
  focusTab,
  selectTab,
  tabRefs,
}: TabsKeyDownArgs<TItem>): void {
  const current = getFocusedIndex(tabRefs);
  const focusIndex = current >= 0 ? current : selectedIndex;

  switch (event.key) {
    case 'ArrowRight': {
      event.preventDefault();
      const next = getNextEnabledIndex(items, focusIndex, 1);
      focusTab(next);
      if (activationMode === 'auto') selectTab(next);
      break;
    }

    case 'ArrowLeft': {
      event.preventDefault();
      const prev = getNextEnabledIndex(items, focusIndex, -1);
      focusTab(prev);
      if (activationMode === 'auto') selectTab(prev);
      break;
    }

    case 'Home': {
      event.preventDefault();
      const first = getFirstEnabledIndex(items);
      focusTab(first);
      if (activationMode === 'auto') selectTab(first);
      break;
    }

    case 'End': {
      event.preventDefault();
      const last = getLastEnabledIndex(items);
      focusTab(last);
      if (activationMode === 'auto') selectTab(last);
      break;
    }

    case 'Enter':
    case ' ': {
      if (activationMode === 'manual') {
        event.preventDefault();
        // Activate the currently focused tab (or selected if none focused)
        selectTab(focusIndex);
      }
      break;
    }

    default:
      break;
  }
}
