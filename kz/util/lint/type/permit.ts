import type { BannedTypePermitter } from './_internal/mod.ts';
import type { BannedTypes } from './banned_types.ts';

/**
 * Represents a permit for a banned type, allowing it to be used with a specified reason.
 *
 * @example A `ToString` implementation.
 * ```ts
 * import { assertType, type IsExact } from '@std/testing/types';
 * import type { Permit } from '@kz/util/lint';
 * 
 * type Any = Permit<'any', '@i11n/kz#example'>;
 * 
 * // deno-lint-ignore no-explicit-any
 * assertType<IsExact<Any, any>>(true); // `Any` is equivalent to `any` type.
 * 
 * type ToString<Type extends Any> = Type extends string ? Type
 *   : Type extends number | boolean ? `${Type}`
 *   : never;
 * type Result = ToString<25>;
 * 
 * assertType<IsExact<Result, '25'>>(true);
 * ```
 *
 * @template Type - The type of the banned type being permitted.
 * @template Reason - A string that describes the reason for permitting the banned type.
 */
export type Permit<
  Type extends keyof BannedTypes,
  Reason extends string,
> = BannedTypePermitter<Type, Reason>;
