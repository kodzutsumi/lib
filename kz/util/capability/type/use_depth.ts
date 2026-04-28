// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCap } from './pick_cap.ts';
import type { GetThen } from './use_then.ts';
import type { GetElse } from './use_else.ts';
import type { ConditionOf, UseCondition } from './use_condition.ts';
import type { GetCap } from './get_cap.ts';
import type { CapSet } from './cap_set.ts';

/**
 * The string key used to identify the {@linkcode UseDepth} capability in a capability set.
 */
export declare const DepthKeyString = '@@UseDepth';

/**
 * The string key type used to identify the {@linkcode UseDepth} capability in a capability set.
 */
export type DepthKey = typeof DepthKeyString;

/**
 * The levels of depth that can be set with the {@linkcode UseDepth} capability.
 */
export type DepthLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type DepthGauge = [null, false, false, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Defines a capability, or sets a capability setting, for the depth of a type implementation.
 *
 * Use the `UseDepth` capability to specify the depth to be used in your type implementation.
 *
 * Without a capability setting provided, it defines a capability, indicating that a type supports a depth setting.
 * With a capability setting provided, it is the depth to be used in the type implementation.
 *
 * @template Depth - The depth to be used in the type implementation.
 * @returns An object type that includes the capability setting.
 */
export type UseDepth<
  Depth extends boolean | DepthLevel = boolean | DepthLevel,
> = {
  /**
   * The capability setting, which indicates the depth to be used in the type implementation.
   */
  [DepthKeyString]: Depth;
};

/**
 * A helper to define a {@linkcode UseDepth} capability to use the maximum depth {@link LevelOf}.
 *
 * @returns An object type that includes the capability setting.
 */
export type AsDeep = UseDepth<true>;

/**
 * Decrements the depth of a {@linkcode UseDepth} capability in a capability set by one level, or sets it to shallow if the depth is already at the minimum level.
 *
 * @template CapabilitySet - The capability set from which to decrement the depth.
 * @returns A new capability set with the depth decremented by one level, or set to shallow if the depth is already at the minimum level.
 */
export type DecrementDepth<CapabilitySet> = CapabilitySet extends
  UseDepth<infer Depth> ? Depth extends DepthLevel ?
      & UseDepth<Depth extends 1 ? false : DepthGauge[Depth]>
      & Omit<CapabilitySet, DepthKey>
  : Depth extends true ? LevelOf<9> & Omit<CapabilitySet, DepthKey>
  : AsShallow & Omit<CapabilitySet, DepthKey>
  : CapabilitySet;

/**
 * A helper to define a {@linkcode UseDepth} capability to use the minimum depth {@link LevelOf}.
 *
 * @returns An object type that includes the capability setting.
 */
export type AsShallow = UseDepth<false>;

/**
 * A helper to define a {@linkcode UseDepth} capability to use the specific depth level {@link LevelOf}.
 *
 * @template Depth - The depth level to be used.
 * @returns An object type that includes the capability setting.
 */
export type LevelOf<Depth extends DepthLevel> = UseDepth<Depth>;

/**
 * Extracts the {@linkcode UseDepth} capability from a given capability set, returning a default value if the {@linkcode UseDepth} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseDepth} capability setting.
 * @template DefaultSettingValue - The default value to return if the {@linkcode UseDepth} capability is not present in the set.
 * @returns An object containing the {@linkcode UseDepth} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type PickDepth<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean | DepthLevel = false,
> = PickCap<CapabilitySet, DepthKey, DefaultSetting>;

/**
 * Retrieves the {@linkcode UseDepth} capability setting from a given capability set, returning a default value if the {@linkcode UseDepth} capability is not present.
 *
 * @template CapabilitySet - The capability set from which to retrieve the {@linkcode UseDepth} capability setting value.
 * @template DefaultSettingValue - The default value to return if the {@linkcode UseDepth} capability is not present in the set.
 * @returns The value of the {@linkcode UseDepth} capability if it exists in the set, otherwise returns the default value.
 */
export type GetDepth<
  CapabilitySet extends CapSet,
  DefaultSetting extends boolean | DepthLevel = false,
> = GetCap<CapabilitySet, DepthKey, DefaultSetting>;

/**
 * Determines if a given capability set has a {@linkcode UseDepth} capability with a depth level greater than shallow, or if it is set to use the maximum depth.
 *
 * @template CapabilitySet - The capability set to check for the {@linkcode UseDepth} capability.
 * @template Capabilities - The condition capabilities to evaluate when determining if the depth is greater than shallow or set to maximum depth.
 * @returns The {@linkcode UseThen} type if the capability set has a {@linkcode UseDepth} capability with a depth level greater than shallow, or if it is set to use the maximum depth; otherwise, returns the {@linkcode UseElse} type.
 */
export type IsDeep<
  CapabilitySet extends CapSet,
  Capabilities extends UseCondition = ConditionOf<true, false>,
> = CapabilitySet extends AsDeep ? GetThen<Capabilities, true>
  : CapabilitySet extends LevelOf<infer Depth>
    ? Depth extends DepthLevel ? GetThen<Capabilities, true>
    : GetElse<Capabilities, false>
  : GetElse<Capabilities, false>;
