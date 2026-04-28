// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-empty-interface

import type { GetElse } from './use_else.ts';
import type { GetThen } from './use_then.ts';
import type { AsCondition, UseCondition } from './use_condition.ts';

/**
 * Defines an empty capability set, or a capability set with no capabilities.
 *
 * Use the `UseNullOption` capability to indicate that a type does not support any capabilities, to reset a capability set to an empty state, or to define no default capabilities for a type.
 */
export interface UseNullOption {}

/**
 * A helper to define a {@linkcode UseNullOption} capability.
 */
export type AsNullOption = UseNullOption;

type Capabilities = UseCondition;
type DefaultSettings = AsCondition;

/**
 * Determines whether a given type is a {@linkcode UseNullOption}, meaning it has no keys or no capabilities have been set.
 *
 * @template CapabilitySet - The {@linkcode CapSet} to check for being a {@linkcode UseNullOption}.
 * @template Settings - The condition capabilities to evaluate when determining if the set is a {@linkcode UseNullOption}.
 * @returns The {@linkcode UseThen} type if the capability set has a {@linkcode UseDepth} capability is a {@linkcode UseNullOption}, otherwise returns the {@linkcode UseElse} type.
 */
export type IsNullOption<
  CapabilitySet,
  Settings extends Capabilities = DefaultSettings,
> = [keyof CapabilitySet, never] extends [never, keyof CapabilitySet]
  ? GetThen<Settings, true>
  : GetElse<Settings, false>;
