import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $ConditionOf, $Else, $Then } from '@kz/util/capability';

import type { _GetConditionResult } from './_get_condition_result.ts';

const IS_TRUE = true;

describe('_GetConditionResult', () => {
  describe('AsCondition (default/implied)', () => {
    describe('with true', () => {
      it('should return true', () => {
        type Expected = true;
        type Actual = _GetConditionResult<true>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return false', () => {
        type Expected = false;
        type Actual = _GetConditionResult<false>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$Then<string>', () => {
    type Settings = $Then<string>;

    describe('with true', () => {
      it('should return string', () => {
        type Expected = string;
        type Actual = _GetConditionResult<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return false', () => {
        type Expected = false;
        type Actual = _GetConditionResult<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$Else<number>', () => {
    type Settings = $Else<number>;

    describe('with true', () => {
      it('should return true', () => {
        type Expected = true;
        type Actual = _GetConditionResult<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return number', () => {
        type Expected = number;
        type Actual = _GetConditionResult<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });

  describe('$ConditionOf<string, number>', () => {
    type Settings = $ConditionOf<string, number>;

    describe('with true', () => {
      it('should return string', () => {
        type Expected = string;
        type Actual = _GetConditionResult<true, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });

    describe('with false', () => {
      it('should return number', () => {
        type Expected = number;
        type Actual = _GetConditionResult<false, Settings>;
        type Result = IsExact<Expected, Actual>;

        assertType<Result>(IS_TRUE);
      });
    });
  });
});
