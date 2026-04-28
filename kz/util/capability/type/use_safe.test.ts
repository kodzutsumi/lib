// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsSafe,
  AsStrict,
  AsUnsafe,
  GetSafe,
  PickSafe,
  SafeKey,
  SafeKeyString,
  UseSafe,
} from '@kz/util/capability';

describe('UseSafe', () => {
  describe('SafeKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof SafeKeyString, '@@UseSafe'>>(true);
    });
  });

  describe('SafeKey', () => {
    it('should be the type of SafeKeyString', () => {
      assertType<IsExact<SafeKey, typeof SafeKeyString>>(true);
    });
  });

  describe('UseSafe', () => {
    it('should be an object type with the SafeKeyString property of boolean value', () => {
      type Actual = UseSafe;
      type Expected = {
        [SafeKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsSafe', () => {
    it('should be a UseSafe type with the SafeKeyString property set to true', () => {
      type Actual = AsSafe;
      type AsUsed = UseSafe<true>;
      type Expected = {
        [SafeKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsUnsafe', () => {
    it('should be a UseSafe type with the SafeKeyString property set to false', () => {
      type Actual = AsUnsafe;
      type AsUsed = UseSafe<false>;
      type Expected = {
        [SafeKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickSafe', () => {
    it('should return AsSafe', () => {
      type CapabilitySet = AsSafe & AsStrict;
      type Actual = PickSafe<CapabilitySet>;
      type Expected = UseSafe<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsUnsafe', () => {
      type CapabilitySet = AsUnsafe & AsStrict;
      type Actual = PickSafe<CapabilitySet>;
      type Expected = UseSafe<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickSafe<CapabilitySet, false>;
      type Expected = UseSafe<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetSafe', () => {
    it('should return true', () => {
      type CapabilitySet = AsSafe & AsStrict;
      type Actual = GetSafe<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsUnsafe & AsStrict;
      type Actual = GetSafe<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetSafe<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
