// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseOptional} capability in a capability set.
 */
export declare const OptionalKeyString = '@@UseOptional';

/**
 * The string key type used to identify the {@linkcode UseOptional} capability in a capability set.
 */
export type OptionalKey = typeof OptionalKeyString;

/**
 * Defines a capability, or sets a capability setting, for optional behavior.
 *
 * Use the `UseOptional` capability to indicate that your type supports both optional and required behavior, or to specify the expected behavior of your type as either optional or required.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both optional and required behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either optional (`true`) or required (`false`).
 *
 * @template AsOptional - A boolean type that indicates optional (`true`) or required (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseOptional<AsOptional extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports optional behavior (`true`) or required behavior (`false`).
   */
  [OptionalKeyString]: AsOptional;
};

/**
 * The {@linkcode UseOptional} capability setting for optional behavior.
 */
export type AsOptional = UseOptional<true>;

/**
 * The {@linkcode UseOptional} capability setting for required behavior. This should be considered the default in your type implementation.
 */
export type AsRequired = UseOptional<false>;

/**
 * Extracts the {@linkcode UseOptional} capability from a given capability set, returning a default type if the {@linkcode UseOptional} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseOptional} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseOptional} capability is not present in the set.
 * @returns An object containing the {@linkcode UseOptional} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickOptional<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, OptionalKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseOptional} capability setting from a given capability set, returning a default type if the {@linkcode UseOptional} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseOptional} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseOptional} capability is not present in the set.
 * @returns The type of the {@linkcode UseOptional} capability if it exists in the set, otherwise returns the default type.
 */
export type GetOptional<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, OptionalKey, DefaultSetting>;
