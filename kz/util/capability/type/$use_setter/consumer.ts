import type { $UseSetterKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for accessor behavior.
 *
 * Use this capability consumer to indicate that a type supports both getter or
 * setter behavior based on the value of the capability setting.
 *
 * @see {@linkcode $AsSetter} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsGetter} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsSetter - The boolean setting for this capability consumer.
 */
export type $UseSetter<AsSetter extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseSetter` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseSetterKeyString]: AsSetter;
};
