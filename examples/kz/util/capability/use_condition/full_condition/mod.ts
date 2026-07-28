// deno-lint-ignore-file no-boolean-literal-for-arguments
import { assertType, type IsExact } from '@std/testing/types';
import type {
  ConditionOf,
  Else,
  GetElse,
  GetThen,
  Then,
  UseSafeCondition,
} from '@kz/util/capability';

type Capabilities = UseSafeCondition;
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
