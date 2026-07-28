import type {
  AsDistributed,
  AsUnsafe,
  CapSet,
  UseOfType,
  UseSafe,
  UseLoose,
  UseUnified,
  AsStrict,
} from '@kz/util/capability';

/**
 * Capabilities for the implementations using the CheckType helper.
 *
 * - `UseLoose` - Determines direction of check
 *   - `AsStrict` (default) - Checks if `Type` is assignable to `TargetType`.
 *   - `AsLoose` - Checks if `TargetType` is assignable to `Type`.
 * - `UseSafe` - Determines whether to cast `boolean` results as `true` or retain the result.
 *   - `AsSafe` (default) - Retains the actual `boolean` result.
 *   - `AsUnsafe` - Casts `boolean` results as `true`, treating anything `true` as `true`.
 * - `UseUnified` - Determines distribution of check
 *   - `AsUnified` (default) - Test without distributing over unions.
 *   - `AsDistributed` - Distributes over unions in `TargetType` and `Type`.
 * @internal
 */
export type StandardCapabilities =
  | (
    | UseLoose
    | UseSafe
    | UseUnified
  )
  | UseOfType;

/**
 * The default settings for the CheckType helper, combining all default capabilities.
 *
 * - `AsStrict` - Checks if `Type` is assignable to `TargetType`.
 * - `AsSafe` - Retains the result of the check.
 * - `AsUnified` - Test without distributing over unions.
 * @internal
 */
export type StandardDefaultSettings =
  & AsDistributed
  & AsStrict
  & AsUnsafe;

export type PickStandardCapabilities<Settings extends CapSet> = Extract<Settings, StandardCapabilities> extends never
  ? StandardDefaultSettings
  : Extract<Settings, StandardCapabilities>;