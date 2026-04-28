// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseReverse} capability in a capability set.
 */
export declare const ReverseKeyString = '@@UseReverse';

/**
 * The string key type used to identify the {@linkcode UseReverse} capability in a capability set.
 */
export type ReverseKey = typeof ReverseKeyString;

/**
 * Defines a capability, or sets a capability setting, for reverse behavior.
 *
 * Use the `UseReverse` capability to indicate that your type supports both from-end and to-end behavior, or to specify the expected behavior of your type as either from-end or to-end.
 * Without a capability setting provided, it defines a capability, indicating that a type supports both from-end and to-end behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either from-end (`true`) or to-end (`false`).
 *
 * @template AsReversed - A boolean type that indicates from-end (`true`) or to-end (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseReverse<AsReversed extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports from-end behavior (`true`) or to-end behavior (`false`).
   */
  [ReverseKeyString]: AsReversed;
};

/**
 * The {@linkcode UseReverse} capability setting for from-end behavior.
 */
export type AsReversed = UseReverse<true>;

/**
 * The {@linkcode UseReverse} capability setting for to-end behavior. This should be considered the default in your type implementation.
 */
export type AsForward = UseReverse<false>;

/**
 * Extracts the {@linkcode UseReverse} capability from a given capability set, returning a default type if the {@linkcode UseReverse} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseReverse} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseReverse} capability is not present in the set.
 * @returns An object containing the {@linkcode UseReverse} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickReverse<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, ReverseKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseReverse} capability setting from a given capability set, returning a default type if the {@linkcode UseReverse} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseReverse} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseReverse} capability is not present in the set.
 * @returns The type of the {@linkcode UseReverse} capability if it exists in the set, otherwise returns the default type.
 */
export type GetReverse<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, ReverseKey, DefaultSetting>;
