import type { $UseImmutableKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for immutable or mutable behavior.
 *
 * Use this capability consumer to indicate that a type supports both immutable or
 * mutable behavior, or results in an immutable or mutable type, based on the value of
 * the capability setting.
 *
 * @see {@linkcode $AsImmutable} for the `true` broker behavior of this capability consumer.
 * @see {@linkcode $AsMutable} for the `false` (implied default) broker behavior of this capability consumer.
 *
 * @template AsImmutable - The boolean setting for this capability consumer.
 */
export type $UseImmutable<AsImmutable extends boolean = boolean> = {
  /**
   * The capability setting key for the `$UseImmutable` capability.
   *
   * As `boolean`, it functions as a capability consumer. As a boolean literal,
   * it functions as a capability broker indicating a desired behavior.
   */
  [$UseImmutableKeyString]: AsImmutable;
};
