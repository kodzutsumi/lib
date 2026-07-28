// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet } from './cap_set.ts';
import type { GetCap } from './get_cap.ts';
import type { PickCap } from './pick_cap.ts';

/**
 * The string key used to identify the {@linkcode UseAccessor} capability in a capability set.
 */
export declare const AccessorKeyString = '@@UseAccessor';

/**
 * The string key type used to identify the {@linkcode UseAccessor} capability in a capability set.
 */
export type AccessorKey = typeof AccessorKeyString;

/**
 * Defines a capability, or sets a capability setting, for accessor behavior.
 *
 * Use the `UseAccessor` capability to indicate that your type supports both setter and getter behavior, or to specify the expected behavior of your type as either accessor or getter.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports both setter and getter behavior.
 * With a capability setting provided, it indicates the expected behavior of a type to either setter (`true`) or getter (`false`).
 *
 * @template AsSetter - A boolean type that indicates setter (`true`) or getter (`false`) behavior.
 * @returns An object type that includes the capability setting.
 */
export type UseAccessor<AsSetter extends boolean = boolean> = {
  /**
   * The capability setting, which indicates whether the type supports setter behavior (`true`) or getter behavior (`false`).
   */
  [AccessorKeyString]: AsSetter;
};

/**
 * The {@linkcode UseAccessor} capability setting for setter behavior.
 */
export type AsSetter = UseAccessor<true>;

/**
 * The {@linkcode UseAccessor} capability setting for getter behavior. This should be considered the default in your type implementation.
 */
export type AsGetter = UseAccessor<false>;

/**
 * Extracts the {@linkcode UseAccessor} capability from a given capability set, returning a default type if the {@linkcode UseAccessor} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseAccessor} capability setting.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseAccessor} capability is not present in the set.
 * @returns An object containing the {@linkcode UseAccessor} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickAccessor<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = PickCap<CapabilitySet, AccessorKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseAccessor} capability setting from a given capability set, returning a default type if the {@linkcode UseAccessor} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseAccessor} capability setting value.
 * @template DefaultSettingValue - The default type to return if the {@linkcode UseAccessor} capability is not present in the set.
 * @returns The type of the {@linkcode UseAccessor} capability if it exists in the set, otherwise returns the default type.
 */
export type GetAccessor<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean = false,
> = GetCap<CapabilitySet, AccessorKey, DefaultSetting>;
