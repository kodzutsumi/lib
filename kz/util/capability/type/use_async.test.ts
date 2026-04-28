// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsAsync,
  AsStrict,
  AsSync,
  AsyncKey,
  AsyncKeyString,
  GetAsync,
  PickAsync,
  UseAsync,
} from '@kz/util/capability';

describe('UseAsync', () => {
  describe('AsyncKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof AsyncKeyString, '@@UseAsync'>>(true);
    });
  });

  describe('AsyncKey', () => {
    it('should be the type of AsyncKeyString', () => {
      assertType<IsExact<AsyncKey, typeof AsyncKeyString>>(true);
    });
  });

  describe('UseAsync', () => {
    it('should be an object type with the AsyncKeyString property of boolean value', () => {
      type Actual = UseAsync;
      type Expected = {
        [AsyncKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsAsync', () => {
    it('should be a UseAsync type with the AsyncKeyString property set to true', () => {
      type Actual = AsAsync;
      type AsUsed = UseAsync<true>;
      type Expected = {
        [AsyncKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsSync', () => {
    it('should be a UseAsync type with the AsyncKeyString property set to false', () => {
      type Actual = AsSync;
      type AsUsed = UseAsync<false>;
      type Expected = {
        [AsyncKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickAsync', () => {
    it('should return AsAsync', () => {
      type CapabilitySet = AsAsync & AsStrict;
      type Actual = PickAsync<CapabilitySet>;
      type Expected = UseAsync<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsSync', () => {
      type CapabilitySet = AsSync & AsStrict;
      type Actual = PickAsync<CapabilitySet>;
      type Expected = UseAsync<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickAsync<CapabilitySet, false>;
      type Expected = UseAsync<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetAsync', () => {
    it('should return true', () => {
      type CapabilitySet = AsAsync & AsStrict;
      type Actual = GetAsync<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsSync & AsStrict;
      type Actual = GetAsync<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetAsync<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
