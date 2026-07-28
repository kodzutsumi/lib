// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import type {
  DefaultOf,
  UseCondition,
  UseDefault,
  UseNullOption,
  UseStream,
  UseThen,
} from '@kz/util/capability';
import type { Falsy } from './falsy.ts';

type NonFalsyOptions = UseCondition | UseNullOption | UseStream | UseDefault;
type NonFalsyDefaults = UseNullOption;

/**
 * Remove {@linkcode Falsy} values from `Type`, or check whether `Type` is a
 * {@linkcode Falsy} value and return a customized result based on the options
 * provided.
 *
 * ## Options
 *
 * - {@linkcode UseStream} ({@linkcode AsFilter})
 * - {@linkcode UseDefault} ({@linkcode DefaultOf}[`Type`])
 * - {@linkcode UseCondition}
 *
 * ### Default behavior
 * By default, `NonFalsy<Type>` will remove all `Falsy` values from `Type`,
 * resulting in a type that only includes the non-falsy types from `Type`.
 *
 * ### Type checking
 * Perform type checking to determine if `Type` is a `Falsy` value and return different types based on the options provided.
 *
 * - {@linkcode UseStream} ({@linkcode AsFilter})
 * - {@linkcode UseDefault} ({@linkcode DefaultOf}[`Type`])
 * - {@linkcode UseCondition}
 *
 * #### Type satisfies `Falsy`
 *
 * | `UseStream` | `UseDefault` | `UseCondition` | Result Type |
 * |-------------|---------------|----------------|-------------|
 * | `AsFilter` | None | None | `Type` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | None | `DefaultType` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Then<ThenType>` | `DefaultType` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Else<ElseType>` | `DefaultType` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Then<ThenType> & Else<ElseType>` | `DefaultType` |
 * | `AsFilter` | None | `Then<ThenType>` | `ThenType` |
 * | `AsFilter` | None | `Else<ElseType>` | `Type` |
 * | `AsFilter` | None | `Then<ThenType> & Else<ElseType>` | `ThenType` |
 * | `AsPredicate` | None | None | `true` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | None | `DefaultType` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Then<ThenType>` | `ThenType` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Else<ElseType>` | `DefaultType` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Then<ThenType> & Else<ElseType>` | `DefaultType` |
 * | `AsPredicate` | None | `Then<ThenType>` | `ThenType` |
 * | `AsPredicate` | None | `Else<ElseType>` | `true` |
 * | `AsPredicate` | None | `Then<ThenType> & Else<ElseType>` | `ThenType` |
 *
 * #### Type does not satisfy `Falsy`
 *
 * | `UseStream` | `UseDefault` | `UseCondition` | Result Type |
 * |-------------|---------------|----------------|-------------|
 * | `AsFilter` | None | None | `never` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | None | `never` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Then<ThenType>` | `never` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Else<ElseType>` | `ElseType` |
 * | `AsFilter` | `DefaultOf<DefaultType>` | `Then<ThenType> & Else<ElseType>` | `ElseType` |
 * | `AsFilter` | None | `Then<ThenType>` | `never` |
 * | `AsFilter` | None | `Else<ElseType>` | `ElseType` |
 * | `AsFilter` | None | `Then<ThenType> & Else<ElseType>` | `ElseType` |
 * | `AsPredicate` | None | None | `false` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | None | `false` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Then<ThenType>` | `false` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Else<ElseType>` | `ElseType` |
 * | `AsPredicate` | `DefaultOf<DefaultType>` | `Then<ThenType> & Else<ElseType>` | `ElseType` |
 * | `AsPredicate` | None | `Then<ThenType>` | `false` |
 * | `AsPredicate` | None | `Else<ElseType>` | `ElseType` |
 * | `AsPredicate` | None | `Then<ThenType> & Else<ElseType>` | `ElseType` |
 *
 * @template Type - The type to check or filter.
 * @template Options - The options to customize the behavior.
 * @returns A type that is either the non-falsy remove types from `Type` or a customized type based on the options provided.
 */
export type NonFalsy<
  Type,
  Options extends NonFalsyOptions = NonFalsyDefaults & DefaultOf<Type>,
> = Type extends Falsy ? HandleFalsy<Type, Options>
  : Type;

type HandleFalsy<
  Type,
  Options extends NonFalsyOptions = NonFalsyDefaults,
> = Options extends UseStream
  ? Options extends UseThen<infer ThenType> ? ThenType
  : false
  : Exclude<Type, Falsy>;
