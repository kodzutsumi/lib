// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from '@kz/util/type';

import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';
import type { CapSet } from './cap_set.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * The string key used to identify the {@linkcode UseElse} capability in a capability set.
 */
export declare const ElseKeyString = '@@UseElse';

/**
 * The string key type used to identify the {@linkcode UseElse} capability in a capability set.
 */
export type ElseKey = typeof ElseKeyString;

/**
 * Defines a capability, or sets a capability setting, for the else branch of conditional behavior.
 *
 * Use the `UseElse` capability with the {@linkcode UseThen} capability to indicate that your type supports conditional behavior with a then and else branch, or to specify the expected type for the else branch of conditional behavior.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports an else branch of conditional behavior.
 * With a capability setting provided, it is the type to be used for the else branch of conditional behavior.
 *
 * @see {@linkcode UseThen} for the then branch of conditional behavior.
 * @see {@linkcode UseCondition} for defining a condition that can be used with the then and else branches.
 * @template Type - The type to be used for the else branch of conditional behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseElse<
  Type extends AnyType = AnyType,
> = {
  /**
   * The capability setting, which indicates the type to be used for the else branch of conditional behavior.
   */
  [ElseKeyString]: Type;
};

/**
 * The capability setting, which indicates the depth to be used in the type implementation.
 */
export type Else<
  Type extends AnyType = AnyType,
> = UseElse<Type>;

/**
 * Extracts the {@linkcode UseElse} capability from a given capability set, returning a default type if the {@linkcode UseElse} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseElse} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseElse} capability is not present in the set.
 * @returns An object containing the {@linkcode UseElse} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickElse<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = false,
> = PickCap<CapabilitySet, ElseKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseElse} capability setting from a given capability set, returning a default type if the {@linkcode UseElse} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseElse} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseElse} capability is not present in the set.
 * @returns The type of the {@linkcode UseElse} capability if it exists in the set, otherwise returns the default type.
 */
export type GetElse<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = false,
> = GetCap<CapabilitySet, ElseKey, DefaultSetting>;
