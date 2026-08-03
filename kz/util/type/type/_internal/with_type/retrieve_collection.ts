import type { $CollectionTarget } from '@kz/util/capability';

import type { TypeException } from '../../type_exception.ts';

import type { StandardCapabilities, StandardDefaultSettings } from './types.ts';
import type { RetrieveKey } from './retrieve_key.ts';

/**
 * Retrieves a collection of keys, values, or entries from the `OfType` based on the specified `TargetType` and `Settings`. If the `TargetType` matches the type of a property in `OfType`, it can retrieve the key, value, or entry corresponding to that property. The behavior of the retrieval is determined by the `Settings`, which can specify whether to include or exclude certain properties based on their types. This type is designed to work with object types and will return a type exception if used with non-object types or array types.
 *
 * @template TargetType - The type to check against.
 * @template OfType - The type from which to retrieve the collection.
 * @template Target - The specific collection target being handled (e.g., 'keys', 'values', 'entries').
 * @template Settings - A combination of capabilities that determine the behavior of the retrieval (default is `DefaultSettings`).
 * @returns The retrieved collection based on the specified settings and capabilities, or a type exception if the operation is invalid for the given types.
 * @internal
 */
export type RetrieveCollection<
  TargetType,
  OfType,
  Target extends $CollectionTarget,
  Settings extends StandardCapabilities = StandardDefaultSettings,
> = OfType extends Record<PropertyKey, unknown> ? Target extends 'keys' ? {
      [K in keyof OfType]: RetrieveKey<TargetType, OfType, K, Settings>;
    }[keyof OfType]
  : Target extends 'values'
    ? OfType[RetrieveCollection<TargetType, OfType, 'keys', Settings>]
  : Pick<OfType, RetrieveCollection<TargetType, OfType, 'keys', Settings>>
  : OfType extends unknown[] ? TypeException<
      StandardCapabilities,
      '0x2'
    >
  : TypeException<
    StandardCapabilities,
    '0x3'
  >;
