import type { $UseElseKeyString } from './constant.ts';

/**
 * Indicates support for an else, or `false` type.
 *
 * Use this capability consumer to indicate that a type supports an else or `false` type, or results in a type with an
 * else or `false` type, based on the value of the capability setting.
 *
 * @see {@linkcode $Else} for the broker behavior of this capability consumer.
 * @see {@linkcode $UseThen} for the related capability consumer indicating support for a then (`true`) type.
 *
 * @template ElseType - The type setting for this capability consumer.
 */
export type $UseElse<ElseType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseElse} capability.
   */
  [$UseElseKeyString]: ElseType;
};
