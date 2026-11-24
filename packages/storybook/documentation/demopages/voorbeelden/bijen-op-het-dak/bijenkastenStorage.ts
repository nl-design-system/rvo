export interface Bijenkast {
  pandIndex: number;
  aantalKasten: string;
  typeBijenkast: string;
}

const STORAGE_KEY = 'bijen-op-het-dak-bijenkasten';
const EDIT_INDEX_KEY = 'bijen-op-het-dak-edit-bijenkast-index';
const TARGET_PAND_INDEX_KEY = 'bijen-op-het-dak-target-pand-index';

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

export const removeBijenkastenForPand = (deletedPandIndex: number): void => {
  const updated = getBijenkasten()
    .filter((b) => b.pandIndex !== deletedPandIndex)
    .map((b) => (b.pandIndex > deletedPandIndex ? { ...b, pandIndex: b.pandIndex - 1 } : b));
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const bijenkastTitle = (aantalKasten: string, typeBijenkast: string): string =>
  `${aantalKasten} ${Number(aantalKasten) === 1 ? typeBijenkast : typeBijenkast.replace(/kast$/, 'kasten')}`;

export const saveTargetPandIndex = (index: number): void => {
  sessionStorage.setItem(TARGET_PAND_INDEX_KEY, String(index));
};

export const getTargetPandIndex = (): number | null => {
  const stored = sessionStorage.getItem(TARGET_PAND_INDEX_KEY);
  return stored !== null ? Number(stored) : null;
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
