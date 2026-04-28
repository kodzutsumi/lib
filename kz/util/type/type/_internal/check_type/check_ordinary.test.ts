// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments
import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { AsDistributed, AsLoose } from '@kz/util/capability';

import type { Any } from '../../any.ts';
import type { Nil } from '../../nil.ts';

import type { CheckOrdinary } from './check_ordinary.ts';

type AnyType = Any<'i11n#testing'>;

/**
 * Test that the `CheckOrdinary` type correctly checks for type compatibility based on the specified settings and capabilities.
 *
 * This tests the matrix of `UseStrict` and `UseDistributed` capabilities.
 *
 * - Strict unified - `AsStrict & AsUnified` (default)
 * - Strict distributed - `AsStrict & AsDistributed`
 * - Loose unified - `AsLoose & AsUnified`
 * - Loose distributed - `AsLoose & AsDistributed`
 */
describe('CheckOrdinary', () => {
  describe('string', () => {
    type TypeToCheck = string;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsDistributed>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsDistributed>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsUnified (default)', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, TypeToCheck, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            never,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            void,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            unknown,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for string type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            string,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('Nil', () => {
    type TypeToCheck = Nil;

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsDistributed>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsUnified (default)', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, TypeToCheck, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            never,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            void,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            unknown,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            string,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });

  describe('Object', () => {
    type TypeToCheck = {
      a: number;
      b: string;
      c: boolean;
    };

    type Subtype =
      & TypeToCheck
      & {
        d: symbol;
      };

    describe('AsStrict (default)', () => {
      describe('AsUnified (default)', () => {
        it('should return false for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, AnyType>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for Subtype', () => {
          type Actual = CheckOrdinary<TypeToCheck, Subtype>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsDistributed>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for Subtype', () => {
          type Actual = CheckOrdinary<TypeToCheck, Subtype, AsDistributed>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });

    describe('AsLoose', () => {
      describe('AsUnified (default)', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<TypeToCheck, TypeToCheck, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<TypeToCheck, never, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<TypeToCheck, void, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<TypeToCheck, unknown, AsLoose>;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<TypeToCheck, string, AsLoose>;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for Subtype', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            Subtype,
            AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });

      describe('AsDistributed', () => {
        it('should return true for any type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for never type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            never,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for void type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            void,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return true for unknown type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            unknown,
            AsDistributed & AsLoose
          >;
          type Expected = true;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for string type', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            string,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });

        it('should return false for Subtype', () => {
          type Actual = CheckOrdinary<
            TypeToCheck,
            Subtype,
            AsDistributed & AsLoose
          >;
          type Expected = false;

          assertType<IsExact<Actual, Expected>>(true);
        });
      });
    });
  });
});
