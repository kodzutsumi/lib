// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Optional full condition</title>
// <description>By requiring a full condition and providing a default for the {@linkcode UseThen} and {@linkcode UseElse} capabilities, you can create a condition that defaults to specific types when the capabilities are not explicitly defined. This allows for a more flexible yet strict evaluation of conditions, ensuring that all cases are accounted for while still providing sensible defaults.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsUnsafe,
  ConditionOf,
  Else,
  GetElse,
  GetThen,
  Then,
  UseCondition,
} from '@kz/util/capability';

type Capabilities = UseCondition<AsUnsafe>;
type Conditions = Then<number> & Else<symbol>;
type DefaultSettings = ConditionOf<true, false>;
type IsHello<
  T extends string,
  CapSet extends Capabilities = DefaultSettings,
> = T extends 'hello' ? GetThen<CapSet, true>
  : GetElse<CapSet, false>;

type ActualHello = IsHello<'hello', Conditions>;
type ActualWorld = IsHello<'world', Conditions>;
type ExpectedHello = number;
type ExpectedWorld = symbol;

assertType<IsExact<ActualHello, ExpectedHello>>(true);
assertType<IsExact<ActualWorld, ExpectedWorld>>(true);

type MissingConditions = IsHello<'hello'>;
type ExpectedMissing = true;

assertType<IsExact<MissingConditions, ExpectedMissing>>(true);

// @ts-expect-error - missing Else condition
// Copyright 2020 - present integereleven. All rights reserved. MIT license.

type _MissingElse = IsHello<'hello', Then<number>>;
// </code>
// <callout type="note">
// The type `MissingConditions` no longer produces an error due to the default settings provided.
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
