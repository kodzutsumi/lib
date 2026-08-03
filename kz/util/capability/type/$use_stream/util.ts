import type { $UseStream } from './consumer.ts';

/**
 * Extracts the value of the {@linkcode $UseStream} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseStream} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseStream} value from.
 * @template Default - The default value to use if the {@linkcode $UseStream} value is not present.
 * @returns The extracted {@linkcode $UseStream} value.
 */
export type $GetStream<Settings, Default extends boolean = false> =
  Settings extends $UseStream<infer AsStream> ? AsStream
    : Default;

/**
 * Extracts the {@linkcode $UseStream} setting from a given capability set.
 *
 * If the provided `Settings` contains a {@linkcode $UseStream} capability, it extracts the setting. Otherwise, it
 * defaults to the provided `Default` value.
 *
 * @template Settings - The settings to extract the {@linkcode $UseStream} setting from.
 * @template Default - The default value to use if the {@linkcode $UseStream} setting is not present.
 * @returns The extracted {@linkcode $UseStream} setting.
 */
export type $PickStream<Settings, Default extends boolean = false> = $UseStream<
  $GetStream<Settings, Default>
>;
