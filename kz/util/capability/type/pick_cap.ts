// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { CapSet, CapSetKeys, FullCapSet } from './cap_set.ts';

/**
 * Extracts a specific capability from a given set of capabilities, returning a default type if the specified capability is not present.
 * ## Capabilities
 * All capabilities are supported, but only the capability settings {@linkcode Then} and {@linkcode Else} are resolved.
 *
 * @template CapabilitySet - The set of capabilities from which to extract the specific capability.
 * @template Capability - The key of the capability to extract.
 * @template DefaultSetting - The default type to return if the specified capability is not present in the set.
 * @returns An object containing the specified capability if it exists in the set, otherwise an object containing the default type.
 */
export type PickCap<
  CapabilitySet extends CapSet,
  Capability extends CapSetKeys,
  DefaultSetting extends FullCapSet[Capability],
> = Capability extends keyof CapabilitySet
  ? { [K in Capability]: CapabilitySet[Capability] }
  : { [K in Capability]: DefaultSetting };
