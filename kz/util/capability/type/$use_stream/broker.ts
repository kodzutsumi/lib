import type { $UseStream } from './consumer.ts';

/**
 * The stream behavior broker of the {@linkcode $UseStream} capability.
 *
 * Use this setting to invoke the stream behavior of a type that supports the
 * {@linkcode $UseStream} capability consumer.
 *
 * @see {@linkcode $AsPredicate} for the predicate (default implied) behavior broker of this capability.
 */
export type $AsStream = $UseStream<true>;

/**
 * The predicate behavior broker of the {@linkcode $UseStream} capability.
 *
 * Use this setting to invoke the predicate behavior of a type that supports the
 * {@linkcode $UseStream} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseStream} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsStream} for the stream behavior broker of this capability.
 */
export type $AsPredicate = $UseStream<false>;
