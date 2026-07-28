import type { $UseThen } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode $UseThen} capability.
 *
 * Use this setting to specify the then (`true`) type for a type that supports
 * the {@linkcode $UseThen} capability consumer.
 *
 * @see {@linkcode $Else} for the related capability broker indicating the else (`false`) type for the related {@linkcode $UseElse} capability consumer.
 *
 * @template ThenType - The type setting for this capability broker.
 */
export type $Then<ThenType extends unknown = unknown> = $UseThen<ThenType>;
