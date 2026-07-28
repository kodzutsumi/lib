// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 9th degree of a polynomial.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 * @template El7 - The type of the seventh element.
 * @template El8 - The type of the eighth element.
 * @template El9 - The type of the ninth element.
 *
 * @see {@linkcode Nonuple}
 * @see {@linkcode Novenary}
 * @see {@linkcode Enneadic}
 *
 * @see {@linkcode Linear}
 * @see {@linkcode Quadratic}
 * @see {@linkcode Cubic}
 * @see {@linkcode Quartic}
 * @see {@linkcode Quintic}
 * @see {@linkcode Sextic}
 * @see {@linkcode Septic}
 * @see {@linkcode Octic}
 * @see {@linkcode Decic}
 * @see {@linkcode Undecic}
 * @see {@linkcode Duodecic}
 *
 * @since 0.0.1
 */
export type Nonic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
> = [El1, El2, El3, El4, El5, El6, El7, El8, El9];

/**
 * A tuple containing exactly 9 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 * @template El7 - The type of the seventh element.
 * @template El8 - The type of the eighth element.
 * @template El9 - The type of the ninth element.
 *
 * @see {@linkcode Nonic}
 * @see {@linkcode Novenary}
 * @see {@linkcode Enneadic}
 *
 * @see {@linkcode Couple}
 * @see {@linkcode Triple}
 * @see {@linkcode Quadruple}
 * @see {@linkcode Quintuple}
 * @see {@linkcode Sextuple}
 * @see {@linkcode Septuple}
 * @see {@linkcode Octuple}
 * @see {@linkcode Decuple}
 * @see {@linkcode Undecuple}
 * @see {@linkcode Duodecuple}
 *
 * @since 0.0.1
 */
export type Nonuple<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
> = Nonic<El1, El2, El3, El4, El5, El6, El7, El8, El9>;

/**
 * A tuple containing exactly 9 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 * @template El7 - The type of the seventh element.
 * @template El8 - The type of the eighth element.
 * @template El9 - The type of the ninth element.
 *
 * @see {@linkcode Nonic}
 * @see {@linkcode Nonuple}
 * @see {@linkcode Enneadic}
 *
 * @see {@linkcode Binary}
 * @see {@linkcode Ternary}
 * @see {@linkcode Quaternary}
 * @see {@linkcode Quinary}
 * @see {@linkcode Senary}
 * @see {@linkcode Septenary}
 * @see {@linkcode Octonary}
 * @see {@linkcode Denary}
 * @see {@linkcode Undenary}
 * @see {@linkcode Duodenary}
 *
 * @since 0.0.1
 */
export type Novenary<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
> = Nonuple<El1, El2, El3, El4, El5, El6, El7, El8, El9>;
/**
 * A tuple containing exactly 9 elements.
 *
 * @template El1 - The type of the first element.
 * @template El2 - The type of the second element.
 * @template El3 - The type of the third element.
 * @template El4 - The type of the fourth element.
 * @template El5 - The type of the fifth element.
 * @template El6 - The type of the sixth element.
 * @template El7 - The type of the seventh element.
 * @template El8 - The type of the eighth element.
 * @template El9 - The type of the ninth element.
 *
 * @see {@linkcode Nonic}
 * @see {@linkcode Nonuple}
 * @see {@linkcode Novenary}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
 * @see {@linkcode Triadic}
 * @see {@linkcode Tetradic}
 * @see {@linkcode Pentadic}
 * @see {@linkcode Hexadic}
 * @see {@linkcode Heptadic}
 * @see {@linkcode Octadic}
 * @see {@linkcode Decadic}
 * @see {@linkcode Undecadic}
 * @see {@linkcode Dodecadic}
 *
 * @since 0.0.1
 */
export type Enneadic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
> = Nonuple<El1, El2, El3, El4, El5, El6, El7, El8, El9>;
