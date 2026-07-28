import type { AsExclude, AsUnified } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Retrieves a value from the `OfType` based on the specified `TargetType` and `Settings`. If the `TargetType` matches the type of `OfType`, it can retrieve the value. The behavior of the retrieval is determined by the `Settings`, which can specify whether to include or exclude certain properties based on their types. This type is designed to work with object types and will return a type exception if used with non-object types or array types.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type from which to retrieve the value.
 * @template Settings - A combination of capabilities that determine the behavior of the retrieval (default is `DefaultSettings`).
 * @returns The retrieved value based on the specified settings and capabilities, or a type exception if the operation is invalid for the given types.
 * @internal
 */
export type RetrieveValue<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends AsUnified
  ? [TargetType] extends [OfType]
    ? Settings extends AsExclude ? Exclude<OfType, TargetType>
    : Extract<OfType, TargetType>
  : OfType
  : Settings extends AsExclude ? Exclude<OfType, TargetType>
  : Extract<OfType, TargetType>;
