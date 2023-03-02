const toProperCase = (string) => {
  const parsedString = string.replace(/-/g, ' ').replace();
  return parsedString.charAt(0).toUpperCase() + parsedString.slice(1);
};

const findOrAddCategory = (itemList, categoryName) => {
  let category = itemList.find((item) => item.type === 'category' && item.label === toProperCase(categoryName));
  if (!category) {
    category = {
      type: 'category',
      collapsed: false,
      label: toProperCase(categoryName),
      items: [],
    };
    itemList.push(category);
  }
  return category.items;
};

module.exports = async ({ item, docs }) => {
  let processedDocs = docs;

  // Filter docs by dirname (if present)
  if (item.dirName !== '.') {
    processedDocs = docs.filter((docItem) => {
      return docItem.sourceDirName.split('/')[0] === item.dirName;
    });
  }

  // Order docs by sidebar position
  processedDocs = processedDocs.sort((a, b) => {
    return a.sidebarPosition - b.sidebarPosition;
  });

  // Remove the homepage from the sidebar
  const homepageIndex = processedDocs.findIndex((doc) => doc.sourceDirName === '.');
  if (homepageIndex > -1) {
    processedDocs.splice(homepageIndex, 1);
  }

  // Categorize docs by folder
  const sidebarItems = processedDocs.reduce((currentSidebarItemList, doc) => {
    // Get categories from doc's sourceDirName
    const categoryNames = doc.sourceDirName.split('/');
    categoryNames.shift();

    // Parse sidebar item
    const sidebarItem = { type: 'doc', id: doc.id, label: doc.title };

    if (categoryNames.length > 0) {
      categoryNames.reduce((currentCategory, categoryName, categoryIndex) => {
        // Find or add category if it does not exist
        const category = findOrAddCategory(currentCategory, categoryName);
        // If all categories are parsed, add doc to the category
        if (categoryIndex === categoryNames.length - 1) {
          category.push(sidebarItem);
        }
        return category;
      }, currentSidebarItemList);
    } else {
      // No categories, just add the doc to the sidebar
      currentSidebarItemList.push(sidebarItem);
    }
    return currentSidebarItemList;
  }, []);
  return sidebarItems;
};
