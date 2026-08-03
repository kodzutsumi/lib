import type { $UseOf } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseOf} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseOf} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseOf} value from.
 * @template Default - The default value to use if the {@linkcode $UseOf} value is not present.
 * @returns The extracted {@linkcode $UseOf} value.
 */
export type $GetOf<Settings, Default extends unknown = unknown> =
  Settings extends $UseOf<infer OfType> ? OfType
    : Default;

/**
 * Extracts the {@linkcode $UseOf} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseOf} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseOf} setting from.
 * @template Default - The default value to use if the {@linkcode $UseOf} setting is not present.
 * @returns The extracted {@linkcode $UseOf} setting.
 */
export type $PickOf<Settings, Default extends unknown = unknown> = $UseOf<
  $GetOf<Settings, Default>
>;
