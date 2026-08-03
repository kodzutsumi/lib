// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Require full condition</title>
// <description>By setting the {@linkcode UseSafe} capability to {@linkcode AsUnsafe}, the resulting type becomes an intersection of the {@linkcode UseThen} and {@linkcode UseElse} capabilities, effectively requiring both conditions to be defined for a valid type. This is useful when you want to enforce that both the {@linkcode UseThen} and {@linkcode UseElse} cases are explicitly handled in your type definitions.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsUnsafe,
  Else,
  GetElse,
  GetThen,
  Then,
  UseCondition,
} from '@kz/util/capability';

type Capabilities = UseCondition<AsUnsafe>;
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
// </example>
