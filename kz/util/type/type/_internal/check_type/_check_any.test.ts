import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $AsReversed, $AsUnified } from '@kz/util/capability';

import type { Any } from '../../any.ts';

import type { _CheckAny } from './_check_any.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;
//FIX(@ebntly) Fix the defaults and test results
describe('_CheckAny', () => {
  type TypeToCheck = AnyType;

  describe('$AsForward (default)', () => {
    describe('$AsDistributed (default)', () => {
      it('should return true for any type', () => {
        type Expected = true;
        type Effect = TypeToCheck extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<
          TypeToCheck,
          TypeToCheck
        >;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for never type', () => {
        type Expected = boolean;
        type Effect = TypeToCheck extends never ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<
          TypeToCheck,
          never
        >;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for void type', () => {
        type Expected = boolean;
        type Effect = TypeToCheck extends void ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<
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
        type Actual = _CheckAny<
          TypeToCheck,
          unknown
        >;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for string type', () => {
        type Expected = boolean;
        type Effect = TypeToCheck extends string ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<
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
        type Effect = [TypeToCheck] extends [TypeToCheck] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, TypeToCheck, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for never type', () => {
        type Expected = boolean;
        type Effect = [TypeToCheck] extends [never] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, never, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for void type', () => {
        type Expected = boolean;
        type Effect = [TypeToCheck] extends [void] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, void, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return true for unknown type', () => {
        type Expected = true;
        type Effect = [TypeToCheck] extends [unknown] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, unknown, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return boolean for string type', () => {
        type Expected = boolean;
        type Effect = [TypeToCheck] extends [string] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, string, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$AsReversed', () => {
    type Settings = $AsReversed;

    describe('$AsDistributed (default)', () => {
      it('should return true for any type', () => {
        type Expected = true;
        type Effect = TypeToCheck extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<
          TypeToCheck,
          TypeToCheck,
          Settings
        >;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for never type', () => {
        type Expected = false;
        type Effect = never extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, never, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for void type', () => {
        type Expected = false;
        type Effect = void extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, void, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for unknown type', () => {
        type Expected = false;
        type Effect = unknown extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, unknown, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for string type', () => {
        type Expected = false;
        type Effect = string extends TypeToCheck ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, string, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });

    describe('$AsUnified', () => {
      type Settings = $AsReversed & $AsUnified;

      it('should return true for any type', () => {
        type Expected = true;
        type Effect = [TypeToCheck] extends [AnyType] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, AnyType, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for never type', () => {
        type Expected = false;
        type Effect = [never] extends [TypeToCheck] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, never, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for void type', () => {
        type Expected = false;
        type Effect = [void] extends [TypeToCheck] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, void, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for unknown type', () => {
        type Expected = false;
        type Effect = [unknown] extends [TypeToCheck] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, unknown, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });

      it('should return false for string type', () => {
        type Expected = false;
        type Effect = [string] extends [TypeToCheck] ? true : false;
        type IsValid = IsExact<Effect, Expected>;
        type Actual = _CheckAny<TypeToCheck, string, Settings>;
        type Result = IsExact<Actual, Expected>;

        assertType<IsValid>(IS_TRUE);
        assertType<Result>(IS_TRUE);
      });
    });
  });
});
