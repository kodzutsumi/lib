// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsImmutable,
  AsMutable,
  AsStrict,
  GetImmutable,
  ImmutableKey,
  ImmutableKeyString,
  PickImmutable,
  UseImmutable,
} from '@kz/util/capability';

describe('UseImmutable', () => {
  describe('ImmutableKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ImmutableKeyString, '@@UseImmutable'>>(true);
    });
  });

  describe('ImmutableKey', () => {
    it('should be the type of ImmutableKeyString', () => {
      assertType<IsExact<ImmutableKey, typeof ImmutableKeyString>>(true);
    });
  });

  describe('UseImmutable', () => {
    it('should be an object type with the ImmutableKeyString property of boolean value', () => {
      type Actual = UseImmutable;
      type Expected = {
        [ImmutableKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsImmutable', () => {
    it('should be a UseImmutable type with the ImmutableKeyString property set to true', () => {
      type Actual = AsImmutable;
      type AsUsed = UseImmutable<true>;
      type Expected = {
        [ImmutableKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsMutable', () => {
    it('should be a UseImmutable type with the ImmutableKeyString property set to false', () => {
      type Actual = AsMutable;
      type AsUsed = UseImmutable<false>;
      type Expected = {
        [ImmutableKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickImmutable', () => {
    it('should return AsImmutable', () => {
      type CapabilitySet = AsImmutable & AsStrict;
      type Actual = PickImmutable<CapabilitySet>;
      type Expected = UseImmutable<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsMutable', () => {
      type CapabilitySet = AsMutable & AsStrict;
      type Actual = PickImmutable<CapabilitySet>;
      type Expected = UseImmutable<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickImmutable<CapabilitySet, false>;
      type Expected = UseImmutable<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetImmutable', () => {
    it('should return true', () => {
      type CapabilitySet = AsImmutable & AsStrict;
      type Actual = GetImmutable<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsMutable & AsStrict;
      type Actual = GetImmutable<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetImmutable<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
