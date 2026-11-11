import type { TestDefinition } from './test_definition.ts';
import type { TestLabel } from './test_label.ts';
import type { TestListeners } from './test_listeners.ts';

/**
 * Represents the metadata for a test.
 *
 * @template Args - The tuple of argument types for the test cases.
 */
export type TestMetadata<Args extends unknown[] = unknown[]> = {
  /**
   * Indicates whether the test is a static method.
   */
  static: boolean;

  /**
   * The name of the test. Always the method name.
   */
  name: TestLabel;

  /**
   * The label of the test.
   */
  label?: TestLabel;

  /**
   * The group to which the test belongs.
   *
   * A tuple representing the hierarchical group structure to which the test belongs.
   */
  group?: TestLabel;

  /**
   * The definition of the test.
   */
  definition?: TestDefinition<Args>;

  /**
   * The event listeners for the test.
   */
  eventListeners?: TestListeners;
};
