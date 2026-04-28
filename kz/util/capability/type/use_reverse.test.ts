// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsForward,
  AsReversed,
  AsStrict,
  GetReverse,
  PickReverse,
  ReverseKey,
  ReverseKeyString,
  UseReverse,
} from '@kz/util/capability';

describe('UseReverse', () => {
  describe('ReverseKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ReverseKeyString, '@@UseReverse'>>(true);
    });
  });

  describe('ReverseKey', () => {
    it('should be the type of ReverseKeyString', () => {
      assertType<IsExact<ReverseKey, typeof ReverseKeyString>>(true);
    });
  });

  describe('UseReverse', () => {
    it('should be an object type with the ReverseKeyString property of boolean value', () => {
      type Actual = UseReverse;
      type Expected = {
        [ReverseKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsReversed', () => {
    it('should be a UseReverse type with the ReverseKeyString property set to true', () => {
      type Actual = AsReversed;
      type AsUsed = UseReverse<true>;
      type Expected = {
        [ReverseKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsForward', () => {
    it('should be a UseReverse type with the ReverseKeyString property set to false', () => {
      type Actual = AsForward;
      type AsUsed = UseReverse<false>;
      type Expected = {
        [ReverseKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickReverse', () => {
    it('should return AsReversed', () => {
      type CapabilitySet = AsReversed & AsStrict;
      type Actual = PickReverse<CapabilitySet>;
      type Expected = UseReverse<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsForward', () => {
      type CapabilitySet = AsForward & AsStrict;
      type Actual = PickReverse<CapabilitySet>;
      type Expected = UseReverse<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickReverse<CapabilitySet, false>;
      type Expected = UseReverse<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetReverse', () => {
    it('should return true', () => {
      type CapabilitySet = AsReversed & AsStrict;
      type Actual = GetReverse<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsForward & AsStrict;
      type Actual = GetReverse<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetReverse<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
