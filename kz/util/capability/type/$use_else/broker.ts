import type { $UseElse } from './consumer.ts';

/**
 * The behavior broker of the {@linkcode $UseElse} capability.
 *
 * Use this setting to specify the else (`false`) type for a type that supports the {@linkcode $UseElse} capability consumer.
 *
 * @see {@linkcode Then} for the related capability broker indicating the then (`true`) type for the related
 * {@linkcode UseTrue} capability consumer.
 *
 * @template ElseType - The type setting for this capability broker.
 */
export type $Else<ElseType extends unknown = unknown> = $UseElse<ElseType>;
