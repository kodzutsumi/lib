import type { $UseReversed } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseReversed} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseReversed} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseReversed} value from.
 * @template Default - The default value to use if the {@linkcode $UseReversed} value is not present.
 * @returns The extracted {@linkcode $UseReversed} value.
 */
export type $GetReversed<Settings, Default extends boolean = false> =
  Settings extends $UseReversed<infer AsReversed> ? AsReversed
    : Default;

/**
 * Extracts the {@linkcode $UseReversed} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseReversed} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseReversed} setting from.
 * @template Default - The default value to use if the {@linkcode $UseReversed} setting is not present.
 * @returns The extracted {@linkcode $UseReversed} setting.
 */
export type $PickReversed<Settings, Default extends boolean = false> =
  $UseReversed<$GetReversed<Settings, Default>>;
