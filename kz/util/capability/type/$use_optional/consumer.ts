import type { $UseOptionalKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for optional or required behavior.
 *
 * Use this capability consumer to indicate that a type supports both optional or
 * required behavior, or results in an optional or required type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsOptional} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsRequired} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsOptional - The boolean setting for this capability consumer.
 */
export type $UseOptional<AsOptional extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseOptional` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseOptionalKeyString]: AsOptional;
};
