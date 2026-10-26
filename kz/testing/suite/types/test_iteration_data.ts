/**
 * Represents the iteration data for a test case.
 */
export type TestIterationData = {
  /**
   * The index of the current iteration (0-indexed).
   */
  index: number;

  /**
   * The total number of iterations.
   */
  length: number;

  /**
   * The progress of the current iteration as a number between 0 and 1.
   */
  progress: number;

  /**
   * The parity of the current iteration ('even' or 'odd').
   */
  parity: 'even' | 'odd';

  /**
   * The position of the current iteration ('first', 'last', or 'middle').
   */
  position: 'first' | 'last' | 'middle';

  /**
   * Whether the current iteration is the first iteration.
   */
  first: boolean;

  /**
   * Whether the current iteration is the last iteration.
   */
  last: boolean;

  /**
   * Whether the current iteration is a middle iteration.
   */
  middle: boolean;

  /**
   * Whether the current iteration is an even iteration.
   */
  even: boolean;

  /**
   * Whether the current iteration is an odd iteration.
   */
  odd: boolean;
};
