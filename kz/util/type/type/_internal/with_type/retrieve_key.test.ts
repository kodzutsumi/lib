// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Scalar } from '@kz/util/type';
import type { AsExclude, AsLoose, AsUnified } from '@kz/util/capability';

import type { RetrieveKey } from './retrieve_key.ts';

type OfObject = {
  a: string;
  b: number;
  c: boolean;
  d: Date;
  e: symbol;
  f: Scalar;
};

/**
 * Test that the `RetrieveKey` type correctly retrieves the appropriate key based on the specified type and settings. The tests cover both the `AsInclude` and `AsExclude` modes, as well as the effects of the `AsLoose`, `AsDistributed`, and `AsExclude` capabilities on the resulting types.
 *
 * This tests the matrix of `UseExclusion`, `UseDistributed`, and `UseStrict` capabilities.
 *
 * - Strict unified inclusion - `AsStrict & AsUnified & AsInclude` (default)
 * - Strict distributed inclusion - `AsStrict & AsDistributed & AsInclude`
 * - Loose unified inclusion - `AsLoose & AsUnified & AsInclude`
 * - Loose distributed inclusion - `AsLoose & AsDistributed & AsInclude`
 * - Strict unified exclusion - `AsStrict & AsUnified & AsExclude`
 * - Strict distributed exclusion - `AsStrict & AsDistributed & AsExclude`
 * - Loose unified exclusion - `AsLoose & AsUnified & AsExclude`
 * - Loose distributed exclusion - `AsLoose & AsDistributed & AsExclude`
 */
