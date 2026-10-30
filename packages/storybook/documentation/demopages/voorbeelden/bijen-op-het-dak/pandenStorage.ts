export interface Pand {
  straatnaam: string;
  huisnummer: string;
  postcode: string;
  plaatsnaam: string;
  daktype: string;
  dakoppervlak: string;
  bereikbaar: string;
}

const STORAGE_KEY = 'bijen-op-het-dak-panden';
const EDIT_INDEX_KEY = 'bijen-op-het-dak-edit-index';

export const getPanden = (): Pand[] => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Pand[]) : [];
  } catch {
    return [];
  }
};

export const addPand = (pand: Pand): void => {
  const panden = getPanden();
  panden.push(pand);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(panden));
};

export const updatePand = (index: number, pand: Pand): void => {
  const panden = getPanden();
  panden[index] = pand;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(panden));
};

export const removePand = (index: number): void => {
  const panden = getPanden();
  panden.splice(index, 1);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(panden));
};

export const saveEditPandIndex = (index: number): void => {
  sessionStorage.setItem(EDIT_INDEX_KEY, String(index));
};

export const getEditPandIndex = (): number | null => {
  const stored = sessionStorage.getItem(EDIT_INDEX_KEY);
  return stored !== null ? Number(stored) : null;
};

export const clearEditPandIndex = (): void => {
  sessionStorage.removeItem(EDIT_INDEX_KEY);
};
