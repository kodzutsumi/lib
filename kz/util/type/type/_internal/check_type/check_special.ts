import type { IsSpecial } from '../is_special.ts';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { CheckOrdinary } from './check_ordinary.ts';

/**
 * Checks if the provided `Type` is a special type (e.g., `any`, `unknown`, `never`, etc.) using the `IsSpecial` type. If it is a special type, it performs a direct comparison between `Type` and `TargetType` to determine if they are exactly the same, returning `true` if they are, or `false` otherwise. If `Type` is not a special type, it delegates the check to the `CheckOrdinary` type, which performs a more comprehensive check based on the specified capabilities in the `Settings`.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false`.
 * @internal
 */
export type CheckSpecial<
  TargetType,
  Type,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = IsSpecial<Type> extends true
  ? [Type, TargetType] extends [TargetType, Type] ? true
  : CheckOrdinary<TargetType, Type, Settings>
  : CheckOrdinary<TargetType, Type, Settings>;
