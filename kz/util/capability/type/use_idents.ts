// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * The string key used to identify the type in the {@linkcode UseIdents} capability in a capability set.
 */
export declare const ReferenceTypeKeyString = '@@UseReferenceType';

/**
 * The string key used to identify the identities in a {@linkcode UseIdents} capability in a capability set.
 */
export declare const IdentsKeyString = '@@UseIdents';

/**
 * The string key type used to identify the type in a {@linkcode UseIdents} capability in a capability set.
 */
export type ReferenceTypeKey = typeof ReferenceTypeKeyString;

/**
 * The string key type used to identify the identities in a {@linkcode UseIdents} capability in a capability set.
 */
export type IdentsKey = typeof IdentsKeyString;

/**
 * Defines a capability, or sets a capability setting, for the keys of a type that your type implementation will operate on.
 *
 * Use the `UseIdents` capability to specify the keys to be used in your type implementation.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports operation on keys of a type.
 * With a capability setting provided, it is the keys of a type to be used in the type implementation.
 *
 * @template Type - The type to be used in the type implementation.
 * @template Keys - The keys of the type to be used in the type implementation.
 * @returns An object type that includes the capability setting.
 */
export type UseIdents<
  Type extends AnyType = AnyType,
  Keys extends keyof Type = keyof Type,
> = {
  /**
   * The capability setting, which indicates the type to be used in the type implementation.
   */
  [ReferenceTypeKeyString]: Type;
  /**
   * The capability setting, which indicates the keys of a type to be used in the type implementation.
   */
  [IdentsKeyString]: Keys;
};

/**
 * A helper to define a {@linkcode UseIdents} capability for the keys of a type to be used in the type implementation.
 *
 * @template Type - The type to be used in the type implementation.
 * @template Keys - The keys of the type to be used in the type implementation.
 * @returns An object type that includes the capability setting.
 */
export type IdentsOf<
  Type extends AnyType = AnyType,
  Keys extends keyof Type = keyof Type,
> = UseIdents<Type, Keys>;

/**
 * Extracts the {@linkcode UseIdents} capability from a given capability set, returning a default value if the {@linkcode UseIdents} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseIdents} capability setting.
 * @template DefaultSettingValue - The default value to return if the {@linkcode UseIdents} capability is not present in the set.
 * @returns An object containing the {@linkcode UseIdents} capability setting if it exists in the set, otherwise an object containing the default setting.
 */ export type PickIdents<
  CapabilitySet extends CapSet,
  DefaultSetting extends PropertyKey = keyof AnyType,
> =
  & PickCap<CapabilitySet, IdentsKey, DefaultSetting>
  & PickCap<CapabilitySet, ReferenceTypeKey, AnyType>;

/**
 * Retrieves the keys of a {@linkcode UseIdents} capability setting from a given capability set, returning a default value if the {@linkcode UseIdents} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseIdents} capability keys setting value.
 * @template DefaultSettingValue - The default keys to return if the {@linkcode UseIdents} capability is not present in the set.
 * @returns The keys of the {@linkcode UseIdents} capability if it exists in the set, otherwise returns the default keys.
 */
export type GetIdents<
  CapabilitySet extends CapSet,
  DefaultSetting extends PropertyKey = keyof AnyType,
> = GetCap<CapabilitySet, IdentsKey, DefaultSetting>;

/**
 * Retrieves the type of a {@linkcode UseIdents} or {@linkcode UseIdentMap} capability setting from a given capability set, returning a default value if the {@linkcode UseIdents} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseIdents}  or {@linkcode UseIdentMap} capability type setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseIdents}  or {@linkcode UseIdentMap} capability is not present in the set.
 * @returns The type of the {@linkcode UseIdents}  or {@linkcode UseIdentMap} capability if it exists in the set, otherwise returns the default type.
 */
export type GetReferenceType<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = AnyType,
> = GetCap<CapabilitySet, ReferenceTypeKey, DefaultSetting>;
