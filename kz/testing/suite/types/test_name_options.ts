/**
 * Options for generating test names.
 */
export type TestNameOptions = {
  /**
   * The prefix to use for generated test names.
   */
  prefix?: string;

  /**
   * The offset to apply to generated test names.
   */
  offset?: number;

  /**
   * The delimiter to use between parts of generated test names.
   */
  delimiter?: string;
};
