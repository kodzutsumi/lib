// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with accessor behavior</title>
// <code>
import { assertType, type IsExact } from '@std/testing/types';
import type { AsGetter, AsSetter, UseAccessor } from '@kz/util/capability';

type Test = {
  first: string;
  middle: string;
  last: string;
  hireDate: Date;
  active: boolean;
};

type Capabilities = UseAccessor;
type DefaultSettings = AsGetter;

/**
 * Gets the keys of a type that have string values , or maps all keys of the type to string.
 *
 * # Settings
 * - `AsGetter` (default): Returns the keys of the type that have string values.
 * - `AsSetter`: Maps all keys of the type to string.
 *
 * @template Type - The type to extract keys from or map keys of.
 * @template Settings - The accessor behavior settings to determine the output type.
 * @returns The keys of the type that have string values if `AsGetter` is used, or an object type with all keys mapped to string if `AsSetter` is used.
 */
type AccessStrings<
  Type extends Record<PropertyKey, unknown>,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends AsSetter ? {
    [K in keyof Type]: string;
  }
  : {
    [K in keyof Type]-?: Type[K] extends string ? K : never;
  }[keyof Type];

type ActualGetter = AccessStrings<Test>;
type ExpectedGetter = 'first' | 'middle' | 'last';

assertType<IsExact<ActualGetter, ExpectedGetter>>(true);

type ActualSetter = AccessStrings<Test, AsSetter>;
type ExpectedSetter = {
  first: string;
  middle: string;
  last: string;
  hireDate: string;
  active: string;
};

assertType<IsExact<ActualSetter, ExpectedSetter>>(true);
// </code>
// </example>
