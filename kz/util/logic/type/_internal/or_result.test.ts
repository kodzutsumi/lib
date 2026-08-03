import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';
import type { $UseVote } from '@kz/util/capability';

import type { OrResult } from './mod.ts';

const IS_TRUE = true;

describe('OrResult', () => {
  describe('with true/true', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = OrResult<true, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = OrResult<true, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = OrResult<false, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = OrResult<false, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return a majority vote of true', () => {
      type Expected = $UseVote<true>;
      type Actual = OrResult<boolean, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = OrResult<boolean, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = OrResult<boolean, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = OrResult<true, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = OrResult<false, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
