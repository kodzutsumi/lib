import { describe, it } from '@std/testing/bdd';
import { assertType, type IsExact } from '@std/testing/types';

import type { XorResult } from './mod.ts';

const IS_TRUE = true;

describe('XorResult', () => {
  describe('with true/true', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = XorResult<true, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/false', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = XorResult<true, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/true', () => {
    it('should return true', () => {
      type Expected = true;
      type Actual = XorResult<false, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/false', () => {
    it('should return false', () => {
      type Expected = false;
      type Actual = XorResult<false, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = XorResult<boolean, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/true', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = XorResult<boolean, true>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with boolean/false', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = XorResult<boolean, false>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with true/boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = XorResult<true, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });

  describe('with false/boolean', () => {
    it('should return boolean', () => {
      type Expected = boolean;
      type Actual = XorResult<false, boolean>;
      type Result = IsExact<Expected, Actual>;

      assertType<Result>(IS_TRUE);
    });
  });
});
