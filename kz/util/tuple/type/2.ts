// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 2nd degree of a polynomial.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Couple}
 * @see {@linkcode Binary}
 * @see {@linkcode Dyadic}
 * @see {@linkcode OrderedPair}
 *
 * @see {@linkcode Constant}
 * @see {@linkcode Linear}
 * @see {@linkcode Cubic}
 * @see {@linkcode Quartic}
 * @see {@linkcode Quintic}
 * @see {@linkcode Sextic}
 * @see {@linkcode Septic}
 * @see {@linkcode Octic}
 * @see {@linkcode Nonic}
 * @see {@linkcode Decic}
 * @see {@linkcode Undecic}
 * @see {@linkcode Duodecic}
 *
 * @since 0.0.1
 */
export type Quadratic<El1, El2 = El1> = [El1, El2];

/**
 * A tuple containing exactly two elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Quadratic}
 * @see {@linkcode Binary}
 * @see {@linkcode Dyadic}
 * @see {@linkcode OrderedPair}
 *
 * @see {@linkcode Single}
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
 *
 * @since 0.0.1
 */
export type Couple<El1, El2 = El1> = Quadratic<El1, El2>;

/**
 * A tuple containing exactly two elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Quadratic}
 * @see {@linkcode Couple}
 * @see {@linkcode Dyadic}
 * @see {@linkcode OrderedPair}
 *
 * @see {@linkcode Unary}
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
export type Binary<El1, El2 = El1> = Couple<El1, El2>;

/**
 * A tuple containing exactly two elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Quadratic}
 * @see {@linkcode Couple}
 * @see {@linkcode Binary}
 * @see {@linkcode OrderedPair}
 *
 * @see {@linkcode Monadic}
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
export type Dyadic<El1, El2 = El1> = Couple<El1, El2>;

/**
 * A tuple representing an ordered pair.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Quadratic}
 * @see {@linkcode Couple}
 * @see {@linkcode Binary}
 * @see {@linkcode Dyadic}
 *
 * @see {@linkcode Empty}
 * @see {@linkcode Singleton}
 *
 * @since 0.0.1
 */
export type OrderedPair<El1, El2 = El1> = Couple<El1, El2>;

/**
 * A tuple representing an unordered pair.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 *
 * @see {@linkcode Quadratic}
 * @see {@linkcode Couple}
 * @see {@linkcode Binary}
 * @see {@linkcode Dyadic}
 *
 * @see {@linkcode Empty}
 * @see {@linkcode Singleton}
 *
 * @since 0.0.1
 */
export type UnorderedPair<El1, El2 = El1> = Couple<El1, El2> | Couple<El2, El1>;
