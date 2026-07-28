// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseExclusion} capability in a capability set.
 */
export declare const ExclusionKeyString = '@@UseExclusion';

/**
 * The string key type used to identify the {@linkcode UseExclusion} capability in a capability set.
 */
export type ExclusionKey = typeof ExclusionKeyString;

/**
 * Defines a capability, or sets a capability setting, for exclusion behavior.
 *
 * Use the `UseExclusion` capability to indicate that your type supports both exclusion and inclusion behavior, or to specify the expected behavior of your type as either exclusion or inclusion.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both exclusion and inclusion behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either exclusion (`true`) or inclusion (`false`).
 *
 * @template AsExclude - A boolean type that indicates exclusion (`true`) or inclusion (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseExclusion<AsExclude extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports exclusion behavior (`true`) or inclusion behavior (`false`).
   */
  [ExclusionKeyString]: AsExclude;
};

/**
 * The {@linkcode UseExclusion} capability setting for exclusion behavior.
 */
export type AsExclude = UseExclusion<true>;

/**
 * The {@linkcode UseExclusion} capability setting for inclusion behavior. This should be considered the default in your type implementation.
 */
export type AsInclude = UseExclusion<false>;

/**
 * Extracts the {@linkcode UseExclusion} capability from a given capability set, returning a default type if the {@linkcode UseExclusion} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseExclusion} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseExclusion} capability is not present in the set.
 * @returns An object containing the {@linkcode UseExclusion} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickExclusion<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, ExclusionKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseExclusion} capability setting from a given capability set, returning a default type if the {@linkcode UseExclusion} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseExclusion} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseExclusion} capability is not present in the set.
 * @returns The type of the {@linkcode UseExclusion} capability if it exists in the set, otherwise returns the default type.
 */
export type GetExclusion<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, ExclusionKey, DefaultSetting>;
