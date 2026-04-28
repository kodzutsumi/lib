// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 1st degree of a polynomial.
 *
 * @template El1 - The type of the only element.
 *
 * @see {@link Single}
 * @see {@link Unary}
 * @see {@link Monadic}
 * @see {@link Singleton}
 *
 * @see {@link Constant}
 * @see {@link Quadratic}
 * @see {@link Cubic}
 * @see {@link Quartic}
 * @see {@link Quintic}
 * @see {@link Sextic}
 * @see {@link Septic}
 * @see {@link Octic}
 * @see {@link Nonic}
 * @see {@link Decic}
 * @see {@linkcode Undecadic}
 * @see {@linkcode Dodecadic}
 *
 * @since 0.0.1
 */
export type Linear<Type> = [Type];

/**
 * A tuple containing only one element.
 *
 * @template El1 - The type of the only element.
 *
 * @see {@link Linear}
 * @see {@link Unary}
 * @see {@link Monadic}
 * @see {@link Singleton}
 *
 * @see {@link Couple}
 * @see {@link Triple}
 * @see {@link Quadruple}
 * @see {@link Quintuple}
 * @see {@link Sextuple}
 * @see {@link Septuple}
 * @see {@link Octuple}
 * @see {@link Nonuple}
 * @see {@link Decuple}
 *
 * @since 0.0.1
 */
export type Single<Type> = Linear<Type>;

/**
 * A tuple containing only one element.
 *
 * @template El1 - The type of the only element.
 *
 * @see {@link Linear}
 * @see {@link Single}
 * @see {@link Monadic}
 * @see {@link Singleton}
 *
 * @see {@link Binary}
 * @see {@link Ternary}
 * @see {@link Quaternary}
 * @see {@link Quinary}
 * @see {@link Senary}
 * @see {@link Septenary}
 * @see {@link Octonary}
 * @see {@link Novenary}
 * @see {@link Denary}
 *
 * @since 0.0.1
 */
export type Unary<Type> = Single<Type>;

/**
 * A tuple containing only one element.
 *
 * @template El1 - The type of the only element.
 *
 * @see {@link Linear}
 * @see {@link Single}
 * @see {@link Unary}
 * @see {@link Singleton}
 *
 * @see {@link Dyadic}
 * @see {@link Triadic}
 * @see {@link Tetradic}
 * @see {@link Pentadic}
 * @see {@link Hexadic}
 * @see {@link Heptadic}
 * @see {@link Octadic}
 * @see {@link Enneadic}
 * @see {@link Decadic}
 *
 * @since 0.0.1
 */
export type Monadic<Type> = Single<Type>;

/**
 * An tuple representing a set with only one element.
 *
 * @template El1 - The type of the only element.
 *
 * @see {@link Linear}
 * @see {@link Single}
 * @see {@link Unary}
 * @see {@link Monadic}
 *
 * @see {@link Empty}
 * @see {@link OrderedPair}
 *
 * @since 0.0.1
 */
export type Singleton<Type> = Single<Type>;
