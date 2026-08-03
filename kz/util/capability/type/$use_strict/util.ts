import type { $UseStrict } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseStrict} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseStrict} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseStrict} value from.
 * @template Default - The default value to use if the {@linkcode $UseStrict} value is not present.
 * @returns The extracted {@linkcode $UseStrict} value.
 */
export type $GetStrict<Settings, Default extends boolean = false> =
  Settings extends $UseStrict<infer AsStrict> ? AsStrict
    : Default;

/**
 * Extracts the {@linkcode $UseStrict} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseStrict} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseStrict} setting from.
 * @template Default - The default value to use if the {@linkcode $UseStrict} setting is not present.
 * @returns The extracted {@linkcode $UseStrict} setting.
 */
export type $PickStrict<Settings, Default extends boolean = false> = $UseStrict<
  $GetStrict<Settings, Default>
>;
