// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseImmutable} capability in a capability set.
 */
export declare const ImmutableKeyString = '@@UseImmutable';

/**
 * The string key type used to identify the {@linkcode UseImmutable} capability in a capability set.
 */
export type ImmutableKey = typeof ImmutableKeyString;

/**
 * Defines a capability, or sets a capability setting, for immutable behavior.
 *
 * Use the `UseImmutable` capability to indicate that your type supports both immutable and mutable behavior, or to specify the expected behavior of your type as either immutable or mutable.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both immutable and mutable behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either immutable (`true`) or mutable (`false`).
 *
 * @template AsImmutable - A boolean type that indicates immutable (`true`) or mutable (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseImmutable<AsImmutable extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports immutable behavior (`true`) or mutable behavior (`false`).
   */
  [ImmutableKeyString]: AsImmutable;
};

/**
 * The {@linkcode UseImmutable} capability setting for immutable behavior.
 */
export type AsImmutable = UseImmutable<true>;

/**
 * The {@linkcode UseImmutable} capability setting for mutable behavior. This should be considered the default in your type implementation.
 */
export type AsMutable = UseImmutable<false>;

/**
 * Extracts the {@linkcode UseImmutable} capability from a given capability set, returning a default type if the {@linkcode UseImmutable} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseImmutable} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseImmutable} capability is not present in the set.
 * @returns An object containing the {@linkcode UseImmutable} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickImmutable<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, ImmutableKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseImmutable} capability setting from a given capability set, returning a default type if the {@linkcode UseImmutable} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseImmutable} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseImmutable} capability is not present in the set.
 * @returns The type of the {@linkcode UseImmutable} capability if it exists in the set, otherwise returns the default type.
 */
export type GetImmutable<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, ImmutableKey, DefaultSetting>;
