import { readdirSync } from 'fs';

export const getDirectories = (source: string): string[] => {
  return readdirSync(source, { withFileTypes: true })
    .filter((entry) => {
      return entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist';
    })
    .map((entry) => entry.name);
};
