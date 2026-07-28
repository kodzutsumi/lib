// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsStrict,
  DefaultKey,
  DefaultKeyString,
  DefaultOf,
  GetDefault,
  PickDefault,
  UseDefault,
} from '@kz/util/capability';
import type { Any } from '@kz/util/type';

type AnyType = Any<'#i11n:utilities:all_types'>;

describe('UseDefault', () => {
  describe('DefaultKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof DefaultKeyString, '@@UseDefault'>>(true);
    });
  });

  describe('DefaultKey', () => {
    it('should be the type of DefaultKeyString', () => {
      assertType<IsExact<DefaultKey, typeof DefaultKeyString>>(true);
    });
  });

  describe('UseDefault', () => {
    it('should be an object type with the DefaultKeyString property of any value', () => {
      type Actual = UseDefault;
      type Expected = {
        [DefaultKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('Default', () => {
    it('should be a UseDefault type with the DefaultKeyString property set to any', () => {
      type Actual = DefaultOf;
      type AsUsed = UseDefault;
      type Expected = {
        [DefaultKeyString]: AnyType;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('Default<Type>', () => {
    it('should be a UseDefault type with the DefaultKeyString property set to string', () => {
      type Actual = DefaultOf<string>;
      type AsUsed = UseDefault<string>;
      type Expected = {
        [DefaultKeyString]: string;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickDefault', () => {
    it('should return Default', () => {
      type CapabilitySet = DefaultOf & AsStrict;
      type Actual = PickDefault<CapabilitySet>;
      type Expected = UseDefault;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return Default<string>', () => {
      type CapabilitySet = DefaultOf<string> & AsStrict;
      type Actual = PickDefault<CapabilitySet>;
      type Expected = UseDefault<string>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickDefault<CapabilitySet, number>;
      type Expected = UseDefault<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetDefault', () => {
    it('should return any', () => {
      type CapabilitySet = DefaultOf & AsStrict;
      type Actual = GetDefault<CapabilitySet>;
      type Expected = AnyType;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return string', () => {
      type CapabilitySet = DefaultOf<string> & AsStrict;
      type Actual = GetDefault<CapabilitySet>;
      type Expected = string;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetDefault<CapabilitySet, number>;
      type Expected = number;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
