import type { TestFixtureDefinition } from './test_fixture_definition.ts';
import type { TestFixtureListeners } from './test_fixture_listeners.ts';
import type { TestHandlers } from './test_handlers.ts';
import type { TestLabel } from './test_label.ts';

/**
 * Represents the metadata for a test fixture.
 */
export type TestFixtureMetadata = {
  /**
   * The name of the test fixture. Always the class name.
   */
  name: TestLabel;

  /**
   * The label of the test fixture.
   */
  label?: TestLabel;

  /**
   * The definition of the test fixture.
   */
  definition?: TestFixtureDefinition;

  /**
   * The event listeners for the test fixture.
   */
  eventListeners?: TestFixtureListeners;

  /**
   * The tests contained within the test fixture.
   */
  tests: TestHandlers;
};
