import type { $UseSetter } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseSetter} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseSetter} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseSetter} value from.
 * @template Default - The default value to use if the {@linkcode $UseSetter} value is not present.
 * @returns The extracted {@linkcode $UseSetter} value.
 */
export type $GetSetter<Settings, Default extends boolean = false> =
  Settings extends $UseSetter<infer AsGetter> ? AsGetter
    : Default;

/**
 * Extracts the {@linkcode $UseSetter} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseSetter} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseSetter} setting from.
 * @template Default - The default value to use if the {@linkcode $UseSetter} setting is not present.
 * @returns The extracted {@linkcode $UseSetter} setting.
 */
export type $PickSetter<Settings, Default extends boolean = false> = $UseSetter<
  $GetSetter<Settings, Default>
>;
