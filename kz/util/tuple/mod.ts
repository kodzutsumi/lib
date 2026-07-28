// Copyright 2020 - present integereleven. All rights reserved. MIT license.

export * from './type/mod.ts';

//TODO(@ebntly): Verify references in documentation

/**
 * > [!NOTE]
 * > This is a types-only sub-module.
 *
 * Utilize a wide-variety of tuples to describe order collections of elements,
 * optionally with differing types across elements.
 *
 * ## Concepts
 * All non-empty tuples require at least the first tuple element type to be
 * defined. Elements remaining in the tuple with non-defined types will inherit
 * the type of the previous element.
 *
 * For example, the tuple type `Couple<string>` is the same as
 * `Couple<string, string>` and the polynomial type `Quartic<string, number>`
 * is the same as `Quartic<string, number, number, number>`.
 *
 * There are only thirteen different tuples, with many of the tuples being
 * aliases for different purposes.
 *
 * We provide terminology aliases for the tuples based on their arity, adicity, set, and polynomial degree.
 *
 * ## Tuple aliases
 *
 * | #  | Tuple                  | Arity                  | Adicity               | Set                                               | Polynomial            |
 * |----|------------------------|------------------------|-----------------------|---------------------------------------------------|-----------------------|
 * | 0  | {@linkcode Empty}      | {@linkcode Nullary}    | {@linkcode Niladic}   | {@linkcode Empty}                                 | {@linkcode Constant}  |
 * | 1  | {@linkcode Single}     | {@linkcode Unary}      | {@linkcode Monadic}   | {@linkcode Singleton}                             | {@linkcode Linear}    |
 * | 2  | {@linkcode Couple}     | {@linkcode Dyadic}     | {@linkcode Binary}    | {@linkcode OrderedPair}/{@linkcode UnorderedPair} | {@linkcode Quadratic} |
 * | 3  | {@linkcode Triple}     | {@linkcode Triadic}    | {@linkcode Ternary}   |                                                   | {@linkcode Cubic}     |
 * | 4  | {@linkcode Quadruple}  | {@linkcode Quaternary} | {@linkcode Tetradic}  |                                                   | {@linkcode Quartic}   |
 * | 5  | {@linkcode Quintuple}  | {@linkcode Quinary}    | {@linkcode Pentadic}  |                                                   | {@linkcode Quintic}   |
 * | 6  | {@linkcode Sextuple}   | {@linkcode Senary}     | {@linkcode Hexadic}   |                                                   | {@linkcode Sextic}    |
 * | 7  | {@linkcode Septuple}   | {@linkcode Septenary}  | {@linkcode Heptadic}  |                                                   | {@linkcode Septic}    |
 * | 8  | {@linkcode Octuple}    | {@linkcode Octonary}   | {@linkcode Octadic}   |                                                   | {@linkcode Octic}     |
 * | 9  | {@linkcode Nonuple}    | {@linkcode Novenary}   | {@linkcode Enneadic}  |                                                   | {@linkcode Nonic}     |
 * | 10 | {@linkcode Decuple}    | {@linkcode Denary}     | {@linkcode Decadic}   |                                                   | {@linkcode Decic}     |
 * | 11 | {@linkcode Undecuple}  | {@linkcode Undenary}   | {@linkcode Undecadic} |                                                   | {@linkcode Undecic}   |
 * | 12 | {@linkcode Duodecuple} | {@linkcode Duodenary}  | {@linkcode Dodecadic} |                                                   | {@linkcode Duodecic}  |
 *
 * @example Creating a `BitByteArray`
 * ```ts
 * import {assertType, type IsExact } from '@std/testing/types';
 * import {assertEquals} from '@std/assert';
 *
 * import type { Octic } from '@kz/util/tuple';
 *
 * type BitByteArray = Octic<boolean>;
 *
 * function toInt(bytes: BitByteArray): number {
 *   return bytes
 *     .reverse()
 *     .reduce((acc, bit, index) =>
 *       acc + (bit ? Math.pow(2, index) : 0), 0);
 * }
 *
 * const bytes: BitByteArray = [
 *   true, false, true, false,
 *   true, false, true, false
 * ];
 *
 * const result = toInt(bytes);
 *
 * assertType<IsExact<typeof bytes, Octic<boolean>>>(true);
 * assertEquals(result, 170);
 * ```
 *
 * @module
 */
