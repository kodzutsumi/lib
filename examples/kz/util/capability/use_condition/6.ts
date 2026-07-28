// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Providing standard condition results</title>
// <description>By providing the {@linkcode AsCondition} type to a type supporting {@linkcode UseCondition}, you satisfy the requirements for both the {@linkcode UseThen} and {@linkcode UseElse} capabilities with standard `true` and `false` settings, respectively.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  GetElse,
  GetThen,
  UseSafeCondition,
} from '@kz/util/capability';

type Capabilities = UseSafeCondition;
type Conditions = AsCondition;
type IsHello<
  T extends string,
  CapSet extends Capabilities,
> = T extends 'hello' ? GetThen<CapSet, true>
  : GetElse<CapSet, false>;

type ActualHello = IsHello<'hello', Conditions>;
type ActualWorld = IsHello<'world', Conditions>;
type ExpectedHello = true;
type ExpectedWorld = false;

assertType<IsExact<ActualHello, ExpectedHello>>(true);
assertType<IsExact<ActualWorld, ExpectedWorld>>(true);
// </code>
// </example>
