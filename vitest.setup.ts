import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

declare module 'vitest' {
    // @ts-ignore - Bypasses identical type parameter check ts(2428)
  interface Assertion<T = any, O = any> 
    extends TestingLibraryMatchers<any, T> {}
  
  interface AsymmetricMatchersContaining 
    extends TestingLibraryMatchers<any, any> {}
}
