// deno-lint-ignore-file no-boolean-literal-for-arguments no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { BannedTypePermitter } from './banned_type_permitter.ts';

describe('BannedTypePermitter', () => {
  it('requires a reason for permitting a banned type', () => {
    type Expected = any;
    type Actual = BannedTypePermitter<'any', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('will not accept an empty reason', () => {
    type Expected = never;
    type Actual = BannedTypePermitter<'any', ''>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the any type with a reason', () => {
    type Expected = any;
    type Actual = BannedTypePermitter<'any', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the Function type with a reason', () => {
    type Expected = Function;
    type Actual = BannedTypePermitter<'Function', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the Boolean type with a reason', () => {
    type Expected = Boolean;
    type Actual = BannedTypePermitter<'Boolean', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the Number type with a reason', () => {
    type Expected = Number;
    type Actual = BannedTypePermitter<'Number', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the String type with a reason', () => {
    type Expected = String;
    type Actual = BannedTypePermitter<'String', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the Symbol type with a reason', () => {
    type Expected = Symbol;
    type Actual = BannedTypePermitter<'Symbol', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the Object type with a reason', () => {
    type Expected = Object;
    type Actual = BannedTypePermitter<'Object', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });

  it('permits the `{}` (any non-nullish) type with a reason', () => {
    type Expected = {};
    type Actual = BannedTypePermitter<'{}', 'Testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(true);
  });
});
