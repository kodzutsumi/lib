import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsDistributed, $AsForward, $AsReversed, $AsUnified } from '@kz/util/capability';

import type { Any } from '../../any.ts';
import type { Nil } from '../../nil.ts';

import type { _CheckOrdinary } from './_check_ordinary.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;
//FIX(@ebntly) Fix the defaults and test results
describe('_CheckOrdinary', () => {
  describe('string', () => {
    type TypeToCheck = string;

    describe('$AsForward (default)', () => {
      describe('$AsDistributed (default)', () => {        
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            never
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            void
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            unknown
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            string
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsUnified;
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, TypeToCheck, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      type Settings = $AsReversed;
      
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsReversed & $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('Nil', () => {
    type TypeToCheck = Nil;

    describe('$AsForward (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            never
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            void
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            unknown
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            string
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, TypeToCheck, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      type Settings = $AsReversed;

      describe('$AsDistributed (default)', () => {

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
      describe('$AsUnified', () => {
        type Settings = $AsReversed & $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsDistributed (default)', () => {
        type Settings = $AsDistributed;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
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

    describe('$AsForward (default)', () => {
      type Settings = $AsForward;

      describe('$AsDistributed (default)', () => {
        type Settings = $AsDistributed & $AsForward;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            never,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            void,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            unknown,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            string,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            Subtype,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, TypeToCheck, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            Subtype,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      describe('$AsDistributed (default)', () => {
        type Settings = $AsDistributed;

        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<
            TypeToCheck,
            TypeToCheck,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, Subtype, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, AnyType>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, never>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, void>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Actual = _CheckOrdinary<TypeToCheck, unknown>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, string>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });

        it('should return false for Subtype', () => {
          type Expected = false;
          type Actual = _CheckOrdinary<TypeToCheck, Subtype>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
