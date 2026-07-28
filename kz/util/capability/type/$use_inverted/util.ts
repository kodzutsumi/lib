import type { $UseInverted } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseInverted} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseInverted} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseInverted} value from.
 * @template Default - The default value to use if the {@linkcode $UseInverted} value is not present.
 * @returns The extracted {@linkcode $UseInverted} value.
 */
export type $GetInverted<Settings, Default extends boolean = false> =
  Settings extends $UseInverted<infer AsInverted> ? AsInverted
    : Default;

/**
 * Extracts the {@linkcode $UseInverted} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseInverted} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseInverted} setting from.
 * @template Default - The default value to use if the {@linkcode $UseInverted} setting is not present.
 * @returns The extracted {@linkcode $UseInverted} setting.
 */
export type $PickInverted<Settings, Default extends boolean = false> =
  $UseInverted<$GetInverted<Settings, Default>>;
