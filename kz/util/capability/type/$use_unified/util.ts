import type { $UseUnified } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseUnified} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseUnified} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseUnified} value from.
 * @template Default - The default value to use if the {@linkcode $UseUnified} value is not present.
 * @returns The extracted {@linkcode $UseUnified} value.
 */
export type $GetUnified<Settings, Default extends boolean = false> =
  Settings extends $UseUnified<infer AsUnified> ? AsUnified
    : Default;

/**
 * Extracts the {@linkcode $UseUnified} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseUnified} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseUnified} setting from.
 * @template Default - The default value to use if the {@linkcode $UseUnified} setting is not present.
 * @returns The extracted {@linkcode $UseUnified} setting.
 */
export type $PickUnified<Settings, Default extends boolean = false> =
  $UseUnified<
    $GetUnified<Settings, Default>
  >;
