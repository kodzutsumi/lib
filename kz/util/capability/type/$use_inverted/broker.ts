import type { $UseInverted } from './consumer.ts';

/**
 * The inverted behavior broker of the {@linkcode $UseInverted} capability.
 *
 * Use this setting to invoke the inverted behavior of a type that supports the {@linkcode $UseInverted} capability
 * consumer.
 *
 * @see {@linkcode $AsInitial} for the initial (default implied) behavior broker of this capability.
 */
export type $AsInverted = $UseInverted<true>;

/**
 * The initial (non-inverted) behavior broker of the {@linkcode $UseInverted} capability.
 *
 * Use this setting to invoke the initial (non-inverted) behavior of a type that supports the {@linkcode $UseInverted}
 * capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the {@linkcode $UseInverted} capability when the setting is
 * > not explicitly set to `true` or `false`.
 *
 * @see {@linkcode $AsInverted} for the inverted behavior broker of this capability.
 */
export type $AsInitial = $UseInverted<false>;
