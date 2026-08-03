import type { $UseExcluded } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseExcluded} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseExcluded} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseExcluded} value from.
 * @template Default - The default value to use if the {@linkcode $UseExcluded} value is not present.
 * @returns The extracted {@linkcode $UseExcluded} value.
 */
export type $GetExcluded<Settings, Default extends boolean = false> =
  Settings extends $UseExcluded<infer AsExcluded> ? AsExcluded
    : Default;

/**
 * Extracts the {@linkcode $UseExcluded} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseExcluded} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseExcluded} setting from.
 * @template Default - The default value to use if the {@linkcode $UseExcluded} setting is not present.
 * @returns The extracted {@linkcode $UseExcluded} setting.
 */
export type $PickExcluded<Settings, Default extends boolean = false> =
  $UseExcluded<
    $GetExcluded<Settings, Default>
  >;
