// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  Else,
  ElseKey,
  ElseKeyString,
  GetElse,
  PickElse,
  UseElse,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseElse', () => {
  describe('ElseKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ElseKeyString, '@@UseElse'>>(true);
    });
  });

  describe('ElseKey', () => {
    it('should be the type of ElseKeyString', () => {
      assertType<IsExact<ElseKey, typeof ElseKeyString>>(true);
    });
  });

  describe('UseElse', () => {
    it('should be an object type with the ElseKeyString property of any value', () => {
      type Actual = UseElse;
      type Expected = {
        [ElseKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Else', () => {
    it('should be a UseElse type with the ElseKeyString property set to any', () => {
      type Actual = Else;
      type AsUsed = UseElse;
      type Expected = {
        [ElseKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('Else<Type>', () => {
    it('should be a UseElse type with the ElseKeyString property set to string', () => {
      type Actual = Else<string>;
      type AsUsed = UseElse<string>;
      type Expected = {
        [ElseKeyString]: string;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickElse', () => {
    it('should return Else', () => {
      type CapabilitySet = Else & AsStrict;
      type Actual = PickElse<CapabilitySet>;
      type Expected = UseElse;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Else<string>', () => {
      type CapabilitySet = Else<string> & AsStrict;
      type Actual = PickElse<CapabilitySet>;
      type Expected = UseElse<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickElse<CapabilitySet, number>;
      type Expected = UseElse<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetElse', () => {
    it('should return any', () => {
      type CapabilitySet = Else & AsStrict;
      type Actual = GetElse<CapabilitySet>;
      type Expected = AnyType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string', () => {
      type CapabilitySet = Else<string> & AsStrict;
      type Actual = GetElse<CapabilitySet>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetElse<CapabilitySet, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
