// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from '@kz/util/type';

import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';
import type { CapSet } from './cap_set.ts';

type AnyType = Any<'#i11n:utilities:all_types'>;

/**
 * The string key used to identify the {@linkcode UseThen} capability in a capability set.
 */
export declare const ThenKeyString = '@@UseThen';

/**
 * The string key type used to identify the {@linkcode UseThen} capability in a capability set.
 */
export type ThenKey = typeof ThenKeyString;

/**
 * Defines a capability, or sets a capability setting, for the then branch of conditional behavior.
 *
 * Use the `UseThen` capability with the {@linkcode UseElse} capability to indicate that your type supports conditional behavior with a then and else branch, or to specify the expected type for the then branch of conditional behavior.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports a then branch of conditional behavior.
 * With a capability setting provided, it is the type to be used for the then branch of conditional behavior.
 *
 * @see {@linkcode UseElse} for the else branch of conditional behavior.
 * @see {@linkcode UseCondition} for defining a condition that can be used with the then and else branches.
 * @template Setting - The type to be used for the then branch of conditional behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseThen<
  Type extends AnyType = AnyType,
> = {
  /**
   * The capability setting, which indicates the type to be used for the then branch of conditional behavior.
   */
  [ThenKeyString]: Type;
};

/**
 * A helper to define a {@linkcode UseThen} capability for the then branch of conditional behavior.
 *
 * @template Type - The type to be used for the then branch of conditional behavior.
 * @returns An object type that includes the capability setting.
 */
export type Then<
  Type extends AnyType = AnyType,
> = UseThen<Type>;

/**
 * Extracts the {@linkcode UseThen} capability from a given capability set, returning a default type if the {@linkcode UseThen} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseThen} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseThen} capability is not present in the set.
 * @returns An object containing the {@linkcode UseThen} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickThen<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = true,
> = PickCap<CapabilitySet, ThenKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseThen} capability setting from a given capability set, returning a default type if the {@linkcode UseThen} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseThen} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseThen} capability is not present in the set.
 * @returns The type of the {@linkcode UseThen} capability if it exists in the set, otherwise returns the default type.
 */
export type GetThen<
  CapabilitySet extends CapSet,
  DefaultSetting extends AnyType = false,
> = GetCap<
  CapabilitySet,
  ThenKey,
  DefaultSetting
>;
