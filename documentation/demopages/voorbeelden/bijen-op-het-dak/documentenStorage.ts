const OFFERTES_KEY = 'bijen-op-het-dak-offertes';
const TEKENINGEN_KEY = 'bijen-op-het-dak-tekeningen';

export interface DocumentInfo {
  bestandsnaam: string;
  grootte: number;
}

const readList = (key: string): DocumentInfo[] => {
  try {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const writeList = (key: string, list: DocumentInfo[]): void => {
  sessionStorage.setItem(key, JSON.stringify(list));
};

export const getOffertes = (): DocumentInfo[] => readList(OFFERTES_KEY);
export const addOfferte = (doc: DocumentInfo): void => writeList(OFFERTES_KEY, [...getOffertes(), doc]);
export const removeOfferte = (index: number): void => {
  const list = getOffertes();
  list.splice(index, 1);
  writeList(OFFERTES_KEY, list);
};

export const getTekeningen = (): DocumentInfo[] => readList(TEKENINGEN_KEY);
export const addTekening = (doc: DocumentInfo): void => writeList(TEKENINGEN_KEY, [...getTekeningen(), doc]);
export const removeTekening = (index: number): void => {
  const list = getTekeningen();
  list.splice(index, 1);
  writeList(TEKENINGEN_KEY, list);
};
