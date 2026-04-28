// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments ban-types

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsNullOption,
  AsStrict,
  ConditionOf,
  Else,
  IsNullOption,
  Then,
  UseNullOption,
} from '@kz/util/capability';

describe('UseNullOption', () => {
  describe('UseNullOption', () => {
    it('should be an empty object', () => {
      type Actual = UseNullOption;
      type Expected = {};

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsNullOption', () => {
    it('should be an empty object', () => {
      type Actual = AsNullOption;
      type Expected = {};

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('IsNullOption', () => {
    describe('defaults', () => {
      it('should return true for an empty object', () => {
        type CapabilitySet = {};
        type Actual = IsNullOption<CapabilitySet>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false for a non-empty object', () => {
        type CapabilitySet = { someCapability: boolean };
        type Actual = IsNullOption<CapabilitySet>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Then<string>', () => {
      it('should return string', () => {
        type CapabilitySet = AsNullOption;
        type Actual = IsNullOption<CapabilitySet, Then<string>>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return false', () => {
        type CapabilitySet = AsStrict;
        type Actual = IsNullOption<CapabilitySet, Then<string>>;
        type Expected = false;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with Else<number>', () => {
      it('should return true', () => {
        type CapabilitySet = AsNullOption;
        type Actual = IsNullOption<CapabilitySet, Else<number>>;
        type Expected = true;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return number', () => {
        type CapabilitySet = AsStrict;
        type Actual = IsNullOption<CapabilitySet, Else<number>>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('with ConditionOf<string, number>', () => {
      it('should return string', () => {
        type CapabilitySet = AsNullOption;
        type Actual = IsNullOption<CapabilitySet, ConditionOf<string, number>>;
        type Expected = string;

        assertType<IsExact<Actual, Expected>>(true);
      });

      it('should return number', () => {
        type CapabilitySet = AsStrict;
        type Actual = IsNullOption<CapabilitySet, ConditionOf<string, number>>;
        type Expected = number;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });
});
