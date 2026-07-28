// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsOptional,
  AsRequired,
  AsStrict,
  GetOptional,
  OptionalKey,
  OptionalKeyString,
  PickOptional,
  UseOptional,
} from '@kz/util/capability';

describe('UseOptional', () => {
  describe('OptionalKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof OptionalKeyString, '@@UseOptional'>>(true);
    });
  });

  describe('OptionalKey', () => {
    it('should be the type of OptionalKeyString', () => {
      assertType<IsExact<OptionalKey, typeof OptionalKeyString>>(true);
    });
  });

  describe('UseOptional', () => {
    it('should be an object type with the OptionalKeyString property of boolean value', () => {
      type Actual = UseOptional;
      type Expected = {
        [OptionalKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsRequired', () => {
    it('should be a UseOptional type with the OptionalKeyString property set to true', () => {
      type Actual = AsOptional;
      type AsUsed = UseOptional<true>;
      type Expected = {
        [OptionalKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsRequired', () => {
    it('should be a UseOptional type with the OptionalKeyString property set to false', () => {
      type Actual = AsRequired;
      type AsUsed = UseOptional<false>;
      type Expected = {
        [OptionalKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickOptional', () => {
    it('should return AsOptional', () => {
      type CapabilitySet = AsOptional & AsStrict;
      type Actual = PickOptional<CapabilitySet>;
      type Expected = UseOptional<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsRequired', () => {
      type CapabilitySet = AsRequired & AsStrict;
      type Actual = PickOptional<CapabilitySet>;
      type Expected = UseOptional<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickOptional<CapabilitySet, false>;
      type Expected = UseOptional<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetOptional', () => {
    it('should return true', () => {
      type CapabilitySet = AsOptional & AsStrict;
      type Actual = GetOptional<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsRequired & AsStrict;
      type Actual = GetOptional<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetOptional<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
