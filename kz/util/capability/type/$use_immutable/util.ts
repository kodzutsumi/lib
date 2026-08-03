import type { $UseImmutable } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseImmutable} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseImmutable} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseImmutable} value from.
 * @template Default - The default value to use if the {@linkcode $UseImmutable} value is not present.
 * @returns The extracted {@linkcode $UseImmutable} value.
 */
export type $GetImmutable<Settings, Default extends boolean = false> =
  Settings extends $UseImmutable<infer AsImmutable> ? AsImmutable
    : Default;

/**
 * Extracts the {@linkcode $UseImmutable} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseImmutable} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseImmutable} setting from.
 * @template Default - The default value to use if the {@linkcode $UseImmutable} setting is not present.
 * @returns The extracted {@linkcode $UseImmutable} setting.
 */
export type $PickImmutable<Settings, Default extends boolean = false> =
  $UseImmutable<
    $GetImmutable<Settings, Default>
  >;
