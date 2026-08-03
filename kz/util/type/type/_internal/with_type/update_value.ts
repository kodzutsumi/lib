import type { $AsStrict, $AsUnified, $DefaultOf } from '@kz/util/capability';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';

/**
 * Updates a value in the `OfType` based on the specified `TargetType` and `Settings`. If the `TargetType` matches the type of `OfType`, it can update the value. The behavior of the update is determined by the `Settings`, which can specify whether to include or exclude certain properties based on their types. This type is designed to work with object types and will return a type exception if used with non-object types or array types.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type of the value being updated.
 * @template Settings - A combination of capabilities that determine the behavior of the update (default is `DefaultSettings`).
 * @returns The updated value based on the specified settings and capabilities, or a type exception if the operation is invalid for the given types.
 * @internal
 */
export type UpdateValue<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = Settings extends $DefaultOf<infer DefaultType>
  ? Settings extends $AsStrict
    ? OfType extends TargetType
      ? Settings extends $AsUnified ? Exclude<OfType, TargetType> & DefaultType
      : Exclude<OfType, TargetType> | DefaultType
    : Settings extends $AsUnified ? Exclude<OfType, TargetType> & DefaultType
    : Exclude<OfType, TargetType> | DefaultType
  : Settings extends $AsUnified ? Exclude<OfType, TargetType> & DefaultType
  : Exclude<OfType, TargetType> | DefaultType
  : Settings extends $AsStrict
    ? OfType extends TargetType
      ? Settings extends $AsUnified ? Exclude<OfType, TargetType> & TargetType
      : Exclude<OfType, TargetType> | TargetType
    : Settings extends $AsUnified ? Exclude<OfType, TargetType> & TargetType
    : Exclude<OfType, TargetType> | TargetType
  : Settings extends $AsUnified ? Exclude<OfType, TargetType> & TargetType
  : Exclude<OfType, TargetType> | TargetType;
