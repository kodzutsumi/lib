import type { $UseThen } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseThen} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseThen} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseThen} value from.
 * @template Default - The default value to use if the {@linkcode $UseThen} value is not present.
 * @returns The extracted {@linkcode $UseThen} value.
 */
export type $GetThen<Settings, Default extends unknown = unknown> =
  Settings extends $UseThen<infer ThenType> ? ThenType
    : Default;

/**
 * Extracts the {@linkcode $UseThen} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseThen} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseThen} setting from.
 * @template Default - The default value to use if the {@linkcode $UseThen} setting is not present.
 * @returns The extracted {@linkcode $UseThen} setting.
 */
export type $PickThen<Settings, Default extends unknown = unknown> = $UseThen<
  $GetThen<Settings, Default>
>;
