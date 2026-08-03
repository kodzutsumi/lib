import type { $UseOf } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode $UseOf} capability.
 *
 * Use this setting to specify the "of type" for a type that supports the {@linkcode $UseOf} capability consumer.
 *
 * @template OfType - The type setting for this capability broker.
 */
export type $Of<OfType extends unknown = unknown> = $UseOf<OfType>;
