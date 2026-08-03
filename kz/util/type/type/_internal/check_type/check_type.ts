import type { _ApplySafety } from './_apply_safety.ts';
import type { _HandleTypeCheck } from './_handle_type_check.ts';
import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Checks if `Type` matches `TargetType` based on the specified `Settings`.
 *
 * The behavior of the check is determined by the capabilities included in `Settings`:
 * - If `AsStrict` is included, it checks if `Type` is assignable to `TargetType`.
 * - If `AsLoose` is included, it checks if `TargetType` is assignable to `Type`.
 * - If `AsSafe` is included, it retains the actual `boolean` result of the check.
 * - If `AsUnsafe` is included, it casts the result to `true` if the check not `false`.
 * - If `AsUnified` is included, it performs a non-distributive check.
 * - If `AsDistributed` is included, it distributes the check over unions in both `TargetType` and `Type`.
 *
 * Additionally, if either `TargetType` or `Type` is a special type (like `any`, `never`, etc.), it applies specific logic to handle those cases, ensuring that the check behaves predictably even with edge cases.
 *
 * @template TargetType - The type to check against.
 * @template Type - The type being checked.
 * @template Settings - A combination of capabilities that determine the behavior of the check (default is `DefaultSettings`).
 * @returns `true` if the check passes based on the specified settings, otherwise `false` or a boolean result depending on safety settings.
 * @internal
 */
export type CheckType<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = _ApplySafety<_HandleTypeCheck<TargetType, OfType, Settings>, Settings>;
