export interface Project {
  naam: string;
  omschrijving: string;
  startdatum: string;
}

const STORAGE_KEY = 'bijen-op-het-dak-project';

export const getProject = (): Project | null => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Project) : null;
  } catch {
    return null;
  }
};

export const saveProject = (project: Project): void => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(project));
};
