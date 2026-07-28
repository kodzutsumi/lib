// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with a default type</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type { DefaultOf, UseDefault } from '@kz/util/capability';

type Test = {
  hireDate: Date;
  active: boolean;
};

type Capabilities = UseDefault;
type DefaultSettings = DefaultOf;

type EnsureHasKeys<
  Keys extends PropertyKey,
  Type extends Record<PropertyKey, unknown>,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends DefaultOf<infer DefaultType> ?
    & {
      [K in Keys]: K extends keyof Type ? Type[K] : DefaultType;
    }
    & Type
  : Type;

type ActualDefault = EnsureHasKeys<
  'first' | 'middle' | 'last',
  Test,
  DefaultOf<string>
>;
type ExpectedDefault = {
  hireDate: Date;
  active: boolean;
  first: string;
  middle: string;
  last: string;
};

assertType<IsExact<ActualDefault, ExpectedDefault>>(true);
// </code>
// </example>
