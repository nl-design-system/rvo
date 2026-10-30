import { useEffect } from 'react';
import { fillDemoData } from './demoPrefill';

const URL_VOORBEREIDING =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-voordat-u-begint-met-aanvragen--default&viewMode=story';
const URL_PROJECTGEGEVENS =
  'iframe.html?id=pagina-s-voorbeelden-bijen-op-het-dak-projectgegevens--default&viewMode=story';

export const useDemoControls = () => {
  useEffect(() => {
    const handleAction = () => {
      if (window.location.hash === '#demo') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        fillDemoData();
        window.location.href = URL_PROJECTGEGEVENS;
      } else if (window.location.hash === '#reset') {
        sessionStorage.clear();
        history.replaceState(null, '', window.location.pathname + window.location.search);
        window.location.href = URL_VOORBEREIDING;
      }
    };
    handleAction();
    window.addEventListener('hashchange', handleAction);
    return () => window.removeEventListener('hashchange', handleAction);
  }, []);
};
