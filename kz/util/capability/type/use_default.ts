// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from '@kz/util/type';

import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';
import type { CapSet } from './cap_set.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * The string key used to identify the {@linkcode UseDefault} capability in a capability set.
 */
export declare const DefaultKeyString = '@@UseDefault';

/**
 * The string key type used to identify the {@linkcode UseDefault} capability in a capability set.
 */
export type DefaultKey = typeof DefaultKeyString;

/**
 * Defines a capability, or sets a capability setting, for the default type in a type implementation.
 *
 * Use the `UseDefault` capability with other capability settings to specify a default type to be used in your type implementation.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports a default type.
 * With a capability setting provided, it is the type to be used as the default type.
 *
 * @template Type - The type to be used as the default type.
 * @returns An object type that includes the capability setting.
 */
export type UseDefault<
  Type extends AnyType = AnyType,
> = {
  /**
   * The capability setting, which indicates the type to be used as the default type.
   */
  [DefaultKeyString]: Type;
};

/**
 * A helper to define a {@linkcode UseDefault} capability for the default type in a type implementation.
 *
 * @template Type - The type to be used as the default type.
 * @returns An object type that includes the capability setting.
 */
export type DefaultOf<
  Type extends AnyType = AnyType,
> = UseDefault<Type>;

/**
 * Extracts the {@linkcode UseDefault} capability from a given capability set, returning a default type if the {@linkcode UseDefault} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseDefault} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseDefault} capability is not present in the set.
 * @returns An object containing the {@linkcode UseDefault} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickDefault<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = AnyType,
> = PickCap<CapabilitySet, DefaultKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseDefault} capability setting from a given capability set, returning a default type if the {@linkcode UseDefault} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseDefault} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseDefault} capability is not present in the set.
 * @returns The type of the {@linkcode UseDefault} capability if it exists in the set, otherwise returns the default type.
 */
export type GetDefault<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = AnyType,
> = GetCap<
  CapabilitySet,
  DefaultKey,
  DefaultSetting
>;
