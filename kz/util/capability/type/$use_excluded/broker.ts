import type { $UseExcluded } from './consumer.ts';

/**
 * The excluded behavior broker of the {@linkcode $UseExcluded} capability.
 *
 * Use this setting to invoke the excluded behavior of a type that supports the
 * {@linkcode $UseExcluded} capability consumer.
 *
 * @see {@linkcode $AsIncluded} for the included (default implied) behavior broker of this capability.
 */
export type $AsExcluded = $UseExcluded<true>;

/**
 * The included behavior broker of the {@linkcode $UseExcluded} capability.
 *
 * Use this setting to invoke the included behavior of a type that supports the
 * {@linkcode $UseExcluded} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseExcluded} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsExcluded} for the excluded behavior broker of this capability.
 */
export type $AsIncluded = $UseExcluded<false>;
