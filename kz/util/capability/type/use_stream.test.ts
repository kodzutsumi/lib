// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsFilter,
  AsPredicate,
  AsStrict,
  GetStream,
  PickStream,
  StreamKey,
  StreamKeyString,
  UseStream,
} from '@kz/util/capability';

describe('UseStream', () => {
  describe('StreamKeyString', () => {
    it('should be the correct string literal', () => {
      assertType<IsExact<typeof StreamKeyString, '@@UseStream'>>(true);
    });
  });

  describe('StreamKey', () => {
    it('should be the type of StreamKeyString', () => {
      assertType<IsExact<StreamKey, typeof StreamKeyString>>(true);
    });
  });

  describe('UseStream', () => {
    it('should be an object type with the StreamKeyString property of boolean value', () => {
      type Actual = UseStream;
      type Expected = {
        [StreamKeyString]: boolean;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsFilter', () => {
    it('should be a UseStream type with the StreamKeyString property set to true', () => {
      type Actual = AsFilter;
      type AsUsed = UseStream<true>;
      type Expected = {
        [StreamKeyString]: true;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('AsPredicate', () => {
    it('should be a UseStream type with the StreamKeyString property set to false', () => {
      type Actual = AsPredicate;
      type AsUsed = UseStream<false>;
      type Expected = {
        [StreamKeyString]: false;
      };

      assertType<IsExact<Actual, Expected>>(true);
      assertType<IsExact<AsUsed, Expected>>(true);
    });
  });

  describe('PickStream', () => {
    it('should Stream AsFilter', () => {
      type CapabilitySet = AsFilter & AsStrict;
      type Actual = PickStream<CapabilitySet>;
      type Expected = UseStream<true>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return AsPredicate', () => {
      type CapabilitySet = AsPredicate & AsStrict;
      type Actual = PickStream<CapabilitySet>;
      type Expected = UseStream<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = PickStream<CapabilitySet, false>;
      type Expected = UseStream<false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('GetStream', () => {
    it('should return true', () => {
      type CapabilitySet = AsFilter & AsStrict;
      type Actual = GetStream<CapabilitySet>;
      type Expected = true;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return false', () => {
      type CapabilitySet = AsPredicate & AsStrict;
      type Actual = GetStream<CapabilitySet>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default setting', () => {
      type CapabilitySet = AsStrict;
      type Actual = GetStream<CapabilitySet, false>;
      type Expected = false;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
