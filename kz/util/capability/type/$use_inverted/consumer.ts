import type { $UseInvertedKeyString } from './constant.ts';

/**
 * Indicates support for inverted or initial behavior.
 *
 * Use this capability consumer to indicate that a type supports both inverted or initial behavior, or results in an
 * inverted or initial type, based on the value of the capability setting.
 *
 * ## Difference between `$UseInverted` and {@linkcode $UseReversed}
 * `$UseInverted` and {@linkcode $UseReversed} are similar capabilities that both indicate support for an inverted or
 * reversed behavior. However, they differ in the specific behavior they indicate and the contexts in which they are
 * used. `$UseInverted` is generally north-south oriented, while {@linkcode $UseReversed} is generally east-west
 * oriented. The specific differences between these capabilities depend on the context of their use and the specific
 * behaviors they indicate.
 *
 * - Use `$UseInverted` to flip a bit or boolean value.
 * - Use `$UseInverted` to invert a stack of operations.
 * - Use {@linkcode $UseReversed} to reverse the processing order of a tuple or array.
 * - Use {@linkcode $UseReversed} to change the direction of a comparison.
 *
 * @see {@linkcode $AsInverted} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsInitial} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsInverted - The boolean setting for this capability consumer.
 */
export type $UseInverted<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseInverted` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal, it functions as a capability broker
   * indicating a desired behavior.
   */
  [$UseInvertedKeyString]: AsInverted;
};
