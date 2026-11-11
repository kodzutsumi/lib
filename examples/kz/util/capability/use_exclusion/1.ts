// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with exclusion behavior</title>
// <description>By defining a type with exclusion behavior, you can create a type that automatically excludes or includes properties based on the specified capabilities.</description>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type { AsExclude, AsInclude, UseExclusion } from '@kz/util/capability';

type Test = {
  first: string;
  middle: string;
  last: string;
  hireDate: Date;
  active: boolean;
};

type Capabilities = UseExclusion;
type DefaultSettings = AsInclude;

type DropKeys<
  Type,
  Keys extends keyof Type,
  Settings extends Capabilities = DefaultSettings,
> = Omit<
  Type,
  Settings extends AsExclude ? Exclude<keyof Type, Keys> : Keys
>;

type ActualInclude = DropKeys<Test, 'first' | 'middle' | 'last'>;
type ExpectedInclude = {
  first: string;
  middle: string;
  last: string;
};

assertType<IsExact<ActualInclude, ExpectedInclude>>(true);

type ActualExclude = DropKeys<Test, 'first' | 'middle' | 'last', AsExclude>;
type ExpectedExclude = {
  hireDate: Date;
  active: boolean;
};

assertType<IsExact<ActualExclude, ExpectedExclude>>(true);
// </code>
// </example>
