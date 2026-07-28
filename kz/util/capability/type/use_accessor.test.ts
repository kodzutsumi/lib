// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AccessorKey,
  AccessorKeyString,
  AsGetter,
  AsSetter,
  AsStrict,
  GetAccessor,
  PickAccessor,
  UseAccessor,
} from '@kz/util/capability';

describe('UseAccessor', () => {
  describe('AccessorKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof AccessorKeyString, '@@UseAccessor'>>(true);
    });
  });

  describe('AccessorKey', () => {
    it('should be the type of AccessorKeyString', () => {
      assertType<IsExact<AccessorKey, typeof AccessorKeyString>>(true);
    });
  });

  describe('UseAccessor', () => {
    it('should be an object type with the AccessorKeyString property of boolean value', () => {
      type Actual = UseAccessor;
      type Expected = {
        [AccessorKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsSetter', () => {
    it('should be a UseAccessor type with the AccessorKeyString property set to true', () => {
      type Actual = AsSetter;
      type AsUsed = UseAccessor<true>;
      type Expected = {
        [AccessorKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsGetter', () => {
    it('should be a UseAccessor type with the AccessorKeyString property set to false', () => {
      type Actual = AsGetter;
      type AsUsed = UseAccessor<false>;
      type Expected = {
        [AccessorKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickAccessor', () => {
    it('should return AsSetter', () => {
      type CapabilitySet = AsSetter & AsStrict;
      type Actual = PickAccessor<CapabilitySet>;
      type Expected = UseAccessor<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsGetter', () => {
      type CapabilitySet = AsGetter & AsStrict;
      type Actual = PickAccessor<CapabilitySet>;
      type Expected = UseAccessor<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickAccessor<CapabilitySet, false>;
      type Expected = UseAccessor<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetAccessor', () => {
    it('should return true', () => {
      type CapabilitySet = AsSetter & AsStrict;
      type Actual = GetAccessor<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsGetter & AsStrict;
      type Actual = GetAccessor<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetAccessor<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
