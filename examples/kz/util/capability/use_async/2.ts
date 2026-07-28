// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with asynchronous behavior</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsSafe,
  AsSync,
  AsUnsafe,
  UseAsync,
  UseSafe,
} from '@kz/util/capability';
import type { Nil } from '@kz/util/type';

type Capabilities = UseAsync | UseSafe;
type DefaultSettings = AsSync | AsUnsafe;
type ApiValue<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends AsAsync ? Settings extends AsSafe ? Promise<Type> | Type
  : Promise<Type>
  : Settings extends AsSafe ? Type | Nil
  : Type;

type ActualMaybeAsync = ApiValue<number, AsAsync>;
type ExpectedMaybeAsync = Promise<number>;

assertType<IsExact<ActualMaybeAsync, ExpectedMaybeAsync>>(true);

type ActualMaybeSync = ApiValue<number, AsSync>;
type ExpectedMaybeSync = number;

assertType<IsExact<ActualMaybeSync, ExpectedMaybeSync>>(true);

type ActualMaybeUnsafeAsync = ApiValue<number, AsUnsafe & AsAsync>;
type ExpectedMaybeUnsafeAsync = Promise<number>;

assertType<IsExact<ActualMaybeUnsafeAsync, ExpectedMaybeUnsafeAsync>>(true);

type ActualMaybeUnsafeSync = ApiValue<number, AsUnsafe & AsSync>;
type ExpectedMaybeUnsafeSync = number;

assertType<IsExact<ActualMaybeUnsafeSync, ExpectedMaybeUnsafeSync>>(true);
// </code>
// </example>
