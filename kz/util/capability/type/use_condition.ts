// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { Any } from '@kz/util/type';

import type { GetThen, Then, UseThen } from './use_then.ts';
import type { Else, GetElse, UseElse } from './use_else.ts';
import type { AsSafe, AsUnsafe, UseSafe } from './use_safe.ts';
import type { CapSet } from './cap_set.ts';

type AcceptAnyType = Any<'#i11n:utilities:all_types'>;
type Capabilities = UseSafe;
type DefaultSettings = AsSafe;

/**
 * A helper to define a {@linkcode UseThen} and {@linkcode UseElse} capability set.
 * # Capabilities
 * - {@linkcode UseSafe}
 * ## Defaults
 * | Capability | Default Setting |
 * |------------|-----------------|
 * | {@linkcode UseSafe} | {@linkcode AsSafe} |
 * ## Behavior
 * ### Strictness
 * #### Settings
 * | Activates  | Option | Default | Description |
 * |------------|--------|---------|-------------|
 * | | {@linkcode UseSafe} | {@linkcode AsSafe} | Determines whether the condition is evaluated strictly or loosely. |
 * #### Behavior matrix
 * | {@linkcode UseSafe} | Evaluation Behavior |
 * |-----------------------|---------------------|
 * | {@linkcode AsSafe} (default) | The resulting type is a union of the {@linkcode UseThen} and {@linkcode UseElse} capabilities. |
 * | {@linkcode AsUnsafe} | The resulting type is an intersection of the {@linkcode UseThen} and {@linkcode UseElse} capabilities. |
 *
 * @see {@linkcode UseThen} for the then branch of conditional behavior.
 * @see {@linkcode UseElse} for the else branch of conditional behavior.
 * @template Settings - The capability settings that determine how the condition is evaluated, defaulting to {@linkcode AsSafe}.
 * @returns A union or intersection of {@linkcode UseThen} and {@linkcode UseElse} based on the provided settings.
 */
export type UseCondition<
  Settings extends Capabilities = DefaultSettings,
> = Settings extends AsUnsafe ? UseThen & UseElse
  : UseThen | UseElse;

/**
 * A helper to define a {@linkcode UseThen} and {@linkcode UseElse} capability with {@linkcode AsUnsafe} behavior.
 * ## Behavior
 * ### Default
 * #### Examples
 * @example 4
 * @example 5
 * @returns A {@linkcode UseCondition} with the {@linkcode AsUnsafe} capability setting.
 */
export type UseSafeCondition = UseCondition<AsUnsafe>;

/**
 * A helper to define the {@linkcode Then} and {@linkcode Else} capability settings with specified types.
 *
 * @template ThenType - The type of the {@linkcode Then} capability setting.
 * @template ElseType - The type of the {@linkcode Else} capability setting.
 * @returns A {@linkcode Then} and {@linkcode Else} capability set with the specified types.
 */
export type ConditionOf<
  ThenType extends AcceptAnyType,
  ElseType extends AcceptAnyType,
> = Then<ThenType> & Else<ElseType>;

/**
 * A helper to define a {@linkcode UseThen} and {@linkcode UseElse} capability with standard respective `true`/`false` capability settings.
 * ## Behavior
 * ### Default
 * #### Examples
 * @example 6
 * @example 7
 * @returns A {@linkcode Then} and {@linkcode Else} capability set with `true` and `false` settings, respectively.
 */
export type AsCondition = ConditionOf<true, false>;

/**
 * Extracts the {@linkcode UseThen} and {@linkcode UseElse} capabilities from a given capability set, returning default types if the capabilities are not present.
 *
 * @template CapabilitySet - The capability set from which to extract the {@linkcode UseThen} and {@linkcode UseElse} capability settings.
 * @template DefaultThen - The default type to return if the {@linkcode UseThen} capability is not present in the set.
 * @template DefaultElse - The default type to return if the {@linkcode UseElse} capability is not present in the set.
 * @returns An object containing the {@linkcode UseThen} and {@linkcode UseElse} capability settings if they exist in the set, otherwise an object containing the default settings.
 */
export type PickCondition<
  CapabilitySet extends CapSet,
  DefaultThen extends AcceptAnyType = true,
  DefaultElse extends AcceptAnyType = false,
> = ConditionOf<
  GetThen<CapabilitySet, DefaultThen>,
  GetElse<CapabilitySet, DefaultElse>
>;
