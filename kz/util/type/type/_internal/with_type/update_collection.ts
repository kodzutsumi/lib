import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { UpdateValue } from './update_value.ts';

/**
 * Updates a collection of keys, values, or entries in the `OfType` based on the specified `TargetType` and `Settings`. If the `TargetType` matches the type of a property in `OfType`, it can update the key, value, or entry corresponding to that property. The behavior of the update is determined by the `Settings`, which can specify whether to include or exclude certain properties based on their types. This type is designed to work with object types and will return a type exception if used with non-object types or array types.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type of the collection being updated.
 * @template Settings - A combination of capabilities that determine the behavior of the update (default is `DefaultSettings`).
 * @returns The updated collection based on the specified settings and capabilities, or a type exception if the operation is invalid for the given types.
 * @internal
 */
export type UpdateCollection<
  TargetType,
  OfType,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = {
  [K in keyof OfType]: UpdateValue<TargetType, OfType[K], Settings>;
};