describe('RetrieveKey', () => {
  describe('AsInclude (default)', () => {
    describe('AsUnified (default)', () => {
      describe('AsStrict (default)', () => {
        it('should return the correct key for string is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'a'>;
          type Expected = 'a';
          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is number', () => {
          type Actual = RetrieveKey<number, OfObject, 'b'>;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for boolean is boolean', () => {
          type Actual = RetrieveKey<boolean, OfObject, 'c'>;
          type Expected = 'c';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is Date', () => {
          type Actual = RetrieveKey<Date, OfObject, 'd'>;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for part of Date is date', () => {
          type Actual = RetrieveKey<{ now(): number }, OfObject, 'd'>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is Scalar', () => {
          type Actual = RetrieveKey<Scalar, OfObject, 'e'>;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for string is symbol', () => {
          type Actual = RetrieveKey<string, OfObject, 'e'>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for string is number', () => {
          type Actual = RetrieveKey<string, OfObject, 'b'>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsLoose', () => {
        it('should return the correct key for string is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'a', AsLoose>;
          type Expected = 'a';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is number', () => {
          type Actual = RetrieveKey<number, OfObject, 'b', AsLoose>;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for boolean is boolean', () => {
          type Actual = RetrieveKey<boolean, OfObject, 'c', AsLoose>;
          type Expected = 'c';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is Date', () => {
          type Actual = RetrieveKey<Date, OfObject, 'd', AsLoose>;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is part of Date ', () => {
          type Actual = RetrieveKey<{ now(): number }, OfObject, 'd', AsLoose>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Scalar is number', () => {
          type Actual = RetrieveKey<Scalar, OfObject, 'e', AsLoose>;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for symbol is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'e', AsLoose>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'b', AsLoose>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsUnified', () => {
      describe('AsStrict (default)', () => {
        it('should return the correct key for string is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'a', AsUnified>;
          type Expected = 'a';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is number', () => {
          type Actual = RetrieveKey<number, OfObject, 'b', AsUnified>;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for boolean is boolean', () => {
          type Actual = RetrieveKey<boolean, OfObject, 'c', AsUnified>;
          type Expected = 'c';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is Date', () => {
          type Actual = RetrieveKey<Date, OfObject, 'd', AsUnified>;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for part of Date is date', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is Scalar', () => {
          type Actual = RetrieveKey<Scalar, OfObject, 'e', AsUnified>;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for string is symbol', () => {
          type Actual = RetrieveKey<string, OfObject, 'e', AsUnified>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for string is number', () => {
          type Actual = RetrieveKey<string, OfObject, 'b', AsUnified>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsLoose', () => {
        it('should return the correct key for string is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'a',
            AsLoose & AsUnified
          >;
          type Expected = 'a';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is number', () => {
          type Actual = RetrieveKey<
            number,
            OfObject,
            'b',
            AsLoose & AsUnified
          >;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for boolean is boolean', () => {
          type Actual = RetrieveKey<
            boolean,
            OfObject,
            'c',
            AsLoose & AsUnified
          >;
          type Expected = 'c';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is Date', () => {
          type Actual = RetrieveKey<
            Date,
            OfObject,
            'd',
            AsLoose & AsUnified
          >;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is part of Date ', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsLoose & AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Scalar is number', () => {
          type Actual = RetrieveKey<
            Scalar,
            OfObject,
            'e',
            AsLoose & AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for symbol is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'e',
            AsLoose & AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'b',
            AsLoose & AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('AsExclude', () => {
    describe('AsUnified (default)', () => {
      describe('AsStrict (default)', () => {
        it('should return never for string is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'a', AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is number', () => {
          type Actual = RetrieveKey<number, OfObject, 'b', AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for boolean is boolean', () => {
          type Actual = RetrieveKey<boolean, OfObject, 'c', AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is Date', () => {
          type Actual = RetrieveKey<Date, OfObject, 'd', AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for part of Date is date', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsExclude
          >;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is Scalar', () => {
          type Actual = RetrieveKey<Scalar, OfObject, 'e', AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for string is symbol', () => {
          type Actual = RetrieveKey<string, OfObject, 'e', AsExclude>;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for string is number', () => {
          type Actual = RetrieveKey<string, OfObject, 'b', AsExclude>;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsLoose', () => {
        it('should return the correct key for string is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'a', AsLoose>;
          type Expected = 'a';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is number', () => {
          type Actual = RetrieveKey<number, OfObject, 'b', AsLoose & AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for boolean is boolean', () => {
          type Actual = RetrieveKey<
            boolean,
            OfObject,
            'c',
            AsLoose & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is Date', () => {
          type Actual = RetrieveKey<Date, OfObject, 'd', AsLoose & AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is part of Date ', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsLoose & AsExclude
          >;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Scalar is number', () => {
          type Actual = RetrieveKey<Scalar, OfObject, 'e', AsLoose & AsExclude>;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for symbol is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'e', AsLoose & AsExclude>;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for number is string', () => {
          type Actual = RetrieveKey<string, OfObject, 'b', AsLoose & AsExclude>;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsUnified', () => {
      describe('AsStrict (default)', () => {
        it('should return never for string is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'a',
            AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is number', () => {
          type Actual = RetrieveKey<
            number,
            OfObject,
            'b',
            AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for boolean is boolean', () => {
          type Actual = RetrieveKey<
            boolean,
            OfObject,
            'c',
            AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is Date', () => {
          type Actual = RetrieveKey<
            Date,
            OfObject,
            'd',
            AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for part of Date is date', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsUnified & AsExclude
          >;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is Scalar', () => {
          type Actual = RetrieveKey<
            Scalar,
            OfObject,
            'e',
            AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for string is symbol', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'e',
            AsUnified & AsExclude
          >;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for string is number', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'b',
            AsUnified & AsExclude
          >;
          type Expected = 'b';

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsLoose', () => {
        it('should return never for string is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'a',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is number', () => {
          type Actual = RetrieveKey<
            number,
            OfObject,
            'b',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for boolean is boolean', () => {
          type Actual = RetrieveKey<
            boolean,
            OfObject,
            'c',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for Date is Date', () => {
          type Actual = RetrieveKey<
            Date,
            OfObject,
            'd',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Date is part of Date ', () => {
          type Actual = RetrieveKey<
            { now(): number },
            OfObject,
            'd',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = 'd';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for Scalar is number', () => {
          type Actual = RetrieveKey<
            Scalar,
            OfObject,
            'e',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return the correct key for symbol is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'e',
            AsLoose & AsUnified & AsExclude
          >;
          type Expected = 'e';

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return never for number is string', () => {
          type Actual = RetrieveKey<
            string,
            OfObject,
            'b',
            AsLoose & AsUnified
          >;
          type Expected = never;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
