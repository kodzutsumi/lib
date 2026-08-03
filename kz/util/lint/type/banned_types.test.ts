// deno-lint-ignore-file no-explicit-any ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { BannedTypes } from '@kz/util/lint';

const IS_TRUE = true;

describe('BannedTypes', () => {
  describe('type support', () => {
    it('supports the `any` type', () => {
      type Expected = any;
      type Actual = BannedTypes['any'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Function` type', () => {
      type Expected = Function;
      type Actual = BannedTypes['Function'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Boolean` type', () => {
      type Expected = Boolean;
      type Actual = BannedTypes['Boolean'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Number` type', () => {
      type Expected = Number;
      type Actual = BannedTypes['Number'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `String` type', () => {
      type Expected = String;
      type Actual = BannedTypes['String'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Symbol` type', () => {
      type Expected = Symbol;
      type Actual = BannedTypes['Symbol'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `Object` type', () => {
      type Expected = Object;
      type Actual = BannedTypes['Object'];
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('supports the `{}` type', () => {
      type Expected = {};
      type Actual = BannedTypes['{}'];
      type Result = IsExact<Actual, Expected>;
      assertType<Result>(IS_TRUE);
    });
  });
});
