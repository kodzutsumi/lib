// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 4th degree of a polynomial.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 *
 * @see {@linkcode Quadruple}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Tetradic}
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
export type Quartic<El1, El2 = El1, El3 = El2, El4 = El3> = [
  El1,
  El2,
  El3,
  El4,
];

/**
 * A tuple containing exactly 4 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 *
 * @see {@linkcode Quartic}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Tetradic}
 *
 * @see {@linkcode Couple}
 * @see {@linkcode Triple}
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
export type Quadruple<El1, El2 = El1, El3 = El2, El4 = El3> = Quartic<
  El1,
  El2,
  El3,
  El4
>;

/**
 * A tuple containing exactly 4 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 *
 * @see {@linkcode Quartic}
 * @see {@linkcode Quadruple}
 * @see {@linkcode Tetradic}
 *
 * @see {@linkcode Binary}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Ternary}
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
export type Quaternary<El1, El2 = El1, El3 = El2, El4 = El3> = Quadruple<
  El1,
  El2,
  El3,
  El4
>;

/**
 * A tuple containing exactly 4 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 *
 * @see {@linkcode Quartic}
 * @see {@linkcode Quadruple}
 * @see {@linkcode Quaternary}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
 * @see {@linkcode Triadic}
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
export type Tetradic<El1, El2 = El1, El3 = El2, El4 = El3> = Quadruple<
  El1,
  El2,
  El3,
  El4
>;
