// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
// <example>
// <title>Defining a type with collection behavior</title>
// <code type="ts">
import { assertType, type IsExact } from '@std/testing/types';
import type {
  Collection,
  CollectionIdents,
  CollectionValues,
  UseCollection,
} from '@kz/util/capability';

type Test = {
  first: string;
  middle: string;
  last: string;
  hireDate: Date;
  active: boolean;
};

type Capabilities = UseCollection;
type DefaultSettings = Collection;

type CollectOfType<
  Type extends Record<PropertyKey, unknown>,
  ValueType,
  Settings extends Capabilities = DefaultSettings,
> = Settings extends Collection
  ? Pick<Type, CollectOfType<Type, ValueType, CollectionIdents>>
  : Settings extends CollectionIdents ? {
      [K in keyof Type]: Type[K] extends ValueType ? K : never;
    }[keyof Type]
  : {
    [K in keyof Type]: Type[K] extends ValueType ? Type[K] : never;
  }[keyof Type];

type ActualCollection = CollectOfType<Test, string>;
type ExpectedCollection = {
  first: string;
  middle: string;
  last: string;
};

assertType<IsExact<ActualCollection, ExpectedCollection>>(true);

type ActualCollectionIdents = CollectOfType<Test, string, CollectionIdents>;
type ExpectedCollectionIdents = 'first' | 'middle' | 'last';

assertType<IsExact<ActualCollectionIdents, ExpectedCollectionIdents>>(true);

type ActualCollectionValues = CollectOfType<Test, string, CollectionValues>;
type ExpectedCollectionValues = string;

assertType<IsExact<ActualCollectionValues, ExpectedCollectionValues>>(true);
// </code>
// </example>
