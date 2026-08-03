import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { Any } from '../../any.ts';
import type { Nil } from '../../nil.ts';

import type { _HandleTypeCheck } from './_handle_type_check.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;

describe('_HandleTypeCheck', () => {
  describe('any', () => {
    type TypeToCheck = AnyType;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Expected = true;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('unknown', () => {
    type TypeToCheck = unknown;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return true for any type', () => {
          type Expected = true;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('never', () => {
    type TypeToCheck = never;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type Expected = boolean;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('void', () => {
    type TypeToCheck = void;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type Expected = boolean;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('string', () => {
    type TypeToCheck = string;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type Expected = boolean;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });

  describe('Nil', () => {
    type TypeToCheck = Nil;

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type Expected = boolean;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
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

    describe('$AsLoose (default)', () => {
      describe('$AsDistributed (default)', () => {
        it('should return boolean for any type', () => {
          type Expected = boolean;
          type Actual = _HandleTypeCheck<AnyType, TypeToCheck>;
          type Result = IsExact<Actual, Expected>;

          assertType<Result>(IS_TRUE);
        });
      });
    });
  });
});
