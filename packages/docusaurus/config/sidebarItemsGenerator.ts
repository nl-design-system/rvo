import fs from 'fs';
import path from 'path';

// Possible content roots for the two plugin-content-docs instances (see docusaurus.config.ts)
const CONTENT_ROOTS = [
  path.resolve(__dirname, '../../../documentation/pages'),
  path.resolve(__dirname, '../../../components'),
];

type CategoryMetadata = { label?: string; position?: number };

// Reads an optional Docusaurus-style `_category_.json` for a given category path
// (e.g. "voorbeelden/paginas"), so folders can override their sidebar label/order.
const getCategoryMetadata = (categoryPath: string): CategoryMetadata => {
  for (const root of CONTENT_ROOTS) {
    const categoryFile = path.join(root, categoryPath, '_category_.json');
    if (fs.existsSync(categoryFile)) {
      try {
        return JSON.parse(fs.readFileSync(categoryFile, 'utf-8'));
      } catch {
        return {};
      }
    }
  }
  return {};
};

const toProperCase = (string: string): string => {
  // Specifieke vertalingen voor Nederlandse labels
  const translations = {
    pages: "Pagina's",
    'ask-users-for': 'Gebruikers vragen om',
    'help-users-to': 'Gebruikers helpen om',
  };

  if (translations[string]) {
    return translations[string];
  }

  const parsedString = string.replace(/-/g, ' ');
  return parsedString.charAt(0).toUpperCase() + parsedString.slice(1);
};

const findOrAddCategory = (itemList, categoryName, categoryPath) => {
  let category = itemList.find((item) => item.type === 'category' && item.__dirName === categoryName);
  if (!category) {
    const metadata = getCategoryMetadata(categoryPath);
    category = {
      type: 'category',
      collapsible: false,
      label: metadata.label || toProperCase(categoryName),
      items: [],
      __dirName: categoryName,
      __position: metadata.position,
    };
    itemList.push(category);
  }
  return category.items;
};

const addSidebarItem = (arrayToAddItem, doc) => {
  let sidebarItem;

  if (!doc.frontMatter.sidebar_anchors) {
    sidebarItem = { type: 'doc', id: doc.id, label: doc.title };
  } else {
    sidebarItem = {
      type: 'category',
      label: doc.title,
      link: {
        type: 'doc',
        id: doc.id,
      },
      collapsible: false,
      items: doc.frontMatter.sidebar_anchors.map((anchorItem) => {
        return {
          type: 'link',
          href: `#${anchorItem.anchor}`,
          label: anchorItem.label,
        };
      }),
    };
  }

  arrayToAddItem.push(sidebarItem);
};

// Sorts sibling items by their explicit `_category_.json` position (if any), keeping
// everything else in its original (sidebar-position-derived) order, then strips the
// internal bookkeeping props before handing the tree back to Docusaurus.
const sortAndCleanItems = (items) => {
  const sorted = [...items].sort((a, b) => (a.__position ?? Infinity) - (b.__position ?? Infinity));
  sorted.forEach((item) => {
    if (item.type === 'category') {
      delete item.__dirName;
      delete item.__position;
      item.items = sortAndCleanItems(item.items);
    }
  });
  return sorted;
};

const sidebarItemsGenerator = async ({ item, docs }) => {
  let processedDocs = docs;

  // Filter docs by dirname (if present)
  if (item.dirName !== '.') {
    processedDocs = docs.filter((docItem) => {
      return docItem.sourceDirName.split('/')[0] === item.dirName;
    });
  }

  // Order docs by sidebar position and then alphabetically
  processedDocs = processedDocs.sort((a, b) => {
    if (a.sidebarPosition !== b.sidebarPosition) {
      return a.sidebarPosition - b.sidebarPosition;
    }
    return a.title.localeCompare(b.title);
  });

  // Remove the homepage from the sidebar
  const homepageIndex = processedDocs.findIndex((doc) => doc.sourceDirName === '.');
  if (homepageIndex > -1) {
    processedDocs.splice(homepageIndex, 1);
  }

  // Remove docs that opted out of the sidebar (e.g. a section's own navbar landing page)
  processedDocs = processedDocs.filter((doc) => !doc.frontMatter.hide_from_sidebar);

  const initialPathSegments = item.dirName === '.' ? [] : [item.dirName];

  // Categorize docs by folder
  const sidebarItems = processedDocs.reduce((currentSidebarItemList, doc) => {
    // Get categories from doc's sourceDirName
    let categoryNames = doc.sourceDirName.split('/');
    categoryNames.shift();

    categoryNames = categoryNames.filter((name) => name !== 'docs');

    if (categoryNames.length > 0) {
      categoryNames.reduce(
        (acc, categoryName, categoryIndex) => {
          const pathSegments = [...acc.pathSegments, categoryName];
          // Find or add category if it does not exist
          const category = findOrAddCategory(acc.items, categoryName, pathSegments.join('/'));
          // If all categories are parsed, add doc to the category
          if (categoryIndex === categoryNames.length - 1) {
            addSidebarItem(category, doc);
          }
          return { items: category, pathSegments };
        },
        { items: currentSidebarItemList, pathSegments: initialPathSegments },
      );
    } else {
      // No categories, just add the doc to the sidebar
      addSidebarItem(currentSidebarItemList, doc);
    }
    return currentSidebarItemList;
  }, []);

  return sortAndCleanItems(sidebarItems);
};

export default sidebarItemsGenerator;
