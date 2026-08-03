import type { $UseOfKeyString } from './constant.ts';

/**
 * Indicates support for an "of type" capability.
 *
 * Use this capability consumer to indicate that a type supports an "of type" capability, or results in a type with an "of type" capability,
 * based on the value of the capability setting.
 *
 * @see {@linkcode $OfType} for the broker behavior of this capability consumer.
 *
 * @template OfType - The type setting for this capability consumer.
 */
export type $UseOf<OfType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseOf} capability.
   */
  [$UseOfKeyString]: OfType;
};
