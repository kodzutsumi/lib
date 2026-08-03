import type { $UseCollectionKeyString } from './constant.ts';

export type $CollectionTarget = 'entries' | 'keys' | 'values';

/**
 * Indicates support for operating on a whole collection, its keys, or its values.
 *
 * Use this capability consumer to indicate that a type supports operating on a whole collection, its keys, or its values, or results in a type with such capabilities, based on the value of the capability setting.
 *
 * @template Target - The type setting for this capability consumer.
 */
export type $UseCollection<
  Target extends $CollectionTarget = $CollectionTarget,
> = {
  /**
   * The capability setting key for the {@linkcode $UseCollection} capability.
   */
  [$UseCollectionKeyString]: Target;
};
