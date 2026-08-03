// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with conditional behavior</title>
// <description>This is the default behavior of the {@linkcode UseCondition} capability, where the resulting type is a union of the {@linkcode UseThen} and {@linkcode UseElse} capabilities.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  Else,
  GetElse,
  GetThen,
  Then,
  UseCondition,
} from '@kz/util/capability';

type Capabilities = UseCondition;
type IsHello<
  T extends string,
  CapSet extends Capabilities,
> = T extends 'hello' ? GetThen<CapSet, true>
  : GetElse<CapSet, false>;

type ActualHello = IsHello<'hello', Then<number>>;
type ActualWorld = IsHello<'world', Else<symbol>>;
type ExpectedHello = number;
type ExpectedWorld = symbol;

assertType<IsExact<ActualHello, ExpectedHello>>(true);
assertType<IsExact<ActualWorld, ExpectedWorld>>(true);
// </code>
// </example>
