import type { TestLabel } from './test_label.ts';
import type { TestMetadata } from './test_metadata.ts';

/**
 * Represents the handlers for the tests, keyed by test label.
 */
export type TestHandlers = {
  /**
   * The metadata for the test identified by the key.
   */
  [key: TestLabel]: TestMetadata;
};
