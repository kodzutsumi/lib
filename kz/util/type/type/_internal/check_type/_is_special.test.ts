import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { Any, Nil } from '@kz/util/type';

import type { _IsSpecial } from './_is_special.ts';

type AnyType = Any<'i11n#testing'>;

const IS_TRUE = true;

describe('_IsSpecial', () => {
  describe('Type: any', () => {
    type Type = AnyType;

    it('should return true', () => {
      type Expected = true;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;
      
      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: unknown', () => {
    type Type = unknown;

    it('should return true', () => {
      type Expected = true;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: never', () => {
    type Type = never;

    it('should return true', () => {
      type Expected = true;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: void', () => {
    type Type = void;

    it('should return true', () => {
      type Expected = true;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: string', () => {    
    type Type = string;

    it('should return false', () => {
      type Expected = false;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: Nil', () => {    
    type Type = Nil;

    it('should return false', () => {
      type Expected = false;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('Type: Object', () => {    
    type Type = {
      firstName: string;
      lastName: string;      
      office: string;
    };

    it('should return false', () => {
      type Expected = false;
      type Actual = _IsSpecial<Type>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
