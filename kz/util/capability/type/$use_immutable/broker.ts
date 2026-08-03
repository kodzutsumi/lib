import type { $UseImmutable } from './consumer.ts';

/**
 * The immutable behavior broker of the {@linkcode $UseImmutable} capability.
 *
 * Use this setting to invoke the immutable behavior of a type that supports the
 * {@linkcode $UseImmutable} capability consumer.
 *
 * @see {@linkcode $AsMutable} for the mutable (default implied) behavior broker of this capability.
 */
export type $AsImmutable = $UseImmutable<true>;

/**
 * The mutable behavior broker of the {@linkcode $UseImmutable} capability.

 * Use this setting to invoke the mutable behavior of a type that supports the
 * {@linkcode $UseImmutable} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseImmutable} capability when the setting is not explicitly set to
 * > `true` or `false`.
 *
 * @see {@linkcode $AsImmutable} for the immutable behavior broker of this capability.
 */
export type $AsMutable = $UseImmutable<false>;
