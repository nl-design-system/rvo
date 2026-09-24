export interface Bijenkast {
  pandIndex: number;
  pandLabel: string;
  aantalKasten: string;
  typeBijenkast: string;
}

const STORAGE_KEY = 'bijen-op-het-dak-bijenkasten';
const EDIT_INDEX_KEY = 'bijen-op-het-dak-edit-bijenkast-index';

export const getBijenkasten = (): Bijenkast[] => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Bijenkast[]) : [];
  } catch {
    return [];
  }
};

export const addBijenkast = (bijenkast: Bijenkast): void => {
  const bijenkasten = getBijenkasten();
  bijenkasten.push(bijenkast);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bijenkasten));
};

export const updateBijenkast = (index: number, bijenkast: Bijenkast): void => {
  const bijenkasten = getBijenkasten();
  bijenkasten[index] = bijenkast;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bijenkasten));
};

export const removeBijenkast = (index: number): void => {
  const bijenkasten = getBijenkasten();
  bijenkasten.splice(index, 1);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bijenkasten));
};

export const saveEditBijenkastIndex = (index: number): void => {
  sessionStorage.setItem(EDIT_INDEX_KEY, String(index));
};

export const getEditBijenkastIndex = (): number | null => {
  const stored = sessionStorage.getItem(EDIT_INDEX_KEY);
  return stored !== null ? Number(stored) : null;
};

export const clearEditBijenkastIndex = (): void => {
  sessionStorage.removeItem(EDIT_INDEX_KEY);
};
