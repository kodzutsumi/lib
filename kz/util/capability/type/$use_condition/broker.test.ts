// Copyright 2020 - present integereleven. All rights reserved. MIT license.

import { describe, it } from '@std/testing/bdd';
import { assertType, type Has, type IsExact } from '@std/testing/types';
import type {
  $AsCondition,
  $ConditionOf,
  $Else,
  $Then,
  $UseCondition,
} from '@kz/util/capability';

const IS_TRUE = true;

describe('$UseCondition - broker', () => {
  describe('$ConditionOf', () => {
    it('should be have an unknown type for ThenType and ElseType', () => {
      type Expected = $Then & $Else;
      type Actual = $ConditionOf;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $ConditionOf;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$ConditionOf<ThenType, ElseType>', () => {
    it('should be a $Then<ThenType> & $Else<ElseType>', () => {
      type Expected = $Then<string> & $Else<number>;
      type Actual = $ConditionOf<string, number>;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $ConditionOf<string, number>;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('$AsCondition', () => {
    it('should be a $ConditionOf<true, false>', () => {
      type Expected = $ConditionOf<true, false>;
      type Actual = $AsCondition;
      type Result = IsExact<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });

    it('should be assignable to $UseCondition', () => {
      type Expected = $UseCondition;
      type Actual = $AsCondition;
      type Result = Has<Actual, Expected>;

      assertType<Result>(IS_TRUE);
    });
  });
});
