// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseSafe} capability in a capability set.
 */
export declare const SafeKeyString = '@@UseSafe';

/**
 * The string key type used to identify the {@linkcode UseSafe} capability in a capability set.
 */
export type SafeKey = typeof SafeKeyString;

/**
 * Defines a capability, or sets a capability setting, for safe behavior.
 *
 * Use the `UseSafe` capability to indicate that your type supports both safe and unsafe behavior, or to specify the expected behavior of your type as either safe or unsafe.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both safe and unsafe behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either safe (`true`) or unsafe (`false`).
 *
 * @template AsSafe - A boolean type that indicates safe (`true`) or unsafe (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseSafe<AsSafe extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports safe behavior (`true`) or unsafe behavior (`false`).
   */
  [SafeKeyString]: AsSafe;
};

/**
 * The {@linkcode UseSafe} capability setting for safe behavior.
 */
export type AsSafe = UseSafe<true>;

/**
 * The {@linkcode UseSafe} capability setting for unsafe behavior. This should be considered the default in your type implementation.
 */
export type AsUnsafe = UseSafe<false>;

/**
 * Extracts the {@linkcode UseSafe} capability from a given capability set, returning a default type if the {@linkcode UseSafe} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseSafe} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseSafe} capability is not present in the set.
 * @returns An object containing the {@linkcode UseSafe} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickSafe<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, SafeKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseSafe} capability setting from a given capability set, returning a default type if the {@linkcode UseSafe} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseSafe} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseSafe} capability is not present in the set.
 * @returns The type of the {@linkcode UseSafe} capability if it exists in the set, otherwise returns the default type.
 */
export type GetSafe<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, SafeKey, DefaultSetting>;
