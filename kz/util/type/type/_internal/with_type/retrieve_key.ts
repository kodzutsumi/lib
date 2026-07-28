import type { AsExclude, AsLoose, AsUnified } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Retrieves a key from the `OfType` based on the specified `TargetType` and `Settings`. If the type of the property corresponding to the key in `OfType` matches the `TargetType`, it can retrieve the key. The behavior of the retrieval is determined by the `Settings`, which can specify whether to include or exclude certain properties based on their types. This type is designed to work with object types and will return a type exception if used with non-object types or array types.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type from which to retrieve the key.
 * @template Key - The specific key being handled.
 * @template Settings - A combination of capabilities that determine the behavior of the retrieval (default is `DefaultSettings`).
 * @returns The retrieved key based on the specified settings and capabilities, or a type exception if the operation is invalid for the given types.
 * @internal
 */
export type RetrieveKey<
  TargetType,
  OfType,
  Key extends keyof OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends AsExclude
  ? Settings extends AsUnified
    ? Settings extends AsLoose ? [TargetType] extends [OfType[Key]] ? never
      : Key
    : [OfType[Key]] extends [TargetType] ? never
    : Key
  : OfType[Key] extends TargetType ? never
  : Key
  : Settings extends AsUnified
    ? Settings extends AsLoose ? [TargetType] extends [OfType[Key]] ? Key
      : never
    : [OfType[Key]] extends [TargetType] ? Key
    : never
  : Settings extends AsLoose ? TargetType extends OfType[Key] ? Key
    : never
  : OfType[Key] extends TargetType ? Key
  : never;
