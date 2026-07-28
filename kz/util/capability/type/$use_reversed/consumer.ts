import type { $UseReversedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for reversed or forward behavior.
 *
 * Use this capability consumer to indicate that a type supports both reversed
 * or forward behavior, or results in a reversed or forward type, based on the
 * value of the capability setting.
 *
 * ## Difference between `$UseReversed` and {@linkcode $UseInverted}
 * `$UseReversed` and {@linkcode $UseInverted} are similar capabilities that both
 * indicate support for an inverted or reversed behavior. However, they differ
 * in the specific behavior they indicate and the contexts in which they are
 * used. `$UseReversed` is generally east-west oriented, while
 * {@linkcode $UseInverted} is generally north-south oriented. The specific
 * differences between these capabilities depend on the context of their use
 * and the specific behaviors they indicate.
 *
 * - Use `$UseReversed` to reverse the processing order of a tuple or array.
 * - Use `$UseReversed` to change the direction of a comparison.
 * - Use {@linkcode $UseInverted} to flip a bit or boolean value.
 * - Use {@linkcode $UseInverted} to invert a stack of operations.
 *
 * @see {@linkcode $AsReversed} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsForward} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsReversed - The boolean setting for this capability consumer.
 */
export type $UseReversed<AsReversed extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseReversed` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseReversedKeyString]: AsReversed;
};
