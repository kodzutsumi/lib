// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  GetThen,
  PickThen,
  Then,
  ThenKey,
  ThenKeyString,
  UseThen,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseThen', () => {
  describe('ThenKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ThenKeyString, '@@UseThen'>>(true);
    });
  });

  describe('ThenKey', () => {
    it('should be the type of ThenKeyString', () => {
      assertType<IsExact<ThenKey, typeof ThenKeyString>>(true);
    });
  });

  describe('UseThen', () => {
    it('should be an object type with the ThenKeyString property of any value', () => {
      type Actual = UseThen;
      type Expected = {
        [ThenKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Then', () => {
    it('should be a UseThen type with the ThenKeyString property set to any', () => {
      type Actual = Then;
      type AsUsed = UseThen;
      type Expected = {
        [ThenKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('Then<Type>', () => {
    it('should be a UseThen type with the ThenKeyString property set to string', () => {
      type Actual = Then<string>;
      type AsUsed = UseThen<string>;
      type Expected = {
        [ThenKeyString]: string;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickThen', () => {
    it('should return Then', () => {
      type CapabilitySet = Then & AsStrict;
      type Actual = PickThen<CapabilitySet>;
      type Expected = UseThen;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Then<string>', () => {
      type CapabilitySet = Then<string> & AsStrict;
      type Actual = PickThen<CapabilitySet>;
      type Expected = UseThen<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickThen<CapabilitySet, number>;
      type Expected = UseThen<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetThen', () => {
    it('should return any', () => {
      type CapabilitySet = Then & AsStrict;
      type Actual = GetThen<CapabilitySet>;
      type Expected = AnyType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string', () => {
      type CapabilitySet = Then<string> & AsStrict;
      type Actual = GetThen<CapabilitySet>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetThen<CapabilitySet, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
