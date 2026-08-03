import type { $UseDefault } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode $UseDefault} capability.
 *
 * Use this setting to specify the default type for a type that supports the {@linkcode $UseDefault} capability consumer.
 *
 * @template DefaultType - The type setting for this capability broker.
 */
export type $DefaultOf<DefaultType extends unknown = unknown> = $UseDefault<
  DefaultType
>;
