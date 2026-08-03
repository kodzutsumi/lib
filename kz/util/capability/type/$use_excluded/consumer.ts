import type { $UseExcludedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for excluded or included behavior.
 *
 * Use this capability consumer to indicate that a type supports both excluded or
 * included behavior, or results in an excluded or included type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsExcluded} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsIncluded} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsExcluded - The boolean setting for this capability consumer.
 */
export type $UseExcluded<AsExcluded extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseExcluded` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseExcludedKeyString]: AsExcluded;
};
