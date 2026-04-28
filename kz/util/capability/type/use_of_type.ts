// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from '@kz/util/type';

import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';
import type { CapSet } from './cap_set.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * The string key used to identify the {@linkcode UseOfType} capability in a capability set.
 */
export declare const OfTypeKeyString = '@@UseOfType';

/**
 * The string key type used to identify the {@linkcode UseOfType} capability in a capability set.
 */
export type OfTypeKey = typeof OfTypeKeyString;

/**
 * Defines a capability, or sets a capability setting, for the operable type in a type implementation
 *
 * Use the `UseOfType` capability with other capability settings to specify an operable type to be used in your type implementation.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports an operable type.
 * With a capability setting provided, it is the type to be used as the operable type.
 *
 * @template Type - The type to be used as the operable type.
 * @returns An object type that includes the capability setting.
 */
export type UseOfType<
  Type extends AnyType = AnyType,
> = {
  /**
   * The capability setting, which indicates the type to be used as the operable type.
   */
  [OfTypeKeyString]: Type;
};

/**
 * A helper to define a {@linkcode UseOfType} capability for the operable type in a type implementation.
 *
 * @template Type - The type to be used as the operable type.
 * @returns An object type that includes the capability setting.
 */
export type Of<
  Type extends AnyType = AnyType,
> = UseOfType<Type>;

/**
 * Extracts the {@linkcode UseOfType} capability from a given capability set, returning a default type if the {@linkcode UseOfType} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseOfType} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseOfType} capability is not present in the set.
 * @returns An object containing the {@linkcode UseOfType} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickOfType<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = false,
> = PickCap<CapabilitySet, OfTypeKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseOfType} capability setting from a given capability set, returning a default type if the {@linkcode UseOfType} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseOfType} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseOfType} capability is not present in the set.
 * @returns The type of the {@linkcode UseOfType} capability if it exists in the set, otherwise returns the default type.
 */
export type GetOfType<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = false,
> = GetCap<
  CapabilitySet,
  OfTypeKey,
  DefaultSetting
>;
