import type {
  $AsDistributed,
  $UseOf,
  $UseUnsafe,
  $UseUnified,
  $AsSafe,
  $UseReversed,
  $AsForward,
} from '@kz/util/capability';

/**
 * Capabilities for the implementations using the CheckType helper.
 *
 * - `$UseStrict` - Determines direction of check
 *   - `$AsStrict` (default) - Checks if `Type` is assignable to `TargetType`.
 *   - `$AsLoose` - Checks if `TargetType` is assignable to `Type`.
 * - `$UseUnsafe` - Determines whether to cast `boolean` results as `true` or retain the result.
 *   - `$AsSafe` (default) - Retains the actual `boolean` result.
 *   - `$AsUnsafe` - Casts `boolean` results as `true`, treating anything `true` as `true`.
 * - `$UseUnified` - Determines distribution of check
 *   - `$AsUnified` (default) - Test without distributing over unions.
 *   - `$AsDistributed` - Distributes over unions in `TargetType` and `Type`.
 * @internal
 */
export type StandardCapabilities =
  | (
    | $UseReversed
    | $UseUnsafe
    | $UseUnified
  )
  | $UseOf;

/**
 * The default settings for the CheckType helper, combining all default capabilities.
 *
 * - `$AsStrict` - Checks if `Type` is assignable to `TargetType`.
 * - `$AsSafe` - Retains the result of the check.
 * - `$AsUnified` - Test without distributing over unions.
 * @internal
 */
export type StandardDefaultSettings =
  & $AsDistributed
  & $AsForward
  & $AsSafe;

