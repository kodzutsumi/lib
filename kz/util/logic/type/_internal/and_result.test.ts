import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseVote } from '@kz/util/capability';

import type { AndResult } from './mod.ts';

const IS_TRUE = true;

describe('AndResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = AndResult<true, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = AndResult<true, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = AndResult<false, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = AndResult<false, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return a majority vote of false', () => {
      type Expected = $UseVote<false>;
      type Actual = AndResult<boolean, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = AndResult<boolean, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return majority vote of false', () => {
      type Expected = $UseVote<false>;
      type Actual = AndResult<boolean, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = AndResult<true, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = AndResult<false, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
