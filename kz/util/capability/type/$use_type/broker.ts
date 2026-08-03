import type { $UseType } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode $UseType} capability.
 *
 * Use this setting to specify the "from type" for a type that supports the {@linkcode $UseType} capability consumer.

 * @template FromType - The type setting for this capability broker.
 */
export type $Type<FromType extends unknown = unknown> = $UseType<FromType>;
