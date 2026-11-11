import type { TestIterationData } from './test_iteration_data.ts';

/**
 * Represents the argument data for a test case.
 *
 * @template Args - The type of the test method arguments.
 */
export type TestCaseArgumentData<Args extends unknown[] = unknown[]> = {
  /**
   * The arguments for the test case.
   */
  arguments: Args;

  /**
   * The metadata for the test case arguments.
   */
  metadata: TestIterationData;
};
