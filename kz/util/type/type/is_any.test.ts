// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { IsAny, Any } from '@kz/util/type';

type AnyType = Any<'#i11n:testing'>;

describe('IsAny', () => {
  describe('Type is any', () => {
    it('should return true for the any type', () => {
      type Actual = IsAny<AnyType>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Special types', () => {
    describe('unknown', () => {
      it('should return false for unknown', () => {
        type Actual = IsAny<unknown>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
      
      it('should return false for never', () => {
        type Actual = IsAny<never>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
      
      it('should return false for void', () => {
        type Actual = IsAny<void>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });
});
