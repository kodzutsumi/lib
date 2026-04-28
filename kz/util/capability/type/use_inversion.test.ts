// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsInitial,
  AsInverted,
  AsStrict,
  GetInversion,
  InversionKey,
  InversionKeyString,
  PickInversion,
  UseInversion,
} from '@kz/util/capability';

describe('UseInversion', () => {
  describe('InversionKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof InversionKeyString, '@@UseInversion'>>(true);
    });
  });

  describe('InversionKey', () => {
    it('should be the type of InversionKeyString', () => {
      assertType<IsExact<InversionKey, typeof InversionKeyString>>(true);
    });
  });

  describe('UseInversion', () => {
    it('should be an object type with the InversionKeyString property of boolean value', () => {
      type Actual = UseInversion;
      type Expected = {
        [InversionKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsInverted', () => {
    it('should be a UseInversion type with the InversionKeyString property set to true', () => {
      type Actual = AsInverted;
      type AsUsed = UseInversion<true>;
      type Expected = {
        [InversionKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsInitial', () => {
    it('should be a UseInversion type with the InversionKeyString property set to false', () => {
      type Actual = AsInitial;
      type AsUsed = UseInversion<false>;
      type Expected = {
        [InversionKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickInversion', () => {
    it('should return AsInverted', () => {
      type CapabilitySet = AsInverted & AsStrict;
      type Actual = PickInversion<CapabilitySet>;
      type Expected = UseInversion<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsInitial', () => {
      type CapabilitySet = AsInitial & AsStrict;
      type Actual = PickInversion<CapabilitySet>;
      type Expected = UseInversion<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickInversion<CapabilitySet, false>;
      type Expected = UseInversion<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetInversion', () => {
    it('should return true', () => {
      type CapabilitySet = AsInverted & AsStrict;
      type Actual = GetInversion<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsInitial & AsStrict;
      type Actual = GetInversion<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetInversion<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
