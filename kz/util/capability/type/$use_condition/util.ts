import type { $PickElse } from '../$use_else/mod.ts';
import type { $PickThen } from '../$use_then/mod.ts';

/**
 * Extracts the {@linkcode $UseThen} and {@linkcode $UseElse} settings from a given capability set into an intersection.
 *
 * If the provided `Settings` contains a {@linkcode $UseThen} capability, it extracts the setting. Otherwise, it defaults
 * to {@linkcode $Then | $Then<unknown>}.
 *
 * If the provided `Settings` contains a {@linkcode $UseElse} capability, it extracts the setting. Otherwise, it defaults
 * to {@linkcode $Else | $Else<unknown>}.
 *
 * @template Settings - The settings to extract the {@linkcode $UseThen} and {@linkcode $UseElse} settings from.
 * @returns The extracted {@linkcode $UseThen} and {@linkcode $UseElse} settings.
 */
export type $PickCondition<Settings> =
  & $PickThen<Settings>
  & $PickElse<Settings>;
