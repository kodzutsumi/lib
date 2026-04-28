// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { PickCap } from './pick_cap.ts';
import type { GetCap } from './get_cap.ts';

/**
 * The string key used to identify the {@linkcode UseInversion} capability in a capability set.
 */
export declare const InversionKeyString = '@@UseInversion';

/**
 * The string key type used to identify the {@linkcode UseInversion} capability in a capability set.
 */
export type InversionKey = typeof InversionKeyString;

/**
 * Defines a capability, or sets a capability setting, for inversion behavior.
 *
 * Use the `UseInversion` capability to indicate that your type supports inversion.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports inversion behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either inverted (`true`) or initial (`false`).
 *
 * @template AsInverted - A boolean type that indicates inverted (`true`) or initial (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseInversion<AsInverted extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports inverted behavior (`true`) or initial behavior (`false`).
   */
  [InversionKeyString]: AsInverted;
};

/**
 * The {@linkcode UseInversion} capability setting for inversion behavior.
 */
export type AsInverted = UseInversion<true>;

/**
 * The {@linkcode UseInversion} capability setting for initial behavior. This should be considered the default in your type implementation.
 */
export type AsInitial = UseInversion<false>;

/**
 * Extracts the {@linkcode UseInversion} capability from a given capability set, returning a default type if the {@linkcode UseInversion} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseInversion} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseInversion} capability is not present in the set.
 * @returns An object containing the {@linkcode UseInversion} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickInversion<
  CapabilitySet extends CapSet,
  DefaultSettingValue extends boolean = false,
> = PickCap<CapabilitySet, InversionKey, DefaultSettingValue>;

/**
 * Retrieves the {@linkcode UseInversion} capability setting from a given capability set, returning a default type if the {@linkcode UseInversion} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseInversion} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseInversion} capability is not present in the set.
 * @returns The type of the {@linkcode UseInversion} capability if it exists in the set, otherwise returns the default type.
 */
export type GetInversion<
  CapabilitySet extends CapSet,
  DefaultSettingValue extends boolean = false,
> = GetCap<CapabilitySet, InversionKey, DefaultSettingValue>;
