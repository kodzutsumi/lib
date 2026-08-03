import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsReversed, $AsUnified } from '@kz/util/capability';

import type { Any } from '../../any.ts';

import type { _CheckSpecial } from './_check_special.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;
//FIX(@ebntly) Fix the defaults and test results
describe('_CheckSpecial', () => {
  describe('unknown', () => {
    type TypeToCheck = unknown;

    describe('$AsForward (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends AnyType ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Effect = TypeToCheck extends never ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            never
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Effect = TypeToCheck extends void ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            void
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends unknown ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            unknown
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = TypeToCheck extends string ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            string
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [AnyType] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Effect = [TypeToCheck] extends [never] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Effect = [TypeToCheck] extends [void] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [unknown] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = [TypeToCheck] extends [string] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      describe('$AsDistributed (default)', () => {
        type Settings = $AsReversed;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends AnyType ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = never extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = void extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = unknown extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Effect = string extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsReversed & $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends AnyType ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = never extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = void extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = unknown extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Effect = string extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('never', () => {
    type TypeToCheck = never;

    describe('$AsForward (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends AnyType ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends never ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            never
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends void ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            void
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends unknown ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            unknown
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends string ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            string
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [AnyType] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [never] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [void] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [unknown] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for string type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [string] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      describe('$AsDistributed (default)', () => {
        type Settings = $AsReversed;

        it('should return false for any type', () => {
          type Expected = false;
          type Effect = [AnyType] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = [never] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Effect = [void] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Effect = [unknown] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = [string] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsReversed & $AsUnified;

        it('should return false for any type', () => {
          type Expected = false;
          type Effect = [AnyType] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = [never] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for void type', () => {
          type Expected = false;
          type Effect = [void] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Effect = [unknown] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = [string] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('void', () => {
    type TypeToCheck = void;

    describe('$AsForward (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends AnyType ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Effect = TypeToCheck extends never ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            never
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends void ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            void
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = TypeToCheck extends unknown ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            unknown
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = TypeToCheck extends string ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            string
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [AnyType] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for never type', () => {
          type Expected = false;
          type Effect = [TypeToCheck] extends [never] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [void] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for unknown type', () => {
          type Expected = true;
          type Effect = [TypeToCheck] extends [unknown] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = [TypeToCheck] extends [string] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });

    describe('$AsReversed', () => {
      describe('$AsDistributed (default)', () => {
        type Settings = $AsReversed;

        it('should return false for any type', () => {
          type Expected = false;
          type Effect = [AnyType] extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<
            TypeToCheck,
            AnyType,
            Settings
          >;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE); // Figure out difference between Effect and Result
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = never extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = void extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Effect = unknown extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = string extends TypeToCheck ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });

      describe('$AsUnified', () => {
        type Settings = $AsReversed & $AsUnified;

        it('should return true for any type', () => {
          type Expected = true;
          type Effect = [AnyType] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, AnyType, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for never type', () => {
          type Expected = true;
          type Effect = [never] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, never, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return true for void type', () => {
          type Expected = true;
          type Effect = [void] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, void, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for unknown type', () => {
          type Expected = false;
          type Effect = [unknown] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, unknown, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });

        it('should return false for string type', () => {
          type Expected = false;
          type Effect = [string] extends [TypeToCheck] ? true : false;
          type IsValid = IsExact<Effect, Expected>;
          type Actual = _CheckSpecial<TypeToCheck, string, Settings>;
          type Result = IsExact<Actual, Expected>;

          assertType<IsValid>(IS_TRUE);
          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
