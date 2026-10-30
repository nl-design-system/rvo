/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import fs from 'fs';
import path from 'path';

const VOORBEELDEN_ROOT = path.resolve(__dirname, '../../../documentation/pages/voorbeelden');

interface CategoryMeta {
  label?: string;
  position?: number;
}

const getCategoryMetadata = (dirName: string): CategoryMeta => {
  const categoryFile = path.join(VOORBEELDEN_ROOT, dirName, '_category_.json');
  if (fs.existsSync(categoryFile)) {
    try {
      return JSON.parse(fs.readFileSync(categoryFile, 'utf-8'));
    } catch {
      return {};
    }
  }
  return {};
};

const toProperCase = (s: string): string => s.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

const voorbeeldenSidebarItemsGenerator = async ({ docs }: { docs: any[] }) => {
  const processedDocs = docs
    .filter((doc) => doc.sourceDirName !== '.' && !doc.frontMatter.hide_from_sidebar)
    .sort((a, b) => {
      if (a.sidebarPosition !== b.sidebarPosition) return a.sidebarPosition - b.sidebarPosition;
      return a.title.localeCompare(b.title);
    });

  const categoryMap = new Map<string, { meta: CategoryMeta; items: unknown[] }>();

  for (const doc of processedDocs) {
    const dirName = doc.sourceDirName;
    if (!categoryMap.has(dirName)) {
      categoryMap.set(dirName, { meta: getCategoryMetadata(dirName), items: [] });
    }
    categoryMap.get(dirName)!.items.push({ type: 'doc', id: doc.id, label: doc.title });
  }

  return [...categoryMap.entries()]
    .sort(([, a], [, b]) => (a.meta.position ?? Infinity) - (b.meta.position ?? Infinity))
    .map(([dirName, { meta, items }]) => ({
      type: 'category',
      collapsible: false,
      label: meta.label || toProperCase(dirName),
      items,
    }));
};

export default voorbeeldenSidebarItemsGenerator;
