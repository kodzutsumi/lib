import type { $UseUnifiedKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for unified or distributed behavior.
 *
 * Use this capability consumer to indicate that a type supports both unified or
 * distributed behavior, or results in a unified or distributed type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsUnified} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsDistributed} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsUnified - The boolean setting for this capability consumer.
 */
export type $UseUnified<AsUnified extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseUnified` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseUnifiedKeyString]: AsUnified;
};
