import type { $UseDefaultKeyString } from './constant.ts';

/**
 * Indicates support for a default type.
 *
 * Use this capability consumer to indicate that a type supports a default type, or results in a type with a default type,
 * based on the value of the capability setting.
 *
 * @see {@linkcode $DefaultOf} for the broker behavior of this capability consumer.
 *
 * @template DefaultType - The type setting for this capability consumer.
 */
export type $UseDefault<DefaultType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseDefault} capability.
   */
  [$UseDefaultKeyString]: DefaultType;
};
