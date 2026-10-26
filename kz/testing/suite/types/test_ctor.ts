/**
 * Represents a constructor type for test classes.
 *
 * @template T - The constructor type for the test class.
 */
export type TestCtor<
  T extends new (...args: unknown[]) => unknown = new (
    ...args: unknown[]
  ) => unknown,
> = T;
