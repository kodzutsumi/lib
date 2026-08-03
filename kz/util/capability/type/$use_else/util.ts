import type { $UseElse } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseElse} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseElse} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseElse} value from.
 * @template Default - The default value to use if the {@linkcode $UseElse} value is not present.
 * @returns The extracted {@linkcode $UseElse} value.
 */
export type $GetElse<Settings, Default extends unknown = unknown> =
  Settings extends $UseElse<infer ElseType> ? ElseType
    : Default;

/**
 * Extracts the {@linkcode $UseElse} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseElse} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseElse} setting from.
 * @template Default - The default value to use if the {@linkcode $UseElse} setting is not present.
 * @returns The extracted {@linkcode $UseElse} setting.
 */
export type $PickElse<Settings, Default extends unknown = unknown> = $UseElse<
  $GetElse<Settings, Default>
>;
