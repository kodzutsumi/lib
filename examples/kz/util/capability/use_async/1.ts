// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with accessor behavior</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type { AsAsync, AsSync, UseAsync } from '@kz/util/capability';

type Capabilities = UseAsync;
type DefaultSettings = AsSync;

/** */
type ApiValue<
  Type,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends AsAsync ? Promise<Type>
  : Type;

type ActualAsync = ApiValue<string, AsAsync>;
type ExpectedAsync = Promise<string>;

assertType<IsExact<ActualAsync, ExpectedAsync>>(true);

type ActualSync = ApiValue<string, AsSync>;
type ExpectedSync = string;

assertType<IsExact<ActualSync, ExpectedSync>>(true);
// </code>
// </example>
