// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  GetOfType,
  Of,
  OfTypeKey,
  OfTypeKeyString,
  PickOfType,
  UseOfType,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseOfType', () => {
  describe('OfTypeKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof OfTypeKeyString, '@@UseOfType'>>(true);
    });
  });

  describe('OfTypeKey', () => {
    it('should be the type of OfTypeKeyString', () => {
      assertType<IsExact<OfTypeKey, typeof OfTypeKeyString>>(true);
    });
  });

  describe('UseOfType', () => {
    it('should be an object type with the OfTypeKeyString property of any value', () => {
      type Actual = UseOfType;
      type Expected = {
        [OfTypeKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('OfType', () => {
    it('should be a UseOfType type with the OfTypeKeyString property set to any', () => {
      type Actual = Of;
      type AsUsed = UseOfType;
      type Expected = {
        [OfTypeKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('OfType<Type>', () => {
    it('should be a UseOfType type with the OfTypeKeyString property set to string', () => {
      type Actual = Of<string>;
      type AsUsed = UseOfType<string>;
      type Expected = {
        [OfTypeKeyString]: string;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickOfType', () => {
    it('should return OfType', () => {
      type CapabilitySet = Of & AsStrict;
      type Actual = PickOfType<CapabilitySet>;
      type Expected = UseOfType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return OfType<string>', () => {
      type CapabilitySet = Of<string> & AsStrict;
      type Actual = PickOfType<CapabilitySet>;
      type Expected = UseOfType<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the OfType setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickOfType<CapabilitySet, number>;
      type Expected = UseOfType<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetOfType', () => {
    it('should return any', () => {
      type CapabilitySet = Of & AsStrict;
      type Actual = GetOfType<CapabilitySet>;
      type Expected = AnyType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string', () => {
      type CapabilitySet = Of<string> & AsStrict;
      type Actual = GetOfType<CapabilitySet>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the OfType setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetOfType<CapabilitySet, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
