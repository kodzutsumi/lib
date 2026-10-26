import type { TestData } from './test_data.ts';

/**
 * Represents a test method function.
 *
 * @template Args - The type of the test method arguments.
 */
export type TestMethod<Args extends unknown[] = unknown[]> = (
  data: TestData<Args>,
) => void | Promise<void>;
