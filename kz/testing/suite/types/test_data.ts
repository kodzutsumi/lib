import type { TestCaseArgumentData } from './test_case_argument_data.ts';
import type { TestIterationData } from './test_iteration_data.ts';

/**
 * Represents the data passed to a test method.
 *
 * @template Args - The type of the test method arguments.
 */
export type TestData<Args extends unknown[] = unknown[]> = {
  /**
   * The arguments for the test case.
   */
  case: TestCaseArgumentData<Args>;

  /**
   * The iteration data for the test case.
   */
  iteration: TestIterationData;
};
