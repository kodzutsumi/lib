import type { $UseType } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseType} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseType} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseType} value from.
 * @template Default - The default value to use if the {@linkcode $UseType} value is not present.
 * @returns The extracted {@linkcode $UseType} value.
 */
export type $GetType<Settings, Default extends unknown = unknown> =
  Settings extends $UseType<infer FromType> ? FromType
    : Default;

/**
 * Extracts the {@linkcode $UseType} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseType} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseType} setting from.
 * @template Default - The default value to use if the {@linkcode $UseType} setting is not present.
 * @returns The extracted {@linkcode $UseType} setting.
 */
export type $PickType<Settings, Default extends unknown = unknown> = $UseType<
  $GetType<Settings, Default>
>;
