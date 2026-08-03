import type { $UseOptional } from './consumer.ts';

/**
 * The optional behavior broker of the {@linkcode $UseOptional} capability.
 *
 * Use this setting to invoke the optional behavior of a type that supports the
 * {@linkcode $UseOptional} capability consumer.
 *
 * @see {@linkcode $AsRequired} for the required (default implied) behavior broker of this capability.
 */
export type $AsOptional = $UseOptional<true>;

/**
 * The required behavior broker of the {@linkcode $UseOptional} capability.
 *
 * Use this setting to invoke the required behavior of a type that supports the
 * {@linkcode $UseOptional} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseOptional} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsOptional} for the optional behavior broker of this capability.
 */
export type $AsRequired = $UseOptional<false>;
