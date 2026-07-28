// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsDistributed, AsLoose } from '@kz/util/capability';

import type { Any } from '../../any.ts';

import type { CheckAny } from './check_any.ts';

type AnyType = Any<'i11n#testing'>;

/**
 * Test that the `CheckAny` type correctly determines whether a given type is `any` based on the specified settings and capabilities.
 *
 * This tests the matrix of `UseStrict` and `UseDistributed` capabilities.
 *
 * - Strict unified - `AsStrict & AsUnified` (default)
 * - Strict distributed - `AsStrict & AsDistributed`
 * - Loose unified - `AsLoose & AsUnified`
 * - Loose distributed - `AsLoose & AsDistributed`
 */
describe('CheckAny', () => {
  type TypeToCheck = AnyType;

  describe('AsStrict (default)', () => {
    describe('AsUnified (default)', () => {
      it('should return true for any type', () => {
        type Actual = CheckAny<TypeToCheck, AnyType>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false for never type', () => {
        type Actual = CheckAny<TypeToCheck, never>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false for void type', () => {
        type Actual = CheckAny<TypeToCheck, void>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false for unknown type', () => {
        type Actual = CheckAny<TypeToCheck, unknown>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false for string type', () => {
        type Actual = CheckAny<TypeToCheck, string>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsDistributed', () => {
      it('should return true for any type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          TypeToCheck,
          AsDistributed
        >;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for never type', () => {
        type Actual = CheckAny<TypeToCheck, never, AsDistributed>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for void type', () => {
        type Actual = CheckAny<TypeToCheck, void, AsDistributed>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true for unknown type', () => {
        type Actual = CheckAny<TypeToCheck, unknown, AsDistributed>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for string type', () => {
        type Actual = CheckAny<TypeToCheck, string, AsDistributed>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('AsLoose', () => {
    describe('AsUnified (default)', () => {
      it('should return true for any type', () => {
        type Actual = CheckAny<TypeToCheck, TypeToCheck, AsLoose>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for never type', () => {
        type Actual = CheckAny<TypeToCheck, never, AsLoose>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for void type', () => {
        type Actual = CheckAny<TypeToCheck, void, AsLoose>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true for unknown type', () => {
        type Actual = CheckAny<TypeToCheck, unknown, AsLoose>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for string type', () => {
        type Actual = CheckAny<TypeToCheck, string, AsLoose>;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('AsDistributed', () => {
      it('should return true for any type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          TypeToCheck,
          AsDistributed & AsLoose
        >;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for never type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          never,
          AsDistributed & AsLoose
        >;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for void type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          void,
          AsDistributed & AsLoose
        >;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return true for unknown type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          unknown,
          AsDistributed & AsLoose
        >;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return boolean for string type', () => {
        type Actual = CheckAny<
          TypeToCheck,
          string,
          AsDistributed & AsLoose
        >;
        type Expected = boolean;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });
});
