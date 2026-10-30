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

export const removeAndReindexForPand = (
  deletedPandIndex: number,
  panden: Array<{ straatnaam: string; huisnummer: string; plaatsnaam: string }>,
): void => {
  const updated = getBijenkasten().map((b) => {
    if (b.pandIndex === deletedPandIndex) {
      return { ...b, pandIndex: -1 };
    }
    if (b.pandIndex > deletedPandIndex) {
      const newIndex = b.pandIndex - 1;
      const pand = panden[b.pandIndex];
      return {
        ...b,
        pandIndex: newIndex,
        pandLabel: `${pand.straatnaam} ${pand.huisnummer}, ${pand.plaatsnaam}`,
      };
    }
    return b;
  });
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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
