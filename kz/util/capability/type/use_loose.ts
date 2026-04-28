// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseLoose} capability in a capability set.
 */
export declare const LooseKeyString = '@@UseLoose';

/**
 * The string key type used to identify the {@linkcode UseLoose} capability in a capability set.
 */
export type LooseKey = typeof LooseKeyString;

/**
 * Defines a capability, or sets a capability setting, for strict behavior.
 *
 * Use the `UseLoose` capability to indicate that your type supports both strict and loose behavior, or to specify the expected behavior of your type as either strict or loose.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both strict and loose behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either strict (`true`) or loose (`false`).
 *
 * @template Setting - A boolean type that indicates strict (`true`) or loose (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseLoose<AsLoose extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports strict behavior (`true`) or loose behavior (`false`).
   */
  [LooseKeyString]: AsLoose;
};

/**
 * The {@linkcode UseLoose} capability setting for loose behavior.
 */
export type AsStrict = UseLoose<false>;

/**
 * The {@linkcode UseLoose} capability setting for strict behavior. This should be considered the default in your type implementation.
 */
export type AsLoose = UseLoose<true>;

/**
 * Extracts the {@linkcode UseLoose} capability from a given capability set, returning a default type if the {@linkcode UseLoose} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseLoose} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseLoose} capability is not present in the set.
 * @returns An object containing the {@linkcode UseLoose} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickLoose<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, LooseKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseLoose} capability setting from a given capability set, returning a default type if the {@linkcode UseLoose} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseLoose} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseLoose} capability is not present in the set.
 * @returns The type of the {@linkcode UseLoose} capability if it exists in the set, otherwise returns the default type.
 */
export type GetLoose<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, LooseKey, DefaultSetting>;
