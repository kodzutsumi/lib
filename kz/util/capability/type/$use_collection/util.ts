import type { $CollectionTarget, $UseCollection } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseCollection} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseCollection} capability, it extracts the value. Otherwise, it defaults
 * to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseCollection} value from.
 * @template Default - The default value to use if the {@linkcode $UseCollection} value is not present.
 * @returns The extracted {@linkcode $UseCollection} value.
 */
export type $GetCollection<
  Settings,
  Default extends $CollectionTarget = 'entries',
> = Settings extends $UseCollection<infer ElseType> ? ElseType
  : Default;

/**
 * Extracts the {@linkcode $UseCollection} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseCollection} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseCollection} setting from.
 * @template Default - The default value to use if the {@linkcode $UseCollection} setting is not present.
 * @returns The extracted {@linkcode $UseCollection} setting.
 */
export type $PickCollection<
  Settings,
  Default extends $CollectionTarget = 'entries',
> = $UseCollection<
  $GetCollection<Settings, Default>
>;
