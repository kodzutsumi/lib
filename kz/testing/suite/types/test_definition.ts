/**
 * Represents the definition of a test, including its cases and iterations.
 *
 * @template Args - The tuple of argument types for the test cases.
 */
export type TestDefinition<Args extends unknown[] = unknown[]> =
  & Omit<Deno.TestStepDefinition, 'name' | 'fn'>
  & {
    /**
     * The test cases for the test, each represented as a tuple of arguments.
     */
    cases?: Args[];

    /**
     * The number of iterations to run the test.
     *
     * Analogous to `Deno.TestDefinition.retries`.
     */
    iterations?: number;
  };
