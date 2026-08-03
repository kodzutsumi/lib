import type { $UseDefault } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseDefault} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseDefault} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseDefault} value from.
 * @template Default - The default value to use if the {@linkcode $UseDefault} value is not present.
 * @returns The extracted {@linkcode $UseDefault} value.
 */
export type $GetDefault<Settings, Default extends unknown = unknown> =
  Settings extends $UseDefault<infer DefaultType> ? DefaultType
    : Default;

/**
 * Extracts the {@linkcode $UseDefault} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseDefault} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseDefault} setting from.
 * @template Default - The default value to use if the {@linkcode $UseDefault} setting is not present.
 * @returns The extracted {@linkcode $UseDefault} setting.
 */
export type $PickDefault<Settings, Default extends unknown = unknown> =
  $UseDefault<
    $GetDefault<Settings, Default>
  >;
