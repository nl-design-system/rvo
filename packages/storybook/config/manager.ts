import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme,
});

function waitForElement(selector: string): Promise<NodeListOf<Element>> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelectorAll(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelectorAll(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return null;
  });
}

// Register an addon that hides stories with STATUS = HIDDEN from the sidebar
addons.register('HIDE_STORIES_ADDON', async () => {
  await waitForElement('div[id="storybook-explorer-menu"] span[type="HIDDEN"]').then((elements) => {
    elements?.forEach((element) => {
      const linkId = element.closest('a')?.getAttribute('id');
      if (!linkId) {
        return;
      }
      var style = document.createElement('style');
      style.innerHTML = `div[id="storybook-explorer-menu"] a[id="${linkId}"] { display: none; }`;
      document.getElementsByTagName('head')[0].appendChild(style);
    });
  });
});
