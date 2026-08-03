import type { $UseThenKeyString } from './constant.ts';

/**
 * A capability consumer indicating support for a then, or `true` type.
 *
 * Use this capability consumer to indicate that a type supports a then or
 * `true` type, or results in a type with a then or `true` type, based on
 * the value of the capability setting.
 *
 * @see {@linkcode $Then} for the broker behavior of this capability consumer.
 * @see {@linkcode $UseElse} for the related capability consumer indicating support for an else (`false`) type.
 *
 * @template ThenType - The type setting for this capability consumer.
 */
export type $UseThen<ThenType extends unknown = unknown> = {
  /**
   * The capability setting key for the {@linkcode $UseThen} capability.
   */
  [$UseThenKeyString]: ThenType;
};
