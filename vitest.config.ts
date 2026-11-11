import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, './vitest.setup.ts')], 
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], 
    coverage: {
      provider: 'v8',
      include: ['component/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'], 
      exclude: ['src/index.ts', 'component/index.ts'], 
      reporter: ['text', 'html', 'lcov'],
    },
  },
});
