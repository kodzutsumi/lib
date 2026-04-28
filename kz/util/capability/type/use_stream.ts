// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseStream} capability in a capability set.
 */
export declare const StreamKeyString = '@@UseStream';

/**
 * The string key type used to identify the {@linkcode UseStream} capability in a capability set.
 */
export type StreamKey = typeof StreamKeyString;

/**
 * Defines a capability, or sets a capability setting, for streaming behavior.
 *
 * Use the `UseStream` capability to indicate that your type supports both filter and predicate behavior, or to specify the expected behavior of your type as either filter or predicate.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both filter and predicate behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either filter (`true`) or predicate (`false`).
 *
 * @template AsFilter - A boolean type that indicates filter (`true`) or predicate (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseStream<AsFilter extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports filtering behavior (`true`) or predicate behavior (`false`).
   */
  [StreamKeyString]: AsFilter;
};

/**
 * The {@linkcode UseStream} capability setting for filter behavior.
 */
export type AsFilter = UseStream<true>;

/**
 * The {@linkcode UseStream} capability setting for predicate behavior. This should be considered the default in your type implementation.
 */
export type AsPredicate = UseStream<false>;

/**
 * Extracts the {@linkcode UseStream} capability from a given capability set, returning a default type if the {@linkcode UseStream} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseStream} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseStream} capability is not present in the set.
 * @returns An object containing the {@linkcode UseStream} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickStream<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, StreamKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseStream} capability setting from a given capability set, returning a default type if the {@linkcode UseStream} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseStream} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseStream} capability is not present in the set.
 * @returns The type of the {@linkcode UseStream} capability if it exists in the set, otherwise returns the default type.
 */
export type GetStream<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, StreamKey, DefaultSetting>;
