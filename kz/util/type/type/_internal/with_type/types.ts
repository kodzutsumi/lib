import type {
  AsNullOption,
  UseAccessor,
  UseCollection,
  UseDefault,
  UseExclusion,
  UseNullOption,
  UseOfType,
  UseStrict,
  UseUnified,
} from '@kz/util/capability';

/**
 * Capabilities for the implementations using the ModifyType helper.
 *
 * - `UseAccessor` - Determines whether the behavior is to modify `Type` or retrieve a result from `Type`.
 *   - `AsSetter` - Performs modifications to `Type`.
 *   - `AsGetter` - Retrieves a result from `Type` without modifying it.
 * - `UseCollection` - Determines when and how to handle collections in `Type`.
 *   - `AsCollection` - Treats collections in `Type` as a single unit for modification or retrieval.
 *   - `AsIdents` - Focuses on the keys of collections in `Type` for modification or retrieval.
 *   - `AsValues` - Focuses on the values of collections in `Type` for modification or retrieval.
 * - `UseDefault` - Used in replacing `TargetType` in `Type`.
 * - `UseExclusion` - Determines whether to use exclusive or inclusive behavior.
 *   - `AsInclude` (implied) - In collections focuses on matched keys or values, otherwise extracts `TargetType` from `Type`.
 *   - `AsExclude` - In collections focuses on unmatched keys or values, otherwise removes `TargetType` from `Type`.
 * - `UseOfType` - Defines the `Type` that is being modified or retrieved from.
 * - `UseUnified` - Determines distribution of modification or retrieval.
 *   - `AsUnified` (implied) - Modifies or retrieves without distributing over unions.
 *   - `AsDistributed` - Distributes over unions in `Type`.
 * - `UseStrict` - Determines direction of checks between `Type` and `TargetType`.
 *   - `AsStrict` (implied) - Checks if `Type` is assignable to `TargetType`.
 *   - `AsLoose` - Checks if `TargetType` is assignable to `Type`.
 * - `UseNullOption` - Specifies that this type does accept no capabilities and has no default capabilities.
 * @internal
 */
export type StandardCapabilities =
  | UseAccessor
  | UseCollection
  | UseDefault
  | UseExclusion
  | UseOfType
  | UseUnified
  | UseStrict
  | UseNullOption;

/**
 * The default settings for the ModifyType helper, combining all default capabilities.
 *
 * There is no default capability defined.
 * @internal
 */
export type StandardDefaultSettings = AsNullOption;
