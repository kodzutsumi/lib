// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * A tuple representing the 12th degree of a polynomial.
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
 * @template El10 - The type of the tenth element.
 * @template El11 - The type of the eleventh element.
 * @template El12 - The type of the twelfth element.
 *
 * @see {@linkcode Duodecuple}
 * @see {@linkcode Duodenary}
 * @see {@linkcode Dodecadic}
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
 * @see {@linkcode Undecic}
 *
 * @since 0.0.1
 */
export type Duodecic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
  El10 = El9,
  El11 = El10,
  El12 = El11,
> = [
  El1,
  El2,
  El3,
  El4,
  El5,
  El6,
  El7,
  El8,
  El9,
  El10,
  El11,
  El12,
];

/**
 * A tuple containing exactly 12 elements.
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
 * @template El10 - The type of the tenth element.
 * @template El11 - The type of the eleventh element.
 * @template El12 - The type of the twelfth element.
 *
 * @see {@linkcode Duodecic}
 * @see {@linkcode Duodenary}
 * @see {@linkcode Dodecadic}
 *
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
 *
 * @since 0.0.1
 */
export type Duodecuple<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
  El10 = El9,
  El11 = El10,
  El12 = El11,
> = Duodecic<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6,
  El7,
  El8,
  El9,
  El10,
  El11,
  El12
>;

/**
 * A tuple containing exactly 12 elements.
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
 * @template El10 - The type of the tenth element.
 * @template El11 - The type of the eleventh element.
 * @template El12 - The type of the twelfth element.
 *
 * @see {@linkcode Duodecic}
 * @see {@linkcode Duodecuple}
 * @see {@linkcode Dodecadic}
 *
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
 *
 * @since 0.0.1
 */
export type Duodenary<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
  El10 = El9,
  El11 = El10,
  El12 = El11,
> = Duodecuple<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6,
  El7,
  El8,
  El9,
  El10,
  El11,
  El12
>;

/**
 * A tuple containing exactly 12 elements.
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
 * @template El10 - The type of the tenth element.
 * @template El11 - The type of the eleventh element.
 * @template El12 - The type of the twelfth element.
 *
 * @see {@linkcode Duodecic}
 * @see {@linkcode Duodecuple}
 * @see {@linkcode Duodenary}
 *
 * @see {@linkcode Monadic}
 * @see {@linkcode Dyadic}
 * @see {@linkcode Triadic}
 * @see {@linkcode Tetradic}
 * @see {@linkcode Pentadic}
 * @see {@linkcode Hexadic}
 * @see {@linkcode Heptadic}
 * @see {@linkcode Octadic}
 * @see {@linkcode Nonic}
 * @see {@linkcode Decadic}
 * @see {@linkcode Undecadic}
 *
 * @since 0.0.1
 */
export type Dodecadic<
  El1,
  El2 = El1,
  El3 = El2,
  El4 = El3,
  El5 = El4,
  El6 = El5,
  El7 = El6,
  El8 = El7,
  El9 = El8,
  El10 = El9,
  El11 = El10,
  El12 = El11,
> = Duodecuple<
  El1,
  El2,
  El3,
  El4,
  El5,
  El6,
  El7,
  El8,
  El9,
  El10,
  El11,
  El12
>;
