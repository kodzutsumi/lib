import type { $UseOptional } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseOptional} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseOptional} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseOptional} value from.
 * @template Default - The default value to use if the {@linkcode $UseOptional} value is not present.
 * @returns The extracted {@linkcode $UseOptional} value.
 */
export type $GetOptional<Settings, Default extends boolean = false> =
  Settings extends $UseOptional<infer AsOptional> ? AsOptional
    : Default;

/**
 * Extracts the {@linkcode $UseOptional} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseOptional} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseOptional} setting from.
 * @template Default - The default value to use if the {@linkcode $UseOptional} setting is not present.
 * @returns The extracted {@linkcode $UseOptional} setting.
 */
export type $PickOptional<Settings, Default extends boolean = false> =
  $UseOptional<
    $GetOptional<Settings, Default>
  >;
