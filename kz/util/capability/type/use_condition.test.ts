// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// deno-lint-ignore-file no-boolean-literal-for-arguments

import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type {
  AsCondition,
  AsUnsafe,
  ConditionOf,
  PickCondition,
  Then,
  UseCondition,
  UseElse,
  UseSafeCondition,
  UseThen,
} from '@kz/util/capability';

describe('UseCondition', () => {
  describe('UseCondition', () => {
    describe('default behavior', () => {
      it('should return a union of UseThen and UseElse', () => {
        type Actual = UseCondition;
        type Expected = UseThen | UseElse;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });

    describe('strict behavior', () => {
      it('should return an intersection of UseThen and UseElse', () => {
        type Actual = UseCondition<AsUnsafe>;
        type Expected = UseThen & UseElse;

        assertType<IsExact<Actual, Expected>>(true);
      });
    });
  });

  describe('UseSafeCondition', () => {
    it('should be a shortcut for UseCondition with AsUnsafe', () => {
      type Actual = UseSafeCondition;
      type Expected = UseCondition<AsUnsafe>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('ConditionOf', () => {
    it('should be an intersection of Then and Else with the specified types', () => {
      type Actual = ConditionOf<string, number>;
      type Expected = UseThen<string> & UseElse<number>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('AsCondition', () => {
    it('should be a ConditionOf<true, false>', () => {
      type Actual = AsCondition;
      type Expected = ConditionOf<true, false>;

      assertType<IsExact<Actual, Expected>>(true);
    });
  });

  describe('PickCondition', () => {
    it('should return the Then and Else', () => {
      type CapabilitySet = AsCondition & AsUnsafe;
      type Actual = PickCondition<CapabilitySet>;
      type Expected = {
        [K in keyof ConditionOf<true, false>]: K extends keyof CapabilitySet
          ? CapabilitySet[K]
          : ConditionOf<true, false>[K];
      };

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the Else and the default for Then', () => {
      type CapabilitySet = Then<string> & AsUnsafe;
      type Actual = PickCondition<CapabilitySet, false, number>;
      type Expected = {
        [K in keyof ConditionOf<true, false>]: K extends keyof CapabilitySet
          ? CapabilitySet[K]
          : K extends keyof ConditionOf<true, false>
            ? ConditionOf<true, false>[K] extends true ? false
            : number
          : never;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the Then and the default for Else', () => {
      type CapabilitySet = UseElse<number> & AsUnsafe;
      type Actual = PickCondition<CapabilitySet, string, true>;
      type Expected = {
        [K in keyof ConditionOf<true, false>]: K extends keyof CapabilitySet
          ? CapabilitySet[K]
          : K extends keyof ConditionOf<true, false>
            ? ConditionOf<true, false>[K] extends false ? true
            : string
          : never;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });

    it('should return the default for both Then and Else', () => {
      type CapabilitySet = AsUnsafe;
      type Actual = PickCondition<CapabilitySet, string, number>;
      type Expected = {
        [K in keyof ConditionOf<true, false>]: K extends keyof CapabilitySet
          ? CapabilitySet[K]
          : K extends keyof ConditionOf<true, false>
            ? ConditionOf<true, false>[K] extends true ? string
            : number
          : never;
      };

      assertType<IsExact<Actual, Expected>>(true);
    });
  });
});
