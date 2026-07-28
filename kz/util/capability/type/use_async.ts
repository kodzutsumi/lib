// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseAsync} capability in a capability set.
 */
export declare const AsyncKeyString = '@@UseAsync';

/**
 * The string key type used to identify the {@linkcode UseAsync} capability in a capability set.
 */
export type AsyncKey = typeof AsyncKeyString;

/**
 * Defines a capability, or sets a capability setting, for asynchronous behavior.
 *
 * Use the `UseAsync` capability to indicate that your type supports both asynchronous and synchronous behavior, or to specify the expected behavior of your type as either asynchronous or synchronous.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both asynchronous and synchronous behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either asynchronous (`true`) or synchronous (`false`).
 *
 * @template AsAsync - A boolean type that indicates asynchronous (`true`) or synchronous (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseAsync<AsAsync extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports asynchronous behavior (`true`) or synchronous behavior (`false`).
   */
  [AsyncKeyString]: AsAsync;
};

/**
 * The {@linkcode UseAsync} capability setting for asynchronous behavior.
 */
export type AsAsync = UseAsync<true>;

/**
 * The {@linkcode UseAsync} capability setting for synchronous behavior. This should be considered the default in your type implementation.
 */
export type AsSync = UseAsync<false>;

/**
 * Extracts the {@linkcode UseAsync} capability from a given capability set, returning a default type if the asynchronous capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseAsync} capability setting.
 * @template DefaultSettingValue - The default type to return if the asynchronous capability is not present in the set.
 * @returns An object containing the {@linkcode UseAsync} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickAsync<
  CapabilitySet extends CapSet,
  DefaultSettingValue extends boolean = false,
> = PickCap<CapabilitySet, AsyncKey, DefaultSettingValue>;

/**
 * Retrieves the {@linkcode UseAsync} capability setting from a given capability set, returning a default type if the asynchronous capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseAsync} capability setting value.
 * @template DefaultSettingValue - The default type to return if the asynchronous capability is not present in the set.
 * @returns The type of the asynchronous capability if it exists in the set, otherwise returns the default type.
 */
export type GetAsync<
  CapabilitySet extends CapSet,
  DefaultSettingValue extends boolean = false,
> = GetCap<
  CapabilitySet,
  AsyncKey,
  DefaultSettingValue
>;
