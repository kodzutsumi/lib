import type { $UseTypeKeyString } from './constant.ts';

/**
 * Indicates support for a "from type" capability.
 *
 * Use this capability consumer to indicate that a type supports a "from type" capability, or results in a type with a "from type" capability,
 * based on the value of the capability setting.
 *
 * @see {@linkcode $FromType} for the broker behavior of this capability consumer.
 *
 * @template FromType - The type setting for this capability consumer.
 */
export type $UseType<FromType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseType} capability.
   */
  [$UseTypeKeyString]: FromType;
};
