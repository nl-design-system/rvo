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

const componentsSidebarItemsGenerator = async ({ docs }) => {
  const processedDocs = docs
    .filter((doc) => !doc.frontMatter.hide_from_sidebar)
    .sort((a, b) => {
      const posA = Number.isFinite(a.sidebarPosition) ? a.sidebarPosition : Infinity;
      const posB = Number.isFinite(b.sidebarPosition) ? b.sidebarPosition : Infinity;
      if (posA !== posB) {
        return posA - posB;
      }
      return a.title.localeCompare(b.title);
    });

  const sidebarItems = [];
  for (const doc of processedDocs) {
    addSidebarItem(sidebarItems, doc);
  }
  return sidebarItems;
};

export default componentsSidebarItemsGenerator;
