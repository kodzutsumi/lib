// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 6th degree of a polynomial.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 *
 * @see {@linkcode Sextuple}
 * @see {@linkcode Senary}
 * @see {@linkcode Hexadic}
 *
 * @see {@linkcode Linear}
 * @see {@linkcode Quadratic}
 * @see {@linkcode Cubic}
 * @see {@linkcode Quartic}
 * @see {@linkcode Quintic}
 * @see {@linkcode Septic}
 * @see {@linkcode Octic}
 * @see {@linkcode Nonic}
 * @see {@linkcode Decic}
 * @see {@linkcode Undecic}
 * @see {@linkcode Duodecic}
 *
 * @since 0.0.1
 */
export type Sextic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
> = [
  El1,
  El2,
  El3,
  El4,
  El5,
  El6,
];

/**
 * A tuple containing exactly 6 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 *
 * @see {@linkcode Sextic}
 * @see {@linkcode Senary}
 * @see {@linkcode Hexadic}
 *
 * @see {@linkcode Couple}
 * @see {@linkcode Triple}
 * @see {@linkcode Quadruple}
 * @see {@linkcode Quintuple}
 * @see {@linkcode Septuple}
 * @see {@linkcode Octuple}
 * @see {@linkcode Nonuple}
 * @see {@linkcode Decuple}
 * @see {@linkcode Undecuple}
 * @see {@linkcode Duodecuple}
 *
 * @since 0.0.1
 */
export type Sextuple<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
> = Sextic<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6
>;

/**
 * A tuple containing exactly 6 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 *
 * @see {@linkcode Sextic}
 * @see {@linkcode Sextuple}
 * @see {@linkcode Hexadic}
 *
 * @see {@linkcode Binary}
 * @see {@linkcode Ternary}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Quinary}
 * @see {@linkcode Septenary}
 * @see {@linkcode Octonary}
 * @see {@linkcode Novenary}
 * @see {@linkcode Denary}
 * @see {@linkcode Undenary}
 * @see {@linkcode Duodenary}
 *
 * @since 0.0.1
 */
export type Senary<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
> = Sextuple<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6
>;
/**
 * A tuple containing exactly 6 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 *
 * @see {@linkcode Sextic}
 * @see {@linkcode Sextuple}
 * @see {@linkcode Senary}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
 * @see {@linkcode Triadic}
 * @see {@linkcode Tetradic}
 * @see {@linkcode Pentadic}
 * @see {@linkcode Heptadic}
 * @see {@linkcode Octadic}
 * @see {@linkcode Enneadic}
 * @see {@linkcode Decadic}
 * @see {@linkcode Undecadic}
 * @see {@linkcode Dodecadic}
 *
 * @since 0.0.1
 */
export type Hexadic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
> = Sextuple<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6
>;
