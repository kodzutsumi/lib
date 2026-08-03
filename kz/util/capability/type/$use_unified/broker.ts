import type { $UseUnified } from './consumer.ts';

/**
 * The unified behavior broker of the {@linkcode $UseUnified} capability.
 *
 * Use this setting to invoke the unified behavior of a type that supports the
 * {@linkcode $UseUnified} capability consumer.
 *
 * @see {@linkcode $AsDistributed} for the distributed (default implied) behavior broker of this capability.
 */
export type $AsUnified = $UseUnified<true>;

/**
 * The distributed behavior broker of the {@linkcode $UseUnified} capability.
 *
 * Use this setting to invoke the distributed behavior of a type that supports the
 * {@linkcode $UseUnified} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseUnified} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsUnified} for the unified behavior broker of this capability.
 */
export type $AsDistributed = $UseUnified<false>;
