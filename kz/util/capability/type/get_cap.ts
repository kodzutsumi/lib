// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type { PickCap } from './pick_cap.ts';
import type { CapSet, CapSetKeys, FullCapSet } from './cap_set.ts';

/**
 * Retrieves the type of a specific capability from a given set of capabilities, returning a default type if the capability is not present.
 * ## Capabilities
 * All capabilities are supported, but only the capability settings {@linkcode Then} and {@linkcode Else} are resolved.
 *
 * @template CapabilitySet - The set of capabilities from which to retrieve the specific capability.
 * @template Capability - The key of the capability to retrieve.
 * @template DefaultSetting - The default type to return if the specified capability is not present in the set.
 * @returns The type of the specified capability if it exists in the set, otherwise returns the default type.
 */
export type GetCap<
  CapabilitySet extends CapSet,
  Capability extends CapSetKeys,
  DefaultSetting extends FullCapSet[Capability],
> = PickCap<CapabilitySet, Capability, DefaultSetting> extends infer PickedCap
  ? PickedCap extends Record<Capability, infer Type> ? Type
  : DefaultSetting
  : DefaultSetting;
