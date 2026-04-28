// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  AsSafe,
  AsLoose,
  GetLoose,
  PickLoose,
  LooseKey,
  LooseKeyString,
  UseLoose,
} from '@kz/util/capability';

describe('UseLoose', () => {
  describe('LooseKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof LooseKeyString, '@@UseLoose'>>(true);
    });
  });

  describe('LooseKey', () => {
    it('should be the type of LooseKeyString', () => {
      assertType<IsExact<LooseKey, typeof LooseKeyString>>(true);
    });
  });

  describe('UseLoose', () => {
    it('should be an object type with the LooseKeyString property of boolean value', () => {
      type Actual = UseLoose;
      type Expected = {
        [LooseKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsLoose', () => {
    it('should be a UseLoose type with the LooseKeyString property set to true', () => {
      type Actual = AsLoose;
      type AsUsed = UseLoose<true>;
      type Expected = {
        [LooseKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsStrict', () => {
    it('should be a UseLoose type with the LooseKeyString property set to false', () => {
      type Actual = AsStrict;
      type AsUsed = UseLoose<false>;
      type Expected = {
        [LooseKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickLoose', () => {
    it('should return AsLoose', () => {
      type CapabilitySet = AsLoose & AsLoose;
      type Actual = PickLoose<CapabilitySet>;
      type Expected = UseLoose<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsStrict', () => {
      type CapabilitySet = AsStrict & AsSafe;
      type Actual = PickLoose<CapabilitySet>;
      type Expected = UseLoose<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsSafe;
      type Actual = PickLoose<CapabilitySet, false>;
      type Expected = UseLoose<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetLoose', () => {
    it('should return true', () => {
      type CapabilitySet = AsLoose & AsLoose;
      type Actual = GetLoose<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsStrict & AsSafe;
      type Actual = GetLoose<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsSafe;
      type Actual = GetLoose<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
