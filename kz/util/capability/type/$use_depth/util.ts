import type { $AsDeep, $AsShallow, $Level } from './broker.ts';
import type { $UseDepthKey } from './constant.ts';
import type { $DepthValue, $UseDepth } from './consumer.ts';
import type { $AsCondition, $UseCondition } from '../$use_condition/mod.ts';
import type { $GetThen } from '../$use_then/mod.ts';
import type { $GetElse } from '../$use_else/mod.ts';

/**
 * Extracts the value of the {@linkcode $UseDepth} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseDepth} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseDepth} value from.
 * @template Default - The default value to use if the {@linkcode $UseDepth} value is not present.
 * @returns The extracted {@linkcode $UseDepth} value.
 */
export type $GetDepth<Settings, Default extends $DepthValue = false> =
  Settings extends $UseDepth<infer ElseType> ? ElseType
    : Default;

/**
 * Extracts the {@linkcode $UseDepth} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseDepth} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseDepth} setting from.
 * @template Default - The default value to use if the {@linkcode $UseDepth} setting is not present.
 * @returns The extracted {@linkcode $UseDepth} setting.
 */
export type $PickDepth<Settings, Default extends $DepthValue = false> =
  $UseDepth<
    $GetDepth<Settings, Default>
  >;

/**
 * Determines if a given capability set has a {@linkcode $UseDepth} capability with a depth level greater than shallow, or if it is set to use the maximum depth.
 *
 * @template CapabilitySet - The capability set to check for the {@linkcode $UseDepth} capability.
 * @template Settings - The condition settings to evaluate when determining if the depth is greater than shallow or set to maximum depth.
 * @returns The {@linkcode $GetThen} type if the capability set has a {@linkcode $UseDepth} capability with a depth level greater than shallow, or if it is set to use the maximum depth; otherwise, returns the {@linkcode $GetElse} type.
 */
export type $IsDeep<
  CapabilitySet,
  Settings extends $UseCondition = $AsCondition,
> = CapabilitySet extends $AsDeep ? $GetThen<Settings, true>
  : CapabilitySet extends $Level<infer Depth>
    ? Depth extends $DepthValue ? $GetThen<Settings, true>
    : $GetElse<Settings, false>
  : $GetElse<Settings, false>;

type DepthGauge = [null, false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Decrements the depth level of a given capability set that has a {@linkcode $UseDepth} capability, returning a default value if the {@linkcode $UseDepth} capability is not present.
 *
 * @template Settings - The capability set to decrement the {@linkcode $UseDepth} capability.
 * @returns Settings containing the decremented {@linkcode $UseDepth} capability setting if it exists in the set, otherwise an object containing the default setting.
 */
export type $DecrementDepth<Settings> = Settings extends $AsDeep
  ? $UseDepth<9> & Omit<Settings, $UseDepthKey>
  : Settings extends $AsShallow ? Settings
  : Settings extends $Level<infer Depth> ?
      & $UseDepth<Depth extends 1 ? false : DepthGauge[Depth]>
      & Omit<Settings, $UseDepthKey>
  : $AsShallow & Omit<Settings, $UseDepthKey>;
