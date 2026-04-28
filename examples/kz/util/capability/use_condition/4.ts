// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Require full condition</title>
// <description>By setting the {@linkcode UseSafe} capability to {@linkcode AsUnsafe}, the resulting type becomes an intersection of the {@linkcode UseThen} and {@linkcode UseElse} capabilities, effectively requiring both conditions to be defined for a valid type. This is useful when you want to enforce that both the {@linkcode UseThen} and {@linkcode UseElse} cases are explicitly handled in your type definitions.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  Else,
  GetElse,
  GetThen,
  Then,
  UseSafeCondition,
} from '@kz/util/capability';

type Capabilities = UseSafeCondition;
type Conditions = Then<number> & Else<symbol>;
type IsHello<
  T extends string,
  CapSet extends Capabilities,
> = T extends 'hello' ? GetThen<CapSet, true>
  : GetElse<CapSet, false>;

type ActualHello = IsHello<'hello', Conditions>;
type ActualWorld = IsHello<'world', Conditions>;
type ExpectedHello = number;
type ExpectedWorld = symbol;

assertType<IsExact<ActualHello, ExpectedHello>>(true);
assertType<IsExact<ActualWorld, ExpectedWorld>>(true);

// @ts-expect-error - missing condition
type _MissingConditions = IsHello<'hello'>;
// @ts-expect-error - missing Else condition
// Copyright 2020 - present integereleven. All rights reserved. MIT license.

type _MissingElse = IsHello<'hello', Then<number>>;
// </code>
// <callout type="note">
// The type `MissingConditions` will produce the following error:
// ```bash
// TS2314 [ERROR]: Generic type 'IsHello' requires 2 type argument(s).
// ```
//
// The type `MissingElse` will produce the following error:
// ```bash
// TS2344 [ERROR]: Type 'Then<number>' does not satisfy
// the constraint 'UseThen & UseElse'.
//   Property '[ElseKeyString]' is missing in type
//   'Then<number>' but required in type 'UseElse'
// ```
// </callout>
// </example>
