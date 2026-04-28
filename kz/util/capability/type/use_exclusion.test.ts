// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsExclude,
  AsInclude,
  AsStrict,
  ExclusionKey,
  ExclusionKeyString,
  GetExclusion,
  PickExclusion,
  UseExclusion,
} from '@kz/util/capability';

describe('UseExclusion', () => {
  describe('ExclusionKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof ExclusionKeyString, '@@UseExclusion'>>(true);
    });
  });

  describe('ExclusionKey', () => {
    it('should be the type of ExclusionKeyString', () => {
      assertType<IsExact<ExclusionKey, typeof ExclusionKeyString>>(true);
    });
  });

  describe('UseExclusion', () => {
    it('should be an object type with the ExclusionKeyString property of boolean value', () => {
      type Actual = UseExclusion;
      type Expected = {
        [ExclusionKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsExclude', () => {
    it('should be a UseExclusion type with the ExclusionKeyString property set to true', () => {
      type Actual = AsExclude;
      type AsUsed = UseExclusion<true>;
      type Expected = {
        [ExclusionKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsInclude', () => {
    it('should be a UseExclusion type with the ExclusionKeyString property set to false', () => {
      type Actual = AsInclude;
      type AsUsed = UseExclusion<false>;
      type Expected = {
        [ExclusionKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickExclusion', () => {
    it('should return AsExclude', () => {
      type CapabilitySet = AsExclude & AsStrict;
      type Actual = PickExclusion<CapabilitySet>;
      type Expected = UseExclusion<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsInclude', () => {
      type CapabilitySet = AsInclude & AsStrict;
      type Actual = PickExclusion<CapabilitySet>;
      type Expected = UseExclusion<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickExclusion<CapabilitySet, false>;
      type Expected = UseExclusion<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetExclusion', () => {
    it('should return true', () => {
      type CapabilitySet = AsExclude & AsStrict;
      type Actual = GetExclusion<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsInclude & AsStrict;
      type Actual = GetExclusion<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetExclusion<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
