// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 0th degree of a polynomial.
 *
 * @see {@linkcode Nullary}
 * @see {@linkcode Niladic}
 * @see {@linkcode Empty}
 *
 * @see {@linkcode Linear}
 * @see {@linkcode Quadratic}
 * @see {@linkcode Cubic}
 * @see {@linkcode Quartic}
 * @see {@linkcode Quintic}
 * @see {@linkcode Sextic}
 * @see {@linkcode Septic}
 * @see {@linkcode Octic}
 * @see {@linkcode Nonic}
 * @see {@linkcode Decic}
 *
 * @since 0.0.1
 */
export type Constant = [];

/**
 * A tuple with no elements.
 *
 * @see {@linkcode Constant}
 * @see {@linkcode Niladic}
 * @see {@linkcode Empty}
 *
 * @see {@linkcode Unary}
 * @see {@linkcode Binary}
 * @see {@linkcode Ternary}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Quinary}
 * @see {@linkcode Senary}
 * @see {@linkcode Septenary}
 * @see {@linkcode Octonary}
 * @see {@linkcode Novenary}
 * @see {@linkcode Denary}
 * @see {@linkcode Undenary}
 * @see {@linkcode Duodenary}
 *
 * @since 0.0.1
 */
export type Nullary = Constant;

/**
 * A tuple with no elements.
 *
 * @see {@linkcode Constant}
 * @see {@linkcode Nullary}
 * @see {@linkcode Empty}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
 * @see {@linkcode Triadic}
 * @see {@linkcode Tetradic}
 * @see {@linkcode Pentadic}
 * @see {@linkcode Hexadic}
 * @see {@linkcode Heptadic}
 * @see {@linkcode Octadic}
 * @see {@linkcode Enneadic}
 * @see {@linkcode Decadic}
 * @see {@linkcode Undecadic}
 * @see {@linkcode Dodecadic}
 *
 * @since 0.0.1
 */
export type Niladic = Constant;

/**
 * An tuple representing an tuple with no elements, or an empty set.
 *
 * @see {@linkcode Constant}
 * @see {@linkcode Nullary}
 * @see {@linkcode Niladic}
 *
 * @see {@linkcode Singleton}
 * @see {@linkcode Single}
 * @see {@linkcode OrderedPair}
 * @see {@linkcode Couple}
 * @see {@linkcode Triple}
 * @see {@linkcode Quadruple}
 * @see {@linkcode Quintuple}
 * @see {@linkcode Sextuple}
 * @see {@linkcode Septuple}
 * @see {@linkcode Octuple}
 * @see {@linkcode Nonuple}
 * @see {@linkcode Decuple}
 * @see {@linkcode Undecuple}
 * @see {@linkcode Duodecuple}
 * @since 0.0.1
 */
export type Empty = Constant;
