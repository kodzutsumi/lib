// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseBuiltin} capability in a capability set.
 */
export declare const BuiltinKeyString = '@@UseBuiltin';

/**
 * The string key type used to identify the {@linkcode UseBuiltin} capability in a capability set.
 */
export type BuiltinKey = typeof BuiltinKeyString;

/**
 * Defines a capability, or sets a capability setting, for built-in behavior.
 *
 * Use the `UseBuiltin` capability to indicate that your type supports both built-in and custom behavior, or to specify the expected behavior of your type as either built-in or custom.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both built-in and custom behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either built-in (`true`) or custom (`false`).
 *
 * @template AsBuiltin - A boolean type that indicates built-in (`true`) or custom (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseBuiltin<AsBuiltin extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports built-in behavior (`true`) or custom behavior (`false`).
   */
  [BuiltinKeyString]: AsBuiltin;
};

/**
 * The {@linkcode UseBuiltin} capability setting for built-in behavior.
 */
export type AsBuiltin = UseBuiltin<true>;

/**
 * The {@linkcode UseBuiltin} capability setting for custom behavior. This should be considered the default in your type implementation.
 */
export type AsCustom = UseBuiltin<false>;

/**
 * Extracts the {@linkcode UseBuiltin} capability from a given capability set, returning a default type if the {@linkcode UseBuiltin} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseBuiltin} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseBuiltin} capability is not present in the set.
 * @returns An object containing the {@linkcode UseBuiltin} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickBuiltin<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, BuiltinKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseBuiltin} capability setting from a given capability set, returning a default type if the {@linkcode UseBuiltin} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseBuiltin} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseBuiltin} capability is not present in the set.
 * @returns The type of the {@linkcode UseBuiltin} capability if it exists in the set, otherwise returns the default type.
 */
export type GetBuiltin<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<
  CapabilitySet,
  BuiltinKey,
  DefaultSetting
>;
