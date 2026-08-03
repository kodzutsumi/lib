// deno-lint-ignore-file no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Permit } from '@kz/util/lint';

const IS_TRUE = true;

describe('Permit', () => {
  it('requires a reason for permitting a banned type', () => {
    type Expected = any;
    type Actual = Permit<'any', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('will not accept an empty reason', () => {
    type Expected = never;
    type Actual = Permit<'any', ''>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the any type with a reason', () => {
    type Expected = any;
    type Actual = Permit<'any', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Function type with a reason', () => {
    type Expected = Function;
    type Actual = Permit<'Function', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Boolean type with a reason', () => {
    type Expected = Boolean;
    type Actual = Permit<'Boolean', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Number type with a reason', () => {
    type Expected = Number;
    type Actual = Permit<'Number', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the String type with a reason', () => {
    type Expected = String;
    type Actual = Permit<'String', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Symbol type with a reason', () => {
    type Expected = Symbol;
    type Actual = Permit<'Symbol', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the Object type with a reason', () => {
    type Expected = Object;
    type Actual = Permit<'Object', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });

  it('permits the `{}` (any non-nullish) type with a reason', () => {
    type Expected = {};
    type Actual = Permit<'{}', '#i11n:testing'>;
    type Result = IsExact<Actual, Expected>;

    assertType<Result>(IS_TRUE);
  });
});
