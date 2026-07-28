// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 3rd degree of a polynomial.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 *
 * @see {@linkcode Triple}
 * @see {@linkcode Ternary}
 * @see {@linkcode Triadic}
 *
 * @see {@linkcode Linear}
 * @see {@linkcode Quadratic}
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
export type Cubic<El1, El2 = El1, El3 = El2> = [El1, El2, El3];

/**
 * A tuple containing exactly three elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 *
 * @see {@linkcode Cubic}
 * @see {@linkcode Ternary}
 * @see {@linkcode Triadic}
 *
 * @see {@linkcode Couple}
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
export type Triple<El1, El2 = El1, El3 = El2> = Cubic<
  El1,
  El2,
  El3
>;

/**
 * A tuple containing exactly three elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 *
 * @see {@linkcode Cubic}
 * @see {@linkcode Triple}
 * @see {@linkcode Triadic}
 *
 * @see {@linkcode Binary}
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
export type Ternary<El1, El2 = El1, El3 = El2> = Triple<
  El1,
  El2,
  El3
>;

/**
 * A tuple containing exactly three elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 *
 * @see {@linkcode Cubic}
 * @see {@linkcode Triple}
 * @see {@linkcode Ternary}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
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
export type Triadic<El1, El2 = El1, El3 = El2> = Triple<
  El1,
  El2,
  El3
>;
