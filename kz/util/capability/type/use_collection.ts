// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseDefault} capability in a capability set.
 */
export declare const CollectionKeyString = '@@UseCollection';

/**
 * The string key type used to identify the {@linkcode UseDefault} capability in a capability set.
 */
export type CollectionKey = typeof CollectionKeyString;

/**
 * The possible target types for the {@linkcode UseCollection} capability, which indicates the type of collection behavior supported by a type implementation.
 * - `'collection'`: Indicates that the type supports collection behavior, which typically involves handling collections of items as a whole.
 * - `'idents'`: Indicates that the type supports collection behavior focused on identifiers, which typically involves handling collections of item identifiers or keys.
 * - `'values'`: Indicates that the type supports collection behavior focused on values, which typically involves handling collections of item values.
 */
export type CollectionTarget = 'collection' | 'idents' | 'values';

/**
 * Defines a capability, or sets a capability setting, for collection behavior in a type implementation.
 *
 * Use the `UseCollection` capability to indicate that your type supports behavior on a collection as a whole, its keys, or its values, or to specify the expected type of collection behavior supported by your type implementation.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports collection behavior.
 * With a capability setting provided, it indicates the expected type of collection behavior supported by the type implementation.
 *
 * @template Target - The type of collection behavior performed by the type implementation.
 * @returns An object type that includes the capability setting.
 */
export type UseCollection<
  Target extends CollectionTarget = CollectionTarget,
> = {
  /**
   * The capability setting, which indicates the type of collection behavior performed by the type implementation.
   */
  [CollectionKeyString]: Target;
};

/**
 * The {@linkcode UseCollection} capability setting for collection behavior, performing on a collection as a whole.
 */
export type Collection = UseCollection<'collection'>;

/**
 * The {@linkcode UseCollection} capability setting for collection behavior focused on identifiers.
 */
export type CollectionIdents = UseCollection<'idents'>;

/**
 * The {@linkcode UseCollection} capability setting for collection behavior focused on values.
 */
export type CollectionValues = UseCollection<'values'>;

/**
 * Extracts the {@linkcode UseCollection} capability from a given capability set, returning a default type if the {@linkcode UseCollection} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseCollection} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseCollection} capability is not present in the set.
 * @returns An object containing the {@linkcode UseCollection} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickCollection<
  CapabilitySet extends CapSet,
  DefaultSetting extends CollectionTarget = 'collection',
> = PickCap<CapabilitySet, CollectionKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseCollection} capability setting from a given capability set, returning a default type if the {@linkcode UseCollection} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseCollection} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseCollection} capability is not present in the set.
 * @returns The type of the {@linkcode UseCollection} capability if it exists in the set, otherwise returns the default type.
 */
export type GetCollection<
  CapabilitySet extends CapSet,
  DefaultSetting extends CollectionTarget = 'collection',
> = GetCap<CapabilitySet, CollectionKey, DefaultSetting>;
