// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { $AsCondition, AsExclude, UseExclusion } from '@kz/util/capability';
import type {
  If,
  LogicCapabilities,
} from '@kz/util/logic';

import type {
  CheckType,
  PickStandardCapabilities,
  StandardCapabilities,
  StandardDefaultSettings,
} from './_internal/check_type/mod.ts';

export type IsTypeCapabilities =
  | StandardCapabilities
  | LogicCapabilities;
export type IsTypeDefaultSettings = $AsCondition & StandardDefaultSettings;

/**
 * Determines if `Type` matches `TargetType` based on the specified `Settings`.
 *
 * The behavior of the check is determined by the capabilities included in `Settings`:
 * - If `AsStrict` is included, it checks if `Type` is assignable to `TargetType`.
 * - If `AsLoose` is included, it checks if `TargetType` is assignable to `Type`.
 * - If `AsSafe` is included, it retains the actual `boolean` result of the check.
 * - If `AsUnsafe` is included, it casts the result to `true` if the check not `false`.
 * - If `AsUnified` is included, it performs a non-distributive check.
 * - If `AsDistributed` is included, it distributes the check over unions in both `TargetType` and `Type`.
 * - If `$AsCondition` is included, it returns a conditional type instead of a boolean.
 * - If `UseStream` is included, it returns a stream of results for each member of a union.
 * - If `UseInversion` is included, it inverts the result of the check.
 * - If `UseDefault` is included, it allows specifying a default type to return when the check fails.
 *
 * @template Type - The type being checked.
 * @template TargetType - The type to check against.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns A boolean, conditional type, or stream of results based on the specified settings.
 */
export type IsType<
  TargetType,
  OfType,
  Settings extends IsTypeCapabilities = IsTypeDefaultSettings,
> = If<
  CheckType<TargetType, OfType, PickStandardCapabilities<Settings>>,
  Settings
>;
