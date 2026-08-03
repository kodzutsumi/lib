// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  AsBuiltin,
  AsOptional,
  AsRequired,
  Else,
  Then,
  UseBuiltin,
  UseCondition,
  UseElse,
  UseOptional,
  UseThen,
} from '@kz/util/capability';

type PromiseOptions = UseCondition | UseOptional | UseBuiltin;
type PromiseDefaults = AsOptional;

/**
 * A flexible version of the built-in `Promise` type, supporting not only
 * the standard `Promise` behavior but also additional options for handling
 * different scenarios, such as making it optional or using custom handling
 * logic based on the type of `Type`.
 *
 * ## Options
 *
 * - {@linkcode UseBuiltin} ({@linkcode AsCustom})
 * - {@linkcode UseOptional} ({@linkcode AsOptional})
 * - {@linkcode UseCondition}
 *
 * ### Default behavior
 * By default, `$Promise<Type>` behaves like the built-in `Promise<Type>`,
 * meaning it will always return a `Promise` of the specified type (`Type`).
 *
 * ### Force builtin
 * Override all custom behavior and use the built-in `Promise` type directly.
 *
 * - {@linkcode UseBuiltin} - {@linkcode AsBuiltin}
 *
 * ### Create a `Promise`
 * Create a `Promise` or a union of `Promise` and the original type (`Type`) based on the options provided (e.g. `MaybePromise`).
 *
 * - {@linkcode UseOptional}
 *
 * | `UseOptional`  | Result Type |
 * |------------------|-------------|
 * | `AsOptional`     | `Promise<Type>` |
 * | `AsRequired`     | `Promise<Type> | Type` |
 *
 * ### Type checking
 * Perform type checking to determine if `Type` is a `PromiseLike` type and return different types based on the options provided.
 *
 * - {@linkcode UseCondition}
 *
 * #### Type satisfies `PromiseLike`
 *
 * | `UseCondition`  | Result Type |
 * |-----------------|-------------|
 * | `Then<ThenType>` | `ThenType` |
 * | `Else<ElseType>` | `true` |
 * | `Then<ThenType> & Else<ElseType>` | `ThenType` |
 *
 * #### Type does not satisfy `PromiseLike`
 *
 * | `UseCondition`  | Result Type |
 * |-----------------|-------------|
 * | `Then<ThenType>` | `false` |
 * | `Else<ElseType>` | `ElseType` |
 * | `Then<ThenType> & Else<ElseType>` | `ElseType` |
 *
 * @template Type - The type to be wrapped in a `Promise` or checked against `PromiseLike`.
 * @template Options - The options that determine how the `Promise` type is constructed or how the type checking is performed.
 * @returns A type that is either a `Promise` of `Type`, a union of `Promise<Type>` and `Type`, or a type determined by the type checking logic based on the provided options.
 *
 * @example Default behavior
 * ```ts
 * import {
 *   assertType,
 *   type IsExact
 * } from '@std/testing/types';
 *
 * import type { $Promise } from '@kz/util/async';
 * import type { AsBuiltin } from '@kz/util/capability';
 *
 * type Actual = $Promise<string, AsBuiltin>;
 * type Expected = Promise<string>;
 *
 * assertType<IsExact<Actual, Expected>>(true);
 * ```
 *
 * @example Using the builtin `Promise`
 * ```ts
 * import {
 *   assertType,
 *   type IsExact
 * } from '@std/testing/types';
 *
 * import type { $Promise } from '@kz/util/async';
 *
 * type Actual = $Promise<string>;
 * type Expected = Promise<string>;
 *
 * assertType<IsExact<Actual, Expected>>(true);
 * ```
 * > Note the that default behavior is the same as using `UseBuiltin` option, which forces the use of the built-in `Promise` type directly.
 *
 * @example Creating a union of `Promise` and the original type (e.g. `MaybePromise`)
 * ```ts
 * import {
 *   assertType,
 *   type IsExact
 * } from '@std/testing/types';
 *
 * import type { $Promise } from '@kz/util/async';
 * import type { AsRequired } from '@kz/util/capability';
 *
 * type Actual = $Promise<string, AsRequired>;
 * type Expected = Promise<string> | string;
 *
 * assertType<IsExact<Actual, Expected>>(true);
 * ```
 *
 * @example Type checking with `AsCondition`
 * ```ts
 * import {
 *   assertType,
 *   type IsExact
 * } from '@std/testing/types';
 *
 * import type { $Promise } from '@kz/util/async';
 * import type { AsCondition } from '@kz/util/capability';
 *
 * // Type satisfies `PromiseLike`
 * type ActualOkay = $Promise<Promise<string>, AsCondition>;
 * type ExpectedOkay = true;
 *
 * assertType<IsExact<ActualOkay, ExpectedOkay>>(true);
 *
 * // Type does not satisfy `PromiseLike`
 * type ActualFail = $Promise<string, AsCondition>;
 * type ExpectedFail = false;
 *
 * assertType<IsExact<ActualFail, ExpectedFail>>(true);
 * ```
 * Using the `AsCondition` is the quickest way to check if a type satisfies
 * `PromiseLike` and get a boolean result (`true` or `false`) based on the
 * check. However, you can customize this behavior with the `Then` and/or
 * `Else` options to return different types instead of just a boolean.
 *
 * @example Customizing the result of type checking with `Then` and/or `Else`
 * ```ts
 * import {
 *   assertType,
 *   type IsExact
 * } from '@std/testing/types';
 *
 * import type { $Promise } from '@kz/util/async';
 * import type { Then, Else } from '@kz/util/capability';
 *
 * // Type satisfies `PromiseLike`
 * type ActualOkay = $Promise<Promise<string>, Then<number>>;
 * type ExpectedOkay = number;
 *
 * assertType<IsExact<ActualOkay, ExpectedOkay>>(true);
 *
 * // Type does not satisfy `PromiseLike`
 * type ActualFail = $Promise<string, Else<number>>;
 * type ExpectedFail = number;
 *
 * assertType<IsExact<ActualOkay, ExpectedOkay>>(true);
 * ```
 * Note that `Then` and `Else` are not required to be used together, and can
 * be used independently to customize the result of the type checking based
 * on whether `Type` satisfies `PromiseLike` or not. By default the `Then` case
 * returns `true` and the `Else` case returns `false`, but these can be
 * overridden with custom types as shown in the example above.
 */
export type $Promise<
  Type,
  Options extends PromiseOptions = PromiseDefaults,
> = Options extends AsBuiltin ? Promise<Type>
  : Options extends UseThen | UseElse ? HandleCheck<Type, Options>
  : HandlePromise<Type, Options>;

type HandleCheck<
  Type,
  Options extends PromiseOptions = PromiseDefaults,
> = Type extends PromiseLike<infer _>
  ? Options extends Then<infer ThenType> ? ThenType
  : true
  : Options extends Else<infer ElseType> ? ElseType
  : false;

type HandlePromise<
  Type,
  Options extends PromiseOptions = PromiseDefaults,
> = Options extends AsRequired ? Promise<Type> | Type
  : Promise<Type>;
