// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsBuiltin,
  AsCustom,
  AsStrict,
  BuiltinKey,
  BuiltinKeyString,
  GetBuiltin,
  PickBuiltin,
  UseBuiltin,
} from '@kz/util/capability';

describe('UseBuiltin', () => {
  describe('BuiltinKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof BuiltinKeyString, '@@UseBuiltin'>>(true);
    });
  });

  describe('BuiltinKey', () => {
    it('should be the type of BuiltinKeyString', () => {
      assertType<IsExact<BuiltinKey, typeof BuiltinKeyString>>(true);
    });
  });

  describe('UseBuiltin', () => {
    it('should be an object type with the BuiltinKeyString property of boolean value', () => {
      type Actual = UseBuiltin;
      type Expected = {
        [BuiltinKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsBuiltin', () => {
    it('should be a UseBuiltin type with the BuiltinKeyString property set to true', () => {
      type Actual = AsBuiltin;
      type AsUsed = UseBuiltin<true>;
      type Expected = {
        [BuiltinKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsCustom', () => {
    it('should be a UseBuiltin type with the BuiltinKeyString property set to false', () => {
      type Actual = AsCustom;
      type AsUsed = UseBuiltin<false>;
      type Expected = {
        [BuiltinKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickBuiltin', () => {
    it('should return AsBuiltin', () => {
      type CapabilitySet = AsBuiltin & AsStrict;
      type Actual = PickBuiltin<CapabilitySet>;
      type Expected = UseBuiltin<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsCustom', () => {
      type CapabilitySet = AsCustom & AsStrict;
      type Actual = PickBuiltin<CapabilitySet>;
      type Expected = UseBuiltin<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickBuiltin<CapabilitySet, false>;
      type Expected = UseBuiltin<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetBuiltin', () => {
    it('should return true', () => {
      type CapabilitySet = AsBuiltin & AsStrict;
      type Actual = GetBuiltin<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsCustom & AsStrict;
      type Actual = GetBuiltin<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetBuiltin<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
