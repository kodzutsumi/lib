import type { $UseUnsafe } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseUnsafe} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseUnsafe} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseUnsafe} value from.
 * @template Default - The default value to use if the {@linkcode $UseUnsafe} value is not present.
 * @returns The extracted {@linkcode $UseUnsafe} value.
 */
export type $GetUnsafe<Settings, Default extends boolean = false> =
  Settings extends $UseUnsafe<infer AsUnsafe> ? AsUnsafe
    : Default;

/**
 * Extracts the {@linkcode $UseUnsafe} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseUnsafe} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseUnsafe} setting from.
 * @template Default - The default value to use if the {@linkcode $UseUnsafe} setting is not present.
 * @returns The extracted {@linkcode $UseUnsafe} setting.
 */
export type $PickUnsafe<Settings, Default extends boolean = false> = $UseUnsafe<
  $GetUnsafe<Settings, Default>
>;
