// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseUnified} capability in a capability set.
 */
export declare const UnifiedKeyString = '@@UseUnified';

/**
 * The string key type used to identify the {@linkcode UseUnified} capability in a capability set.
 */
export type UnifiedKey = typeof UnifiedKeyString;

/**
 * Defines a capability, or sets a capability setting, for unified behavior.
 *
 * Use the `UseUnified` capability to indicate that your type supports both unified and distributed behavior, or to specify the expected behavior of your type as either unified or distributed.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both unified and distributed behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either unified (`true`) or distributed (`false`).
 *
 * @template AsUnified - A boolean type that indicates unified (`true`) or distributed (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseUnified<AsUnified extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports unified behavior (`true`) or distributed behavior (`false`).
   */
  [UnifiedKeyString]: AsUnified;
};

/**
 * The {@linkcode UseUnified} capability setting for unified behavior.
 */
export type AsUnified = UseUnified<true>;

/**
 * The {@linkcode UseUnified} capability setting for distributed behavior. This should be considered the default in your type implementation.
 */
export type AsDistributed = UseUnified<false>;

/**
 * Extracts the {@linkcode UseUnified} capability from a given capability set, returning a default type if the {@linkcode UseUnified} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseUnified} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseUnified} capability is not present in the set.
 * @returns An object containing the {@linkcode UseUnified} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickUnified<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, UnifiedKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseUnified} capability setting from a given capability set, returning a default type if the {@linkcode UseUnified} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseUnified} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseUnified} capability is not present in the set.
 * @returns The type of the {@linkcode UseUnified} capability if it exists in the set, otherwise returns the default type.
 */
export type GetUnified<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, UnifiedKey, DefaultSetting>;
